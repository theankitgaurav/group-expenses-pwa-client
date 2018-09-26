import axios from 'axios';
import config from '@/config.js';
import store from '@/store';
import data from '@/utils/data';

// This block intercepts all axios requests and appends token
// headers 
axios.interceptors.request.use(function (config) {
  config.headers.common['x-access-token'] = store.state.token;
  return config;
}, function (error) {
  console.error(`Error setting access token before api request: `, error);
  return Promise.reject(error);
});

async function deleteExpense (expenseId) {
  return axios.delete(config.baseURL + '/expense/' + expenseId);
}

async function getExpenses() {
  return axios.get(config.baseURL + '/expense');
}

async function saveEntry(expenseForm) {
  return axios.post(config.baseURL + '/expense', expenseForm);
}

async function getGroups () {
  return axios.get(config.baseURL + '/group');
}

async function getCategories (groupId) {
  return axios.get(`${config.baseURL}/group/${groupId}/category`);
}

async function getGroupMemebers (groupId) {
  return axios.get(`${config.baseURL}/group/${groupId}/member`);
}

export default {
  deleteExpense,
  getCategories,
  getExpenses,
  getGroupMemebers,
  getGroups,
  saveEntry
}