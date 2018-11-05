<template>
  <div>
    <div class="my-3 text-xs-center">
      <v-btn color="primary" large @click="handleSubmission">
        {{ buttonText }}
      </v-btn>
    </div>
    <v-dialog 
      lazy
      v-model="submissionDialog" 
      fullscreen 
      hide-overlay 
      transition="dialog-bottom-transition"
    >
      <v-card light>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="submissionDialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ dialogTitle }}</v-toolbar-title>
        </v-toolbar>
        <div>
          <h1 class="product-sans mt-4 mb-3 text-xs-center">
            {{ formTitle }}
          </h1>
          <SubmissionForm @open-dialog="openSuccessDialog" :submission-type="submissionType" :reasons-text="reasonsText" />
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
  </div>
</template>

<script>
import SubmissionForm from '@components/Submissions/Form';
import { IS_LOGGED_IN, SHOW_AUTH_DIALOG } from '@state/mutationTypes';
export default {
  props: {
    formTitle: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    dialogTitle: {
      type: String,
      default: '',
    },
    submissionType: {
      type: String,
      default: '',
    },
    reasonsText: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    submissionDialog: false,
    successDialog: false,
  }),
  components: {
    SubmissionForm,
  },
  methods: {
    handleSubmission() {
      const isLoggedIn = this.$store.getters[IS_LOGGED_IN];
      if (isLoggedIn) {
        this.submissionDialog = true;
      } else {
        this.$store.commit(SHOW_AUTH_DIALOG, {
          titleText: 'Please login to continue',
        });
      }
    },
    openSuccessDialog() {
      this.successDialog = true;
    },
  },
};
</script>
