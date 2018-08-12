import {secure} from '@/api';
import plugins from './plugins';
import {EXPENSES_STORAGE_KEY} from '@/utils/data';


// Initial state
const state = {
  //shape: [{id, amount, category, details, paidBy, paidOn, paidInGroupName}]
  expenses: JSON.parse(window.localStorage.getItem(EXPENSES_STORAGE_KEY) || '[]')
}

// getters
const getters = {

}

// mutations
const mutations = {
  SET_EXPENSES: (state, expenses) => {
    state.expenses = expenses
  },
}

// actions
const actions = {
  getAllExpenses ({ commit }) {
    secure.getExpenses(expenses => {
      commit('SET_EXPENSES', expenses);
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
  