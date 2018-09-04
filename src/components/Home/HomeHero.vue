<template>
  <BaseLazyBg img-name="hero">
    <div class="heroOverlay" />
    <VContainer fill-height class="heroContent">
      <VLayout align-center>
        <VFlex xs12>
          <VContainer>
            <VLayout
              row
              wrap
              justify-center
              align-center
            >
              <VFlex xs12 sm8 text-xs-center>
                <GdgIcon id-attr="hero" />
              </VFlex>
              <VFlex xs12 text-xs-center>
                <div class="mt-5">
                  <VBtn to="/events" class="primary--text">
                    <VIcon left>
                      local_activity
                    </VIcon>
                    Events
                  </VBtn>
                </div>
              </VFlex>
            </VLayout>
          </VContainer>
        </VFlex>
      </VLayout>
    </VContainer>
  </BaseLazyBg>
</template>

<script>
import GdgIcon from '@components/GdgIcon';

export default {
  components: {
    GdgIcon,
  },
  computed: {
    event() {
      return this.$store.state.events.latestEvent;
    },
  },
};
</script>


<style lang="scss" scoped>
@media (min-height: 500px) {
  #hero {
    height: calc(100% + 57px) !important;
    max-height: calc(100vh + 1px);
  }
}

@media (min-width: 812px) {
  #hero {
    height: calc(100% + 65px);
  }
}

#hero {
  position: relative;
  min-height: 100vh;
  background-image: url('~@assets/images/hero_blur.jpg');
}

.heroContent {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}

.heroOverlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
