import Vue from 'vue'
import store from '../store' 
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/Index.vue'
import EventView from '../views/Event.vue'
import BlogView from '../views/Blog.vue'
import ContactView from '../views/Contact.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'

import BandView from '../views/Band/Index.vue'

import AdminView from '../views/Admin/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/event',
    name: 'event',
    component: EventView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      requiresUnauth: true
    }
  },

  // Band
  {
    path: '/band',
    name: 'band',
    component: BandView,
    meta: {
      requiresAuth: true
    }
  },

  // Admin
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated
  const permissionName = store.state.permissionName
  if (to.matched.some(record => record.meta.requiresAuth) && isAuthenticated === false) {
    next({ name: 'Login'});
  } else if(permissionName === 'Admin' && to.matched.some(record => record.meta.requiresUnauth) && isAuthenticated === true){
    next({ name: 'Admin'});
  } else if(permissionName === 'Band' && to.matched.some(record => record.meta.requiresUnauth) && isAuthenticated === true){
    next({ name: 'Band'});
  } else {
    next()
  }
})

export default router
