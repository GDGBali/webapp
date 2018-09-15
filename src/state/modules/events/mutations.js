export default {
  requestPending: (state, { value }) => {
    state.isRequesting = value;
  },
  requestSuccess: (state, { data }) => {
    state.future = data.map(item => {
      const details = !(
        item.attributes.startsAt === null || item.attributes.endsAt === null
      );
      return {
        id: `${item.type}-${item.id}`,
        ...item.attributes,
        details,
      };
    });
  },
};
