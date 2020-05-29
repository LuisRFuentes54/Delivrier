<template>
  <div class="backgroundAlternative footerHeight">
    <v-container>
      <v-row>
        <v-col
          :class="[
            'pl-10',
            $vuetify.breakpoint.smAndUp ? '' : 'd-flex justify-center '
          ]"
          cols="12"
          sm="6"
        >
          <div class=" subtitle-1">{{ term.LP_FOOTER_CONTACT }}</div>
          <div class="footerTextColor subtitle-1 font-weight-bold ">
            c2.delivrier@gmail.com
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div
            class="d-flex align-center "
            :class="[
              $vuetify.breakpoint.lgAndUp ? 'justify-end' : 'justify-center'
            ]"
          >
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="../../assets/delivrier-logo.png"
              transition="scale-transition"
              :width="200"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",

  props: {
    term: {}
  },
};
</script>

<style scoped>
.backgroundAlternative {
  background-color: #fafafa !important;
}
.footerHeight {
  height: 300px;
}
.footerTextColor {
  color: #5CE1E6 !important;
}
</style>
