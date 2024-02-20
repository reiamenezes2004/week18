var cacheName = 'petstore-v1';
var cacheFiles = [
    'petdepot.html',
    'petstore.webmanifest',
    'products.js',
    'images/birdfood.png',
    'images/catfood.png',
    'images/dogfood.png',
    'images/fishfood.jpeg',
    'images/icon-store-32.png',
    'images/icon-store-512.png',
    'images/rabbitfood.png',
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
    })
);
 });
