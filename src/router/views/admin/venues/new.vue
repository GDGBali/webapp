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
              <v-text-field
                v-model="fields.logoUrl"
                label="Logo URL"
              />
            </v-flex>
            <div class="mt-3">
              <v-btn
                :disabled="!valid"
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
import { postRequest } from '@api/apiRequest';

export default {
  created() {
    setPageTitle(this, 'New Venue');
  },
  data: () => ({
    valid: true,
    fields: {
      name: '',
      mapsUrl: '',
      websiteUrl: '',
      logoUrl: '',
    },
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const { fields } = this;
        postRequest(this.$store, this.$router, 'venue', { ...fields });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
