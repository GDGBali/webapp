import axios from 'axios';
import actions from './actions';
import mutations from './mutations';
import storage from '@utils/storage';
import {
  LOGIN_START,
  LOGOUT,
  SET_CURRENT_USER,
  IS_LOGGED_IN,
} from '@state/mutationTypes';

const state = {
  currentUser: storage.getStorage('auth.currentUser'),
};

export function setDefaultAuthHeaders(currentUser) {
  axios.defaults.headers.common.Authorization = currentUser
    ? currentUser.accessToken
    : '';
}

export default {
  state,
  mutations: {
    [SET_CURRENT_USER]: mutations.setCurrentUser,
  },
  getters: {
    [IS_LOGGED_IN]: state => {
      return !!state.currentUser;
    },
  },
  actions: {
    'auth/init': actions.init,
    validate: actions.validate,
    [LOGIN_START]: actions.loginStart,
    [LOGOUT]: actions.logOut,
  },
};
