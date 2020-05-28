<template>
  <div>
    <div class="parallax" height=" 70vh !important">
      <Navbar @changeLanguage="changeLanguage"/>
      <HomeHeader :term="term"/>
    </div>
    <router-view></router-view>
    <Footer :term="term"/>
  </div>
</template>

<script>
import HomeHeader from "../components/landingPage/HomeHeader";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";
export default {
  name: "Landingpage",

  components: {
    HomeHeader,
    Navbar,
    Footer
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
.parallax {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/delivery-guy.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
