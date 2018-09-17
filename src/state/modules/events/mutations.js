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

const eventSingle = data => ({
  ...data.attributes,
});

// const eventSingle = data =>

export default {
  requestVerb: (state, { verb }) => {
    state.reqVerb = verb;
  },
  requestPending: (state, { value }) => {
    Vue.set(state, 'isRequesting', value);
  },
  requestSuccess: (state, { data }) => {
    switch (state.reqVerb) {
      case 'GET_SINGLE':
        state.details = eventSingle(data);
        break;
      default:
        state.future = eventList(data);
        break;
    }
  },
};
