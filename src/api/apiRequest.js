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

// TECHNICAL DEBT - Refactor to vuex
export const registerEvent = async (fields, eventId) => {
  const response = await api
    .post('/attendees', {
      data: {
        registeredAt: new Date(),
        user: {
          ...fields,
        },
        eventId: eventId,
      },
    })
    .catch(err => ({ error: true, err }));
  return response;
};

// TECHNICAL DEBT - Refactor to vuex
export const registerVolunteer = async fields => {
  const response = await api
    .post('/volunteers', {
      data: {
        registeredAt: new Date(),
        ...fields,
        isVolunteer: true,
      },
    })
    .catch(err => ({ error: true, err }));
  return response;
};

// TECHNICAL DEBT - Refactor to vuex
export const getUserProfile = async () => {
  const response = await api
    .get('/profile')
    .catch(err => ({ error: true, err }));
  return response;
};

export default request;
