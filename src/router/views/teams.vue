<template>
  <div>
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-1 product-sans text-xs-center mb-4">
            Core Team
          </div>
        </v-flex>
        <v-flex 
          xs12 
          sm4 
          v-for="person in teams" 
          :key="person.name"
          class="my-5"
        >
          <v-layout>
            <v-avatar
              size="128"
            >
              <v-img
                :src="person.imgUrl"
                aspect-ratio="1"
                class="primary"
              />
            </v-avatar>
            <v-layout column justify-space-around class="ml-3">
              <div class="product-sans headline">
                {{ person.name }}
              </div>
              <div class="d-flex">
                <div class="socialIcon" v-for="social in person.socials" :key="`${person.name}-${social.id}`">
                  <a :href="social.url" target="_blank">
                    <img
                      :data-src="require(`@assets/icons/${social.id}.svg`)"
                    >
                  </a>
                </div>
              </div>
            </v-layout>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="text-xs-center">
      <hr class="divider">
    </div>
    <section id="volunteers">
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm7>
            <div class="display-1 product-sans text-xs-center mb-4">
              Volunteers
            </div>
            <div class="subheading text-xs-center">
              Life is not accumulation, it is about contribution.
              <br>
              <br>
              Sudah saatnya kamu ikut berkontribusi menjadi bagian dari Google Developer Group Bali! 
              Jika kamu mempunyai visi untuk ikut mengembangkan ekosistem developer di Bali, mari ikut bersama kami menjadi relawan dalam event - event GDG Bali selanjutnya!
            </div>
            <div class="mt-5 text-xs-center">
              <v-btn color="primary" large @click="registerEvent">
                Join as a volunteer
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <RegisterDialog :register-dialog.sync="registerDialog" />
  </div>
</template>

<script>
import RegisterDialog from '@components/Teams/RegisterDialog';
import appConfig from '@src/app.config';
import teams from '@src/data/teams';
import { IS_LOGGED_IN, SHOW_AUTH_DIALOG } from '@state/mutationTypes';

export default {
  metaInfo: {
    title: 'Team',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    RegisterDialog,
  },
  data: () => ({
    teams: teams,
    registerDialog: false,
  }),
  mounted() {
    const { hash } = this.$route;

    if (hash) {
      const el = document.getElementById('volunteers');
      setTimeout(() => {
        window.scrollTo(0, el.offsetTop);
      }, 500);
    }
  },
  methods: {
    registerEvent() {
      const isLoggedIn = this.$store.getters[`auth/${IS_LOGGED_IN}`];
      const nextRoute = {
        name: 'teams',
      };
      if (isLoggedIn) {
        this.registerDialog = true;
      } else {
        this.$store.commit(SHOW_AUTH_DIALOG, {
          titleText: 'Please Login to Continue',
          redirectTo: nextRoute,
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.divider {
  width: 60px;
  height: 8px;
  margin: 35px auto;
  background: #009688;
  border: none;
  border-radius: 10px;
}

.socialIcon {
  max-width: 40px;
  height: 40px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
