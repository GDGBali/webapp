<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-btn color="primary" to="/kelian/events" exact>
        <v-icon left>chevron_left</v-icon>
        Events
      </v-btn>
    </v-flex>
    <v-flex xs12>
      <div class="mt-5">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                v-model.lazy="name"
                label="Name"
                required
              />
            </v-flex>
            <v-flex xs5>
              <DateTime 
                menu-ref="startDate" 
                label="Starts at Date" 
                :picker-value.sync="startsAt.date" 
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
                :picker-value.sync="startsAt.time" 
                picker-type="time"
              />
            </v-flex>
            <v-flex xs5>
              <DateTime 
                menu-ref="endDate" 
                label="Ends at Date" 
                :picker-value.sync="endsAt.date" 
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
                :picker-value.sync="endsAt.time" 
                picker-type="time"
              />
            </v-flex>
            <v-flex xs12>
              <v-textarea label="Description" />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model.lazy="name"
                label="Poster URL"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model.lazy="name"
                label="Slug URL"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model.lazy="name"
                label="Meetup URL"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model.lazy="name"
                label="Event Type"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model.lazy="name"
                label="Venue"
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
import DateTime from '@components/Forms/DateTime';
import { setPageTitle } from '@utils/adminPage';
import format from 'date-fns/format';

export default {
  components: {
    DateTime,
  },
  created() {
    setPageTitle(this, 'New Event');
  },
  data: () => ({
    valid: true,
    name: '',
    startsAt: {
      date: format(new Date(), 'YYYY-MM-DD'),
      time: '18:00',
    },
    endsAt: {
      date: format(new Date(), 'YYYY-MM-DD'),
      time: '21:00',
    },
  }),

  methods: {
    submit() {
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
