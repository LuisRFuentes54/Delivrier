<template> 
<div>
  <v-autocomplete
    v-model="shippingPlan"
    :items="shippingPlans"
    :loading="isLoading"
    outlined
    clearable
    item-text="name"
    item-value="id"
    label="Plan"
    return-object
    persistent-hint
    hint="Select a shipping plan that best suits your demands"
    :rules="rules.defaultRules"
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
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="'Base Fare: ' + data.item.baseFare + ' $'"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
    <v-select
    v-model="shippingPlan"
    :items="shippingPlans"
    :loading="isLoading"
    outlined
    clearable
    item-text="name"
    item-value="id"
    label="Plan"
    return-object
    persistent-hint
    hint="Select a shipping plan that best suits your demands"
    :rules="rules.defaultRules"
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
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="'Base Fare: ' + data.item.baseFare + ' $'"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-select>
   </div>
</template>

<script>
import Repository from '../../http/repositories/repositoryFactory';
const shippingPlanRepository = Repository.get('shippingPlan');
export default {
  name: 'ShippingPlanField',
  props: {
    //
  },
  data: () => ({
    shippingPlans: null ,
    isLoading: true,
    shippingPlan: null,
    rules: {
      defaultRules: [v => !!v || "Required field"]
    }
  }),
  methods: {
    async loadshippingPlans() {
      let response = await shippingPlanRepository.getAll();
      this.shippingPlans = response.shippingPlans;
      this.isLoading = false;
    }
  },
  watch: {
    shippingPlan(newshippingPlan) {
      this.$emit('shippingPlan', newshippingPlan);
    }
  },
  mounted() {
    this.loadshippingPlans();
  }
};
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