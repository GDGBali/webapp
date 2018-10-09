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
                v-model="form.fullName"
                label="Full Name"
                required
                :error-messages="nameErrors"
                @input="$v.form.fullName.$touch()"
                @blur="$v.form.fullName.$touch()"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="form.email"
                label="Email"
                required
                :error-messages="emailErrors"
                @input="$v.form.email.$touch()"
                @blur="$v.form.email.$touch()"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="form.phone"
                label="Phone"
                required
                :error-messages="phoneErrors"
                @input="$v.form.phone.$touch()"
                @blur="$v.form.phone.$touch()"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="form.institution"
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
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
  props: {
    registerDialog: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [validationMixin],
  validations: {
    form: {
      fullName: { required },
      email: { required, email },
      phone: { required },
    },
  },
  data: () => ({
    valid: false,
    isSubmitting: false,
    form: {
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
    nameErrors() {
      const errors = [];
      const { fullName } = this.$v.form;
      if (!fullName.$dirty) return errors;
      !fullName.required && errors.push('Full Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      const { email } = this.$v.form;
      if (!email.$dirty) return errors;
      !email.email && errors.push('Must be valid e-mail');
      !email.required && errors.push('E-mail is required');
      return errors;
    },
    phoneErrors() {
      const errors = [];
      const { phone } = this.$v.form;
      if (!phone.$dirty) return errors;
      !phone.required && errors.push('Phone is required');
      return errors;
    },
  },
  methods: {
    async submit() {
      const { form } = this.$v;
      form.$touch();

      if (!form.$invalid) {
        this.isSubmitting = true;
        await fetch('https://jsonplaceholder.typicode.com/todos/122');
        this.isSubmitting = false;
      }
    },
    clear() {
      this.$refs.form.reset();
      this.$v.form.$reset();
    },
  },
};
</script>
