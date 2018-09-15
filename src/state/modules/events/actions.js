import { EVENTS_REQ } from '@state/networkTypes';
import request from '@utils/apiRequest';

const makeRequest = (store, payload) => {
  const { when } = payload;
  const url = `${payload.url}?when=${when}`;
  const types = EVENTS_REQ;
  return request(store, { url, types, when });
};

export default {
  makeRequest,
};
