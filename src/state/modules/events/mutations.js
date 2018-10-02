import Vue from 'vue';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import formatDate from '@utils/formatDate';

const mapSubSessions = data => {
  const sessions = map(groupBy(data.sessions, 'startsAt'), (session, key) => {
    const { hours, minutes, HHmm } = formatDate(key);

    return {
      hours,
      minutes,
      id: `session-${HHmm}`,
      subSessions: session.map(({ startsAt, ...rest }) => ({
        ...rest,
      })),
    };
  });

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
