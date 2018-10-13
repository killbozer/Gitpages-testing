// code taken from service worker slides in week 6
// https://cdu-hit238.github.io/slides/week6/#/3/7

var CACHE_TITLE = 'study-chache';
var CACHE_VERSION = 'v2';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
    'index.html',
    'styles.css',
    'scripts.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});

self.addEventListener('activate', function (event) {

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME && cacheName.indexOf(CACHE_TITLE) === 0) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});