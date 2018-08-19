import Vue from 'vue';
import attrchange from 'lazysizes/plugins/attrchange/ls.attrchange.min';
import unveilhooks from 'lazysizes/plugins/unveilhooks/ls.unveilhooks.min';
import bgset from 'lazysizes/plugins/bgset/ls.bgset.min';
import blurUp from 'lazysizes/plugins/blur-up/ls.blur-up.min';
import lazysizes from 'lazysizes';

Vue.use(lazysizes);
Vue.use(attrchange);
Vue.use(blurUp);
Vue.use(bgset);
Vue.use(unveilhooks);
