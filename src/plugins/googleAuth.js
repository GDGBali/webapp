import Vue from 'vue';
import GAuth from 'vue-google-oauth2-gapi';

Vue.use(GAuth, {
  clientId:
    '877438562159-qh0ps90f2qvpl1lr95hkagag13pt3kgm.apps.googleusercontent.com',
  scope: 'profile email',
});
