import {register, login, secure} from '@/api';
import axios from 'axios';

export default {
    async authRequest ({commit}, { email, password }) {
        try {
            const res = await login({ email, password });
            const token = res.data.data.token;
            const user = res.data.data.user;
            commit("AUTH_SUCCESS", {token, user});
        } catch (err) {
            commit("authError");
            await localStorage.clear();
            throw err;
        }
    },
    async register ({commit}, {name, email, password}) {
        const res = await register({name, email, password});
        const user = res.data.data.user;
        const token = res.data.data.token;
        commit("AUTH_SUCCESS", {token, user});
    },
    async AUTH_LOGOUT ({commit}) {
        commit("AUTH_LOGOUT");
        delete axios.defaults.headers.common['x-access-token'];
    },
    async getExpenses ({commit}) {
        try {
            const expenses = await secure.getExpenses();
            const expensesArr = expenses.data.data || [];
            commit ('SET_EXPENSES', expensesArr);
        } catch (err) {
            console.error('Error while performing SET_EXPENSES: ', err);
            throw err;            
        }
    },
    async showSnack({commit}, message) {
        if (typeof message === "object") {
            const errorMessage = JSON.stringify(message);
            console.error('Error:' + errorMessage);
            commit('SHOW_SNACK', errorMessage, Infinity);
        } else {
            console.log('LOG: ' + message);
            commit('SHOW_SNACK', message, 2000);
        }
    }
}

