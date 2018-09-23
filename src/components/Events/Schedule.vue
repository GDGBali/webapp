<template>
  <v-flex xs12>
    <div 
      class="product-sans"
      :class="[isMobile ? 'display-1' : 'display-2']"
    >
      Schedule
    </div>
    <v-container fluid grid-list-xl>
      <v-layout
        v-for="item in schedules"
        :key="item.id"
        wrap
      >
        <v-flex 
          class="product-sans shrink"
          :class="[isMobile ? 'headline' : 'display-1']"
        >
          {{ item.beginsAt | beginsAt }}
        </v-flex>
        <v-flex>
          <v-layout 
            column 
            fill-height 
            justify-center
            class="ma-0"
            v-if="!item.isParallel"
          >
            <div class="title product-sans">
              {{ item.name }}
            </div>
            <div class="subheading mt-2" v-if="item.user">
              {{ item.user.fullName }}
            </div>
          </v-layout>
          <div 
            v-for="multi in item.items" 
            :key="multi.id" 
            class="mb-4" 
            v-else
          >
            <div class="title product-sans">
              {{ multi.title }}
            </div>
            <div class="subheading mt-2">
              {{ multi.speaker }}
            </div>
          </div>
        </v-flex>
        <v-flex xs12>
          <VDivider />
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import format from 'date-fns/format';

export default {
  props: {
    sessions: {
      type: Array,
      default: () => [],
    },
    startsAt: {
      type: String,
      default: '',
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    schedules() {
      const registration = {
        name: 'Registration',
        beginsAt: this.startsAt,
      };

      return [registration, ...this.sessions];
    },
  },
  filters: {
    beginsAt(value) {
      return format(value, 'HH:mm');
    },
  },
};
</script>
