<template>
  <v-layout column class="px-5 pb-5">
    <GoogleSignIn />
  </v-layout>
</template>
<script>
import GoogleSignIn from './GoogleSignIn';

export default {
  components: {
    GoogleSignIn,
  },
};
</script>
