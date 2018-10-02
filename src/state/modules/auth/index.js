// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';

const state = {
  currentUser: JSON.parse(window.localStorage.getItem('cobadulu')),
};

export default {
  namespaced: true,
  state,
  getters: {
    loggedIn(state) {
      return !!state.currentUser;
    },
  },
};
