import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  filter: {
    progressive(listener, options) {
      listener.el.setAttribute('lazy-progressive', 'true');
      // console.log(listener);
      // const apa = require('~/assets/images/hero.jpg');
      // console.log(apa);
      // listener.loading = apa;
    }
  }
});
