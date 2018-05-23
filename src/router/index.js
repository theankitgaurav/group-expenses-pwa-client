import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router);
/**
 * Function to dynamically import a Vue component
 * FIXME: ESLint may raise error due to the fact that 
 * it can’t recognize the import function
 * @param {any} view 
 * @returns 
 */
function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/home')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index'
    },
    {
      path: '/register',
      name: 'register',
      component: loadView('RegisterView'),
      beforeEnter: ifNotAuthenticated      
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('LoginView'),
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/home',
      name: 'home',
      component: loadView('HomeView'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/new-entry',
      name: 'newEntry',
      component: loadView('PostEntryView'),
      beforeEnter: ifAuthenticated
    }
  ]
});

export default router;