import axios from 'axios';
import config from '@/config.js';
import secure from '@/api/secure';

export function register (credentials) {
    return axios.post(config.baseURL + '/register', credentials);
};

export function login (credentials) {
    return axios.post(config.baseURL + '/login', credentials);
}

export default secure;