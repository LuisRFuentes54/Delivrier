import Vue from 'vue';
import Vuex from 'vuex';
// import the auto exporter
import modules from './modules';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules, //all modules are automatically imported
  mutations: {},
  actions: {
    reset({ commit }) {
      //resets state of all the modules
      Object.keys(modules).forEach(moduleName => {
        commit(`${moduleName}/reset`);
      });
    }
  },
  getters: {},
  plugins: [createPersistedState({ paths: ['users.user'] })]
});
