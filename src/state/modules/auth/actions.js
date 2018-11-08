import Auth from '@utils/auth';
import {
  HIDE_AUTH_DIALOG,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
  SET_CURRENT_USER,
} from '@state/mutationTypes';
import router from '@router';

const googeLogin = async ({ commit, rootState }, authClient) => {
  const authCode = await authClient
    .grantOfflineAccess({ prompt: 'consent' })
    .catch(err => {
      commit(SHOW_SNACKBAR, {
        titleText: err.error,
        buttonText: 'dismiss',
        onClick: () => commit('HIDE_SNACKBAR'),
      });
    });

  const response = await Auth.googleLogin(authCode);
  commit(HIDE_AUTH_DIALOG);
  commit(SHOW_SNACKBAR, {
    titleText: 'Login Success',
    buttonText: 'dismiss',
    onClick: () => commit(HIDE_SNACKBAR),
  });

  const { data: user } = response;

  await commit(SET_CURRENT_USER, { user });

  const { redirectTo } = rootState.authDialog;
  if (redirectTo) {
    const { name, params } = redirectTo;
    router.push({ name, params });
  }
};

const init = ({ state: { currentUser }, commit }) => {
  commit(SET_CURRENT_USER, { user: currentUser });
  // dispatch('validate');
};

const validate = () => {};

const loginStart = (store, { provider, authClient }) => {
  switch (provider) {
    case 'google':
      return googeLogin(store, authClient);
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
