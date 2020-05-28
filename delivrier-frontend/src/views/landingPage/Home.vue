<template>
  <v-container fluid class="mt-4 breakWordRule">
    <v-lazy :options="{ threshold: 0.5 }" transition="slide-x-transition" min-height="400">
      <v-row class="text-center">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">{{ term.HOM_TITLE_1 }}</h1>
          <br />
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              {{ term.HOM_PAR_1 }}
            </p>
            <p
              class="title font-weight-bold textColorBlue"
            >{{ term.HOM_PAR_2 }}</p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-y-transition"
      min-height="400"
    >
      <v-row class="text-center backgroundAlternative">
        <v-col cols="12">
          <br />

          <h1
            class="font-weight-medium"
            :class="$vuetify.breakpoint.smAndUp ? 'display-2' : 'display-1'"
          >{{ term.HOM_TITLE_2 }}</h1>
          <br />
          <br />
          <v-container>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card flat class="mx-auto" color="transparent" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/alfiler.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule">{{ term.HOM_SUBTITLE_1 }}</v-card-title>

                  <v-card-text class="subtitle-1 font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_3 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat color="transparent" class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/caja.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule">{{ term.HOM_SUBTITLE_2 }}</v-card-title>

                  <v-card-text class="subtitle-1 font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_4 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat color="transparent" class="mx-auto" max-width="400">
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

                  <v-card-title class="justify-center breakWordRule">{{ term.HOM_SUBTITLE_3 }}</v-card-title>

                  <v-card-text class="subtitle-1 font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_5 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-y-transition"
      min-height="400"
    >
      <v-row class="text-center parallax">
        <v-col cols="12">
          <br />
          <h1 class="display-2 font-weight-medium breakWordRule white--text">{{ term.HOM_TITLE_3 }}</h1>
          <br />
          <p class="subtitle-1 font-weight-regular breakWordRule white--text">
            {{ term.HOM_PAR_6 }}
          </p>
          <v-container>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card color="transparent" flat class="mx-auto white--text" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/telegram.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule">{{ term.HOM_SUBTITLE_4 }}</v-card-title>

                  <v-card-text class="subtitle-1 white--text font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_7 }}
                      <span
                        class="textColorBlue"
                      >@myDelivrierBot</span> {{ term.HOM_PAR_8 }}
                      <span
                        class="textColorBlue"
                      >/PackageCheck</span>
                      {{ term.HOM_PAR_9 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat color="transparent" class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/factura.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title
                    class="justify-center breakWordRule white--text"
                  >{{ term.HOM_SUBTITLE_5 }}</v-card-title>

                  <v-card-text class="subtitle-1 white--text font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_10 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card color="transparent" flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/escanear.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule white--text">{{ term.HOM_SUBTITLE_6 }}</v-card-title>

                  <v-card-text class="subtitle-1 white--text font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_11 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card color="transparent" flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/correo.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title
                    class="justify-center breakWordRule white--text"
                  >{{ term.HOM_SUBTITLE_7 }}</v-card-title>

                  <v-card-text class="subtitle-1 white--text font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_12 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <br />
            <v-row justify="center">
              <p
                class="title font-weight-bold textColorBlue breakWordRule"
              >{{ term.HOM_PAR_13 }}</p>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" md="2" class="d-flex justify-center align-center">
                <v-btn
                  rounded
                  class="font-weight-bold"
                  color="#5CE1E6"
                  :large="!$vuetify.breakpoint.smAndDown"
                  dark
                  @click="route('SignUp')"
                >{{ term.HOM_BUTTOM }}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-x-transition"
      min-height="200"
    >
      <v-row class="text-center backgroundAlternative">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">{{ term.HOM_TITLE_4 }}</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              {{ term.HOM_PAR_14 }}
            </p>

            <p
              class="title font-weight-bold textColorBlue"
            >{{ term.HOM_PAR_15 }}</p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-x-transition"
      min-height="400"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <br />
          <h1 class="display-2 font-weight-medium">COVID-19</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              {{ term.HOM_PAR_16 }}
              <span
                class="textColorBlue"
              >COVID-19</span>. {{ term.HOM_PAR_17 }}
              <br />
              <br />{{ term.HOM_PAR_18 }}
              <span
                class="textColorBlue"
              >{{ term.HOM_PAR_19 }}</span>
              {{ term.HOM_PAR_20 }}
            </p>
          </v-container>
          <v-container>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/lavabo.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule">{{ term.HOM_SUBTITLE_8 }}</v-card-title>

                  <v-card-text class="subtitle-1 font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_21 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/prescripcion.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule">{{ term.HOM_SUBTITLE_9 }}</v-card-title>

                  <v-card-text class="subtitle-1 font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_22 }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/mascara.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule">{{ term.HOM_SUBTITLE_10 }}</v-card-title>

                  <v-card-text class="subtitle-1 font-weight-medium breakWordRule">
                    <div>
                      {{ term.HOM_PAR_23 }}
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
  name: 'Home',

  data() {
    return {
      term: this.$store.getters['language/getTerms']
    };
  },

  methods: {
    route(option) {
      this.$router.push({ name: `${option}` });
    }
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

.parallax {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../assets/delivery-box.png');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
