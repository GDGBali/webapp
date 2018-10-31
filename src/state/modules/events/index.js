import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  list: [],
  cached: false,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
