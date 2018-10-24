import storage from '@utils/storage';
import { setDefaultAuthHeaders } from './';

const setCurrentUser = (state, { user }) => {
  state.currentUser = user;
  if (user) {
    storage.setStorage('auth.currentUser', { ...user });
  } else {
    storage.setStorage('auth.currentUser', null);
  }
  setDefaultAuthHeaders(state.currentUser);
};

export default {
  setCurrentUser,
};
