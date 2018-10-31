<template>
  <v-card>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <div 
            class="product-sans mb-5"
            :class="[isMobile ? 'display-1' : 'display-2']"
          >
            Schedule
          </div>
          
          <v-layout wrap v-if="sessions.length !== 0">
            <v-flex
              v-for="session in schedules"
              :key="session.id"
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
                    {{ session.hours }}
                  </span>
                  <span class="subheading">
                    {{ session.minutes }}
                  </span>
                </v-flex>
                <v-flex
                  class="subSession pa-4" 
                  v-for="(subSession) in session.subSessions" 
                  :key="subSession.id"
                >
                  <v-layout 
                    column 
                    fill-height
                    justify-space-between
                  >
                    <div class="title product-sans mb-3">
                      {{ subSession.name }}
                    </div>
                    <div class="subheading mb-auto">
                      {{ subSession.duration }} minutes
                    </div>
                    <div class="subheading" v-if="subSession.users">
                      <div v-for="user in subSession.users" :key="`user-${user.id}`">
                        <v-avatar>
                          <img :src="userAvatar(user.avatarUrl)" alt="">
                        </v-avatar>
                        <span class="ml-3">
                          {{ user.name }}
                        </span>
                      </div>
                    </div>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout v-else>
            <div :class="[isMobile ? 'display-1' : 'display-2']">
              TBA
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import formatDate from '@utils/formatDate';

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
  methods: {
    userAvatar(imgSrc) {
      return (
        imgSrc ||
        'https://i2.wp.com/drogaspoliticacultura.net/wp-content/uploads/2017/09/placeholder-user.jpg'
      );
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    schedules() {
      const formattedDate = formatDate(this.startsAt);

      const registration = {
        id: 'registration',
        hours: formattedDate.hours,
        minutes: formattedDate.minutes,
        subSessions: [
          {
            name: 'Registration',
            duration: 60,
          },
        ],
      };

      return [registration, ...this.sessions];
    },
  },
};
</script>

<style lang="stylus" scoped>
.subSession {
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 2px -1px 7px 0 rgba(57, 204, 204, 1), -2px 3px 8px 0 rgba(34, 122, 122, 1);
}
</style>
