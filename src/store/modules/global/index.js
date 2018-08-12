import {login, register, secure} from '@/api';
import plugins from '@/store/modules/global/plugins';
import {GLOBAL_STORAGE_KEY} from '@/utils/data';

// Initial state
const state = {
  // Shape: {user, token} OR {}
  global: JSON.parse(window.localStorage.getItem(GLOBAL_STORAGE_KEY)) || {},
  appConfig: {
    title: `Group Expenses`,
    enableNavigationTabs: true,
    backButtonRequired: false,
  }
}

// getters
const getters = {
  isAuthenticated: (state, getters, rootState) => {
    //FIXME: Add a better check for verifying authentication
    debugger;
    return !!state.global.token;
  }
}

// mutations
const mutations = {
  AUTH_SUCCESS: (state, {token, user}) => {
    state.global.token = token;
    state.global.user = user;
  },
  AUTH_CLEAR: (state) => {
    state.global = {};
  }
}

// actions
const actions = {
  async login ({state, commit, rootState}, { email, password }) {
    try {
      const res = await login({ email, password });
      const token = res.data.data.token;
      const user = res.data.data.user;
      commit("AUTH_SUCCESS", {token, user});
    } catch (err) {
      throw err;
    }
  },
  async logout ({state, commit, rootState}) {
    commit('AUTH_CLEAR');
  }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    plugins
  }
  