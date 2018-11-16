<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-btn color="primary" to="/kelian/events" exact>
        <v-icon left>chevron_left</v-icon>
        Events
      </v-btn>
    </v-flex>
    <v-flex xs12 class="mt-5">
      <v-card light>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  v-model="fields.name"
                  label="Name"
                  required
                />
              </v-flex>
              <v-flex xs5>
                <DateTime 
                  menu-ref="startDate" 
                  label="Starts at Date" 
                  :picker-value.sync="fields.startsAt.date" 
                />
              </v-flex>
              <v-flex 
                xs5 
                offset-xs2 
                offset-sm1
              >
                <DateTime 
                  menu-ref="startTime" 
                  label="Starts at Time" 
                  :picker-value.sync="fields.startsAt.time" 
                  picker-type="time"
                />
              </v-flex>
              <v-flex xs5>
                <DateTime 
                  menu-ref="endDate" 
                  label="Ends at Date" 
                  :picker-value.sync="fields.endsAt.date" 
                  :min="fields.startsAt.date"
                />
              </v-flex>
              <v-flex 
                xs5 
                offset-xs2 
                offset-sm1
              >
                <DateTime 
                  menu-ref="endTime" 
                  label="Ends at Time" 
                  :picker-value.sync="fields.endsAt.time" 
                  picker-type="time"
                  :min="fields.startsAt.time"
                />
              </v-flex>
              <v-flex xs12>
                <v-textarea v-model="fields.description" label="Description" />
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="fields.slugUrl"
                  label="Slug URL"
                />
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="fields.meetupUrl"
                  label="Meetup URL"
                />
              </v-flex>
              <v-flex xs12>
                <v-select
                  v-model="fields.eventType"
                  label="Event Type"
                  :items="eventTypes"
                />
              </v-flex>
              <v-flex xs12>
                <v-autocomplete
                  v-model="fields.venueId"
                  :items="venues"
                  :filter="venueFilter"
                  item-text="name"
                  item-value="id"
                  label="Venue"
                />
              </v-flex>
              <v-flex xs12>
                <v-btn raised class="primary ma-0 mt-3" @click="onPickFile">
                  Poster Image
                </v-btn>
                <input
                  type="file"
                  style="display: none"
                  ref="posterInput"
                  accept="image/*"
                  @change="onFilePicked"
                >
                <div class="mt-4">
                  <img :src="posterUrl" height="150">
                </div>
              </v-flex>
              <div class="mt-3">
                <v-btn
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
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DateTime from '@components/Forms/DateTime';
import { setPageTitle } from '@utils/adminPage';

export default {
  components: {
    DateTime,
  },
  created() {
    setPageTitle(this, 'New Event');
    this.$store.dispatch('admin/FETCH_VENUES');
  },
  data: () => ({
    valid: true,
    posterUrl: '',
    fields: {
      name: '',
      description: '',
      poster: null,
      slugUrl: '',
      meetupUrl: '',
      venueId: '',
      eventType: '',
      startsAt: {
        // date: format(new Date(), 'YYYY-MM-DD'),
        time: '18:00',
      },
      endsAt: {
        // date: format(new Date(), 'YYYY-MM-DD'),
        time: '21:00',
      },
    },
    eventTypes: ['Conference', 'Workshop', 'Joined'],
  }),
  computed: {
    venues() {
      return this.$store.state.admin.venues.list;
    },
  },
  methods: {
    onPickFile() {
      this.$refs.posterInput.click();
    },
    onFilePicked(event) {
      const [posterFile] = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.posterUrl = fileReader.result;
      });
      if (posterFile) {
        fileReader.readAsDataURL(posterFile);
        this.fields.poster = posterFile;
      }
    },
    venueFilter(item, queryText, itemText) {
      const venueName = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();

      return venueName.indexOf(searchText) > -1;
    },
    async submit() {
      await this.$store.dispatch('admin/NEW_EVENT', this.fields);
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
