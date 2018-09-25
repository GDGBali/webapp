import Vue from 'vue';
import partition from 'lodash/partition';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import format from 'date-fns/format';

const eventList = data =>
  data.map(item => {
    const details = !(
      item.attributes.startsAt === null || item.attributes.endsAt === null
    );
    return {
      id: `${item.type}-${item.id}`,
      ...item.attributes,
      details,
    };
  });

const eventSingle = ({ data, included }) => {
  const [sessionsRes, [venue]] = partition(
    included,
    item => item.type === 'session'
  );

  const sessions = map(
    groupBy(
      sessionsRes.map(({ id, attributes }) => ({
        id,
        ...attributes,
      })),
      'startsAt'
    ),
    (session, key) => ({
      hours: format(key, 'HH'),
      minutes: format(key, 'mm'),
      id: `session-${format(key, 'HH:mm')}`,
      subSessions: session.map(({ startsAt, ...rest }) => ({
        ...rest,
      })),
    })
  );

  if (data.attributes.startsAt) {
    return {
      ...data.attributes,
      venue: {
        ...venue.attributes,
      },
      sessions,
    };
  }

  return {
    ...data.attributes,
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
        state.details = eventSingle(responseData);
        break;
      default:
        state.future = eventList(responseData.data);
        break;
    }
  },
};
