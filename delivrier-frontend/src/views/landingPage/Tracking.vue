<template>
  <v-container fluid class="mt-4 breakWordRule">
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-x-transition"
      min-height="200"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <br />
          <h1 class="display-2 font-weight-medium">Rastreo de envío</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              Como parte de nuestros servicios y para comodidad del cliente
              ofrecemos la opción de monitorear el estado y posición de tu envío
              al ingresar el código de rastreo de este
            </p>

            <p class="title font-weight-bold textColorOrange">
              ¡Ingresa el código de rastreo!
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "Tracking",

  data: () => ({
    //
  })
};
</script>
<style scoped>
.textColorOrange {
  color: #ff6200 !important;
}
.backgroundAlternative {
  background-color: #fafafa !important;
}
.breakWordRule {
  word-break: break-word !important;
}
</style>
