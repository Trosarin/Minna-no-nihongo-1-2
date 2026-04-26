// Service Worker für 日本語文法 PWA
// Cached die Hub-Seite UND beide Bücher für Offline-Nutzung
// v2 = Wiederholen-System für Minna hinzugefügt
const CACHE_VERSION = 'grammatik-v3';
const CACHE_FILES = [
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
  './chuukyuu/',
  './chuukyuu/index.html',
];

// Beim Installieren: Dateien cachen
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(CACHE_FILES).catch(err => {
        console.log('Some files could not be cached:', err);
      });
    })
  );
  self.skipWaiting();
});

// Beim Aktivieren: alte Caches löschen
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Bei Anfragen: Cache zuerst, dann Netzwerk
self.addEventListener('fetch', (event) => {
  // Nur same-origin requests cachen (nicht Google Fonts etc.)
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_VERSION).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
    );
  }
});
