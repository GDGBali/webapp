<template>
  <v-footer height="auto" class="footer">
    <v-container grid-list-xl fluid>
      <v-layout align-center wrap>
        <v-flex
          xs4
          md2
        >
          <GdgIcon />
        </v-flex>
        <v-flex xs8 md10>
          <v-layout
            row
            wrap
            align-center
            justify-space-between
          >
            <v-flex xs12 class="text-xs-right">
              <a
                v-for="socialLink in socialLinks"
                :key="socialLink.icon"
                :href="socialLink.link"
              >
                <img
                  class="lazyload"
                  :data-src="require(`@assets/icons/${socialLink.icon}.svg`)"
                  :alt="`icon-${socialLink.icon}`"
                >
              </a>
            </v-flex>
            <v-flex xs12>
              <div class="caption text-xs-right">
                Designed & Develop by GDG Bali.
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
import GdgIcon from '@components/GdgIcon';
import { mapActions } from 'vuex';

export default {
  components: {
    GdgIcon,
  },
  data() {
    return {
      localeItems: [
        { value: 'id', text: 'Indonesia' },
        { value: 'en', text: 'English' },
      ],
      locale: 'id',
      socialLinks: [
        {
          link: 'https://www.meetup.com/GDG-Bali',
          icon: 'meetup',
        },
        {
          link: 'https://plus.google.com/107250991524800875957',
          icon: 'gplus',
        },
        {
          link: 'https://www.facebook.com/groups/gdgbali/',
          icon: 'facebook',
        },
        {
          link: 'https://www.instagram.com/gdgbali/',
          icon: 'instagram',
        },
      ],
    };
  },
  mounted() {
    this.locale = this.$i18n.locale;
  },
  methods: {
    ...mapActions(['changeLocale']),
  },
};
</script>
