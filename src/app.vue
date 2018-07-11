<script>
import appConfig from '@src/app.config';

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    },
  },
};
</script>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
@import '~nprogress/nprogress.css';

// #nprogress .bar {
//   background: $color-link-text;
// }
</style>
