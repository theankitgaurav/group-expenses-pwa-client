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

export default {
  async getEntries() {
    return axios.get(config.baseURL + '/api/group/5aebbc6f4c9a241c70e62372/items');
  },
  async saveEntry(el) {
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        if (Math.round(Math.random() * 10) < 3) reject({status: 500, response: {data: "Something wrong happened on the server"}});
        if (Math.round(Math.random() * 10) > 7) reject({status: 400, response: {data: "Invalid post data"}});
        resolve({status: 200, response: {data: "New post created"}});
      }, 2000);
    })
    // TODO: Uncomment the following line and delete the lines above this comment
    // return axios.post(config.baseURL + '/api/group/5aebbc6f4c9a241c70e62372/items', el);
  }
}