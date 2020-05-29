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
          <h1 class="display-2 font-weight-medium">{{ term.TRA_TITLE }}</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              {{ term.TRA_PAR_1 }}
            </p>

            <p class="title font-weight-bold textColorBlue">
              {{ term.TRA_PAR_2 }}
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: 'Tracking',

  data() {
    return {
      term: this.$store.getters['language/getTerms']
    };
  },
  computed: {
    lang() {
      return this.$store.getters['language/getTerms'];
    }
  },
  watch: {
    lang() {
      this.term = this.$store.getters['language/getTerms'];
    }
  }
};
</script>
<style scoped>
.textColorBlue {
  color: #5ce1e6 !important;
}
.backgroundAlternative {
  background-color: #fafafa !important;
}
.breakWordRule {
  word-break: break-word !important;
}
</style>
