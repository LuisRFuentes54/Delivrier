<template>
<div>
  <v-autocomplete
    v-model="office"
    :items="offices"
    :loading="isLoading"
    outlined
    clearable
    item-text="name"
    item-value="id"
    label="Office"
    return-object
    persistent-hint
    hint="Office from where the packages will be shipped"
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
          <v-list-item-subtitle v-html="data.item.address"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
  <v-select
    v-model="office"
    :items="offices"
    :loading="isLoading"
    outlined
    disable-lookup
    clearable
    item-text="name"
    item-value="id"
    label="Office"
    return-object
    persistent-hint
    hint="Office from where the packages will be shipped"
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
          <v-list-item-subtitle v-html="data.item.address"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-select>
</div>
</template>

<script>
import Repository from '../../http/repositories/repositoryFactory';
const OfficeRepository = Repository.get('office');
export default {
  name: "OfficeField",
  props:{
    //
  },
  data: () => ({
    offices: [],
    isLoading: true,
    office: null,
    rules: {
      defaultRules: [v => !!v || "Required field"]
    }
  }),
  methods: {
    async loadOffices(){
      let response = await OfficeRepository.getAll();
      this.offices = response.offices;
      this.isLoading = false;
    }
  },
  watch: {
    office(newOffice){
      
      this.$emit('office', newOffice);
    },
  },
  mounted(){
    this.loadOffices();
  },
 
}
</script>

<style>

</style>