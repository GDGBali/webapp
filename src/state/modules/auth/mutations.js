import { setStorage, setDefaultAuthHeaders } from './';

const setCurrentUser = (state, { user }) => {
  state.currentUser = user;
  if (user) {
    const { id, accessToken, publicId, expiry } = user;
    setStorage('auth.currentUser', {
      id,
      accessToken,
      publicId,
      expiry,
    });
  } else {
    setStorage('auth.currentUser', null);
  }
  setDefaultAuthHeaders(state.currentUser);
};

export default {
  setCurrentUser,
};
