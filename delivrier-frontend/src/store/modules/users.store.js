/* eslint-disable no-empty */
/* eslint-disable no-unused-labels */
import Repository from '../../http/repositories/repositoryFactory';
import jwt from '../../common/jwt.service';
const UserRepository = Repository.get('users');
const TrackingRepository = Repository.get('tracking');
const AuthorizeRepository = Repository.get('authorize');

// Initial State object
const initialState = () => {
  return { user: {}, tracking_info: {}, error: '' };
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
  getTrackingInfo(state) {
    return state.tracking_info;
  },
  getUserId(state) {
    return state.user.id;
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
  set_tracking_info(state, data) {
    state.tracking_info = data;
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
      if (error.response && error.response.data.error === 'Unauthorized')
        commit('set_error_message', error.response.data.error);
      else if (
        error.message &&
        error.message ===
          'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.'
      ) {
        commit('set_error_message', error.message);
      } else {
        commit('set_error_message', 'An error has occurred trying to sign in.');
      }
    }
  },
  async createAccountFacebook({ commit }) {
    try {
      let response = await AuthorizeRepository.authorizeFacebook();
      let splittedEmail = response.additionalUserInfo.profile.email.split('@');
      //set user datos firebase
      commit('set_user', {
        username: splittedEmail[0],
        password: null,
        personClient: {
          firstName: response.additionalUserInfo.profile.first_name,
          secondName: null,
          firstLastName: response.additionalUserInfo.profile.last_name,
          secondLastName: null,
          phoneNumber: null,
          birthDate: null,
          identNum: null,
          email: response.additionalUserInfo.profile.email,
          photo: response.additionalUserInfo.profile.picture.data.url
        }
      });
      response = await AuthorizeRepository.authorizeFacebookBackend({
        email: response.user.email
      });
      commit('set_user', response.user);
      commit('set_error_message', '');
      jwt.saveToken(response.access_token);
    } catch (error) {
      if (error.response && error.response.data.error === 'Unauthorized')
        commit('set_error_message', error.response.data.error);
      else if (
        error.message &&
        error.message ===
          'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.'
      ) {
        commit('set_error_message', error.message);
      } else {
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
      if (
        error.response.data.message ===
        'The username is already in use in Delivrier'
      )
        commit('set_error_message', error.response.data.message);
      else
        commit('set_error_message', 'An error has occurred trying to sign up.');
    }
  },
  async tracking({ commit }, payload) {
    try {
      if (payload !== undefined) {
        const response = await TrackingRepository.get(payload);
        commit('set_tracking_info', response);
        commit('set_error_message', '');
      }
    } catch (error) {
    }
  },
  async pdf({ commit }, payload) {
    try {
      const response = await TrackingRepository.sendPDF(payload);
      commit('set_error_message', '');
    } catch (error) {
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
