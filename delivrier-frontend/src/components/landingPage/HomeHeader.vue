<template>
  <div>
    <br v-if="$vuetify.breakpoint.mdAndUp" />
    <v-row align="start" class="text-center">
      <v-col cols="12">
        <h1
          class="d-flex justify-center textColor font-weight-bold"
          :class="{
            'display-1': $vuetify.breakpoint.smAndDown,
            'display-3': !$vuetify.breakpoint.smAndDown
          }"
        >DELIVRIER</h1>
        <h1
          class="d-flex justify-center textColor"
          :class="{
            'subtitle-1': $vuetify.breakpoint.smAndDown,
            'display-1': !$vuetify.breakpoint.smAndDown
          }"
        >Envíos rápidos, confiables y seguros</h1>
        <h1
          class="d-flex justify-center textColor"
          :class="{
            'subtitle-1': $vuetify.breakpoint.smAndDown,
            'display-1': !$vuetify.breakpoint.smAndDown
          }"
        >Pensamos fuera de la caja</h1>
      </v-col>
    </v-row>
    <br v-if="$vuetify.breakpoint.mdAndUp" />
    <br v-if="$vuetify.breakpoint.mdAndUp" />
    <br v-if="$vuetify.breakpoint.mdAndUp" />
    <br v-if="$vuetify.breakpoint.mdAndUp" />
    <br v-if="$vuetify.breakpoint.mdAndUp" />
    <br v-if="$vuetify.breakpoint.mdAndUp" />
    <v-row align="center">
      <v-col cols="0" md="3"></v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-btn
          rounded
          class="font-weight-bold"
          color="#FF6200"
          :large="!$vuetify.breakpoint.smAndDown"
          dark
          @click="route('SignUp')"
        >Realizar Envío</v-btn>
      </v-col>

      <v-col cols="12" class="d-flex justify-center align-center">
        <br v-if="$vuetify.breakpoint.mdAndUp" />
        <br v-if="$vuetify.breakpoint.mdAndUp" />
        <br v-if="$vuetify.breakpoint.mdAndUp" />
        <br v-if="$vuetify.breakpoint.mdAndUp" />
        <br v-if="$vuetify.breakpoint.mdAndUp" />
        <v-btn
          rounded
          color="white"
          :large="!$vuetify.breakpoint.smAndDown"
          class="font-weight-bold textColorOrange"
          @click="route('Rastreo')"
        >Rastrear Envío</v-btn>
      </v-col>
      <v-col cols="0" md="3"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',

  data: () => ({
    //
  }),
  methods: {
    route(option) {
      this.$router.push({ name: `${option}` });
    }
  }
};
</script>

<style scoped>
.textColor {
  color: white;
}
.textColorOrange {
  color: #ff6200 !important;
}
</style>
