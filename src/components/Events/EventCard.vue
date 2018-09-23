<template>
  <v-card light class="cardContainer">
    <v-img
      class="lazyload"
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
        v-if="event.details"
        flat
        :to="`events/${event.slugUrl}`"
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
      <v-card-text v-show="show">
        {{ event.description }}
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
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
<style scoped>
.cardContainer {
  background: #eaeaea;
  box-shadow: 2px -1px 7px 0 rgba(57, 204, 204, 1),
    -2px 3px 8px 0 rgba(34, 122, 122, 1);
}
</style>
