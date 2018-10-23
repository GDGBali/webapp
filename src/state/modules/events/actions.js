import { EVENTS_REQ } from '@state/networkTypes';
import request from '@api/apiRequest';

const requestList = (store, { endpoint, options }) => {
  if (store.state.cached) return;

  return request(store, { endpoint, options, types: EVENTS_REQ });
};

const requestSingle = (store, { endpoint, options }) =>
  request(store, { endpoint, options, types: EVENTS_REQ });

export default {
  [EVENTS_REQ.LIST]: requestList,
  [EVENTS_REQ.SINGLE]: requestSingle,
};
