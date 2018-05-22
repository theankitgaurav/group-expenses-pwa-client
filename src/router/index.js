import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import RegisterView from '@/components/RegisterView'
import LoginView from '@/components/LoginView'
import HomeView from '@/components/HomeView'
import PostEntryView from '@/components/PostEntryView'

Vue.use(Router);

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

export default router;