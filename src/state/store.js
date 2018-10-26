import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import { state, mutations, actions } from './global';
import { abilityPlugin } from '@utils/ability';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [abilityPlugin],
});

store.dispatch('initAuth');

export default store;
