import {secure} from '@/api';
import plugins from './plugins';
import {GROUPS_STORAGE_KEY} from '@/utils/data';

// Initial state
const state = {
  //shape: [{id, name, members: [{id, name}]}]
  groups: JSON.parse(localStorage.getItem(GROUPS_STORAGE_KEY) || '[]')
}

// getters
const getters = {

}

// mutations
const mutations = {
  setGroups (state, groups) {
    state.groups = groups
  },
}

// actions
const actions = {
  getAllGroups ({ commit }) {
    secure.getGroups(groups => {
      commit('setGroups', groups);
    });
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
  