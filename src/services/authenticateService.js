import axios from 'axios';
import config from '@/config.js';

export default {
    async register (credentials) {
        return axios.post(config.baseURL + '/register', credentials);
    },
    async login (credentials) {
        return axios.post(config.baseURL + '/login', credentials);
    }
}