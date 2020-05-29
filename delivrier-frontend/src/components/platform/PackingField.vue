<template>
<div>
  <v-autocomplete
    v-model="packing"
    :items="packings"
    outlined
    clearable
    item-text="name"
    item-value="id"
    label="Packing"
    return-object
    class="package-input mt-3 mx-0 px-0 "
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
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="`${data.item.heigth?'heigth x ':''} large x width: ${data.item.heigth?data.item.heigth+'cm x ':''}${data.item.large} cm x ${data.item.width} cm`"></v-list-item-subtitle>
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="`Price: ${data.item.price} $`"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
  <v-select
    v-model="packing"
    :items="packings"
    outlined
    clearable
    item-text="name"
    item-value="id"
    label="Packing"
    return-object
    class="package-input mt-3 mx-0 px-0 "
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
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="`${data.item.heigth?'heigth x ':''} large x width: ${data.item.heigth?data.item.heigth+'cm x ':''}${data.item.large} cm x ${data.item.width} cm`"></v-list-item-subtitle>
          <v-list-item-subtitle class="wrap-text ml-3 text-color" v-html="`Price: ${data.item.price} $`"></v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </template>
  </v-select>
  </div>
</template>

<script>
export default {
  name: "PackingField",
  props:{
    packings: {
      required: true
    },
  },
  data: () => ({
    packing: {}
  }),
  methods: {
   
  },
  watch: {
    packing(newPacking){
      
      this.$emit('packing', newPacking);
    },
  },
  mounted(){
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
.package-input {
  border-radius: 0px
}
</style>