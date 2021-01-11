const cacheName = "v3";
const assets = [
    'index.html',
    'thealphabet.html',
    'conversations.html',
    'phrasesandwords.html',
    'style.css',
    'style.css.map',
    'app.js'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                cache.addAll(assets)
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(res => {
            const resClone = res.clone();
            caches.open(cacheName).then(cache => {
                cache.put(e.request, resClone);
            })
            return res;
        }).catch(() => caches.match(e.request).then(res => res)) 
    );
});