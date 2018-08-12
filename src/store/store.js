// import Vue from 'vue'
// import Vuex from 'vuex';
// import {register, login, secure} from '@/api';
// import axios from 'axios';
// import _ from 'lodash';

// Vue.use(Vuex);

// /**
//  * FIXME: Lodash isEqual() method is deep comparing objects
//  * resulting is incorrect behavior
//  *
//  * @param {Object} data Object that needs to be comapred to its counterpart in localstorage
//  * @param {String} localStorageItemName Key of the item in localstorage 
//  * @returns
//  */
// async function isLocalDataStale (data, localStorageItemName) {
//     // Return true if item doesn't exists in localStorage
//     if (!localStorage.getItem(localStorageItemName)) {
//         return true;
//     }
//     // Return the deep-comparsion of local item and input data
//     const localData = JSON.parse(localStorage.getItem(localStorageItemName))
//     return _.isEqual(data, localData);
// }

// export default new Vuex.Store({
//     strict: true,
//     state: {
//         token: localStorage.getItem('user-token'),
//         user: JSON.parse(localStorage.getItem('user')),
//         title: `Group Expenses`,
//         groupsList: JSON.parse(localStorage.getItem('groupsList')) || [],
//         entriesList: JSON.parse(localStorage.getItem('entriesList')) || [],
//         appConfig: {
//             enableNavigationTabs: false,
//             backButtonRequired: false,
//         }
//     },
//     getters: {
//         isAuthenticated: state => !!state.token
//     },
//     mutations: {
//         authSuccess:  (state, {token, user}) => {
//             state.token = token;
//             state.user = user;
//         },
//         authError: (state) => {
//             state.token = null;
//             state.user = null;
//         },
//         authLogout: (state) => {
//             state.token = null;
//             state.user = null;
//         },
//         setTitle: (state, title) => {
//             state.title = title;
//         },
//         enableNavigationTabs: (state, value) => {
//             state.appConfig.enableNavigationTabs = value;
//         },
//         backButtonRequired: (state, value) => {
//             state.appConfig.backButtonRequired = value;
//         },
//         setEntriesList: (state, list) => {
//             state.entriesList = list;
//         },
//         setGroupsList: (state, list) => {
//             state.groupsList = list;
//         }
//     },
//     actions: {
//         async authRequest ({commit}, { email, password }) {
//             try {
//                 const res = await login({ email, password });
//                 const token = res.data.data.token;
//                 const user = res.data.data.user;
//                 commit("authSuccess", {token, user});
//                 await localStorage.setItem('user-token', token); // store the token in localstorage
//                 await localStorage.setItem('user', JSON.stringify(user));
//             } catch (err) {
//                 commit("authError");
//                 await localStorage.clear();
//                 throw err;
//             }
//         },
//         async authLogout ({commit}) {
//             commit("authLogout");
//             await localStorage.clear();
//             delete axios.defaults.headers.common['x-access-token'];
//         },
//         async setEntriesList ({commit}) {
//             secure.getEntries()
//             .then((res)=>{
//                 console.log('Entries: ', res)
//                 const listOfEntries = res.data.data;
//                 if (isLocalDataStale(listOfEntries, 'entriesList')) {
//                     console.log('Replacing stale local data with server data');
//                     commit('setEntriesList', listOfEntries);
//                     localStorage.setItem('entriesList', JSON.stringify(listOfEntries));
//                 } else {
//                     console.log('Data in sync with server');
//                 }
//             })
//             .catch((err)=>{
//                 console.error('Error while performing setEntriesList: ', err);
//                 throw err;
//             })
//         }
//     }
// }); 