import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  isRequesting: false,
  future: [],
  past: [],
  all: [],
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
