const CACHE_NAME = 'gelado-v1';
const assets = [
  './',
  './index.html',
  'https://i.ibb.co/GvLRtfDj/1773118864436.png'
];

// Instala o Service Worker e guarda os arquivos essenciais no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Ativa o Service Worker
self.addEventListener('activate', event => {
  console.log('Terminal Gelado Ativado');
});

// Responde às requisições usando o cache quando necessário
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
