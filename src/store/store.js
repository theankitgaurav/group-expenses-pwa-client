import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isLoggedIn: false
    },
    getters: {
        nameOfUser: state => {
            return (state.user) ? state.user.username : "Stranger";
        },
        isLoggedIn: state => state.isLoggedIn
    },
    mutations: {
        setToken (state, token) {
            state.token = token;
        },
        setUser (state, user) {
            state.user = user;
        },
        setIsLoggedIn (state, isLoggedIn ) {
            state.isLoggedIn = isLoggedIn;
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token);
        },
        setUser ({commit}, user) {
            commit('setUser', user);
        },
        setIsLoggedIn ({commit}, isLoggedIn) {
            commit('setIsLoggedIn', isLoggedIn);
        }
    }
});