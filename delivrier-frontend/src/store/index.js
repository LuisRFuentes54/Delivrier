import Vue from 'vue';
import Vuex from 'vuex';
// import the auto exporter
import users from './modules/users.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users
  }, //all modules are automatically imported
  mutations: {},
  actions: {
    // reset({ commit }) {
    //   // resets state of all the modules
    //   Object.keys(modules).forEach(moduleName => {
    //     commit(`${moduleName}/RESET`);
    //   });
    // }
  },
  getters: {}
});
