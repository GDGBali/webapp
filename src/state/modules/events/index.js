import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  details: {
    venue: {},
    sessions: [],
  },
  futureEvents: [],
  cached: false,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
