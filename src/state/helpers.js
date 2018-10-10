import { mapState, mapGetters, mapActions } from 'vuex';
import { IS_LOGGED_IN } from '@state/mutationTypes';

export const authComputed = {
  ...mapState('auth', {
    currentUser: state => state.currentUser,
  }),
  ...mapGetters({
    loggedIn: `auth/${IS_LOGGED_IN}`,
  }),
};

export const authMethods = mapActions('auth', ['logIn', 'logOut']);
