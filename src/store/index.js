import Vue from 'vue';
import Vuex from 'vuex';
import global from './modules/global';
import group from './modules/group';
import expense from './modules/expense';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    expense,
    group
  },
  strict: process.env.NODE_ENV !== 'production'
});