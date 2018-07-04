<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <div class="text-xs-center mb-4">
          <h1 class="product-sans">Tutorials</h1>
          <i18n 
            path="tutorials.title" 
            tag="div" 
            class="body-2" 
            v-html="$t('tutorials.title')" />
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="text-xs-center mt-4">
          <h1 class="product-sans">Coming Soon</h1>
          <div class="body-2">
            We will finish this page soon.
          </div>
          <v-icon x-large>build</v-icon>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
