import {
  NEW_EVENT,
  FETCH_EVENTS,
  NEW_VENUE,
  FETCH_VENUES,
  NEW_USER,
  FETCH_USERS,
} from '@state/mutationTypes';
import api from '@api';

const newEvent = async ({ commit }, payload) => {
  const formData = fields =>
    Object.keys(fields).reduce((formData, key) => {
      let fieldKey = fields[key];
      if (key === 'startsAt' || key === 'endsAt') {
        fieldKey = JSON.stringify(fields[key]);
      }
      formData.append(key, fieldKey);
      return formData;
    }, new FormData());
  await api.post('events', formData(payload)).catch(e => e);

  // commit(NEW_EVENT, {
  //   newVenue: response.data,
  // });
};

const fetchEvents = async ({ commit }) => {
  const response = await api.get('events');
  commit(FETCH_EVENTS, {
    list: response.data,
  });
};

const newVenue = async ({ commit }, payload) => {
  const response = await api.post('venues', payload).catch(e => e);
  commit(NEW_VENUE, {
    newVenue: response.data,
  });
};

const fetchVenues = async ({ commit }) => {
  const response = await api.get('venues');
  commit(FETCH_VENUES, {
    list: response.data,
  });
};

const newUser = async ({ commit }, payload) => {
  const formData = fields =>
    Object.keys(fields).reduce((formData, key) => {
      let fieldKey = fields[key];
      if (key === 'startsAt' || key === 'endsAt') {
        fieldKey = JSON.stringify(fields[key]);
      }
      formData.append(key, fieldKey);
      return formData;
    }, new FormData());
  await api.post('users', formData(payload)).catch(e => e);

  // commit(NEW_EVENT, {
  //   newVenue: response.data,
  // });
};

const fetchUsers = async ({ commit }) => {
  const response = await api.get('users');
  commit(FETCH_EVENTS, {
    list: response.data,
  });
};

export default {
  [NEW_EVENT]: newEvent,
  [FETCH_EVENTS]: fetchEvents,
  [NEW_VENUE]: newVenue,
  [FETCH_VENUES]: fetchVenues,
  [NEW_USER]: newUser,
  [FETCH_USERS]: fetchUsers,
};
