import Vue from 'vue'
import Router from 'vue-router'
import RegisterView from '@/components/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})
