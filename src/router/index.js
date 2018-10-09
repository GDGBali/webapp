import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import NProgress from 'nprogress/nprogress';
// import store from '@state/store';
import routes from './routes';
// import { IS_LOGGED_IN, SHOW_AUTH_DIALOG } from '@state/mutationTypes';

NProgress.configure({ showSpinner: false });

Vue.use(VueRouter);
Vue.use(VueMeta, {
  keyName: 'metaInfo',
});

const router = new VueRouter({
  routes,
  mode: 'history',
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((routeTo, routeFrom, next) => {
  // Check if auth is required on this route
  // (including nested routes).

  const authRequired = routeTo.matched.some(route => route.meta.authRequired);

  if (!authRequired) return next();

  // If auth is required and the user is NOT currently logged in, redirect.
  // redirectTo();

  // function redirectTo() {
  //   if (routeTo.name === 'event-register') {
  //     if (store.getters[`auth/${IS_LOGGED_IN}`]) {
  //       return next();
  //     }

  //     store.commit(SHOW_AUTH_DIALOG, {
  //       titleText: 'Please Login to Continue',
  //       redirectTo: routeTo,
  //     });
  //     return next({ name: 'event-details', params: routeTo.params });
  //   }
  // }
});

// After navigation is confirmed, but before resolving...
router.beforeResolve((routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  if (routeFrom.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
