<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <Component :is="LayoutComponent" :key="LayoutComponent.name || LayoutComponent.__file">
      <Transition name="slide" mode="out-in" v-if="$route.path !== '/'">
        <router-view :key="$route.fullPath" />
      </Transition>
      <router-view :key="$route.fullPath" v-else />
    </Component>
  </div>
</template>

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
  computed: {
    LayoutComponent() {
      return (
        (this.$route.meta && this.$route.meta.layout) ||
        require('@layouts/main').default
      );
    },
  },
};
</script>

<style lang="scss">
@import '~nprogress/nprogress.css';

#nprogress .bar {
  background: #009688;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-leave-active {
  opacity: 0;
}

.slide-enter {
  transform: translateX(100%);
}
</style>
