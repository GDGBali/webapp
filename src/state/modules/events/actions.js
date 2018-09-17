import { EVENTS_REQ } from '@state/networkTypes';
import request from '@utils/apiRequest';

const makeRequest = async (store, { endpoint, when, verb = 'GET_LIST' }) => {
  let url;
  await store.commit(EVENTS_REQ.VERB, { verb });
  switch (verb) {
    case 'GET_SINGLE':
      url = endpoint;
      break;

    default:
      url = `${endpoint}?when=${when}`;
      break;
  }

  return request(store, { url, types: EVENTS_REQ });
};

export default {
  makeRequest,
};
