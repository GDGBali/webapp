import Vue from 'vue';
import './plugins/vuetify';
import './plugins/vue-lazy-load';
import i18n from './plugins/vue-i18n';
import App from './app';
import router from '@router';
import store from '@state/store';
import '@components/_globals';

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production';

const app = new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
  created() {
    store.dispatch('changeLocale', {
      i18n,
      locale: 'id',
    });
  },
}).$mount('#app');

// If running inside Cypress
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`
  window.__app__ = app;
}
