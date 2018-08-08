<template>
  <section 
    class="lazyload bgImage" 
    :data-bgset="imgSrc"
    :data-bg="require('@assets/images/hero.webp')"
    data-sizes="auto"
    :id="imgName">
    <slot/>
  </section>
</template>

<script>
const reqImg = (imgName, ext) => require(`@assets/images/${imgName}.${ext}`);

export default {
  props: {
    imgName: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    imgSrc: '',
  }),
  mounted() {
    const { imgName } = this;
    this.$el.style.backgroundImage = reqImg(`${imgName}_blur`, 'jpg');
    this.imgSrc = `${reqImg(imgName, 'webp')} [type: image/webp] | ${reqImg(
      imgName,
      'jpg'
    )}`;
  },
};
</script>

<style scoped>
.bgImage {
  background-color: #008080;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
