<template>
  <div class="qr">
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';

export default {
  name: 'QRCode',
  props: {
    link: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      value: this.link,
      size: 150,
      foreground: '#5CE1E6'
    };
  },
  components: {
    QrcodeVue
  }
};
</script>

<style scoped>
.qr {
  margin: 10px;
}
</style>
