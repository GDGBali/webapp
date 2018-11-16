import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  past: [],
  future: [],
  singleEvent: {},
  isRequesting: false,
  error: null,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
