import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/login',
      name: 'login-employee',
      meta:{
        requiresGuest:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/singUp',
      name: 'singUp',
      meta:{
        requiresGuest:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue')
    },
    {
      path: '/new',
      name: 'new-employee',
      meta:{
        requiresAuth:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/NewEmployee.vue')
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      meta:{
        requiresAuth:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/EditEmployee.vue')
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      meta:{
        requiresAuth:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/ViewEmployee.vue')
    }
    
  ]
});


//nav guards
router.beforeEach((to,from,next) => {
  // check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check i not logged in
    if (!firebase.auth().currentUser) {
      next({
        path:'/login',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      next();
    }
  }
  else if(to.matched.some(record => record.meta.requiresGuest)){
       // check i not logged in
    if (firebase.auth().currentUser) {
      next({
        path:'/',
        query:{
          redirect: to.fullPath
        }
      });
    }else{
      // proceed to route
      next();
    }
  }else{
    // proceed to route
    next();
  }
});

export default router;