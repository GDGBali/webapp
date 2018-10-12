import storage from '@utils/storage';
import { setDefaultAuthHeaders } from './';

const setCurrentUser = (state, { user }) => {
  state.currentUser = user;
  if (user) {
    const { id, accessToken, expiry, name, email } = user;
    storage.setStorage('auth.currentUser', {
      id,
      accessToken,
      expiry,
      name,
      email,
    });
  } else {
    storage.setStorage('auth.currentUser', null);
  }
  setDefaultAuthHeaders(state.currentUser);
};

export default {
  setCurrentUser,
};
