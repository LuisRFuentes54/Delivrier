<template>

<div>
  <v-autocomplete
    v-model="insurance"
    :items="insurances"
    :loading="isLoading"
    outlined
    clearable
    item-text="name"
    item-value="id"
    label="Insurance"
    persistent-hint
    hint="Ensure your package in case of loss or damage"
    return-object
    v-if="!$vuetify.breakpoint.smAndDown"
  >
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.name"></v-list-item-title>
          <v-list-item-subtitle class="wrap-text" v-html="data.item.description"></v-list-item-subtitle>
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="'Base Fare: ' + data.item.baseFare + ' $ - Max Refund: ' + data.item.maxRefundFare + ' $'"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
  <v-select
    v-model="insurance"
    :items="insurances"
    :loading="isLoading"
    outlined
    clearable
    item-text="name"
    item-value="id"
    label="Insurance"
    persistent-hint
    hint="Ensure your package in case of loss or damage"
    return-object
    v-else
  >
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.name"></v-list-item-title>
          <v-list-item-subtitle class="wrap-text" v-html="data.item.description"></v-list-item-subtitle>
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="'Base Fare: ' + data.item.baseFare + ' $ - Max Refund: ' + data.item.maxRefundFare + ' $'"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-select>
</div>
</template>

<script>
import Repository from '../../http/repositories/repositoryFactory';
const InsuranceRepository = Repository.get('insurance');
export default {
  name: "InsuranceField",
  props:{
    //
  },
  data: () => ({
    insurances: [],
    isLoading: true,
    insurance: null
  }),
  methods: {
    async loadInsurances(){
      let response = await InsuranceRepository.getAll();
      this.insurances = response.insurances;
      this.isLoading = false;
    }
  },
  watch: {
    insurance(newInsurance){
      
      this.$emit('insurance', newInsurance);
    },
  },
  mounted(){
    this.loadInsurances();
  },
 
}
</script>

<style scoped>
.wrap-text {
  word-wrap: break-word !important;
  white-space: normal !important;
  -webkit-line-clamp: unset !important;
}
.text-color {
  color: rgb(0, 0, 0) !important
}
</style>