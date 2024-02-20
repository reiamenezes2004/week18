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

self.addEventListener('fetch', function (e){
    e.respondWith(
        caches.match(e.request).then(function (r){
            // console.log('[Service Worker] Fetching resource: ' + e.request.url);
            return r || fetch(e.request).then(function(response){
                return caches.open(cacheName).then(function (cache){
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
});