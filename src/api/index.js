import axios from 'axios';
import config from '@/config.js';
import secure from '@/api/secure';

function register (credentials) {
    return axios.post(config.baseURL + '/register', credentials);
};

function login (credentials) {
    return axios.post(config.baseURL + '/login', credentials);
}

export {
    register,
    login,
    secure
}