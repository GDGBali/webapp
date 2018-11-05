<template>
  <v-container grid-list-xl>
    <v-layout wrap justify-center>
      <v-flex shrink v-if="isRequesting">
        <v-progress-circular
          :size="60"
          :width="6"
          color="primary"
          indeterminate
        />
      </v-flex>
      <template v-else-if="event">
        <v-flex xs12>
          <div class="product-sans display-2 white--text">
            {{ $t('events.next') }}
          </div>
        </v-flex>
        <v-flex xs12>
          <v-card class="pa-3 cardContainer">
            <v-card-title primary-title>
              <div class="headline mb-0 product-sans">
                {{ event.name }}
              </div>
            </v-card-title>
            <v-layout wrap>
              <v-flex xs12>
                <EventCardDetails :event="event" />
              </v-flex>
            </v-layout>
            <v-card-actions class="justify-end">
              <v-btn :to="`/events/${event.slugUrl}`" color="primary">
                <v-icon left>info</v-icon>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import EventCardDetails from '@components/Events/EventCardDetails';
import { FETCH_MULTI_EVENT } from '@state/networkTypes';
import { mapGetters } from 'vuex';

export default {
  components: {
    EventCardDetails,
  },
  created() {
    this.$store.dispatch(FETCH_MULTI_EVENT, { startsAt: 'future' });
  },
  computed: {
    ...mapGetters({
      event: 'nextEvent',
    }),
    isRequesting() {
      return this.$store.state.events.isRequesting;
    },
  },
};
</script>

<style lang="stylus" scoped>
.cardContainer {
  box-shadow: 2px -1px 7px 0 rgba(57, 204, 204, 1), -2px 3px 8px 0 rgba(34, 122, 122, 1);
}
</style>
