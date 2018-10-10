import { setStorage, setDefaultAuthHeaders } from './';

const setCurrentUser = (state, { user }) => {
  state.currentUser = user;
  if (user) {
    const { id, accessToken, publicId, expiry, fullName, email } = user;
    setStorage('auth.currentUser', {
      id,
      accessToken,
      publicId,
      expiry,
      fullName,
      email,
    });
  } else {
    setStorage('auth.currentUser', null);
  }
  setDefaultAuthHeaders(state.currentUser);
};

export default {
  setCurrentUser,
};
