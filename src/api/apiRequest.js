// import db from '@api/database';
import api from '@api';
import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '@state/mutationTypes';

const getFromNetwork = (reqVerb, endpoint, { params, id }) => {
  switch (reqVerb) {
    case 'GET_LIST':
      return api.get(`${endpoint}?when=${params.when}`);
    default:
      return api.get(`${endpoint}/${id}`);
  }
};

const request = async (
  { commit, state: { reqVerb } },
  { endpoint, options, types }
) => {
  commit(types.PENDING, { value: true });

  // const { idbStore, id } = options;

  try {
    const response = await getFromNetwork(reqVerb, endpoint, options);

    const responseData = response.data;
    // await db.save(reqVerb, idbStore, responseData);
    commit(types.SUCCESS, { responseData });
  } catch (error) {
    if (error.response) {
      commit(types.FAILURE, { error: error.response });
    }

    // const data = await db.getFromLocal(reqVerb, idbStore, id);

    // commit(types.SUCCESS, { responseData: data });
  } finally {
    commit(types.PENDING, { value: false });
  }
};

// TECHNICAL DEBT - Refactor to vuex
export const postRequest = async ({ commit }, router, resource, payload) => {
  commit(SHOW_SNACKBAR, {
    titleText: 'Venue Created',
    buttonText: 'dismiss',
    onClick: () => commit(HIDE_SNACKBAR),
  });

  router.push('/kelian');
};

export default request;
