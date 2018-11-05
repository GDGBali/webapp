<template>
  <v-form ref="form" lazy-validation>
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            v-model="form.name"
            label="Full Name"
            readonly
            disabled
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
            readonly
            disabled
          />
        </v-flex>
        <v-flex xs12>
          <v-textarea
            v-model="form.reasons"
            :label="reasonsText"
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
import { postSubmission } from '@api/apiRequest';

export default {
  props: {
    submissionType: {
      type: String,
      default: '',
    },
    reasonsText: {
      type: String,
      default: '',
    },
  },
  mounted() {
    const { name, email, phone } = storage.getStorage('auth.currentUser');
    this.form.name = name;
    this.form.email = email;
    this.form.phone = phone;
  },
  mixins: [validationMixin],
  validations: {
    form: {
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

        const response = await postSubmission({
          reasons: this.form.reasons,
          submissionType: this.submissionType,
        });
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
