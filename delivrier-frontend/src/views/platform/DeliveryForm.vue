<template>
  <v-container>
    <span class="title">Delivery Form</span>
    <v-stepper v-model="step" alt-labels class="elevation-0">
      <v-stepper-header class="elevation-0 ">
        <v-stepper-step :complete="step > 1" step="1"><span class="text-center stepperText">Basic Information</span></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 2" step="2"><span class="text-center stepperText">Shipping Information</span></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 3" step="3"><span class="text-center stepperText">Packages Detail</span></v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12 elevation-0">
            <v-container>
              <v-form ref="basicInformationForm" v-model="isBasicInformationFormValid">
                <v-row>
                  <v-col class="d-flex justify-center">
                    <span class="display-1 text-center">
                      Basic Information
                    </span>
                  </v-col>
                </v-row>
                <span class="title">Addresses</span>
                <v-row>
                  <v-col cols="12" md="6">
                    <span class="subtitle1 ml-3">Home Office</span>
                    <OfficeField class="mt-3" @office="setHomeOffice" />
                  </v-col>
                  <v-col cols="12" md="6">
                    <span class="subtitle1 ml-3">Destination</span>
                    <AddressField class="mt-3" @address="setDestination" />
                  </v-col>
                </v-row>
                <span class="title">Receiver</span>
                <v-row>
                  <v-col cols="9" md="6">
                    <span class="subtitle1 ml-3">Contacts</span>
                    <ContactField
                      class="mt-3"
                      :isDisabled="isContactAutocompletedDisabled"
                      @contact="setContact"
                    />
                  </v-col>
                  <v-col class="d-flex align-center" cols="3" md="6">
                    <v-btn fab dark @click="activateNewContactForm" color="primary">
                      <v-icon v-if="!isNewReceiverSpecified" dark>mdi-plus</v-icon>
                      <v-icon v-else dark>mdi-close</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <transition name="fade">
                  <v-container fluid v-if="isNewReceiverSpecified">
                    <span class="title">New Receiver</span>
                    <v-row>
                      <v-col cols="12" md="6" lg="3">
                        <span class="subtitle1 ml-3">First name</span>
                        <v-text-field outlined placeholder="Jon" :rules="defaultRules()" v-model="newReceiver.firstName"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" lg="3">
                        <span class="subtitle1 ml-3">Second name</span>
                        <v-text-field outlined placeholder="Walter" :rules="defaultRules()" v-model="newReceiver.secondName"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" lg="3">
                        <span class="subtitle1 ml-3">First lastname</span>
                        <v-text-field outlined placeholder="Doe" :rules="defaultRules()" v-model="newReceiver.firstLastName"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" lg="3">
                        <span class="subtitle1 ml-3">Second lastname</span>
                        <v-text-field
                          outlined
                          placeholder="Smith" :rules="defaultRules()"
                          v-model="newReceiver.secondLastName"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" md="6">
                        <span class="subtitle1 ml-3">Email</span>
                        <v-text-field
                          outlined
                          placeholder="jondoe@mail.com" :rules="rules.emailRules"
                          v-model="newReceiver.email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <span class="subtitle1 ml-3">Phone Number</span>
                        <v-text-field
                          outlined
                          placeholder="1111-111-11-11"
                          v-mask="'####-###-##-##'" :rules="defaultRules()"
                          v-model="newReceiver.phoneNumber"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container> 
                </transition>
                <v-row>
                  <v-col class="d-flex justify-end">
                    <v-btn color="primary" @click="continueToShippingForm()">Continue</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card>

          
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12 elevation-0" >
            <v-container>
              <v-form ref="shippingForm" v-model="isShippingFormValid">
                <v-row>
                  <v-col class="d-flex justify-center">
                    <span class="display-1 text-center">
                      Shipping Information
                    </span>
                  </v-col>
                </v-row>
                <span class="title">Shipping</span>
                <v-row>
                  <v-col cols="12" md="6">
                    <span class="subtitle1 ml-3">Shipping Plan</span>
                    <ShippingPlanField class="mt-3"  @shippingPlan="setShippingPlan" />
                  </v-col>
                  <v-col cols="12" md="6">
                    <span class="subtitle1 ml-3">Insurance Plan</span>
                    <InsuranceField class="mt-3" @insurance="setInsurance" />
                  </v-col>
                </v-row>
                <v-row>
                   <v-col cols="6" class="d-flex justify-start">
                    <v-btn color="gray" @click="step = 1">Go Back</v-btn>
                  </v-col>
                  <v-col  cols="6" class="d-flex justify-end">
                    <v-btn color="primary" @click="continueToPackagesForm()">Continue</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12 elevation-0">
            <v-container>
              <v-form ref="packagesForm" v-model="isPackagesFormValid">
                <v-row>
                  <v-col class="d-flex justify-center">
                    <span class="display-1 text-center">
                      Packages Detail
                    </span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex justify-end">
                    <v-btn dark @click="addPackage" color="primary">
                      Add package
                    </v-btn>
                  </v-col>
                </v-row>
                
                <span v-for="(deliveryPackage, index) in packages"
                  :key="deliveryPackage.id"> 
                  
                  <span class="title">Package {{index + 1}}</span>
                  <PackageField
                    class="mt-3"
                    :parameters="parameters"
                    :getPackage="getPackages"
                    :quantityError="quantityError"
                    :packageListId="deliveryPackage.id"
                    :disableDeleteButton="disableDeleteButton"
                    :packings="packings"
                    @package="setPackages"
                    @deletePackage="deletePackage"
                    @quantity="calculateGlobalQuantity"
                  />
                  <br/> 
                </span>
                <v-row>
                  <v-col cols="12" sm="6" class="d-flex justify-start">
                    <v-btn color="gray" :block="$vuetify.breakpoint.smAndDown" @click="step = 2" >Go Back</v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" class="d-flex justify-end">
                    <v-btn color="primary" :block="$vuetify.breakpoint.smAndDown" :loading="loading" @click="continueToRegisterShipping()">Register Shippment</v-btn>
                  </v-col>
                </v-row>
              </v-form>
              
            </v-container>
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-snackbar
      v-model="openSnackbar"
      top
      dark
        color="error"
    >
      Global amount of items to ship surpass maximun of {{ maxGlobalQuantity }} items
      <v-btn
        text
        dark
        @click="openSnackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card dark min-height="400" :class="error || loadingError?`gradientError`:(shippingRegistered?`gradientSuccessful`:`gradient`) ">
        <v-container>
          <v-row>
            <v-col>
              <v-card-title dark class="d-flex justify-center display-1 text-center font-weight-bold">Shipping</v-card-title>
            </v-col>
          </v-row>
           <v-row>
            <v-col class="d-flex justify-center text-center">
              <v-progress-circular
                :rotate="90"
                :size="150"
                :width="13"
                :value="progress"
                :indeterminate="indeterminate"
                color="white"
                v-if="!shippingRegistered && !error && !loadingError"
              >
              {{progress}}%
              </v-progress-circular>
              <v-icon :size="150" v-else-if="!error && !loadingError"> mdi-check-circle-outline</v-icon>
              <v-icon :size="150" v-else> mdi-alert-circle-outline</v-icon>
            </v-col>
          </v-row>
           <v-row>
            <v-col>
              <span v-if="!shippingRegistered && !error && !loadingError">
                <span class="d-flex justify-center headline text-center" v-if="!preparingShippingReady"> Preparing for registering shipping <span v-if="!preparingShippingReady">...</span></span>
                <span v-else class="d-flex justify-center headline text-center"> Registering shipping ...</span>
              </span>
              <span v-else-if="!error && !loadingError">
                <span class="d-flex justify-center headline text-center">
                  Shipping Successfully registered
                  <br/>
                  Tracking ID: {{this.shippingTrackingNumber}}
                </span>
              </span>
              <span v-else-if="!loadingError">
                <span class="d-flex justify-center headline text-center">An error occurred while shipping, please try again later</span>
              </span>
              <span v-else>
                <span class="d-flex justify-center headline text-center">An error occurred while loading options, please try again later</span>
              </span>
            </v-col>
          </v-row>
          <v-row v-if="shippingRegistered && !(error || loadingError)">
            <v-col>
              <v-btn class="d-flex justify-center text-center" text dark @click="closeDialog()">
                Close
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="loadingDialog"
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by, loading options ...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import OfficeField from '../../components/platform/OfficeField';
import AddressField from '../../components/platform/AddressField';
import ContactField from '../../components/platform/ContactField';
import ShippingPlanField from '../../components/platform/ShippingPlanField';
import InsuranceField from '../../components/platform/InsuranceField';
import PackageField from '../../components/platform/PackageField';

import CustomId from 'custom-id';

import Repository from '../../http/repositories/repositoryFactory';
const PackingRepository = Repository.get('packing');
const ParameterRepository = Repository.get('parameter');
const AddressRepository = Repository.get('address');
const ShippingRepository = Repository.get('shipping');

export default {
  name: 'DeliveryForm',
  components: {
    OfficeField,
    AddressField,
    ContactField,
    ShippingPlanField,
    InsuranceField,
    PackageField
  },
  data: () => ({
    step: 1,
    isBasicInformationFormValid: true,
    isShippingFormValid: true,
    isPackagesFormValid: true,
    dialog: false,
    loadingDialog:false,
    progress: 0,
    progressRatio:10,
    indeterminate:false,
    preparingShippingReady: false,
    shippingRegistered: false,
    loading:false,
    office: null,
    route:null,
    destinationAddress: null,
    contact: null,
    newReceiver: {
      firstName: '',
      secondName: '',
      firstLastName: '',
      secondLastName: '',
      email: '',
      phoneNumber: '',
      
    },
    rules: {
      defaultRules: [v => !!v || "Required field"],
      emailRules: [
        (v) => !!v || "Required field",
        (v) => /^\S+$/.test(v) || "Email can't have white spaces",
        (v) => /.+@.+\..+/.test(v) || "Invalid email"
      ],
    },
    shippingPlan: null,
    insurance:null,
    isNewReceiverSpecified: false,
    isContactAutocompletedDisabled: false,
    parameters:null,
    packages: [],
    getPackages: false,
    packageCounterId: 1,
    quantityError: false,
    globalQuantity: {id: 6, value:0},
    maxGlobalQuantity: null,
    openSnackbar: false,
    packings: null,
    finalRoute:[],
    error: false,
    loadingError: false,
    shippingTrackingNumber:0,
    shippingDelay: 0
  }),
  methods: {
    setHomeOffice(selectedOffice) {
      this.office = selectedOffice;
    },
    setDestination(selectedDestination) {
      this.destinationAddress = selectedDestination;
    },
    setContact(selectedContact) {
      this.contact = selectedContact;
    },
    setShippingPlan(selectedShippingPlan) {
      this.shippingPlan = selectedShippingPlan;
    },
    setInsurance(selectedInsurance) {
      this.insurance = selectedInsurance;
    },
    setPackages(newPackage, packageListId) {
      let packageIndex = this.packages.findIndex((deliveryPackage)=>{
        return deliveryPackage.id === packageListId
      });
      this.packages[packageIndex].package = newPackage;
    },
    deletePackage(packageListId , packageQuantity){
      let packageIndex = this.packages.findIndex((deliveryPackage)=>{
        return deliveryPackage.id === packageListId
      });
      
      this.globalQuantity.value -= packageQuantity || 0;
      this.validateQuantityRestriction();
      this.packages.splice(packageIndex,1);
    },
    calculateGlobalQuantity( newQuantity, oldQuantity){
      this.globalQuantity.value -= oldQuantity?oldQuantity:0;
      this.globalQuantity.value += newQuantity;
      this.validateQuantityRestriction();
    },
    validateQuantityRestriction(){
      if(this.globalQuantity.value > this.maxGlobalQuantity){
        this.quantityError = true;
        this.openSnackbar = true;
      }
      else{
        this.quantityError = false;
      }

    },
    activateNewContactForm() {
      if (!this.isNewReceiverSpecified) {
        this.isNewReceiverSpecified = true;
        this.contact = null;
        this.isContactAutocompletedDisabled = true;
      } else {
        this.isNewReceiverSpecified = false;
        this.isContactAutocompletedDisabled = false;
        this.newReceiver.firstName = '';
        this.newReceiver.secondName = '';
        this.newReceiver.firstLastName = '';
        this.newReceiver.secondLastName = '';
        this.newReceiver.email = '';
        this.newReceiver.phoneNumber = '';
      }
    },
    async loadParameters(){
      let response = await ParameterRepository.getAll();
      this.parameters = response.parameters;
      let globalQuantityParameter = this.parameters.find((parameter)=>{
        return parameter.id == 6;
      });
      this.maxGlobalQuantity = parseInt(globalQuantityParameter.maxValue);
    },
    async loadDelay(){
      let response = await ShippingRepository.getDelay();
      this.shippingDelay = response.simulationConfig.begining;
    },
    defaultRules() {
      let newReceiverSpecified = !this.isNewReceiverSpecified;
      const rules = [];
      rules.push((v)=>(newReceiverSpecified || !!v) || "Required");
      return rules; 
    },
    addPackage() {
      let packageList = {
        id: this.packageCounterId,
        package: null
      }
      this.packageCounterId++;
      this.packages.push(packageList);
    },
    async loadPackings(){
      let response = await PackingRepository.getAll();
      this.packings = response.packings;
      this.isLoading = false;
    },
    validateBasicInformationForm(){
      this.$refs.basicInformationForm.validate();
      return this.isBasicInformationFormValid;
    },
    continueToShippingForm(){
      if(this.validateBasicInformationForm() && ((!this.isNewReceiverSpecified && this.contact) || (this.isNewReceiverSpecified && this.isBasicInformationFormValid))){
        this.step = 2;
      }
    },
    validateShippingForm(){
      this.$refs.shippingForm.validate();
      return this.isShippingFormValid;
    },
    continueToPackagesForm(){ 
      if(this.validateShippingForm()){
        this.step = 3;
      }
    },
    validatePackagesForm(){
      this.$refs.packagesForm.validate();
      return this.isPackagesFormValid;
    },
    continueToRegisterShipping(){
       if(this.validatePackagesForm()){
        this.registerShipping();
      }
    },
    closeDialog(){
      this.dialog=false;
      this.$router.push({ name: `Deliveries` });
    },
    async registerShipping(){
      try{
      this.loading= true;
      this.getPackages = true;
      await this.configureRoutes();
      let shippment = this.formatShippment();
      this.getPackages = false;
      await this.createShipping(shippment);
      this.shippingRegistered= true;
      await this.timer(4000);
      this.loading= false;
      this.progress = 0;
      this.indeterminate = false;
      this.preparingShippingReady= false;
      }
      catch(e){
        this.error = true;
        await this.timer(4000);
        this.$router.push({ name: `Deliveries` });
      }
      
    },
    async createShipping(shippment){
      await ShippingRepository.createShipping(shippment);
    },
    formatShippment(){
      let packagesFormat = [];
      this.packages.forEach((packageDelivery)=>{
        packageDelivery.package.parameters.forEach((parameter)=>{
          parameter.value = Number(parameter.value)
        })
        packagesFormat.push(packageDelivery.package);
      })
      this.shippingTrackingNumber = Number(CustomId({name:"123456", email:"78910"}));
      let shippment = {
        userId: this.$store.getters['users/getUser'].id,
        personClientId: this.$store.getters['users/getUser'].personClient.id,
        personDestinataryId: this.contact? this.contact.id:null,
        personDestinatary: this.contact? null: this.newReceiver,
        shippingPlanId: this.shippingPlan.id,
        insuranceId: this.insurance? this.insurance.id:null,
        officeId: this.office.id,
        shippmentTrackingNumber: this.shippingTrackingNumber,
        packageQuantity: this.globalQuantity,
        packages: packagesFormat,
        delay: Number(this.shippingDelay),
        route: this.finalRoute
      }
      return shippment
    },
    async configureRoutes(){
      let origin={lon:this.office.longitude, lat:this.office.altitude};
      let destination={lon:this.destinationAddress.lon, lat:this.destinationAddress.lat};
      let initialRoute = await this.loadRoute(origin, destination);
      //Get 8 middle points from accross the initial route + the origin and destination points
      let routePointsCoordinates = this.getMiddlePoints(initialRoute.routes[0]);
      //Get new route with those 8 middle points and the origin and destination points
      this.progressRatio = Math.trunc(100/(routePointsCoordinates.length +1));
      this.dialog = true;
      await this.loadRouteWithMiddlePoints(routePointsCoordinates);
      this.progress += this.progressRatio;
      let addresses = await this.loadAddressGivenCoordinates(routePointsCoordinates);
      this.applyRouteFormat(routePointsCoordinates, addresses);
      this.progress = 100;
      await this.timer(500);
      
      this.indeterminate = true;
      this.preparingShippingReady= true;
    },
    async loadRoute(origin, destination){
      let response = await AddressRepository.getRoute(origin, destination);
      return response.route;
    },
    async loadRouteWithMiddlePoints(coordinates){
      let response = await AddressRepository.getRouteWithMiddlePoints(coordinates);
      this.route = response.route;
    },
    timer(ms){
      return new Promise(res=>setTimeout(res,ms))
    },
    async loadAddressGivenCoordinates(coordinates){
      await this.timer(500)
      let directions= [];
      for(let i = 0; i<coordinates.length; i++){
        let response = await AddressRepository.getAddressGivenCoordinates(coordinates[i]);
        let aux={id: i, direction: response.address}
        directions.push(aux);
        await this.timer(500);
        if(i != (coordinates.length-1)){
          this.progress += this.progressRatio;
        }
      }
      return directions;
    },
    
    getMiddlePoints(initialRoute){
      let ratio = 1;
      if(initialRoute.geometry.coordinates.length - 2 > 8){
        ratio = (initialRoute.geometry.coordinates.length - 2)/8;
      }
      let markersCoordinates= [];
      for(let i = 0; i<initialRoute.geometry.coordinates.length; i+= ratio){
        markersCoordinates.push(initialRoute.geometry.coordinates[Math.trunc(i)]);
      }
      markersCoordinates.push(initialRoute.geometry.coordinates[initialRoute.geometry.coordinates.length-1]);
      return markersCoordinates;
    },
    applyRouteFormat(coordinates, addresses){
      this.finalRoute= [];
      for(let i = 0; i<coordinates.length-1; i++){
        let routePoint= {
          initialDate:null,
          finalDate:null,
          distance: null,
          lon: null,
          lat: null,
          name: null,
          zip: null
        }
        let aux = addresses.find((address)=>{
          return address.id === i
        })
        routePoint.lon = Number(aux.direction.lon);
        routePoint.lat = Number(aux.direction.lat);
        routePoint.zip = aux.direction.address.postcode?Number(aux.direction.address.postcode):null;
        routePoint.name = aux.direction.display_name;
        if(i===0){
          routePoint.initialDate = new Date();
          routePoint.initialDate.setSeconds(routePoint.initialDate.getSeconds() + (this.shippingDelay*60));
        }
        else{
          routePoint.initialDate = this.finalRoute[i-1].finalDate
        }
        routePoint.finalDate = new Date(routePoint.initialDate);
        routePoint.finalDate.setSeconds(routePoint.finalDate.getSeconds() + this.route.routes[0].legs[i].duration); 
        routePoint.distance = this.route.routes[0].legs[i].distance;
        this.finalRoute.push(routePoint)
      }
      this.finalRoute.forEach((direction)=>{
        direction.initialDate = this.formatDate(direction.initialDate);
        direction.finalDate = this.formatDate(direction.finalDate);
      })
    },
    formatDate(date){
      return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+`:${(date.getMinutes()/10) ==0?'0':''}`+date.getMinutes()+':'+date.getSeconds()
    },
    async loadingOptions(){
      this.loadingDialog = true;
      try{
        await this.loadParameters();
        await this.loadPackings();
        this.addPackage();
        await this.loadDelay();
        this.loadingDialog = false;
      }
      catch{
        
        this.loadingDialog = false;
        this.loadingError = true;
        this.dialog = true;
        await this.timer(4000);
        this.$router.push({ name: `Deliveries` });

      }
    }
  },
  computed:{
    disableDeleteButton(){
      return (this.packages && this.packages.length && (this.packages.length===1))
    }
  },
  mounted() {
    this.loadingOptions();
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.stepperText{
  text-align: center !important;
}
.gradient {
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(1, 84, 166, 1) 100%
  );
}
.gradientSuccessful {
  background: rgb(79,199,45);
  background: linear-gradient(90deg, rgba(79,199,45,1) 0%, rgba(23,207,212,1) 100%);
}
.gradientError {
  background: rgb(219,41,41);
  background: linear-gradient(90deg, rgba(219,41,41,1) 0%, rgba(210,165,16,1) 100%);
}
</style>
