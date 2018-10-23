// import db from '@api/database';
import api from '@api';
import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '@state/mutationTypes';

const getFromNetwork = (endpoint, { params, id }) => {
  if (id) {
    return api.get(`${endpoint}/${id}`);
  }

  return api.get(`${endpoint}`, {
    params,
  });
};

const request = async ({ commit }, { endpoint, options, types }) => {
  commit(types.PENDING, { value: true });

  // const { idbStore, id } = options;

  const response = await getFromNetwork(endpoint, options).catch(error => {
    if (error.response) {
      commit(types.FAILURE, { error: error.response });
    }
  });

  const responseData = response.data;

  if (options.id) {
    commit(types.SUCCESS_SINGLE, { responseData });
  } else {
    commit(types.SUCCESS_LIST, { responseData });
  }

  commit(types.PENDING, { value: false });

  // await db.save(reqVerb, idbStore, responseData);
  // const data = await db.getFromLocal(reqVerb, idbStore, id);
  // commit(types.SUCCESS, { responseData: data });
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
