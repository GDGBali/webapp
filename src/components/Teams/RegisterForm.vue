<template>
  <v-form ref="form" lazy-validation>
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            v-model="form.name"
            label="Full Name"
            :error-messages="nameErrors"
            @input="$v.form.name.$touch()"
            @blur="$v.form.name.$touch()"
          />
        </v-flex>
        <v-flex xs12>
          <v-text-field
            type="email"
            v-model="form.email"
            label="Email"
            readonly
            disabled
          />
        </v-flex>
        <v-flex xs12>
          <v-text-field
            type="tel"
            v-model="form.phone"
            label="Phone"
            :error-messages="phoneErrors"
            @input="$v.form.phone.$touch()"
            @blur="$v.form.phone.$touch()"
          />
        </v-flex>
        <v-flex xs12>
          <v-textarea
            v-model="form.reasons"
            label="Alasan ingin menjadi volunteer"
            :error-messages="reasonsErrors"
            @input="$v.form.reasons.$touch()"
            @blur="$v.form.reasons.$touch()"
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
</template>

<script>
import storage from '@utils/storage';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { registerVolunteer } from '@api/apiRequest';

export default {
  props: {
    success: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    const { name, email } = storage.getStorage('auth.currentUser');
    this.form.name = name;
    this.form.email = email;
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required },
      phone: { required },
      reasons: { required },
    },
  },
  data: () => ({
    isSubmitting: false,
    form: {
      name: '',
      email: '',
      phone: '',
      reasons: '',
    },
  }),
  computed: {
    nameErrors() {
      const errors = [];
      const { name } = this.$v.form;
      if (!name.$dirty) return errors;
      !name.required && errors.push('Full Name is required.');
      return errors;
    },
    phoneErrors() {
      const errors = [];
      const { phone } = this.$v.form;
      if (!phone.$dirty) return errors;
      !phone.required && errors.push('Phone is required');
      return errors;
    },
    reasonsErrors() {
      const errors = [];
      const { reasons } = this.$v.form;
      if (!reasons.$dirty) return errors;
      !reasons.required && errors.push('This is required');
      return errors;
    },
  },
  methods: {
    async submit() {
      const { form } = this.$v;
      form.$touch();

      if (!form.$invalid) {
        this.isSubmitting = true;

        const response = await registerVolunteer(this.form);
        if (!response.error) {
          this.$emit('open-dialog');
        }
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
