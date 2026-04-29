// Service Worker für 日本語文法 PWA
// Network-First Strategy: Updates kommen sofort an, Offline funktioniert weiter
// Keine manuelle Versions-Bumperei mehr nötig!

const CACHE_NAME = 'grammatik-cache';
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
  './chuukyuu-en/',
  './chuukyuu-en/index.html',
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
  // Nur same-origin requests behandeln
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    // Schritt 1: Netzwerk versuchen
    fetch(event.request)
      .then((networkResponse) => {
        // Erfolgreiche Antwort? Cache aktualisieren
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
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
          if (cachedResponse) {
            return cachedResponse;
          }
          // Auch Cache leer? Hub-Page als Fallback
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
