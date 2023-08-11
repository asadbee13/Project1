importScripts('//storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

/*
var registerRoute = workbox.routing.registerRoute;
var CacheFirst = workbox.strategies.CacheFirst;
var CacheableResponse = workbox.cacheableResponse.CacheableResponse;
var ExpirationPlugin = workbox.expiration.ExpirationPlugin;


registerRoute(
    new RegExp(/https:\/\/(cdn1d-static-shared|stage-ss|ss)\.phncdn\.com\/.*\.js/),
    new CacheFirst({
        cacheName: 'ph-sharedcdn',
        plugins: [
            new CacheableResponse({
                statuses: [0, 200]
            }),
            new ExpirationPlugin({
                maxEntries: 30
            })
        ],
    })
);
*/