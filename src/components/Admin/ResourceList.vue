<template>
  <v-layout wrap justify-center>
    <v-flex>
      <div class="display-1 text-xs-center">
        {{ title }}
      </div>
    </v-flex>
    <v-flex xs12 v-if="cardView">
      <v-container fluid grid-list-xl>
        <v-layout wrap>
          <v-flex xs6 v-for="item in list" :key="item.id">
            <v-card light>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
              />

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">
                    {{ item.name }}
                  </h3>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">
                  Details
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
    <v-flex xs12 v-else>
      <v-card light class="mt-5">
        <div class="headline text-xs-center pa-3" v-if="listIsEmpty">
          No Data Available
        </div>
        <v-list else>
          <template v-for="(item, index) in list">
            <v-list-tile
              :key="item.id"
              avatar
            >
              <v-list-tile-content>
                <v-list-tile-title v-text="item.name" />
              </v-list-tile-content>
  
              <v-list-tile-action>
                <v-icon color="primary">edit</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider 
              v-if="index + 1 < list.length"
              :key="index"
            />
          </template>
        </v-list>
      </v-card>
    </v-flex>
    <div>
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="secondary"
        class="addBtn"
        :to="addHref"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    addHref: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    cardView: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listIsEmpty() {
      return this.list.length === 0;
    },
  },
};
</script>

<style lang="stylus" scoped>
.addBtn {
  right: 50px;
  bottom: 50px;
}
</style>
