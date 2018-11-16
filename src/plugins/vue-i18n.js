import Vue from 'vue';
import VueI18n from 'vue-i18n';
import id from '@src/lang/id.json';

Vue.use(VueI18n);

const messages = { id };

const i18n = new VueI18n({
  locale: 'id',
  fallbackLocale: 'id',
  messages,
});

export default i18n;
