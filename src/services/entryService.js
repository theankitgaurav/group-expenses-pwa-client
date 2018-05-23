import axios from 'axios';
import config from '@/config.js';
import store from '@/store/store';

// async function setTokens () {
//   // const token = await localStorage.getItem('user-token')
//   const token = store.state.token;
//   if (token) {
//     axios.defaults.headers.common['x-access-token'] = token
//   }
// };

// This block intercepts all axios requests and appends token
// headers 
axios.interceptors.request.use(function (config) {
  config.headers.common['x-access-token'] = store.state.token;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default {
  async getEntries() {
    // await setTokens();
    return axios.get(config.baseURL + '/api/group/5aebbc6f4c9a241c70e62372/items');
  },
  async saveEntry(el) {
    // await setTokens();
    return axios.post(config.baseURL + '/api/group/5aebbc6f4c9a241c70e62372/items', el);
  }
}
