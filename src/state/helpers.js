import { mapState, mapGetters, mapActions } from 'vuex';
import { IS_LOGGED_IN } from '@state/mutationTypes';

export const authComputed = {
  ...mapState({
    currentUser: state => state.auth.currentUser,
  }),
  ...mapGetters({
    loggedIn: IS_LOGGED_IN,
  }),
};

export const authMethods = mapActions('auth', ['logIn', 'logOut']);
