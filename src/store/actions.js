import {register, login, secure} from '@/api';
import axios from 'axios';

export default {
    async authRequest ({commit}, { email, password }) {
        try {
            const res = await login({ email, password });
            const token = res.data.data.token;
            const user = res.data.data.user;
            commit("authSuccess", {token, user});
        } catch (err) {
            commit("authError");
            await localStorage.clear();
            throw err;
        }
    },
    async authLogout ({commit}) {
        commit("authLogout");
        delete axios.defaults.headers.common['x-access-token'];
    },
    async setEntriesList ({commit}) {
        secure.getEntries()
        .then((res)=>{
            const listOfEntries = res.data.data;
            commit('setEntriesList', listOfEntries);
        })
        .catch((err)=>{
            console.error('Error while performing setEntriesList: ', err);
            throw err;
        })
    }
}