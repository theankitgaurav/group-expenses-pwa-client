import api from '@/api';
const GLOBAL_STORAGE_KEY = `GE_Global_Store`;

// Initial state
const state = {
  global: JSON.parse(window.localStorage.getItem(GLOBAL_STORAGE_KEY) || '{}')
}

// getters
const getters = {

}

// mutations
const mutations = {

}

// actions
const actions = {
    
}
export {GLOBAL_STORAGE_KEY};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    plugins
  }
  