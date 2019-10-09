import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: () => import(/* webpackChunkName: "about" */ './views/NewEmployee.vue')
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: () => import(/* webpackChunkName: "about" */ './views/EditEmployee.vue')
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: () => import(/* webpackChunkName: "about" */ './views/ViewEmployee.vue')
    }
  ]
});
