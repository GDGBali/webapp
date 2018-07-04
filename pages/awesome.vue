<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="text-xs-center mb-4">
          <img src="~/assets/icons/awesome.svg" alt="" width="500">
          <h1 class="product-sans">Awesomeness!</h1>
          <div class="body-2">
            Here you can find amazing frameworks, libraries or modules.
            <br>
            You can also find some examples for each awesomeness.
            <br>
            This list is incomplete, we will add more awesomeness soon.
            <br><br>
            Credit goes to <a href="https://github.com/sindresorhus" target="_blank">sindresorhus</a>
          </div>
        </div>
        <v-card>
          <v-card-title>
            <div class="headline product-sans mx-auto">Awesome Lists</div>
          </v-card-title>
          <v-expansion-panel popout>
            <v-expansion-panel-content
              v-for="(awesome, i) in awesomeness"
              :key="`awesome-${i}`"
            >
              <div slot="header" class="title product-sans">{{ awesome.category }}</div>
              <v-card>
                <v-card-text>
                  <v-list>
                    <template v-for="(item, i2) in awesome.lists">
                      <v-list-tile :key="`item-${i2}`">
                        <v-list-tile-action>
                          <v-icon color="grey lighten-1">
                            locked
                          </v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title v-text="item" />
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider 
                        v-if="i2 + 1 < awesome.lists.length"
                        :key="`divider-${i2}`" />
                    </template>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { awesomeness } from '~/data/awesomeness';
export default {
  data() {
    return {
      active: null,
      awesomeness
    };
  }
};
</script>
