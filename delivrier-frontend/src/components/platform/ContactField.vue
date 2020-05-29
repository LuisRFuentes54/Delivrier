<template>
<div>
  <v-autocomplete
    v-model="contact"
    :items="contacts"
    :loading="isLoading"
    outlined
    clearable
    :item-text="fullName"
    item-value="id"
    label="Person"
    persistent-hint
    hint="Select a contact or especify a receiver"
    return-object
    :disabled="isDisabled"
    :rules="defaultRules()"
    
    v-if="!$vuetify.breakpoint.smAndDown"
  >
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.firstName + ' ' + data.item.secondName + ' ' + data.item.firstLastName + ' ' + data.item.secondLastName"></v-list-item-title>
          <v-list-item-subtitle v-html="data.item.email"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
  <v-select
    v-model="contact"
    :items="contacts"
    :loading="isLoading"
    outlined
    clearable
    :item-text="fullName"
    item-value="id"
    label="Person"
    persistent-hint
    hint="Select a contact or especify a receiver"
    return-object
    :disabled="isDisabled"
    :rules="defaultRules()"
    
    v-else
  >
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.firstName + ' ' + data.item.secondName + ' ' + data.item.firstLastName + ' ' + data.item.secondLastName"></v-list-item-title>
          <v-list-item-subtitle v-html="data.item.email"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-select>
  </div>
</template>

<script>
import Repository from '../../http/repositories/repositoryFactory';
const UserRepository = Repository.get('users');
export default {
  name: "ContactField",
  props:{
    isDisabled: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    contacts: [],
    isLoading: true,
    contact: null,
  }),
  methods: {
    async loadContacts(){
      let response = await UserRepository.getUserContacts(this.$store.getters['users/getUserId']);
      this.contacts = response.contacts;
      this.isLoading = false;
    },
    fullName: item => item.firstName + ' ' + item.secondName + ' ' + item.firstLastName + ' ' + item.secondLastName,
    defaultRules() {
      let disabled =this.isDisabled;
      const rules = [];
      rules.push((v)=>(disabled || !!v) || "Required");
      return rules; 
    },
  },
  watch: {
    contact(newContact){
      this.$emit('contact', newContact);
    },
    isDisabled(newIsDisabled){
      if(newIsDisabled)
      {
        this.contact = null
      }
    },
  },
  mounted(){
    this.loadContacts();
  },
 
}
</script>

<style>

</style>