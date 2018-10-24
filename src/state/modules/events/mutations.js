import Vue from 'vue';
import { EVENTS_REQ } from '@state/networkTypes';

export default {
  [EVENTS_REQ.PENDING]: (state, { value }) => {
    Vue.set(state, 'isRequesting', value);
  },
  [EVENTS_REQ.SUCCESS_LIST]: (state, { responseData }) => {
    state.futureEvents = responseData;
    state.cached = true;
  },
  [EVENTS_REQ.SUCCESS_SINGLE]: (state, { responseData }) => {
    state.futureEvents = [
      ...state.futureEvents.filter(event => event.id !== responseData.id),
      responseData,
    ];
  },
  [EVENTS_REQ.FAILURE]: (state, { error: { status } }) => {
    Vue.set(state, 'error', {
      status,
    });
  },
};
