<template>
  <v-card light class="cardContainer">
    <v-img
      :lazy-src="require('@assets/images/sangkep_blur.jpg')"
      :src="event.coverImgUrl"
      aspect-ratio="2.75"
    />
    <v-card-title primary-title>
      <div class="headline">
        {{ event.name }}
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        v-if="event.startsAt"
        flat
        :to="`/events/${event.slugUrl}`"
        color="primary"
      >
        <v-icon left>info</v-icon>
        Details
      </v-btn>
      <v-btn
        v-else
        flat
        disabled
      >
        <v-icon left>info</v-icon>
        TBA
      </v-btn>
      <v-spacer />
      <v-btn flat @click="show = !show">
        info
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <div v-show="show">
        <v-card-text v-show="show" class="description">
          <div v-html="eventDescription" />
          <EventCardDetails v-if="event.startsAt" :event="event" />
        </v-card-text>
      </div>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
import EventCardDetails from '@components/Events/EventCardDetails';

export default {
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    EventCardDetails,
  },
  data: () => ({
    show: false,
  }),
  computed: {
    eventDescription() {
      return this.event.description.split('\n')[0] + '.........';
    },
  },
};
</script>
<style lang="stylus" scoped>
.cardContainer {
  background: #eaeaea;
  box-shadow: 2px -1px 7px 0 rgba(57, 204, 204, 1), -2px 3px 8px 0 rgba(34, 122, 122, 1);
}

.description {
  white-space: pre-line;
}
</style>
