/* eslint-disable no-undef */

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts',
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

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
