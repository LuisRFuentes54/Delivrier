<template>
  <div>
    <Sidebar v-if="$vuetify.breakpoint.mdAndUp" />
    <Header />
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

  data: () => ({
    //
  })
};
</script>
<style scoped>
</style>
