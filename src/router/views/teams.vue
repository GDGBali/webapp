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
                      :src="require(`@assets/icons/${social.id}.svg`)"
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
    <section>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm7>
            <div class="display-1 product-sans text-xs-center mb-4">
              Join Us
            </div>
            <div class="subheading text-xs-center">
              Life is not about accumulation, it is about contribution.
              <br>
              <br>
              Sudah saatnya kamu ikut berkontribusi menjadi bagian dari Google Developer Group Bali! 
              Jika kamu mempunyai visi untuk ikut mengembangkan ekosistem developer di Bali, 
              mari ikut bersama kami dengan menjadi bagian dari pergerakan ini!
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <SubmissionDialog
      form-title="Team Submission"
      button-text="Join Us"
      dialog-title="Join Our Team!"
      submission-type="teams"
      reasons-text="Alasan ingin bergabung"
    />
  </div>
</template>

<script>
import SubmissionDialog from '@components/Submissions/Dialog';
import appConfig from '@src/app.config';
import teams from '@src/data/teams';

export default {
  metaInfo: {
    title: 'Team',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    SubmissionDialog,
  },
  data: () => ({
    teams: teams,
  }),
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
