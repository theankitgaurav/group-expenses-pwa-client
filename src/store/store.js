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
        }
    },
    mutations: {
        setToken (state, token) {
            state.token = token;
        },
        setUser (state, user) {
            state.user = user;
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token);
        },
        setUser ({commit}, user) {
            commit('setUser', user);
        }
    }
});