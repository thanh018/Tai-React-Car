/* eslint-disable no-undef,no-restricted-globals,no-underscore-dangle */
// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute('/index.html', {

  // blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
});

workbox.routing.registerRoute(
  new RegExp('.+\\.(chunk.js|chunk.css)$'),
  workbox.strategies.networkFirst(),
);
