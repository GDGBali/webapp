<template>
  <v-layout wrap justify-center>
    <v-flex>
      <div class="display-1 text-xs-center">
        Attendees
      </div>
    </v-flex>
    <v-flex xs12>
      <v-card light class="mt-5">
        <v-list>
          <template v-for="(item, index) in eventsList">
            <v-list-tile
              :key="item.id"
              avatar
            >
              <v-list-tile-content>
                <v-list-tile-title v-text="item.name" />
              </v-list-tile-content>
  
              <v-list-tile-action>
                <v-btn 
                  color="primary" 
                  class="px-3" 
                  :to="{ path: '/kelian/attendees/events', query: { id: item.id }}"
                >
                  Attendees
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider 
              v-if="index + 1 < eventsList.length"
              :key="index"
            />
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { setPageTitle } from '@utils/adminPage';

export default {
  components: {
    // ResourceList,
  },
  created() {
    setPageTitle(this, 'Attendees');
    this.$store.dispatch('admin/FETCH_EVENTS');
  },
  computed: {
    eventsList() {
      return this.$store.state.admin.events.list;
    },
  },
};
</script>
