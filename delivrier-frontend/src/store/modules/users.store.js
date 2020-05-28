/* eslint-disable no-empty */
/* eslint-disable no-unused-labels */
import Repository from '../../http/repositories/repositoryFactory';
import jwt from '../../common/jwt.service';
const UserRepository = Repository.get('users');
const AuthorizeRepository = Repository.get('authorize');

// Initial State object
const initialState = () => {
  return { user: {}, error: '' };
};

// State object
const state = initialState();

// Getter functions
const getters = {
  getError(state) {
    return state;
  },
  getUser(state) {
    return state.user;
  },
  getUserId(state) {
    return state.user.id;
  },
};

// Mutations
const mutations = {
  set_user(state, data) {
    state.user = data;
  },
  set_error_message(state, error) {
    state.error = error;
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

      console.log(error.response.data.error);
      if (error.response.data.error === 'Unauthorized')
        commit('set_error_message', error.response.data.error);
      else {
        commit('set_error_message', 'An error has occurred trying to login.');
      }
    }
  },
  async authorizeFacebook({ commit }) {
    try {
      let response = await AuthorizeRepository.authorizeFacebook();
      response = await AuthorizeRepository.authorizeFacebookBackend({
        email: response.user.email,
        photoURL: response.user.photoURL
      });
      commit('set_user', response.user);
      commit('set_error_message', '');
      jwt.saveToken(response.access_token);
    } catch (error) {

      console.log(error.message);
      if (error.response.data.error === 'Unauthorized')
        commit('set_error_message', error.response.data.error);
      else {
        commit('set_error_message', 'An error has occurred trying to login.');
      }
    }
  },
  async createAccountGoogle({ commit }) {
    try {
      let response = await AuthorizeRepository.authorizeGoogle();
      let splittedEmail = response.additionalUserInfo.profile.email.split('@');
      //set user datos firebase
      commit('set_user', {
        username: splittedEmail[0],
        password: null,
        personClient: {
          firstName: response.additionalUserInfo.profile.given_name,
          secondName: null,
          firstLastName: response.additionalUserInfo.profile.family_name,
          secondLastName: null,
          phoneNumber: null,
          birthDate: null,
          identNum: null,
          email: response.additionalUserInfo.profile.email,
          photo: response.additionalUserInfo.profile.picture
        }
      });
      response = await AuthorizeRepository.authorizeGoogleBackend({
        email: response.user.email
      });
      commit('set_user', response.user);
      commit('set_error_message', '');
      jwt.saveToken(response.access_token);
    } catch (error) {

      console.log(error.response.data.error);
      if (error.response.data.error === 'Unauthorized')
        commit('set_error_message', error.response.data.error);
      else {
        commit('set_error_message', 'An error has occurred trying to sign in.');
      }
    }
  },
  async createAccount({ commit }, payload) {
    try {
      const response = await UserRepository.create(payload);
      commit('set_user', response.user);
      commit('set_error_message', '');
      jwt.saveToken(response.access_token);
    } catch (error) {
      commit('set_error_message', error.response.data.message);
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
