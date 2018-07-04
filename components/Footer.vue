<template>
  <v-footer height="auto" class="footer">
    <v-container grid-list-xl>
      <v-layout>
        <v-flex xs7 sm3 md3>
          <v-select
            :items="localeItems"
            v-model="locale"
            solo
            @change="changeLocale"
          />
        </v-flex>
      </v-layout>
      <v-layout
        row 
        wrap 
        align-center 
        justify-space-between>
        <v-flex xs4 sm2>
          <GdgIcon />
        </v-flex>
        <v-flex xs12 class="text-xs-right">
          <a v-for="socialLink in socialLinks" :key="socialLink.icon" :href="socialLink.link">
            <img :src="require(`~/assets/icons/${socialLink.icon}.svg`)" :alt="`icon-${socialLink.icon}`">
          </a>
        </v-flex>
        <v-flex xs12>
          <div class="caption text-xs-right">
            Designed by Prabu Rangki.
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
import GdgIcon from '~/components/Icons/GdgIcon.vue';

export default {
  components: {
    GdgIcon
  },
  data: () => ({
    localeItems: [
      { value: 'id', text: 'Indonesia' },
      { value: 'en', text: 'English' }
    ],
    locale: 'id',
    socialLinks: [
      {
        link: 'https://www.meetup.com/GDG-Bali',
        icon: 'meetup'
      },
      {
        link: 'https://plus.google.com/107250991524800875957',
        icon: 'gplus'
      },
      {
        link: 'https://www.facebook.com/gdgbali/',
        icon: 'facebook'
      },
      {
        link: 'https://www.instagram.com/gdgbali/',
        icon: 'instagram'
      }
    ]
  }),
  mounted() {
    this.locale = this.$i18n.locale;
  },
  methods: {
    changeLocale(value) {
      this.$router.push(this.switchLocalePath(value));
    }
  }
};
</script>
