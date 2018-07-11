<template>
  <v-flex xs6>
    <v-card>
      <v-card-media
        :src="event.imgSrc"
        :contain="event.imgContain"
        height="200px"
      />
      <v-card-title primary-title>
        <div class="headline">{{ event.title }}</div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          v-if="event.details"
          flat
          to="/events/io18"
          color="primary">
          <v-icon left>info</v-icon>
          Details
        </v-btn>
        <v-btn
          v-else
          flat
          disabled>
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
        <v-card-text v-show="show">
          {{ event.description }}
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    show: false,
  }),
};
</script>
