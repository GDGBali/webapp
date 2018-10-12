<template>
  <v-dialog 
    lazy
    v-model="registerDialog" 
    fullscreen 
    hide-overlay 
    transition="dialog-bottom-transition"
  >
    <v-card light>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <div>
        <RegisterForm @open-dialog="openDialog" />
        <v-dialog 
          lazy 
          v-model="successDialog" 
          max-width="320" 
          persistent
        >
          <v-card light>
            <v-card-title class="headline" primary-title>
              Terima Kasih
            </v-card-title>
            <v-card-text>
              Kami akan segera menghungi anda!
            </v-card-text>
            <v-divider />
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" @click="$emit('update:registerDialog', false)">
                mantabs!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import RegisterForm from './RegisterForm';

export default {
  props: {
    registerDialog: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    RegisterForm,
  },
  data: () => ({
    successDialog: false,
  }),
  methods: {
    openDialog() {
      this.successDialog = true;
    },
  },
  computed: {
    dialog: {
      get() {
        return this.registerDialog;
      },
      set(value) {
        this.$emit('update:registerDialog', false);
      },
    },
  },
};
</script>
