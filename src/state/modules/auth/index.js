import axios from 'axios';
import actions from './actions';
import mutations from './mutations';
import {
  LOGIN_START,
  LOGOUT,
  SET_CURRENT_USER,
  IS_LOGGED_IN,
} from '@state/mutationTypes';

const state = {
  currentUser: getStorage('auth.currentUser'),
};

function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setStorage(key, state) {
  localStorage.setItem(key, JSON.stringify(state));
}

export function setDefaultAuthHeaders(currentUser) {
  axios.defaults.headers.common.Authorization = currentUser
    ? currentUser.accessToken
    : '';
}

export default {
  namespaced: true,
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
    init: actions.init,
    validate: actions.validate,
    [LOGIN_START]: actions.loginStart,
    [LOGOUT]: actions.logOut,
  },
};
