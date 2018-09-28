import { EVENTS_REQ_START } from '@state/networkTypes';

const dispatchAction = (vue, types, options) => {
  vue.$store.dispatch(types, options);
};

const requestFutureEvents = vue => {
  dispatchAction(vue, EVENTS_REQ_START, {
    resource: 'event',
    options: {
      params: {
        include: 'venue',
        filter: { when: 'future' },
      },
      idbStore: 'events',
    },
  });
};

const requestSingleEvent = vue => {
  dispatchAction(vue, EVENTS_REQ_START, {
    resource: 'event',
    options: {
      id: vue.$route.params.slugUrl,
      params: {
        include: 'venue',
      },
      idbStore: 'eventSessions',
    },
    verb: 'GET_SINGLE',
  });
};

export default {
  requestFutureEvents,
  requestSingleEvent,
};
