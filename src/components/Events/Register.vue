<style lang="stylus" scoped>
.divider {
  width: 100px;
  height: 1px;
  background: #000;
  border: none;
  border-radius: 10px;
}
</style>


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
      <div v-if="!submitSuccess">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="form.name"
                  label="Full Name"
                  required
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
                  required
                  :error-messages="emailErrors"
                  @input="$v.form.email.$touch()"
                  @blur="$v.form.email.$touch()"
                  :readonly="loggedIn"
                  :disabled="loggedIn"
                />
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="tel"
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
      </div>
      <v-container v-else>
        <v-layout align-center wrap column>
          <div class="body-2">
            Tunjukkan QR Code ini pada saat registrasi
          </div>
          <QrCode :qr-data="qrData" />
          <hr class="divider my-3">
          <template v-if="!loggedIn">
            <div class="subheading text-xs-center mb-2">
              Kamu juga bisa login untuk mempermudah registrasi untuk event-event berikutnya.
            </div>
            <v-btn color="primary" @click="SHOW_AUTH_DIALOG">
              login
            </v-btn>
          </template>
          <template v-else>
            <div class="subheading text-xs-center mb-2">
              Kamu juga bisa lihat QR Code di laman profilemu.
            </div>
            <v-btn color="primary" to="/profile">
              profile
            </v-btn>
          </template>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import storage from '@utils/storage';
import { registerEvent } from '@api/apiRequest';
import { SHOW_AUTH_DIALOG } from '@state/mutationTypes';
import { mapMutations } from 'vuex';
import { authComputed } from '@state/helpers';
import QrCode from '@components/Events/QrCode';

export default {
  components: {
    QrCode,
  },
  props: {
    registerDialog: {
      type: Boolean,
      default: false,
    },
    eventId: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    const { name, email } = storage.getStorage('auth.currentUser') || {};
    this.form.name = name;
    this.form.email = email;
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required },
      email: { required, email },
      phone: { required },
    },
  },
  data: () => ({
    valid: false,
    isSubmitting: false,
    submitSuccess: false,
    qrData: {},
    form: {
      name: '',
      email: '',
      phone: '',
      institution: '',
    },
  }),
  computed: {
    ...authComputed,
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
      const { name } = this.$v.form;
      if (!name.$dirty) return errors;
      !name.required && errors.push('Full Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      const { email } = this.$v.form;
      if (!email.$dirty) return errors;
      !email.email && errors.push('Must be a valid e-mail');
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

        const response = await registerEvent(this.form, this.eventId);
        if (!response.error) {
          this.submitSuccess = true;
          const { email, id: userId } = response.data.user;
          this.qrData = {
            eventId: this.eventId,
            email,
            userId,
          };
        }
        this.isSubmitting = false;
      }
    },
    clear() {
      this.$refs.form.reset();
      this.$v.form.$reset();
    },
    ...mapMutations([SHOW_AUTH_DIALOG]),
  },
};
</script>
