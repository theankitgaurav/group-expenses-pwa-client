import axios from 'axios';
import config from '@/config.js';

export default {
    async register (credentials) {
        return axios.post(config.baseURL + '/api/signup', credentials);
    },
    async login (credentials) {
        return axios.post(config.baseURL + '/api/signin', credentials);
    }
}