import Vue from 'vue';

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

const eventSingle = ({ data, included: [venue] }) => ({
  ...data.attributes,
  venue: {
    ...venue.attributes,
  },
});

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
