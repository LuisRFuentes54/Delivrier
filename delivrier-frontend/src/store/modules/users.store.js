/* eslint-disable no-empty */
/* eslint-disable no-unused-labels */
import Repository from '../../http/repositories/repositoryFactory';
import jwt from '../../common/jwt.service';
const UserRepository = Repository.get('users');
const AuthorizeRepository = Repository.get('authorize');

// Initial State object
const initialState = () => {
  user: {
  }
  error: '';
};

// State object
const state = {
  user: {},
  error: ''
};

// Getter functions
const getters = {
  getError(state) {
    return state;
  }
};

// Mutations
const mutations = {
  set_user(state, data) {
    state.user = data;
  },
  set_error_message(state, error) {
    state.error = error;
  },
  reset() {
    const newState = initialState();
    Object.keys(newState).forEach(key => {
      this.state[key] = newState[key];
    });
  }
};

// Actions
const actions = {
  async get({ commit }, payload) {
    try {
      const response = await UserRepository.get(payload);
      commit('set_user', response);
    } catch (error) {
      // handle the error here
    }
  },
  async authorize({ commit }, payload) {
    try {
      const response = await AuthorizeRepository.authorize(payload);
      commit('set_user', response.user);
      commit('set_error_message', '');
      jwt.saveToken(response.access_token);
    } catch (error) {
      commit('set_error_message', error.response.data.error);
    }
  },
  async createAccount({ commit }, payload) {
    try {
      const response = await UserRepository.create(payload);
      commit('set_user', response.user);
      commit('set_error_message', '');
      jwt.saveToken(response.access_token);
    } catch (error) {
      commit('set_error_message', error.response.data.error);
    }
  },
  reset({ commit }) {
    commit('reset');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
