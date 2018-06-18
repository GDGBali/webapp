import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  filter: {
    progressive(listener, options) {
      listener.el.setAttribute('lazy-progressive', 'true');
    },
    webp(listener, options) {
      if (!options.supportWebp) return;

      const imgName = listener.el.dataset.imgname;
      const webpImg = require(`~/assets/images/${
        listener.el.dataset.imgname
      }.webp`);

      listener.src = webpImg;
    }
  }
});
