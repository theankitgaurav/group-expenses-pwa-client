import Vue from 'vue';
import Vuex from 'vuex';
import glabal from './modules/global';
import groups from './modules/groups';
import expenses from './modules/expenses';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    glabal,
    expenses,
    groups
  },
  strict: process.env.NODE_ENV !== 'production'
});