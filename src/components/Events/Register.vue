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
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                v-model="fields.fullName"
                label="Full Name"
                required
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="fields.email"
                label="Email"
                required
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="fields.phone"
                label="Phone"
                required
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="fields.institution"
                label="Institution / Company"
              />
            </v-flex>
            <v-flex xs12>
              <v-layout justify-space-between>
                <v-btn
                  large
                  :loading="isSubmitting"
                  :disabled="isSubmitting"
                  @click="submit"
                  color="primary"
                >
                  submit
                </v-btn>
                <v-btn large @click="clear" color="error">
                  clear
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    registerDialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    valid: false,
    isSubmitting: false,
    fields: {
      fullName: '',
      email: '',
      phone: '',
      institution: '',
    },
  }),
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
  methods: {
    submit() {
      this.isSubmitting = true;
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        // axios.post('/api/submit', {
        //   name: this.name,
        // });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
