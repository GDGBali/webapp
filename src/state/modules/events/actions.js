import { EVENTS_REQ } from '@state/networkTypes';
import request from '@api/apiRequest';

const makeRequest = async (store, { endpoint, options, verb = 'GET_LIST' }) => {
  await store.commit(EVENTS_REQ.VERB, { verb });

  return request(store, { endpoint, options, types: EVENTS_REQ });
};

export default {
  makeRequest,
};
