import Vue from 'vue';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import format from 'date-fns/format';

const mapSubSessions = data => {
  const sessions = map(groupBy(data.sessions, 'startsAt'), (session, key) => ({
    hours: format(key, 'HH'),
    minutes: format(key, 'mm'),
    id: `session-${format(key, 'HH:mm')}`,
    subSessions: session.map(({ startsAt, ...rest }) => ({
      ...rest,
    })),
  }));

  if (data.startsAt) {
    return {
      ...data,
      sessions,
    };
  }

  return {
    ...data,
  };
};

export default {
  requestVerb: (state, { verb }) => {
    state.reqVerb = verb;
  },
  requestPending: (state, { value }) => {
    Vue.set(state, 'isRequesting', value);
  },
  requestSuccess: (state, { responseData }) => {
    switch (state.reqVerb) {
      case 'GET_SINGLE':
        state.details = mapSubSessions(responseData);
        break;
      default:
        state.future = responseData;
        break;
    }
  },
  requestFailed: (state, { error }) => {
    state.details = {
      error: true,
      status: error.status,
    };
  },
};
