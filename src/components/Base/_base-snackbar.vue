<template>
  <VSnackbar
    v-model="snackbar.visible"
    color=""
    :timeout="snackbar.timeout"
    multi-line
  >
    <div class="subheading">
      {{ snackbar.titleText }}
    </div>
    <VBtn
      v-if="snackbar.buttonText"
      dark
      flat
      color="pink"
      @click="snackbar.onClick"
    >
      {{ snackbar.buttonText }}
    </VBtn>
  </VSnackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      timeout: 0,
    };
  },
  computed: {
    ...mapState(['snackbar']),
  },
};
</script>
