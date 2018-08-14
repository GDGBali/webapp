/* eslint-disable no-undef */

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

workbox.routing.registerNavigationRoute('/index.html');

self.addEventListener('message', event => {
  if (!event.data) return;

  switch (event.data) {
    case 'skipWaiting':
      self.skipWaiting();
      break;
    default:
      break;
  }
});
