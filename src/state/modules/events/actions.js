import {
  FETCH_SINGLE_EVENT,
  FETCH_MULTI_EVENT,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_SUCCESS,
} from '@state/networkTypes';
import api from '@api';

const requestList = async ({ commit }, { startsAt }) => {
  commit(FETCH_EVENTS_PENDING, { value: true });
  const isFuture = startsAt === 'future';
  try {
    const { data: responseData } = await api.get('events', {
      params: {
        filter: {
          startsAt,
        },
      },
    });
    commit(FETCH_EVENTS_SUCCESS, { responseData, isFuture });
  } catch (error) {
    if (error.response) {
      commit(FETCH_EVENTS_FAILURE, { error: error.response });
    }
  } finally {
    commit(FETCH_EVENTS_PENDING, { value: false });
  }
};

const requestSingle = async ({ commit }, { slugUrl }) => {
  commit(FETCH_EVENTS_PENDING, { value: true });
  try {
    const { data: responseData } = await api.get(`events/${slugUrl}`);
    commit(FETCH_EVENTS_SUCCESS, { responseData, isSingle: true });
  } catch (error) {
    if (error.response) {
      commit(FETCH_EVENTS_FAILURE, { error: error.response });
    }
  } finally {
    commit(FETCH_EVENTS_PENDING, { value: false });
  }
};

export default {
  [FETCH_MULTI_EVENT]: requestList,
  [FETCH_SINGLE_EVENT]: requestSingle,
};
