import Vue from 'vue'
import Router from 'vue-router'
import RegisterView from '@/components/RegisterView'
import LoginView from '@/components/LoginView'
import HomeView from '@/components/HomeView'
import PostEntryView from '@/components/PostEntryView'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/newEntry',
      name: 'newEntry',
      component: PostEntryView
    }
  ]
});
