import axios from 'axios';
import config from '@/config.js';
import store from '@/store/store';

(async function () {
  const token = await localStorage.getItem('user-token')
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token
  }
})();


export default {
  async getEntries() {
    return axios.get(config.baseURL + '/api/group/5aebbc6f4c9a241c70e62372/items');
  },
  async saveEntry(el) {
      return axios.post(config.baseURL + '/api/group/5aebbc6f4c9a241c70e62372/items', el);
  }
}
