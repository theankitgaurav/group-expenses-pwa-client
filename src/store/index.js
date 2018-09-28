import Vue from 'vue'
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import plugins from './plugins';
import constants from '@/utils/constants';

Vue.use(Vuex);

const state = {
    token: JSON.parse(localStorage.getItem(constants.TOKEN)) || '',
    user: JSON.parse(localStorage.getItem(constants.USER)) || {},
    title: `Group Expenses`,
    groupsList: JSON.parse(localStorage.getItem(constants.GROUPS)) || [],
    entriesList: JSON.parse(localStorage.getItem(constants.EXPENSES)) || [],
    appConfig: {
        enableNavigationTabs: false,
        backButtonRequired: false,
    },
    showError: false,
    errorMessage: null
};

export default new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations,
    actions,
    plugins
}); 