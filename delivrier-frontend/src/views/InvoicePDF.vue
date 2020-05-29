<template>
  <div>
    <v-btn class="button" color="success" @click="generateReport"
      >Download Invoice</v-btn
    >
    <Invoice :tracking="tracking" />
    <vue-html2pdf
      :show-layout="false"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      filename="invoice"
      :pdf-quality="2"
      pdf-format="letter"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <!-- PDF Content Here -->
        <Invoice :tracking="tracking" />
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf';
import Invoice from '../components/Invoice';

export default {
  name: 'InvoicePDF',
  props: ['tracking', 'sendEmail'],
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    hasGenerated(blobPdf) {
      var formData = new FormData();
      formData.append('file', blobPdf, 'invoice');
      console.log('ESTE ES EL FORM DATA: ', formData.get);
      if (this.sendEmail === 'send') this.sendPDF(formData);
    },
    async sendPDF(pdf) {
      await this.$store.dispatch('users/pdf', pdf);
    }
  },
  components: {
    VueHtml2pdf,
    Invoice
  },
  async mounted() {
    // this.generateReport();

    let errorMessage = '';
    await this.$store.dispatch('users/tracking', this.data_trackingNumber);
    errorMessage = this.$store.getters['users/getError'].error;
    if (errorMessage !== '') console.log(errorMessage);
  }
};
</script>

<style>
.button {
  margin: 40px;
}
</style>
