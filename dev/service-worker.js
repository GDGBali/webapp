/* eslint-disable no-undef */

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts',
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
