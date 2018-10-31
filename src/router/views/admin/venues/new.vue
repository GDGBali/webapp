<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-btn color="primary" to="/kelian/venues" exact>
        <v-icon left>chevron_left</v-icon>
        Venues
      </v-btn>
    </v-flex>
    <v-flex xs12>
      <div class="mt-5">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                v-model="fields.name"
                label="Name"
                required
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="fields.mapsUrl"
                label="Maps URL"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="fields.websiteUrl"
                label="Website"
              />
            </v-flex>
            <v-flex xs12>
              <v-btn raised class="primary ma-0 mt-3" @click="onPickFile">
                Logo Image
              </v-btn>
              <input
                type="file"
                style="display: none"
                ref="logoInput"
                accept="image/*"
                @change="onFilePicked"
              >
              <div class="mt-4">
                <img :src="fields.logoUrl" height="150">
              </div>
            </v-flex>
            <div class="mt-3 ml-auto">
              <v-btn
                :loading="isSubmitting"
                :disabled="isSubmitting"
                @click="submit"
                color="primary"
              >
                submit
              </v-btn>
              <v-btn @click="clear" color="error">
                clear
              </v-btn>
            </div>
          </v-layout>
        </v-form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { setPageTitle } from '@utils/adminPage';

export default {
  created() {
    setPageTitle(this, 'New Venue');
  },
  data: () => ({
    valid: false,
    isSubmitting: false,
    fields: {
      name: '',
      mapsUrl: '',
      websiteUrl: '',
      logoUrl: '',
      logo: null,
    },
  }),

  methods: {
    onPickFile() {
      this.$refs.logoInput.click();
    },
    onFilePicked(event) {
      const [logoFile] = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.fields.logoUrl = fileReader.result;
      });
      if (logoFile) {
        fileReader.readAsDataURL(logoFile);
        this.fields.logo = logoFile;
      }
    },
    async submit() {
      const {
        fields: { logo, name, mapsUrl, websiteUrl },
      } = this;
      const formFields = new FormData();
      formFields.append('logoImg', logo);
      formFields.append('name', name);
      formFields.append('mapsUrl', mapsUrl);
      formFields.append('websiteUrl', websiteUrl);
      this.isSubmitting = true;
      await this.$store.dispatch('admin/NEW_VENUE', formFields);

      this.isSubmitting = false;
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
