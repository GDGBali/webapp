// import db from '@api/database';
import api from '@api';

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
  try {
    const response = await getFromNetwork(endpoint, options);
    const responseData = response.data;
    if (options.id) {
      commit(types.SUCCESS_SINGLE, { responseData });
    } else {
      commit(types.SUCCESS_LIST, { responseData });
    }
  } catch (error) {
    if (error.response) {
      commit(types.FAILURE, { error: error.response });
    }
  } finally {
    commit(types.PENDING, { value: false });
  }

  // await db.save(reqVerb, idbStore, responseData);
  // const data = await db.getFromLocal(reqVerb, idbStore, id);
  // commit(types.SUCCESS, { responseData: data });
};

export const registerEvent = async (fields, eventId) => {
  const response = await api
    .post('/attendees', {
      attendee: {
        registeredAt: new Date(),
        eventId: eventId,
      },
      user: {
        ...fields,
      },
    })
    .catch(err => ({ error: true, err }));
  return response;
};

// TECHNICAL DEBT - Refactor to vuex
export const registerVolunteer = async ({ reasons, ...rest }) => {
  const response = await api
    .post('/volunteers', {
      volunteer: {
        registeredAt: new Date(),
        reasons,
      },
      user: {
        ...rest,
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
