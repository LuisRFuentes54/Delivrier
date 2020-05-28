<template>
  <section class="contenedor">
    <section class="pdf-item header">
      <section class="pdf-item image">
        <img width="40px" src="../assets/delivrier-logo-only.png" />
      </section>
      <section class="pdf-item title">
        <h1 class="big-h1">DELIVRIER</h1>
      </section>
    </section>
    <section class="pdf-item tracking-number">
      Tracking number
      <p class="lil">{{ data_trackingNumber }}</p>
    </section>
    <section class="pdf-item invoice-date">
      Invoice date
      <p class="lil">{{ today }}</p>
    </section>
    <section class="pdf-item invoice-number">
      Invoice number
      <p class="lil">{{ invoiceNumber }}</p>
    </section>
    <section class="pdf-item shipper-name">
      Shipper name
      <p class="lil">{{ shipperName }}</p>
    </section>
    <section class="pdf-item recipient-name">
      Recipient name
      <p class="lil">{{ recipientName }}</p>
    </section>
    <section class="pdf-item start-address">
      Start address
      <p class="lil-Address">{{ data_startAddress }}</p>
    </section>
    <section class="pdf-item end-address">
      End Address
      <p class="lil-Address">{{ data_endAddress }}</p>
    </section>
    <section class="pdf-item office-name">
      Office name
      <p class="lil">{{ data_startOfficeName }}</p>
    </section>
    <section class="pdf-item shipper-zip">
      Zip
      <p class="lil">{{ data_startZip }}</p>
    </section>
    <section class="pdf-item recipient-zip">
      Zip
      <p class="lil">{{ data_endZip }}</p>
    </section>
    <section class="pdf-item shipper-email">
      Shipper email
      <p class="lil">{{ data_personClient_email }}</p>
    </section>
    <section class="pdf-item shipper-phone">
      Shipper phone
      <p class="lil">{{ data_personClient_phone }}</p>
    </section>
    <section class="pdf-item shipper-id">
      Shipper ID
      <p class="lil">{{ data_personClient_ID }}</p>
    </section>
    <section class="pdf-item recipient-email">
      Recipient email
      <p class="lil">{{ data_personDestinatary_email }}</p>
    </section>
    <section class="pdf-item recipient-phone">
      Recipient phone
      <p class="lil">{{ data_personDestinatary_phone }}</p>
    </section>
    <section class="pdf-item shipping-type">
      Shipping type
      <p class="lil">{{ data_shippingType }}</p>
    </section>
    <section class="pdf-item insurance">
      Insurance
      <p class="lil">{{ data_insurance }}</p>
    </section>
    <section class="pdf-item packages-number">
      Packages Number
      <p class="lil">{{ data_packages.length }}</p>
    </section>
    <section class="pdf-item packs">
      <p class="complete">Packs</p>
    </section>

    <section class="pdf-item pack-description-container title">
      <section class="pdf-item pack-description-title">
        <p class="complete">Full description of each item</p>
      </section>
      <section class="pdf-item pack-quantity-title">
        <p class="complete">Quantity</p>
      </section>
      <section class="pdf-item pack-packing-title">
        <p class="complete">Packing</p>
      </section>
      <section class="pdf-item pack-weight-title">
        <p class="complete">Weight</p>
      </section>
    </section>

    <section class="complete pack-description-body">
      <ul>
        <li class="complete list" v-for="pack in data_packages" :key="pack.id">
          <section class="pdf-item pack-description">
            <p class="complete">{{ pack.description }}</p>
          </section>
          <section class="pdf-item pack-quantity">
            <p class="complete">{{ pack.paramsPack[0].value }}</p>
          </section>
          <section class="pdf-item pack-packing">
            <p class="complete" v-if="pack.packing === null">No aplica</p>
            <p class="complete" v-else>{{ pack.packing.name }}</p>
          </section>
          <section class="pdf-item pack-weight">
            <p class="complete">
              {{
                pack.paramsPack[1].value + ' ' + pack.paramsPack[1].param.unit
              }}
            </p>
          </section>
        </li>
      </ul>
    </section>

    <section class="pdf-item sub-total">
      <p class="complete-lil">Sub-Total</p>
    </section>

    <section class="pdf-item insurance-cost">
      <p class="complete-lil">Insurance Cost</p>
    </section>
    <section class="pdf-item shipping-cost">
      <p class="complete-lil">Shipping Cost</p>
    </section>
    <section class="pdf-item total">
      <p class="complete-lil">Total Invoice Value</p>
    </section>
    <section class="pdf-item sub-total-number">
      <p class="complete-number">{{ subTotal }}</p>
    </section>

    <section class="pdf-item insurance-cost-number">
      <p class="complete-number">{{ '$' + parseInt(data_insuranceCost) }}</p>
    </section>
    <section class="pdf-item shipping-cost-number">
      <p class="complete-number">{{ '$' + parseInt(data_shippingCost) }}</p>
    </section>
    <section class="pdf-item total-number">
      <p class="complete-number">{{ '$' + total }}</p>
    </section>
    <section class="pdf-item qr-code"></section>
  </section>
</template>

<script>
export default {
  name: 'Invoice',
  props: {
    tracking: {
      type: String,
      required: false
    },
    trackingNumber: {
      type: Number,
      required: false
    },
    personClient_firstName: {
      type: String,
      required: false
    },
    personClient_secondName: {
      type: String,
      required: false
    },
    personClient_firstLastName: {
      type: String,
      required: false
    },
    personClient_SecondLastName: {
      type: String,
      required: false
    },
    personClient_email: {
      type: String,
      required: false
    },
    personClient_phone: {
      type: Number,
      required: false
    },
    personClient_ID: {
      type: Number,
      required: false
    },
    personDestinatary_firstName: {
      type: String,
      required: false
    },
    personDestinatary_secondName: {
      type: String,
      required: false
    },
    personDestinatary_firstLastName: {
      type: String,
      required: false
    },
    personDestinatary_SecondLastName: {
      type: String,
      required: false
    },
    personDestinatary_email: {
      type: String,
      required: false
    },
    personDestinatary_phone: {
      type: Number,
      required: false
    },
    startAddress: {
      type: String,
      required: false
    },
    startOfficeName: {
      type: String,
      required: false
    },
    startZip: {
      type: Number,
      required: false
    },
    endAddress: {
      type: String,
      required: false
    },
    endZip: {
      type: Number,
      required: false
    },
    shippingType: {
      type: String,
      required: false
    },
    shippingCost: {
      type: String,
      required: false
    },
    insurance: {
      type: Object,
      required: false
    },
    insuranceCost: {
      type: Object,
      required: false
    },
    packages: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      info: {},
      today: '',
      invoiceNumber: 0,

      data_trackingNumber: '',
      data_personClient_firstName: '',
      data_personClient_secondName: '',
      data_personClient_firstLastName: '',
      data_personClient_secondLastName: '',
      data_personClient_email: '',
      data_personClient_phone: '',
      data_personClient_ID: '',
      data_personDestinatary_firstName: '',
      data_personDestinatary_secondName: '',
      data_personDestinatary_firstLastName: '',
      data_personDestinatary_SecondLastName: '',
      data_personDestinatary_email: '',
      data_personDestinatary_phone: '',
      data_startAddress: '',
      data_startOfficeName: '',
      data_startZip: '',
      data_endAddress: '',
      data_endZip: '',
      data_shippingType: '',
      data_shippingCost: '',
      data_insurance: '',
      data_insuranceCost: '',
      data_packages: '',

      data_subTotal: 0,
      data_Total: 0
    };
  },
  async mounted() {
    let errorMessage = '';
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let random = Math.floor(Math.random() * 999 + 1);

    this.today = mm + '/' + dd + '/' + yyyy;
    if (this.personClient_firstName !== undefined) {
      //se hace con props

      this.data_trackingNumber = this.tracking;
      this.invoiceNumber = this.trackingNumber + random;

      this.data_personClient_firstName = this.personClient_firstName;
      this.data_personClient_secondName = this.personClient_secondName;
      this.data_personClient_firstLastName = this.personClient_firstLastName;
      this.data_personClient_secondLastName = this.personClient_SecondLastName;
      this.data_personClient_email = this.personClient_email;
      this.data_personClient_phone = this.personClient_phone;
      this.data_personClient_ID = this.personClient_ID;
      this.data_personDestinatary_firstName = this.personDestinatary_firstName;
      this.data_personDestinatary_secondName = this.personDestinatary_secondName;
      this.data_personDestinatary_firstLastName = this.personDestinatary_firstLastName;
      this.data_personDestinatary_secondLastName = this.personDestinatary_SecondLastName;
      this.data_personDestinatary_email = this.personDestinatary_email;
      this.data_personDestinatary_phone = this.personDestinatary_phone;
      this.data_startAddress = this.startAddress;
      this.data_startOfficeName = this.startOfficeName;
      this.data_startZip = this.startZip;
      this.data_endAddress = this.endAddress;
      this.data_endZip = this.endZip;
      this.data_shippingType = this.shippingType;
      this.data_shippingCost = this.shippingCost;
      this.data_insurance = this.insurance;
      this.data_insuranceCost = this.insuranceCost;
      this.data_packages = this.packages;
    } else {
      this.data_trackingNumber = parseInt(this.tracking);

      await this.$store.dispatch('users/tracking', this.data_trackingNumber);
      errorMessage = this.$store.getters['users/getError'].error;
      this.info = this.$store.getters['users/getTrackingInfo'];
      if (this.info !== null) {
        this.invoiceNumber = this.tracking + random;

        this.data_personClient_firstName = this.info.user.personClient.firstName;
        this.data_personClient_secondName = this.info.user.personClient.secondName;
        this.data_personClient_firstLastName = this.info.user.personClient.firstLastName;
        this.data_personClient_secondLastName = this.info.user.personClient.secondLastName;
        this.data_personClient_email = this.info.user.personClient.email;
        this.data_personClient_phone = this.info.user.personClient.phoneNumber;
        this.data_personClient_ID = this.info.user.personClient.identNum;
        this.data_personDestinatary_firstName = this.info.personDestinatary.firstName;
        this.data_personDestinatary_secondName = this.info.personDestinatary.secondName;
        this.data_personDestinatary_firstLastName = this.info.personDestinatary.firstLastName;
        this.data_personDestinatary_secondLastName = this.info.personDestinatary.secondLastName;
        this.data_personDestinatary_email = this.info.personDestinatary.email;
        this.data_personDestinatary_phone = this.info.personDestinatary.phoneNumber;
        this.data_startAddress = this.info.roads[0].endingPlace.address;
        this.data_startOfficeName = this.info.roads[0].initialOffice.name;
        this.data_startZip = this.info.roads[0].initialOffice.place.zip;
        this.data_endAddress = this.info.roads[
          this.info.roads.length - 1
        ].endingPlace.address;
        this.data_endZip = this.info.roads[
          this.info.roads.length - 1
        ].initialPlace.zip;
        this.data_shippingType = this.info.shippingType.name;
        this.data_shippingCost = this.info.shippingType.baseFare;
        this.data_insurance = this.info.insurance.name;
        this.data_insuranceCost = this.info.insurance.baseFare;
        // OJO VIENE MUY DESORDENADO DEL BACKEND, CUIDADO AL USARSE SE CONFUNDEN
        this.data_packages = this.info.packs;
      }
      if (errorMessage !== '') console.log(errorMessage);
    }
  },
  methods: {
    packagePrice(pack, shippingCost) {
      // formula
      let TP = 0;
      if (typeof shippingCost === 'string') TP = parseInt(shippingCost);
      else if (typeof shippingCost === 'number') TP = shippingCost;
      let C = pack.paramsPack[0].value;
      let P = pack.paramsPack[1].value;
      let PA = 0;
      if (pack.packing !== null) PA = parseInt(pack.packing.price);

      // prettier-ignore
      return (TP + (TP * (C * P))) + PA;
    },
    subTotalPrice() {
      let suma = 0;

      for (var prop in this.data_packages) {
        suma += this.packagePrice(
          this.data_packages[prop],
          this.data_shippingCost
        );
      }

      this.data_subTotal = suma;
      return suma;
    }
  },
  computed: {
    shipperName() {
      return (
        this.data_personClient_firstName +
        ' ' +
        this.data_personClient_secondName +
        ' ' +
        this.data_personClient_firstLastName +
        ' ' +
        this.data_personClient_secondLastName
      );
    },
    recipientName() {
      return (
        this.data_personDestinatary_firstName +
        ' ' +
        this.data_personDestinatary_secondName +
        ' ' +
        this.data_personDestinatary_firstLastName +
        ' ' +
        this.data_personDestinatary_secondLastName
      );
    },
    subTotal() {
      return '$' + this.subTotalPrice();
    },
    total() {
      let iCost = 0;
      if (typeof this.data_insuranceCost === 'string')
        iCost = parseInt(this.data_insuranceCost);
      else if (typeof this.data_insuranceCost === 'number')
        iCost = this.data_insuranceCost;
      return this.data_subTotal + iCost;
    }
  }
};
</script>

<style>
.contenedor {
  border: 1px solid black;
  width: 90%;
  max-width: 1000px;
  margin: 50px auto;
  line-height: 30px;
  font-family: Arial, Helvetica, sans-serif;

  display: grid;
  grid-gap: 0px;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(13, auto);

  grid-template-areas:
    'header        header      header   header        header      header'
    'tracking-number    tracking-number     invoice-date    invoice-date   invoice-number   invoice-number'
    'shipper-name   shipper-name    shipper-name    recipient-name  recipient-name  recipient-name'
    'start-address   start-address    start-address    end-address  end-address  end-address'
    'office-name   office-name    shipper-zip    recipient-zip  recipient-zip  recipient-zip'
    'shipper-email   shipper-phone    shipper-id    recipient-email  recipient-email  recipient-phone'
    'shipping-type   insurance    insurance    packages-number  packages-number  packages-number'
    'packs   packs    packs    packs  packs  packs'
    'pack-description-container   pack-description-container    pack-description-container    pack-description-container  pack-description-container  pack-description-container'
    'pack-description-body   pack-description-body    pack-description-body    pack-description-body  pack-description-body  pack-description-body'
    'qr-code   qr-code    shipping-cost    shipping-cost  shipping-cost-number  shipping-cost-number'
    'qr-code   qr-code    sub-total    sub-total  sub-total-number  sub-total-number'
    'qr-code   qr-code    insurance-cost    insurance-cost  insurance-cost-number  insurance-cost-number'
    'qr-code   qr-code    total    total  total-number  total-number';
}

.header {
  width: 100%;
  line-height: 30px;

  display: grid;
  grid-gap: 20px;

  grid-template-columns: 1fr 16fr;
  grid-template-rows: repeat(1, auto);

  grid-template-areas: 'image        title';
}

ul {
  padding: 0px !important;
  list-style-position: inside !important;
}

.title {
  width: 100%;
  line-height: 30px;

  display: grid;
  grid-gap: 0px;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, auto);

  grid-template-areas: 'pack-description-title   pack-description-title    pack-description-title    pack-quantity-title  pack-packing-title  pack-weight-title';
}

.list {
  width: 100%;
  line-height: 30px;

  display: grid;
  grid-gap: 0px;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, auto);

  grid-template-areas: 'pack-description  pack-description  pack-description  pack-quantity  pack-packing pack-weight';
}

.header .image {
  grid-area: image;
  display: flex;
  align-items: center;
}

.header .title {
  grid-area: title;
  display: flex;
  align-items: center;
}

.contenedor .header {
  grid-area: header;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(1, 84, 166, 1) 100%
  );
  color: white;
  padding: 10px;
}

.lil {
  width: 100%;
  height: 15px;
  font-size: 18px;
  padding: 0px;
  margin: 0px !important;
  text-align: center;
  line-height: 0px;
}

.contenedor .tracking-number {
  border: 1px solid black;
  grid-area: tracking-number;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .invoice-date {
  border: 1px solid black;
  grid-area: invoice-date;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .invoice-number {
  border: 1px solid black;
  grid-area: invoice-number;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .shipper-name {
  border: 1px solid black;
  grid-area: shipper-name;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .recipient-name {
  border: 1px solid black;
  grid-area: recipient-name;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .start-address {
  border: 1px solid black;
  grid-area: start-address;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.lil-Address {
  width: 100%;
  height: 15px;
  font-size: 15px;
  padding: 0px;
  margin: 0px !important;
  text-align: center;
  line-height: 0px;
}

.contenedor .end-address {
  border: 1px solid black;
  grid-area: end-address;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .office-name {
  border: 1px solid black;
  grid-area: office-name;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .shipper-zip {
  border: 1px solid black;
  grid-area: shipper-zip;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .recipient-zip {
  border: 1px solid black;
  grid-area: recipient-zip;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .shipper-email {
  border: 1px solid black;
  grid-area: shipper-email;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .shipper-phone {
  border: 1px solid black;
  grid-area: shipper-phone;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .shipper-id {
  border: 1px solid black;
  grid-area: shipper-id;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .recipient-email {
  border: 1px solid black;
  grid-area: recipient-email;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .recipient-phone {
  border: 1px solid black;
  grid-area: recipient-phone;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .shipping-type {
  border: 1px solid black;
  grid-area: shipping-type;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .insurance {
  border: 1px solid black;
  grid-area: insurance;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .packages-number {
  border: 1px solid black;
  grid-area: packages-number;
  background: white;
  padding: 0px 5px;
  font-size: 10px;
}

.contenedor .packs {
  background-color: rgb(34, 193, 195);
  border: 1px solid black;
  grid-area: packs;
}

.contenedor .pack-description-title {
  border: 1px solid black;
  grid-area: pack-description-title;
  background: black;
  color: white;
}

.contenedor .pack-quantity-title {
  border: 1px solid black;
  grid-area: pack-quantity-title;
  background: black;
  color: white;
}

.contenedor .pack-packing-title {
  border: 1px solid black;
  grid-area: pack-packing-title;
  background: black;
  color: white;
}

.contenedor .pack-weight-title {
  border: 1px solid black;
  grid-area: pack-weight-title;
  background: black;
  color: white;
}

.contenedor .pack-description-container {
  border: 1px solid black;
  grid-area: pack-description-container;
  background: white;
}

.contenedor .pack-description-body {
  padding: 0px;
  border: 1px solid black;
  grid-area: pack-description-body;
  background: white;
}

.contenedor .pack-description {
  border: 1px solid black;
  grid-area: pack-description;
  background: white;
}

.contenedor .pack-quantity {
  border: 1px solid black;
  grid-area: pack-quantity;
  background: white;
}
.contenedor .pack-packing {
  border: 1px solid black;
  grid-area: pack-packing;
  background: white;
}
.contenedor .pack-weight {
  border: 1px solid black;
  grid-area: pack-weight;
  background: white;
}

.contenedor .packages {
  background: rgb(34, 193, 195);
  border: 1px solid black;
  grid-area: packages;
}

.contenedor .sub-total {
  border: 1px solid black;
  grid-area: sub-total;
  background: white;
}

.contenedor .insurance-cost {
  border: 1px solid black;
  grid-area: insurance-cost;
  background: white;
}

.contenedor .shipping-cost {
  border: 1px solid black;
  grid-area: shipping-cost;
  background: white;
}

.contenedor .total {
  border: 1px solid black;
  grid-area: total;
  background: white;
}

.contenedor .sub-total-number {
  border: 1px solid black;
  grid-area: sub-total-number;
  background: white;
}

.contenedor .insurance-cost-number {
  border: 1px solid black;
  grid-area: insurance-cost-number;
  background: white;
}
.contenedor .shipping-cost-number {
  border: 1px solid black;
  grid-area: shipping-cost-number;
  background: white;
}

.contenedor .total-number {
  border: 1px solid black;
  grid-area: total-number;
  background: white;
}

.contenedor .qr-code {
  border: 1px solid black;
  grid-area: qr-code;
  background: blue;
}

.complete {
  font-size: 25px;
  padding: 5px;
  margin: 0px !important;
  text-align: start;
}

.complete-number {
  font-size: 25px;
  padding: 5px;
  margin: 0px !important;
  text-align: end;
}

.complete-lil {
  font-size: 16px;
  padding: 5px;
  margin: 0px !important;
  text-align: start;
}

.big-h1 {
  font-size: 25px;
}
</style>
