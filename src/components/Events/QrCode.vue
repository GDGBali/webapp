<template>
  <div class="text-xs-center">
    <vue-qr 
      :bg-src="require('@assets/images/qrgdg.jpg')" 
      :text="qrString"
      :size="450"
      :dot-scale="0.5"
      :callback="setQrImg"
    />
    <div>
      <v-btn color="primary" download="gdgQrCode.png" :href="qrImg">
        download
      </v-btn>
    </div>
  </div>
</template>

<script>
const VueQr = () => import(/* webpackChunkName: "vue-qr" */ 'vue-qr');

export default {
  components: {
    VueQr,
  },
  props: {
    qrData: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    qrImg: '',
    qrString: '',
  }),
  mounted() {
    this.qrString = JSON.stringify(this.qrData);
  },
  methods: {
    setQrImg(dataUrl, id) {
      this.qrImg = dataUrl;
    },
  },
};
</script>
