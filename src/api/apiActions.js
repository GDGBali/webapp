import { EVENTS_REQ } from '@state/networkTypes';

const dispatchAction = (store, types, options) => {
  store.dispatch(types, options);
};

const requestEvents = (store, { types, options }) => {
  dispatchAction(store, types, {
    endpoint: 'events',
    options,
  });
};

const requestFutureEvents = store => {
  requestEvents(store, {
    types: EVENTS_REQ.LIST,
    options: {
      params: {
        filter: {
          startsAt: 'future',
        },
      },
    },
  });
};

const requestSingleEvent = (store, slugUrl) => {
  requestEvents(store, {
    types: EVENTS_REQ.SINGLE,
    options: {
      id: slugUrl,
    },
  });
};

export default {
  requestFutureEvents,
  requestSingleEvent,
};
