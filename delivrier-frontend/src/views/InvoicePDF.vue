<template>
  <div>
    <v-btn class="button" color="success" @click="generateReport"
      >Download Invoice</v-btn
    >
    <Invoice v-if="trackingURL !== undefined" :tracking="trackingURL" />
    <Invoice v-if="trackingProps !== undefined" :tracking="trackingProps" />
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
        <Invoice v-if="trackingURL !== undefined" :tracking="trackingURL" />
        <Invoice v-if="trackingProps !== undefined" :tracking="trackingProps" />
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf';
import Invoice from '../components/Invoice';

export default {
  name: 'InvoicePDF',
  props: {
    trackingURL: {
      type: String,
      required: false
    },
    sendEmail: {
      type: String,
      required: false
    },
    trackingProps: {
      type: String,
      required: false
    }
  },
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
  }
};
</script>

<style>
.button {
  margin: 40px;
}
</style>
