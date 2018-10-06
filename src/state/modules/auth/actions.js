import Auth from '@utils/auth';
import {
  HIDE_AUTH_DIALOG,
  SHOW_SNACKBAR,
  SET_CURRENT_USER,
} from '@state/mutationTypes';
import { setDefaultAuthHeaders } from './';

const googeLogin = ({ commit }, vue) => {
  const globalStore = vue.$store;
  vue.$gAuth.getAuthCode(
    async authCode => {
      const response = await Auth.googleLogin(authCode);
      globalStore.commit(HIDE_AUTH_DIALOG);
      globalStore.commit(SHOW_SNACKBAR, {
        titleText: 'Login Success',
        buttonText: 'dismiss',
        onClick: () => commit('HIDE_SNACKBAR'),
      });

      const { data } = response.data;
      commit(SET_CURRENT_USER, {
        user: {
          id: data.id,
          ...data.attributes,
        },
      });
    },
    err => {
      globalStore.commit(SHOW_SNACKBAR, {
        titleText: err,
        buttonText: 'dismiss',
        onClick: () => commit('HIDE_SNACKBAR'),
      });
    }
  );
};

const init = ({ state: { currentUser }, dispatch }) => {
  setDefaultAuthHeaders(currentUser);
  // dispatch('validate');
};

const validate = () => {};

const loginStart = (store, { provider, vue }) => {
  switch (provider) {
    case 'google':
      return googeLogin(store, vue);
    default:
      return 'unknown';
  }
};

const logOut = ({ commit }) => {
  commit('SET_CURRENT_USER', { user: null });
};

export default {
  init,
  validate,
  loginStart,
  logOut,
};
