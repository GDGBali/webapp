import {
  SET_ADMIN_TITLE,
  NEW_VENUE,
  FETCH_VENUES,
  FETCH_EVENTS,
} from '@state/mutationTypes';
import actions from './actions';

const state = {
  pageTitle: 'Home',
  venues: {
    list: [],
    cached: false,
  },
  events: {
    list: [],
    cached: false,
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations: {
    [SET_ADMIN_TITLE]: (state, { title }) => {
      state.pageTitle = title;
    },
    [NEW_VENUE]: ({ venues }, { newVenue }) => {
      venues.cached = true;
      venues.list = [...venues.list, newVenue];
    },
    [FETCH_VENUES]: ({ venues }, { list }) => {
      if (venues.cached) return;
      venues.list = list;
    },
    [FETCH_EVENTS]: ({ events }, { list }) => {
      if (events.cached) return;
      events.list = list;
    },
  },
};
