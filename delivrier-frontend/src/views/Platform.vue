<template>
  <div>
    <Sidebar v-if="$vuetify.breakpoint.mdAndUp" />
    <Header :term="term" @changeLanguage="changeLanguage"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/platform/Header';
import Sidebar from '../components/platform/Sidebar';
export default {
  name: 'Platform',

  components: {
    Header,
    Sidebar
  },

  data() {
    return {
      term: this.$store.getters['language/getTerms']
    };
  },

  methods: {
    async changeLanguage() {
      const lang = this.$store.getters['language/getLang'];
      if (lang === "en")
        await this.$store.dispatch('language/updateTerms','es');
      else
        await this.$store.dispatch('language/updateTerms','en');
      this.term = this.$store.getters['language/getTerms'];
    }
  }
};
</script>
<style scoped>
</style>
