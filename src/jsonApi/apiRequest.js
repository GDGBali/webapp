import jsonApi from '@src/jsonApi';

const request = async (
  { commit, state },
  { resource, options: { id, params }, types }
) => {
  commit(types.PENDING, { value: true });

  try {
    let response;

    switch (state.reqVerb) {
      case 'GET_LIST':
        response = await jsonApi.findAll(resource, params);
        break;
      default:
        response = await jsonApi.find(resource, id, params);
        break;
    }
    const responseData = response.data;

    commit(types.SUCCESS, { responseData });
  } catch (error) {
    if (error.response) {
      commit(types.FAILURE, { error: error.response });
    }
  } finally {
    commit(types.PENDING, { value: false });
  }
};

export default request;
