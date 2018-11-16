<template>
  <v-btn
    class="googleBtn" 
    block
    color="primary"
    @click="authenticate('google')"
    :loading="loading"
    :disabled="loading"
  >
    <GoogleIcon /> Google Login
    <span slot="loader">
      please wait...
    </span>
  </v-btn>
</template>

<script>
import GoogleIcon from '@components/Icons/Google';
import { LOGIN_START } from '@state/mutationTypes';

export default {
  components: {
    GoogleIcon,
  },
  data: () => ({
    loading: true,
    authClient: null,
  }),
  mounted() {
    this.loadGoogle();
  },
  watch: {
    authClient: function(value) {
      if (value) {
        this.loading = false;
      }
    },
  },
  methods: {
    async loadGoogle() {
      await installClient();
      this.authClient = await initClient();
    },
    async authenticate(provider) {
      this.loading = true;

      await this.$store.dispatch(LOGIN_START, {
        provider,
        authClient: this.authClient,
      });

      this.loading = false;
    },
  },
};

const gAuthConfig = {
  clientId:
    '877438562159-qh0ps90f2qvpl1lr95hkagag13pt3kgm.apps.googleusercontent.com',
  scope: 'profile email',
};

const installClient = () => {
  const url = 'https://apis.google.com/js/api.js';
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = url;
    script.onreadystate = script.onload = function() {
      if (!script.readyState || /loaded|compvare/.test(script.readyState)) {
        setTimeout(function() {
          resolve();
        }, 500);
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};

const initClient = config => {
  return new Promise(resolve => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init(gAuthConfig).then(() => {
        resolve(window.gapi.auth2.getAuthInstance());
      });
    });
  });
};
</script>

<style lang="stylus" scoped>
@import '~@assets/style/variables';

.googleBtn {
  color: $colors.google.text !important;
  background-color: $colors.google.bg !important;

  /* stylelint-disable-next-line */
  /deep/ .v-btn__content {
    justify-content: flex-start;
    font-weight: bold;
    text-transform: capitalize;
  }

  /deep/ svg {
    width: 18px;
    height: 18px;
    margin-right: 16px;
  }
}
</style>
