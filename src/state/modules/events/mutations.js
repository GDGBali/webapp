import Vue from 'vue';
// import groupBy from 'lodash/groupBy';
// import map from 'lodash/map';
// import formatDate from '@utils/formatDate';
import { EVENTS_REQ } from '@state/networkTypes';

// const mapSubSessions = data => {
//   const sessions = map(groupBy(data.sessions, 'startsAt'), (session, key) => {
//     const { hours, minutes, HHmm } = formatDate(key);

//     return {
//       hours,
//       minutes,
//       id: `session-${HHmm}`,
//       subSessions: session.map(({ startsAt, ...rest }) => ({
//         ...rest,
//       })),
//     };
//   });

//   const venue = data.venue || {};

//   if (data.startsAt) {
//     return {
//       ...data,
//       sessions,
//       venue,
//     };
//   }

//   return {
//     ...data,
//   };
// };

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
  [EVENTS_REQ.FAILURE]: (state, { error }) => {
    state.details = {
      error: true,
      status: error.status,
    };
  },
};
