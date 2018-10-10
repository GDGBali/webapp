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
          <vue-qr 
            :bg-src="require('@assets/images/qrgdg.jpg')" 
            :text="qrData"
            :size="450"
            :dot-scale="0.5"
            :callback="setQrImg"
          />
          <div>
            <v-btn color="primary" download="devfest.png" :href="qrImg">
              download
            </v-btn>
          </div>
          <hr class="divider my-3">
          <div class="subheading text-xs-center mb-2">
            Kamu juga bisa login untuk mempermudah registrasi untuk event-event berikutnya.
          </div>
          <v-btn color="primary" @click="SHOW_AUTH_DIALOG">
            login
          </v-btn>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import VueQr from 'vue-qr';
import { registerEvent } from '@api/apiRequest';
import { SHOW_AUTH_DIALOG } from '@state/mutationTypes';
import { mapMutations } from 'vuex';

export default {
  components: {
    VueQr,
  },
  props: {
    registerDialog: {
      type: Boolean,
      default: false,
    },
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
    userId: '',
    qrImg: '',
    form: {
      name: '',
      email: '',
      phone: '',
      institution: '',
    },
  }),
  computed: {
    eventId() {
      return this.$store.state.events.details.id;
    },
    qrData() {
      return `{"eventId":${this.eventId},"email":"${
        this.form.email
      }","userId":${this.userId}}`;
    },
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
          this.userId = response.data.user.id;
        }
        this.isSubmitting = false;
      }
    },
    clear() {
      this.$refs.form.reset();
      this.$v.form.$reset();
    },
    setQrImg(dataUrl, id) {
      this.qrImg = dataUrl;
    },
    ...mapMutations([SHOW_AUTH_DIALOG]),
  },
};
</script>
