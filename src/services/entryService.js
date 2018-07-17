import axios from 'axios';
import config from '@/config.js';
import store from '@/store/store';


// This block intercepts all axios requests and appends token
// headers 
axios.interceptors.request.use(function (config) {
  config.headers.common['x-access-token'] = store.state.token;
  return config;
}, function (error) {
  return Promise.reject(error);
});
let entries = {data: []};
export default {
  
  async getEntries() {
    return axios.get(config.baseURL + '/expense');
  },
  async saveEntry(expenseForm) {
    return axios.post(config.baseURL + '/expense', expenseForm);
  }
}
