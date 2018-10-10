import { EVENTS_REQ_START } from '@state/networkTypes';

const dispatchAction = (vue, types, options) => {
  vue.$store.dispatch(types, options);
};

const requestFutureEvents = vue => {
  dispatchAction(vue, EVENTS_REQ_START, {
    endpoint: 'events',
    options: {
      params: {
        when: 'future',
      },
    },
  });
};

const requestSingleEvent = vue => {
  dispatchAction(vue, EVENTS_REQ_START, {
    endpoint: 'events',
    options: {
      id: vue.$route.params.slugUrl,
    },
    verb: 'GET_SINGLE',
  });
};

export default {
  requestFutureEvents,
  requestSingleEvent,
};
