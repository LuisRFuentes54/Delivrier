<template>
<div>
  <v-autocomplete
    v-model="address"
    :items="addresses"
    :loading="isLoading"
    :search-input.sync="search"
    hide-no-data
    no-filter
    outlined
    clearable
    item-text="display_name"
    item-value="place_id"
    label="Address"
    return-object
    persistent-hint
    hint="Place to deliver the packages"
    :rules="rules.defaultRules"
    v-if="!$vuetify.breakpoint.smAndDown"
  ></v-autocomplete>
  <div v-else>
    <v-text-field 
    v-model="search"
    
    label="Address Search Name"
    persistent-hint
    hint="Write the name of a place and search it in the input below"
    outlined >
    </v-text-field>
   <v-select
    v-model="address"
    :items="addresses"
    :loading="isLoading"
    hide-no-data
    no-filter
    outlined
    clearable
    item-text="display_name"
    item-value="place_id"
    label="Address"
    return-object
    persistent-hint
    hint="Place to deliver the packages"
    :rules="rules.defaultRules"
    
  ></v-select>
  
  </div>
</div>
</template>

<script>
import Repository from '../../http/repositories/repositoryFactory';
const AddressRepository = Repository.get('address');
export default {
  name: "AddressField",
  data: () => ({
    addresses: [],
    isLoading: false,
    address: null,
    search: '',
    rules: {
      defaultRules: [v => !!v || "Required field"]
    }
  }),
  methods: {
    async loadAddresses(searchValue){
      let response = await AddressRepository.getAddresses(searchValue);
      this.addresses = response.addresses;
      this.isLoading = false;
    }
  },
  computed: {
   
  },

  watch: {
    address(newAddress){
      this.$emit('address', newAddress);
    },
    search(val) {
      if(this.$vuetify.breakpoint.smAndDown){
        this.address = null;
      }
      if (!val){this.addresses=[]; return} 
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;
      
      // Lazily load input items
      if(!this.address || val != this.address.display_name){
        this.loadAddresses(val);
      }
    else{
      this.isLoading = false
    }
    }
  }
}
</script>

<style>

</style>