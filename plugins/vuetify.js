import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VDivider,
  VTabs,
  VSelect,
  VExpansionPanel,
  transitions
} from 'vuetify';
import { Scroll } from 'vuetify/es5/directives';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VDivider,
    VTabs,
    VSelect,
    VExpansionPanel,
    transitions
  },
  directives: {
    Scroll
  },
  theme: {
    primary: colors.teal.base
  }
});
