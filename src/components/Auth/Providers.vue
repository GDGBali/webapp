<template>
  <v-layout column class="px-5 pb-5">
    <GoogleSignIn />
  </v-layout>
</template>
<script>
import GoogleSignIn from './GoogleSignIn';
import { LOGIN_START } from '@state/mutationTypes';

export default {
  components: {
    GoogleSignIn,
  },
  methods: {
    authenticate(provider) {
      this.$store.dispatch(LOGIN_START, { provider, vue: this });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@assets/style/variables';

.providerBtn {
  &.facebook {
    background-color: $colors.facebook.bg !important;
  }

  &.twitter {
    background-color: $colors.twitter.bg !important;
  }

  &.github {
    background-color: $colors.github.bg !important;
  }

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
