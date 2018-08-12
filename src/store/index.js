import Vue from 'vue'
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import plugins from './plugins';

Vue.use(Vuex);

const state = {
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    title: `Group Expenses`,
    groupsList: JSON.parse(localStorage.getItem('groupsList')) || [],
    entriesList: JSON.parse(localStorage.getItem('entriesList')) || [],
    appConfig: {
        enableNavigationTabs: false,
        backButtonRequired: false,
    }
};

export default new Vuex.Store({
    strict: true,
    state,
    getters,
    mutations,
    actions,
    plugins
}); 