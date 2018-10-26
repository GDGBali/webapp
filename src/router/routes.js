import store from '@state/store';
import { getUserProfile } from '@api/apiRequest';
import { getRoles } from '@utils/ability';
import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '@state/mutationTypes';

const createAdminRoutes = (path, name, component, access = ['superAdmin']) => {
  console.log(access);
  return {
    path,
    name,
    component: () => import(`@views/${component}`),
    meta: {
      layout: require('@layouts/admin').default,
      authRequired: true,
      access,
    },
  };
};

const adminRoutes = [
  {
    ...createAdminRoutes('/kelian', '', 'admin/index', [
      'superAdmin',
      'admin',
      'volunteer',
    ]),
    beforeEnter: (to, from, next) => {
      const { currentUser } = store.state.auth;
      const userRole = getRoles(currentUser.rolesMask);
      const hasAccess = to.meta.access.some(access =>
        userRole.includes(access)
      );

      if (hasAccess) {
        return next();
      }

      store.commit(SHOW_SNACKBAR, {
        titleText: 'You are unauthorized, please contact us.',
        buttonText: 'dismiss',
        onClick: () => store.commit(HIDE_SNACKBAR),
      });

      return next(from);
    },
    children: [
      createAdminRoutes('events', 'adminEvents', 'admin/events/index'),
      createAdminRoutes('events/new', 'adminEventsNew', 'admin/events/new'),
      createAdminRoutes('venues', 'adminVenues', 'admin/venues/index'),
      createAdminRoutes('venues/new', 'adminVenuesNew', 'admin/venues/new'),
    ],
  },
];

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      lazyLoadView(import(/* webpackChunkName: "home" */ '@views/home')),
  },
  {
    path: '/events',
    name: 'events',
    component: () =>
      lazyLoadView(import(/* webpackChunkName: "events" */ '@views/events')),
  },
  {
    path: '/teams',
    name: 'teams',
    component: () =>
      lazyLoadView(import(/* webpackChunkName: "teams" */ '@views/teams')),
  },
  {
    path: '/tutorials',
    name: 'tutorials',
    component: () =>
      lazyLoadView(
        import(/* webpackChunkName: "tutorials" */ '@views/tutorials')
      ),
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: () =>
      lazyLoadView(
        import(/* webpackChunkName: "showcase" */ '@views/showcase')
      ),
  },
  {
    path: '/events/:slugUrl',
    name: 'event-details',
    component: () =>
      lazyLoadView(
        import(/* webpackChunkName: "event-details" */ '@views/event-details')
      ),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@views/profile'),
    meta: {
      authRequired: true,
    },
    beforeEnter: async (to, from, next) => {
      const userProfile = await getUserProfile();
      to.params.currentUser = userProfile.data;
      next();
    },
    props: route => ({ currentUser: route.params.currentUser }),
  },
  {
    path: '/404',
    name: '404',
    component: require('@views/404').default,
    // Allows props to be passed to the 404 page through route
    // params, such as `resource` to define what wasn't found.
    props: true,
  },
  {
    path: '*',
    redirect: '404',
  },
];

export default [...baseRoutes, ...adminRoutes];

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@views/loading').default,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@views/timeout').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children);
    },
  });
}
