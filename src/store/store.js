import Vue from 'vue'
import Vuex from 'vuex';
import authenticateService from "@/services/authenticateService";
import entryService from "@/services/entryService";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        token: localStorage.getItem('user-token') || null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        title: `Group Expenses`,
        groupsList: JSON.parse(localStorage.getItem('groupsList')) || [],
        entriesList: JSON.parse(localStorage.getItem('entriesList')) || [],
        appConfig: {
            enableNavigationTabs: false,
            backButtonRequired: false,
        }
    },
    getters: {
        isAuthenticated: state => !!state.token
    },
    mutations: {
        authSuccess:  (state, {token, user}) => {
            state.token = token;
            state.user = user;
        },
        authError: (state) => {
            state.token = null;
            state.user = null;
        },
        authLogout: (state) => {
            state.token = null;
            state.user = null;
        },
        setTitle: (state, title) => {
            state.title = title;
        },
        enableNavigationTabs: (state, value) => {
            state.appConfig.enableNavigationTabs = value;
        },
        backButtonRequired: (state, value) => {
            state.appConfig.backButtonRequired = value;
        },
        setEntriesList: (state, list) => {
            state.entriesList = list;
        },
        setGroupsList: (state, list) => {
            state.groupsList = list;
        }
    },
    actions: {
        async authRequest ({commit}, { username, password }) {
            try {
                const res = await authenticateService.login({ username, password });
                const token = res.data.token;
                const user = res.data.user;
                commit("authSuccess", {token, user});
                await localStorage.setItem('user-token', token); // store the token in localstorage
                await localStorage.setItem('user', JSON.stringify(user));
            } catch (err) {
                commit("authError");
                await localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                await localStorage.removeItem('user');
                throw err;
            }
        },
        async authLogout ({commit}) {
            commit("authLogout");
            await localStorage.removeItem('user-token');
            await localStorage.removeItem('user');
            delete axios.defaults.headers.common['Authorization'];
        },
        async setEntriesList ({commit}) {
            entryService.getEntries()
                .then((res)=>{
                    const listOfEntries = res.response.data;
                    commit('setEntriesList', listOfEntries);
                    localStorage.setItem('entriesList', JSON.stringify(listOfEntries));
                })
                .catch((err)=>{
                    console.error(err);
                    throw err;
                })
        }
    }
});