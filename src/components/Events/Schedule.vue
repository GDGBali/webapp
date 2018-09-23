<template>
  <v-flex xs12>
    <div 
      class="product-sans mb-5"
      :class="[isMobile ? 'display-1' : 'display-2']"
    >
      Schedule
    </div>
    
    <v-layout wrap>
      <v-flex
        v-for="item in schedules"
        :key="item.id"
        xs12
        class="mt-5"
      >
        <v-layout wrap>
          <v-flex
            xs1
            class="product-sans "
            :class="[isMobile ? 'headline' : 'display-1']"
          >
            <span>
              {{ item.hours }}
            </span>
            <span class="subheading">
              {{ item.minutes }}
            </span>
          </v-flex>
          <v-flex xs11 class="coba pa-4">
            <v-layout 
              column 
              fill-height
              v-if="!item.isParallel"
              justify-space-between
            >
              <div class="title product-sans mb-3">
                {{ item.name }}
              </div>
              <div class="subheading mb-auto">
                {{ item.duration }} minutes
              </div>
              <div class="subheading" v-if="item.user">
                <v-avatar>
                  <img src="https://i2.wp.com/drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg" alt="">
                </v-avatar>
                <span class="ml-3">
                  {{ item.user.fullName }}
                </span>
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
              <div class="subheading mt-5">
                {{ multi.speaker }}
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
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
        id: 'registration',
        name: 'Registration',
        beginsAt: this.startsAt,
        duration: 60,
      };

      const sessions = [registration, ...this.sessions].map(
        ({ beginsAt, ...rest }) => {
          return {
            ...rest,
            hours: format(beginsAt, 'HH'),
            minutes: format(beginsAt, 'mm'),
          };
        }
      );

      return sessions;
    },
    scheduleTimes() {
      return this.schedules.map(({ id, beginsAt }) => {
        return {
          id: `time-${id}`,
          hours: format(beginsAt, 'HH'),
          minutes: format(beginsAt, 'mm'),
        };
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.coba {
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 2px -1px 7px 0 rgba(57, 204, 204, 1), -2px 3px 8px 0 rgba(34, 122, 122, 1);
}
</style>
