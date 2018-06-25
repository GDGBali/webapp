<template>
  <section>
    <v-container fill-height grid-list-xl>
      <v-layout row wrap justify-center>
        <v-flex text-xs-center xs12>
          <div 
            :class="textClass"
            class="product-sans"
          >What is GDG ?</div>
        </v-flex>
        <v-flex text-xs-center xs12 sm7>
          <div class="subheading">
            <div class="mb-5">
              Welcome to the
              <a href="https://developers.google.com/programs/community/gdg/" target="_blank">Google Developer Group (GDG)</a>, 
              a developer community who are interested in Google's developer technology everything from platforms to product APIs.
            </div>
            <div class="mb-5">
              GDG Bali is one of hundreds GDGs around the world that is not managed or owned but it is supported by Google.
              Together with the support of various partners, we organize free conferences,
              workshops and many other activities and opportunities to learn and get in touch with many professionals from all around Bali.
            </div>
          </div>
        </v-flex>
        <v-flex text-xs-center xs12>
          <div :class="textClass" class="product-sans">What do you do at GDG ?</div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/images/learn.svg" alt="">
          <div class="display-1 mb-1">Learn</div>
          <div class="subheading">
            Courses, workshops, bootcamps, conferences, codelabs, hackathons, tutorships and study resources for free use,
            easy access to external training events and certification exams.
          </div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/images/build.svg" alt="">
          <div class="display-1 mb-1">Build</div>
          <div class="subheading">
            Either you are a beginner or experienced developer,
            GDG is a good place to challenge yourself and try to develop or publish projects 
            by working and coordinating with other members of the community.
          </div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/images/share.svg" alt="">
          <div class="display-1 mb-1">Share</div>
          <div class="subheading">
            The GDG is a community of enthusiasts solely made up of and founded on volunteers. 
            Each opportunity that the GDG offers you is possible thanks to their work of sharing their projects and skills, 
            without any remuneration.
            Sharing all of this is definitely a great way to support the GDG and returning something to the community.
          </div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/images/connect.svg" alt="">
          <div class="display-1 mb-1">Connect</div>
          <div class="subheading">
            Taking part in our activities will allow you to meet, 
            talk and share your ideas and your work with many professionals and enthusiasts of the sector, 
            both local and internationally.
          </div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/images/organize.svg" alt="">
          <div class="display-1 mb-1">Organize</div>
          <div class="subheading">
            Sharing is not the only way to help the GDG. 
            The other way to contribute is to take part in the organizational activities of an event and other core activities of the community.
            This will improve your soft skills in communication and how to manage an event.
          </div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/images/fun.svg" alt="">
          <div class="display-1 mb-1">Have Fun</div>
          <div class="subheading">
            The GDG is a healthy environment for people who love humanity towards others and dynamism.
            In the GDG you will find girls and boys always ready to help you, courteous, friendly, humble and full of irony and joy,
            but also enterprising, proactive and disruptive ideas.
            In GDG it is basically easy to find good friends with whom to spend some formative and amusing moments.
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  computed: {
    textClass() {
      return this.$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3';
    }
  }
};
</script>
