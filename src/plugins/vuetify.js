import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VSelect,
  VCard,
  VDivider,
  VExpansionPanel,
  VSnackbar,
  VProgressCircular,
  VImg,
  transitions,
} from 'vuetify';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VSelect,
    VCard,
    VDivider,
    VExpansionPanel,
    VSnackbar,
    VProgressCircular,
    VImg,
    transitions,
  },
  theme: {
    primary: colors.teal.darken3,
    secondary: colors.orange.base,
    success: '#131A1F',
  },
});
