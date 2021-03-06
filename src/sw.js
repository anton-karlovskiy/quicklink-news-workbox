importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.setConfig({
        debug: true
    });

    workbox.routing.registerRoute(
        new RegExp('\\.html$'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'quicklink-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
