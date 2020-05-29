/* eslint-disable no-empty */
/* eslint-disable no-unused-labels */
import Repository from '../../http/repositories/repositoryFactory';
const LanguageRepository = Repository.get('language');
import { terms } from "../i18n/constant";

// Initial State object
const initialState = () => {
  return { lang: 'en', term: terms, error: '' };
};

// State object
const state = initialState();

// Getter functions
const getters = {
  getTerms(state) {
    return state.term;
  },
  getLang(state) {
    return state.lang;
  }
};

// Mutations
const mutations = {
  set_terms(state, data) {
    state.term = data;
  },
  set_lang(state, lang) {
    state.lang = lang;
  },
  set_error(state, error) {
    state.error = error;
  },
};

// Actions
const actions = {
  async updateTerms({ commit },cod) {
    try {
      commit('set_lang',cod);
      let response = await LanguageRepository.getTerms(cod);
      commit('set_terms', response.term);
    } catch (error) {
      // handle the error here
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
