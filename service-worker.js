// Service Worker für 日本語文法 PWA
// Network-First Strategy: Updates kommen sofort an, Offline funktioniert weiter
// Keine manuelle Versions-Bumperei mehr nötig!

const CACHE_NAME = 'grammatik-cache-v104';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  './favicon.png',
  './minna/',
  './minna/index.html',
  './minna-en/',
  './minna-en/index.html',
  './chuukyuu/',
  './chuukyuu/index.html',
  './chuukyuu/manifest.json',
  './chuukyuu-en/',
  './chuukyuu-en/index.html',
  './chuukyuu-en/manifest.json',
  './practice/',
  './practice/index.html',
  './practice/lessons.js',
  './practice/situations.js',
  './practice/aufbau.js',
  './try-n3/',
  './try-n2/',
  './try-n2/index.html',
  './try-n3/index.html',
  './chuukyuu-practice/',
  './chuukyuu-practice/index.html',
  './chuukyuu-practice/lessons.js',
  './chuukyuu-practice/situations.js',
  './chuukyuu-practice/aufbau.js',
  './lesen/',
  './lesen/index.html',
  './lesen/texte.js',
  './lesen/grammatik.js',
  './lesen/woerter.js',
];

// Installation: Cache initial befüllen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE).catch(err => {
        console.log('Some files could not be cached:', err);
      });
    })
  );
  // Sofort aktiv werden
  self.skipWaiting();
});

// Aktivierung: Übernahme aller Tabs
self.addEventListener('activate', (event) => {
  // Alte Caches mit anderem Namen löschen
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch: NETWORK-FIRST Strategie
// 1. Versuche IMMER zuerst die neueste Version vom Netzwerk zu holen
// 2. Wenn Netzwerk geht: Update den Cache + zeige neue Version
// 3. Wenn Netzwerk weg: Nutze Cache (Offline-Modus)
self.addEventListener('fetch', (event) => {
  // Nur same-origin GET-Requests behandeln (cache.put wirft sonst TypeError)
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    // Schritt 1: Netzwerk versuchen
    fetch(event.request)
      .then((networkResponse) => {
        // Nur saubere 200-Responses cachen, keine Redirects/opaque/error
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic' &&
          !networkResponse.redirected
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Schritt 2: Netzwerk nicht erreichbar → Cache nutzen
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          // Auch Cache leer? Hub-Page als Fallback, sonst minimale 503-Antwort
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html').then((fallback) => {
              return fallback || new Response(
                '<h1>Offline</h1><p>Diese Seite ist offline nicht verfügbar.</p>',
                { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
              );
            });
          }
          return new Response('', { status: 504, statusText: 'Offline' });
        });
      })
  );
});
