<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <transition
      name="slide"
      mode="out-in">
      <component :is="LayoutComponent" :key="LayoutComponent.name || LayoutComponent.__file">
        <transition name="slide" mode="out-in">
          <router-view :key="$route.fullPath"/>
        </transition>
      </component>
    </transition>
  </div>
</template>

<script>
import appConfig from '@src/app.config';
import Layout from '@layouts/main';

export default {
  components: { Layout },
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
