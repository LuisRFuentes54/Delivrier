<template>
  <div>
    <v-row class="my-0 py-0">
      <v-col cols="12" sm="3" class="mx-0 px-0  my-0 py-0">
        <v-select outlined v-model="quantity.value" :items="quantityOptions" :error="quantityError" :rules="rules.defaultRules" label="Quantity" class="mt-3 mx-0 px-0 package-input"  />
      </v-col>
      <v-col cols="12" sm="3" class="mx-0 px-0  my-0 py-0">
        <v-text-field outlined v-model="weight.value" label="Weight" v-mask="['###','###.##']" suffix="kg" masked="true" :rules="weightRules()" class="mt-3 mx-0 px-0 package-input"  />
      </v-col>
      <v-col cols="12" sm="3" class="mx-0 px-0  my-0 py-0">
        <v-text-field outlined v-model="calculatedValue.value" v-mask="['#.#', '##.#','###.#','####.#']" suffix="$" label="Calculated value" :rules="calculatedValueRules()" class="mt-3 mx-0 px-0 package-input"  />
      </v-col>
      <v-col cols="12" sm="3" class="mx-0 px-0  my-0 py-0">
        <PackingField @packing="setPacking" :packings="packings"/>
      </v-col>
      
    </v-row>
    <v-row class="my-0 py-0">
      
      <v-col cols="12" sm="4" class="mx-0 px-0 my-0 py-0">
        <v-text-field outlined v-model="height.value" label="Height"  v-mask="['#.#', '##.#','###.#']"   suffix="cm" masked="true" :rules="heightRules()" class="mt-3 mx-0 px-0 package-input"  />
      </v-col>
      <v-col cols="12" sm="4" class="mx-0 px-0 my-0 py-0">
        <v-text-field outlined v-model="length.value" label="Length"  v-mask="['#.#', '##.#','###.#']"   suffix="cm" masked="true" :rules="lengthRules()" class="mt-3 mx-0 px-0 package-input"  />
      </v-col> 
      <v-col cols="12" sm="4" class="mx-0 px-0 my-0 py-0">
        <v-text-field outlined v-model="width.value" label="Width"  v-mask="['#.#', '##.#','###.#']"   suffix="cm" masked="true" :rules="widthRules()" class="mt-3 mx-0 px-0 package-input"  />
      </v-col>
      
    </v-row>
    <v-row class="my-0 py-0">
      <v-col cols="12" class="mx-0 px-0 my-0 py-0">
        <v-textarea outlined v-model="description" label="Description" counter maxlength="256" :rules="rules.defaultRules" class="mt-3 mx-0 px-0 package-input"  />
      </v-col>
    </v-row>
    <v-row class="mt-0 pt-0 mb-8">
      <v-btn dark @click="deletePackage" color="error" v-if="!disableDeleteButton">
          Delete package
      </v-btn>
    </v-row>
  </div> 
</template>

<script>
import PackingField from './PackingField';

export default {
  name: "PackageField",
  components: {
    PackingField
  },
  props:{
    parameters: {
      required: true
    },
    getPackage: {
      type: Boolean,
      required: true
    },
    packageListId: {
      type: Number,
      required: true
    },
    quantityError:{
      type: Boolean,
      required: true
    },
    disableDeleteButton: {
      type: Boolean,
      required: true
    },
    packings: {
      required: true
    },
  },
  data: () => ({
    isLoading: true,
    description: '',
    quantity:{
      id:5,
      value: null
    },
    calculatedValue:{
      id:7,
      value: null
    },
    weight:{
      id:4,
      value: null
    },
    length:{
      id:3,
      value: null
    },
    height:{
      id:1,
      value: null
    },
    width:{
      id:2,
      value: null
    },
    packing:null,
   
    rules: {
      defaultRules: [v => !!v || "Required field"]
    }
  }),
  methods: {
    setPacking(selectedPacking) {
      this.packing = selectedPacking;
    },
    weightRules() {
    const rules = [(v)=>!!v || "Required"
    ];
       if (this.parameters){
          let weightParameter = this.parameters.find((parameter)=>{
            return parameter.id == 4;
          });
          let maxQuantity = parseFloat(weightParameter.maxValue);
           let minQuantity = parseFloat(weightParameter.minValue);
      rules.push((v) =>
        v <= maxQuantity || `Max value is ${maxQuantity} kg`,(v) =>
        v >= minQuantity || `Min value is ${minQuantity} kg`);
    }
    return rules;
  },
  heightRules() {
    const rules = [(v)=>(v==0 || !!v) || "Required"
    ];
       if (this.parameters){
          let heightParameter = this.parameters.find((parameter)=>{
            return parameter.id == 1;
          });
          let maxQuantity = parseFloat(heightParameter.maxValue);
           let minQuantity = parseFloat(heightParameter.minValue);
      rules.push((v) =>
        v <= maxQuantity || `Max value is ${maxQuantity} cm`,(v) =>
        v >= minQuantity || `Min value is ${minQuantity} cm`);
    } 
    return rules;
  },
  lengthRules() {
    const rules = [(v)=>!!v || "Required"
    ];
       if (this.parameters){
          let lengthParameter = this.parameters.find((parameter)=>{
            return parameter.id == 3;
          });
          let maxQuantity = parseFloat(lengthParameter.maxValue);
           let minQuantity = parseFloat(lengthParameter.minValue);
      rules.push((v) =>
        v <= maxQuantity || `Max value is ${maxQuantity} cm`,(v) =>
        v >= minQuantity || `Min value is ${minQuantity} cm`);
    }
    return rules;
  },
  widthRules() {
    const rules = [(v)=>!!v || "Required"
    ];
       if (this.parameters){
          let widthParameter = this.parameters.find((parameter)=>{
            return parameter.id == 2;
          });
          let maxQuantity = parseFloat(widthParameter.maxValue);
           let minQuantity = parseFloat(widthParameter.minValue);
      rules.push((v) =>
        v <= maxQuantity || `Max value is ${maxQuantity} cm`,(v) =>
        v >= minQuantity || `Min value is ${minQuantity} cm`);
    }
    return rules;
  },
  calculatedValueRules() {
    const rules = [(v)=> !!v || "Required"
    ];
       if (this.parameters){
          let calculatedValueParameter = this.parameters.find((parameter)=>{
            return parameter.id == 7;
          });
          let maxQuantity = parseFloat(calculatedValueParameter.maxValue);
           let minQuantity = parseFloat(calculatedValueParameter.minValue);
      rules.push((v) =>
        v <= maxQuantity || `Max value is ${maxQuantity} $`,(v) =>
        v >= minQuantity || `Min value is ${minQuantity} $`);
    }
    return rules;
  },
  deletePackage(){
    this.$emit('deletePackage', this.packageListId, this.quantity.value);
  }
  },
  computed:{
    quantityOptions(){
      if(this.parameters){
        let quantityParameter = this.parameters.find((parameter)=>{
          return parameter.id == 5;
        });
        let maxQuantity = parseFloat(quantityParameter.maxValue);
        let minQuantity = parseFloat(quantityParameter.minValue);
        let options =[];
        for(let i=minQuantity; i<=maxQuantity; i++){
          options.push(i);
        }
        return options;
      }
      return []
    },},
  watch: {
    getPackage(newGetPackage){
      if(newGetPackage){
        let parameters = [];
        parameters.push(this.quantity);
        parameters.push(this.weight);
        parameters.push(this.height);
        parameters.push(this.width);
        parameters.push(this.length);
        parameters.push(this.calculatedValue);
        let newPackage = {
          description: this.description,
          parameters: parameters,
          packing: this.packing? this.packing.id: null,
        }
        this.$emit('package', newPackage, this.packageListId);
      }
    },
    'quantity.value'(newQuantity, oldQuantity){
       this.$emit('quantity',newQuantity, oldQuantity);
      
    },
  },
  mounted(){
  },
 
}
</script>

<style scoped>

.package-input {
  border-radius: 0px
}

</style>