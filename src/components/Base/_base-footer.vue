<template>
  <VFooter height="auto" class="footer">
    <VContainer grid-list-xl fluid>
      <VLayout align-center>
        <VFlex xs7 sm3>
          <VSelect
            :items="localeItems"
            v-model="locale"
            solo
            hide-details
            @change="changeLocale({i18n: $i18n, locale})"
            aria-label="change language"
          />
        </VFlex>
        <VFlex
          xs5
          sm4
          offset-sm5
          md3
          offset-md6
        >
          <GdgIcon />
        </VFlex>
      </VLayout>
      <VLayout
        row
        wrap
        align-center
        justify-space-between
      >
        <VFlex xs12 class="text-xs-right">
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
        </VFlex>
        <VFlex xs12>
          <div class="caption text-xs-right">
            Designed & Develop by GDG Bali.
          </div>
        </VFlex>
      </VLayout>
    </VContainer>
  </VFooter>
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
