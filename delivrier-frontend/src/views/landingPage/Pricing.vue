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

          <h1 class="display-2 font-weight-medium">{{ term.PRI_TITLE }}</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular ">
              {{ term.PRI_PAR_1 }}
              <span class="textColorBlue">Delivrier</span> {{ term.PRI_PAR_2 }}
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="slide-x-transition"
      min-height="400"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <v-container>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  class="mx-auto"
                  color="transparent"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/plan.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >{{ term.PRI_SUBTITLE_1 }}</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      {{ term.PRI_PAR_3 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/peso.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >{{ term.PRI_SUBTITLE_2 }}</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      {{ term.PRI_PAR_4 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/cajas.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >{{ term.PRI_SUBTITLE_3 }}</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      {{ term.PRI_PAR_5 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  class="mx-auto"
                  color="transparent"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/camion.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >{{ term.PRI_SUBTITLE_4 }}</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      {{ term.PRI_PAR_6 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/empaque.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >{{ term.PRI_SUBTITLE_5 }}</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      {{ term.PRI_PAR_7 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/seguro.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >{{ term.PRI_SUBTITLE_6 }}</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      {{ term.PRI_PAR_8 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "Pricing",

  data() {
    return {
      term: this.$store.getters['language/getTerms']
    };
  },
  computed: {
    lang () {
      return this.$store.getters['language/getTerms']; 
    }
  },
  watch: {
    lang () {
      this.term = this.$store.getters['language/getTerms'];
    }
  }
};
</script>
<style scoped>
.textColorBlue {
  color: #5CE1E6 !important;
}
.backgroundAlternative {
  background-color: #fafafa !important;
}
.breakWordRule {
  word-break: break-word !important;
}
</style>
