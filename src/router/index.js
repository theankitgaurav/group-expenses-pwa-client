import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router);
/**
 * Function to dynamically import a Vue component
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
      name: 'index',
      component: loadView('LoginView'),
      meta: {title: "Group Expenses"},
      beforeEnter: ifNotAuthenticated      
    },
    {
      path: '/register',
      name: 'register',
      meta: {title: "Register"},
      component: loadView('RegisterView'),
      beforeEnter: ifNotAuthenticated      
    },
    {
      path: '/login',
      name: 'login',
      meta: {title: "Login"},
      component: loadView('LoginView'),
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/home',
      name: 'home',
      meta: {title: "Expenses"},
      component: loadView('ExpensesView'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/expense/:id',
      name: 'expense',
      meta: {title: "Expense"},
      component: loadView('ExpenseDetail'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/new-expense',
      name: 'newExpense',
      meta: {title: "Add a bill"},
      component: loadView('AddExpense'),
      beforeEnter: ifAuthenticated
    },
    {
      path: '/groups',
      name: 'groups',
      meta: {title: 'Group Expenses'},
      component: loadView('GroupsView'),
      beforeEnter: ifAuthenticated
    }
  ]
});

export default router;