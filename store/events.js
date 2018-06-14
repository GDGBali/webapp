import axios from 'axios';

export const state = () => ({
  latestEvent: {},
  events: []
});

export const mutations = {
  setLatestEvent(state, latestEvent) {
    state.latestEvent = latestEvent;
  }
};

export const actions = {
  // async getLatestEvents({ commit }) {
  //   const { data } = await axios.get(
  //     'https://my-json-server.typicode.com/gdg-bali/webapp/events/1'
  //   );
  //   commit('setLatestEvent', data);
  // }
};
