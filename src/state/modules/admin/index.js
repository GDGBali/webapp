import { SET_ADMIN_TITLE } from '@state/mutationTypes';

const state = {
  pageTitle: 'Home',
};

export default {
  namespaced: true,
  state,
  mutations: {
    [SET_ADMIN_TITLE]: (state, { title }) => {
      state.pageTitle = title;
    },
  },
};
