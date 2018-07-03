<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="product-sans mb-5 text-xs-center">Events</h1>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div class="headline mb-0 product-sans">Google I/O 2018 Extended</div>
            <div class="body-1 mt-3">
              Google I/O is Google's annual developer conference, 
              where they share the latest products and technologies. 
              GDG Bali will bring the I/O experience here in Bali with 
              a series of talks and workshops to help professional and student developers deep dive in the
              new technologies announced during Google I/O 2018. 
              This is FREE, so please sign up early! 
            </div>
          </v-card-title>
          <v-card-actions class="justify-end">
            <v-btn to="/events/io18" color="primary">
              <v-icon left>info</v-icon>
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-title primary-title>
            <div class="headline mb-0 product-sans">DevFest 2018</div>
            <div class="body-1 mt-3">
              GDG DevFests are large, community-run events that can offer speaker
              sessions across multiple product areas, all-day hack-a-thons,
              codelabs, and more.
            </div>
          </v-card-title>
          <v-card-actions class="justify-end">
            <h2>Coming Soon</h2>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
