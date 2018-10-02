<template>
  <div>
    <CoverImg :img-src="event.coverImgUrl" :name="event.name" />
    <v-container grid-list-xl>
      <v-layout wrap justify-center>
        <v-flex xs12 sm9>
          <v-layout wrap v-if="event.startsAt">
            <FabOrange icon="event">
              {{ event.startsAt | date }}
            </FabOrange>
            <FabOrange icon="directions" :href="event.venue.mapsUrl">
              {{ event.venue.name }}
            </FabOrange>
          </v-layout>
          <v-layout wrap v-else>
            <FabOrange icon="event" tbd>
              TBD
            </FabOrange>
            <FabOrange icon="directions" tbd>
              TBD
            </FabOrange>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <div v-html="event.description" class="description mt-5 subheading" />
        </v-flex>
        <template v-if="event.startsAt && event.meetupUrl">
          <v-flex 
            xs12 
            sm3 
            class="text-xs-center my-4"
          > 
            <v-btn 
              color="primary" 
              large 
              block 
              :href="event.meetupUrl"
              target="_blank"
            >
              join event
            </v-btn>
          </v-flex>
          <Schedule :starts-at="event.startsAt" :sessions="event.sessions" />
        </template>
        <v-expansion-panel popout class="my-5">
          <v-expansion-panel-content
            v-for="(note, i) in notes"
            :key="`note-${i}`"
          >
            <div slot="header" class="title product-sans">
              {{ note.category }}
            </div>
            <v-card>
              <v-card-text>
                <v-text-field
                  v-model="searchName"
                  label="Search"
                />
                <v-layout wrap class="mt-5">
                  <v-flex 
                    xs12 
                    sm6
                    md4
                    v-for="(community) in filteredCommunities" 
                    :key="community.id" 
                  >
                    <v-card light>
                      <v-img
                        class="lazyload"
                        :lazy-src="require('@assets/images/sangkep_blur.jpg')"
                        :src="community.logoUrl"
                        aspect-ratio="2.75"
                        contain
                      />
                      <div class="cardContainer">
                        <v-card-title primary-title>
                          <div class="body-2 white--text">
                            {{ community.name }}
                          </div>
                        </v-card-title>
                        <v-card-actions>
                          <v-spacer />
                          <img 
                            :src="icon" 
                            alt="" 
                            v-for="icon in mediaIcons" 
                            class="imgIcons"
                            :key="`${icon}`"
                          >
                        </v-card-actions>
                      </div>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import FabOrange from './FabOrange';
import CoverImg from './CoverImg';
import Schedule from './Schedule';

export default {
  components: {
    FabOrange,
    CoverImg,
    Schedule,
  },
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    searchName: '',
  }),
  computed: {
    notes() {
      return [
        {
          category: 'Komunitas yang Hadir',
          lists: [
            {
              name: 'Female Geek',
              logoUrl: '',
              mediaLinks: [
                {
                  name: 'facebook',
                  url: 'https://www.facebook.com/femalegeek/',
                },
                {
                  name: 'instagram',
                  url: 'femalegeek_id',
                },
                {
                  name: 'telegram',
                  url: 'https://t.me/femalegeek',
                },
              ],
            },
          ],
        },
        {
          category: 'Useful Resources',
        },
      ];
    },
    filteredCommunities() {
      return this.event.communities.filter(community =>
        community.name.toLowerCase().match(this.searchName.toLowerCase())
      );
    },
    mediaIcons() {
      return [
        require(`@assets/icons/telegram.svg`),
        require(`@assets/icons/facebook.svg`),
        require(`@assets/icons/instagram.svg`),
        require(`@assets/icons/meetup.svg`),
      ];
    },
  },
};
</script>

<style lang="stylus" scoped>
.description {
  max-width: 670px;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;

  >>> a {
    color: #00ffdf;
  }
}

.imgIcons {
  width: 24px;
  margin-right: 8px;
}

.cardContainer {
  background: #303c42;
}
</style>
