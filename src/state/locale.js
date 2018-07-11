import * as types from './mutationTypes';
import axios from 'axios';

export const state = {
  locale: 'id',
};

export const mutations = {
  [types.SET_LOCALE](state, { locale }) {
    state.locale = locale;
  },
};

export const actions = {
  async changeLocale({ commit }, payload) {
    const { i18n, locale } = payload;
    if (!(locale in i18n.messages)) {
      const message = await import(`@src/lang/${locale}.json`);
      i18n.setLocaleMessage(locale, message.default);
      await commit(types.SET_LOCALE, payload);
    }
    await commit(types.SET_LOCALE, payload);
    setI18nLanguage(payload);
  },
};

const setI18nLanguage = ({ i18n, locale }) => {
  i18n.locale = locale;
  axios.defaults.headers.common['Accept-Language'] = locale;
  document.querySelector('html').setAttribute('lang', locale);
};
