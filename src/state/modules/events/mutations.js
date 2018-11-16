import {
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_SUCCESS,
} from '@state/networkTypes';

export default {
  [FETCH_EVENTS_PENDING]: (state, { value }) => {
    state.isRequesting = value;
  },
  [FETCH_EVENTS_SUCCESS]: (state, { isSingle, isFuture, responseData }) => {
    if (isSingle) {
      state.singleEvent = responseData;
    } else if (isFuture) {
      state.future = responseData;
    } else {
      state.past = responseData;
    }
  },
  [FETCH_EVENTS_FAILURE]: (state, { error }) => {
    state.error = error;
  },
};
