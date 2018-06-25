<template>
  <v-footer height="auto" class="footer">
    <v-container grid-list-xl>
      <v-layout 
        row 
        wrap 
        align-center 
        justify-space-between>
        <v-flex xs4 sm2>
          <GdgIcon />
        </v-flex>
        <v-flex xs5 class="text-xs-right">
          <a v-for="socialLink in socialLinks" :key="socialLink.icon" :href="socialLink.link">
            <img :src="require(`~/assets/images/${socialLink.icon}.svg`)" :alt="`icon-${socialLink.icon}`">
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
  })
};
</script>
