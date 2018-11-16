import storage from '@utils/storage';
import { setDefaultAuthHeaders } from './';
import { defineAbilitiesFor } from '@utils/ability';

const setCurrentUser = (state, { user }) => {
  state.currentUser = user;

  if (user) {
    state.ability = defineAbilitiesFor(user.rolesMask);
    storage.setStorage('auth.currentUser', { ...user });
  } else {
    storage.setStorage('auth.currentUser', null);
  }
  setDefaultAuthHeaders(state.currentUser);
};

export default {
  setCurrentUser,
};
