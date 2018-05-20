import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/store'
import RegisterView from '@/components/RegisterView'
import LoginView from '@/components/LoginView'
import HomeView from '@/components/HomeView'
import PostEntryView from '@/components/PostEntryView'
import authenticateService from '@/services/authenticateService'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/new-entry',
      name: 'newEntry',
      component: PostEntryView,
      meta: { requiresAuth: true }
    }
  ]
});

// Navigation guard to protect secure routes from 
// un-authorized access
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!Store.getters.isLoggedIn) {
      authenticateService.logout();
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
   } else {
    next() // make sure to always call next()!
  }
})

export default router;