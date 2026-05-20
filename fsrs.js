// FSRS-4.5 scheduler for Minna no Nihongo cards.
// Pure client-side, persists in localStorage. No deps.
//
// Public API (window.FSRS):
//   getCard(id)                    -> card state object
//   rate(id, grade, now?)          -> grade in {1=Again,2=Hard,3=Good,4=Easy}, persists & returns new state
//   preview(id, now?)              -> {1,2,3,4} -> next due (ms-from-now) without persisting
//   formatDuration(ms)             -> "10m" / "3d" / "1.2mo"
//   isDue(id, now?)                -> bool
//   getBucket(id)                  -> 'new'|'learning'|'young'|'mature'|'lapsed'
//   legacyStatus(id)               -> 'new'|'good'|'bad'  (for code that still reads the old field)
//   countsForIds(ids, now?)        -> {total,new,due,young,mature,lapsed,good,bad}
//   reset()                        -> wipe all FSRS data
(function () {
  'use strict';

  var STORAGE_KEY_V2 = 'minna_card_stats_v2';
  var STORAGE_KEY_V1 = 'minna_card_stats_v1';

  // FSRS-4.5 default weights (open-spaced-repetition / ts-fsrs defaults).
  var W = [0.4072, 1.1829, 3.1262, 15.4722, 7.2102, 0.5316, 1.0651, 0.0234,
           1.616, 0.1544, 1.0824, 1.9813, 0.0953, 0.2975, 2.2042, 0.2407, 2.9466];
  var FACTOR = 19 / 81;
  var DECAY = -0.5;
  var REQUEST_RETENTION = 0.9;
  var DAY_MS = 86400000;
  var MIN_MS = 60000;

  // ---- algorithm primitives ----

  function clampD(d) { return Math.min(Math.max(d, 1), 10); }
  function clampS(s) { return Math.max(s, 0.01); }

  function initStability(g) { return clampS(W[g - 1]); }
  function initDifficulty(g) { return clampD(W[4] - Math.exp(W[5] * (g - 1)) + 1); }

  function nextDifficulty(D, g) {
    var Dprime = D - W[6] * (g - 3);
    // mean-reverted toward init_D(4) (easy)
    var meanReverted = W[7] * initDifficulty(4) + (1 - W[7]) * Dprime;
    return clampD(meanReverted);
  }

  function retrievability(elapsedDays, S) {
    if (S <= 0) return 0;
    return Math.pow(1 + FACTOR * Math.max(elapsedDays, 0) / S, DECAY);
  }

  function nextStabilityRecall(D, S, R, g) {
    var hardPenalty = g === 2 ? W[15] : 1;
    var easyBonus = g === 4 ? W[16] : 1;
    var sInc = Math.exp(W[8]) * (11 - D) * Math.pow(S, -W[9])
             * (Math.exp(W[10] * (1 - R)) - 1) * hardPenalty * easyBonus;
    return clampS(S * (1 + sInc));
  }

  function nextStabilityForget(D, S, R) {
    var sf = W[11] * Math.pow(D, -W[12]) * (Math.pow(S + 1, W[13]) - 1)
           * Math.exp(W[14] * (1 - R));
    // post-lapse stability never exceeds current
    return clampS(Math.min(sf, S));
  }

  function intervalDaysFromStability(S) {
    var d = (S / FACTOR) * (Math.pow(REQUEST_RETENTION, 1 / DECAY) - 1);
    return Math.max(1, Math.round(d));
  }

  // ---- storage ----

  function loadAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY_V2);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* fall through */ }
    var migrated = migrateFromV1();
    if (migrated) {
      saveAll(migrated);
      return migrated;
    }
    return {};
  }

  function saveAll(all) {
    try { localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(all)); }
    catch (e) { console.warn('FSRS: could not save', e); }
  }

  function migrateFromV1() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY_V1);
      if (!raw) return null;
      var v1 = JSON.parse(raw);
      var out = {};
      var now = Date.now();
      Object.keys(v1).forEach(function (id) {
        var e = v1[id] || {};
        var lastSeen = e.lastSeen || now;
        // Seed an FSRS state matching the last rating.
        if (e.status === 'good') {
          var D3 = initDifficulty(3);
          var S3 = initStability(3);
          out[id] = {
            state: 'review',
            stability: S3,
            difficulty: D3,
            lastReview: lastSeen,
            due: lastSeen + intervalDaysFromStability(S3) * DAY_MS,
            reps: (e.good || 0) + (e.bad || 0) || 1,
            lapses: e.bad || 0,
            good: e.good || 0,
            bad: e.bad || 0
          };
        } else if (e.status === 'bad') {
          var D1 = initDifficulty(2); // slightly easier than worst, since they engaged
          var S1 = initStability(1);
          out[id] = {
            state: 'relearning',
            stability: S1,
            difficulty: D1,
            lastReview: lastSeen,
            due: lastSeen + 10 * MIN_MS,
            reps: (e.good || 0) + (e.bad || 0) || 1,
            lapses: e.bad || 0,
            good: e.good || 0,
            bad: e.bad || 0
          };
        } else {
          out[id] = blankCard();
        }
      });
      return out;
    } catch (e) {
      console.warn('FSRS: v1 migration failed', e);
      return null;
    }
  }

  function blankCard() {
    return {
      state: 'new',
      stability: null,
      difficulty: null,
      lastReview: null,
      due: null,
      reps: 0,
      lapses: 0,
      good: 0,
      bad: 0
    };
  }

  function getCard(id) {
    var all = loadAll();
    return all[id] || blankCard();
  }

  // Core scheduler. Returns the next card state without writing.
  function schedule(card, g, now) {
    g = Math.min(Math.max(g | 0, 1), 4);
    now = now || Date.now();
    var elapsedDays = card.lastReview ? (now - card.lastReview) / DAY_MS : 0;

    var S, D, state, dueOffset;
    var lapses = card.lapses || 0;
    var prevState = card.state || 'new';

    if (prevState === 'new' || card.stability == null) {
      D = initDifficulty(g);
      S = initStability(g);
      if (g === 1) {
        state = 'learning';
        dueOffset = 10 * MIN_MS;
      } else if (g === 2) {
        state = 'learning';
        dueOffset = 15 * MIN_MS;
      } else {
        state = 'review';
        dueOffset = intervalDaysFromStability(S) * DAY_MS;
      }
    } else if (prevState === 'learning' || prevState === 'relearning') {
      D = nextDifficulty(card.difficulty, g);
      if (g >= 3) {
        // graduate
        var Rgrad = retrievability(elapsedDays, card.stability);
        S = nextStabilityRecall(card.difficulty, card.stability, Rgrad, g);
        state = 'review';
        dueOffset = intervalDaysFromStability(S) * DAY_MS;
      } else {
        S = card.stability;
        state = prevState;
        dueOffset = (g === 1 ? 10 : 15) * MIN_MS;
      }
    } else {
      // review (mature)
      D = nextDifficulty(card.difficulty, g);
      var R = retrievability(elapsedDays, card.stability);
      if (g === 1) {
        S = nextStabilityForget(card.difficulty, card.stability, R);
        state = 'relearning';
        dueOffset = 10 * MIN_MS;
        lapses = lapses + 1;
      } else {
        S = nextStabilityRecall(card.difficulty, card.stability, R, g);
        state = 'review';
        dueOffset = intervalDaysFromStability(S) * DAY_MS;
      }
    }

    var good = card.good || 0;
    var bad = card.bad || 0;
    if (g === 1) bad += 1; else good += 1;

    return {
      state: state,
      stability: S,
      difficulty: D,
      lastReview: now,
      due: now + dueOffset,
      reps: (card.reps || 0) + 1,
      lapses: lapses,
      good: good,
      bad: bad,
      _dueOffset: dueOffset
    };
  }

  function rate(id, g, now) {
    var all = loadAll();
    var cur = all[id] || blankCard();
    var next = schedule(cur, g, now);
    delete next._dueOffset;
    all[id] = next;
    saveAll(all);
    return next;
  }

  function preview(id, now) {
    now = now || Date.now();
    var cur = getCard(id);
    var out = {};
    for (var g = 1; g <= 4; g++) {
      out[g] = schedule(cur, g, now)._dueOffset;
    }
    return out;
  }

  function formatDuration(ms) {
    if (ms < 60 * MIN_MS) {
      var m = Math.max(1, Math.round(ms / MIN_MS));
      return m + 'm';
    }
    if (ms < 24 * 60 * MIN_MS) {
      return Math.round(ms / (60 * MIN_MS)) + 'h';
    }
    var days = ms / DAY_MS;
    if (days < 30) return Math.round(days) + 'd';
    if (days < 365) return (days / 30).toFixed(days < 90 ? 1 : 0) + 'mo';
    return (days / 365).toFixed(1) + 'y';
  }

  function isDue(id, now) {
    now = now || Date.now();
    var c = getCard(id);
    if (c.state === 'new' || !c.due) return true;
    return c.due <= now;
  }

  function getBucket(id) {
    var c = getCard(id);
    if (c.state === 'new') return 'new';
    if (c.state === 'learning') return 'learning';
    if (c.state === 'relearning') return 'lapsed';
    // 'review' state: split by stability
    if ((c.stability || 0) >= 21) return 'mature';
    return 'young';
  }

  function legacyStatus(id) {
    var c = getCard(id);
    if (c.state === 'new') return 'new';
    if (c.state === 'relearning') return 'bad';
    // recently failed -> 'bad' until they pass it next time
    if (c.state === 'learning' && (c.bad || 0) > (c.good || 0)) return 'bad';
    return 'good';
  }

  function countsForIds(ids, now) {
    now = now || Date.now();
    var c = { total: ids.length, new: 0, due: 0, learning: 0, young: 0, mature: 0, lapsed: 0, good: 0, bad: 0 };
    for (var i = 0; i < ids.length; i++) {
      var card = getCard(ids[i]);
      if (card.state === 'new') c.new++;
      else if (card.state === 'learning') c.learning++;
      else if (card.state === 'relearning') c.lapsed++;
      else if ((card.stability || 0) >= 21) c.mature++;
      else c.young++;
      if (card.state !== 'new' && card.due && card.due <= now) c.due++;
      if (legacyStatus(ids[i]) === 'good') c.good++;
      else if (legacyStatus(ids[i]) === 'bad') c.bad++;
    }
    return c;
  }

  function reset() {
    try {
      localStorage.removeItem(STORAGE_KEY_V2);
      localStorage.removeItem(STORAGE_KEY_V1);
    } catch (e) { /* ignore */ }
  }

  window.FSRS = {
    getCard: getCard,
    rate: rate,
    preview: preview,
    formatDuration: formatDuration,
    isDue: isDue,
    getBucket: getBucket,
    legacyStatus: legacyStatus,
    countsForIds: countsForIds,
    reset: reset,
    _internal: { schedule: schedule, intervalDaysFromStability: intervalDaysFromStability,
                 initStability: initStability, initDifficulty: initDifficulty }
  };
})();
