import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import RegisterView from '@/components/RegisterView'
import LoginView from '@/components/LoginView'
import HomeView from '@/components/HomeView'
import PostEntryView from '@/components/PostEntryView'
import authenticateService from '@/services/authenticateService'

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next()
    return
  }
  next('/home')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
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
      component: RegisterView,
      beforeEnter: ifNotAuthenticated      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/new-entry',
      name: 'newEntry',
      component: PostEntryView,
      beforeEnter: ifAuthenticated
    }
  ]
});

// Navigation guard to protect secure routes from 
// un-authorized access
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!Store.getters.isLoggedIn) {
//       authenticateService.logout();
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//    } else {
//     next() // make sure to always call next()!
//   }
// })

export default router;