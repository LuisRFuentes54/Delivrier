import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueTheMask from 'vue-the-mask';
import firebase from 'firebase';

import { firebaseConfig } from '../firebase/fireBaseConfig';

Vue.config.productionTip = false;
Vue.use(VueTheMask);
new Vue({
  router,
  store,

  created() {
    firebase.initializeApp(firebaseConfig);
  },

  vuetify,
  render: h => h(App)
}).$mount('#app');
