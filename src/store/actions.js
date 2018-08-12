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
            const expenses = await secure.getEntries();
            commit ('SET_EXPENSES', expenses);
        } catch (err) {
            console.error('Error while performing SET_EXPENSES: ', err);
            throw err;            
        }
    }
}