<template>
  <div>
    <div class="parallax" height=" 70vh !important">
      <Navbar />
      <HomeHeader />
    </div>
    <router-view></router-view>
    <Footer />
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

  data: () => ({
    //
  })
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
