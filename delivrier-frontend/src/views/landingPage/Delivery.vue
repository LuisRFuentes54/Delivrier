<template>
  <v-container fluid class="mt-4 breakWordRule">
    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="slide-x-transition"
      min-height="200"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">{{ term.DEL_TITLE_1 }}</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular ">
              <span class="textColorBlue">Delivrier</span> {{ term.DEL_PAR_1 }}
            </p>
          </v-container>
          <p class="title font-weight-bold textColorBlue">
            {{ term.DEL_PAR_2 }}
          </p>
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

          <h1 class="display-2 font-weight-medium">{{ term.DEL_TITLE_2 }}</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular ">
              {{ term.DEL_PAR_3 }}
            </p>
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
                          src="../../assets/login.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >{{ term.DEL_SUBTITLE_1 }}</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        {{ term.DEL_PAR_4 }}
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
                          src="../../assets/register.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >{{ term.DEL_SUBTITLE_2 }}</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        {{ term.DEL_PAR_5 }}
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
                          src="../../assets/tracking.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >{{ term.DEL_SUBTITLE_3 }}</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        {{ term.DEL_PAR_6 }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
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
      <v-row class="text-center">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">{{ term.DEL_TITLE_3 }}</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              {{ term.DEL_PAR_7 }}
            </p>
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
                          src="../../assets/standard.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >Standard</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        {{ term.DEL_PAR_8 }}
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
                          src="../../assets/priority.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >Priority</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        {{ term.DEL_PAR_9 }}
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
                          src="../../assets/express.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >Express</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        {{ term.DEL_PAR_10 }}
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "Delivery",

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
