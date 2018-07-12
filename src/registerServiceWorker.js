/* eslint-disable no-console */

import { register } from 'register-service-worker';
import store from '@state/store';

const updateOptions = registration => ({
  titleText: 'New content available',
  buttonText: 'refresh',
  timeout: 0,
  onClick: () => registration.waiting.postMessage('skipWaiting'),
});

const readyOfflineOptions = {
  titleText: 'Ready to work offline',
  buttonText: 'dismiss',
  onClick: () => store.commit('HIDE_SNACKBAR'),
};

const notifyUserUpdate = options =>
  store.dispatch('showSnackbar', {
    ...options,
    visible: true,
  });

const onNewServiceWorker = (registration, callback) => {
  if (registration.waiting) return callback();

  const listenInstalledStateChange = () => {
    registration.installing.addEventListener('statechange', event => {
      if (event.target.state === 'installed') callback();
    });
  };

  if (registration.installing) return listenInstalledStateChange();
  registration.addEventListener('updatefound', listenInstalledStateChange);
};

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      );
    },
    cached() {
      console.log('Content has been cached for offline use.');
      notifyUserUpdate(readyOfflineOptions);
    },
    updated(registration) {
      console.log('New content is available; please refresh.');
      notifyUserUpdate(updateOptions(registration));
    },
    offline() {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
    registered(registration) {
      if (!navigator.serviceWorker.controller) return;
      let refreshing;
      navigator.serviceWorker.addEventListener('controllerchange', event => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
      onNewServiceWorker(registration, () => {
        notifyUserUpdate(updateOptions(registration));
      });
    },
  });
}
