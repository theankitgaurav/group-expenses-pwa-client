import axios from 'axios';
import config from '@/config.js';
import store from '@/store';
import data from '@/utils/data';

// This block intercepts all axios requests and appends token
// headers 
axios.interceptors.request.use(function (config) {
  config.headers.common['x-access-token'] = store.state.global.token;
  return config;
}, function (error) {
  console.error(`Error setting access token before api request: `, error);
  return Promise.reject(error);
});

function getEntries() {
  return axios.get(config.baseURL + '/expense');
}

const getExpenses = () => {
  return data.expenses;
}

function saveEntry(expenseForm) {
  return axios.post(config.baseURL + '/expense', expenseForm);
}

export default {
  getEntries,
  saveEntry,
  getExpenses
}