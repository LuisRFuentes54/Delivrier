/* eslint-disable no-empty */
/* eslint-disable no-unused-labels */
import Repository from "../../http/repositories/repositoryFactory";
const UserRepository = Repository.get("users");

// Initial State object
const initialState = () => {
  user: {
  }
};

// State object
const state = initialState();

// Getter functions
const getters = {};

// Mutations
const mutations = {
  set_user(state, data) {
    state.user = data;
  },
  reset(state) {
    const newState = initialState();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key];
    });
  }
};

// Actions
const actions = {
  async get({ commit }, payload) {
    try {
      const response = await UserRepository.get(payload);
      commit("set_user", response);
    } catch (error) {
      // handle the error here
    }
  },
  reset({ commit }) {
    commit("reset");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
