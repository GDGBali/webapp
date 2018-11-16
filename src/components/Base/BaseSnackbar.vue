<template>
  <VSnackbar
    v-model="visible"
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
import { HIDE_SNACKBAR } from '@state/mutationTypes';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['snackbar']),
    visible: {
      get() {
        return this.$store.state.snackbar.visible;
      },
      set(value) {
        this.$store.commit(HIDE_SNACKBAR);
      },
    },
  },
};
</script>
