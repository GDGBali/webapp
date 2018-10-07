import jsonApi from '@api';
import db from '@api/database';
import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '@state/mutationTypes';

const getFromNetwork = (reqVerb, resource, { params, id }) => {
  switch (reqVerb) {
    case 'GET_LIST':
      return jsonApi.findAll(resource, params);
    default:
      return jsonApi.find(resource, id, params);
  }
};

const request = async (
  { commit, state: { reqVerb } },
  { resource, options, types }
) => {
  commit(types.PENDING, { value: true });

  const { idbStore, id } = options;

  try {
    const response = await getFromNetwork(reqVerb, resource, options);

    const responseData = response.data;
    await db.save(reqVerb, idbStore, responseData);
    commit(types.SUCCESS, { responseData });
  } catch (error) {
    if (error.response) {
      commit(types.FAILURE, { error: error.response });
    }

    const data = await db.getFromLocal(reqVerb, idbStore, id);

    commit(types.SUCCESS, { responseData: data });
  } finally {
    commit(types.PENDING, { value: false });
  }
};

// TECHNICAL DEBT - Refactor to vuex
export const postRequest = async ({ commit }, router, resource, payload) => {
  await jsonApi.create(resource, { ...payload });

  commit(SHOW_SNACKBAR, {
    titleText: 'Venue Created',
    buttonText: 'dismiss',
    onClick: () => commit(HIDE_SNACKBAR),
  });

  router.push('/kelian');
};

export default request;
