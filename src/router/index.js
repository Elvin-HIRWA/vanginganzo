import Vue from 'vue'
import store from '../store' 
import VueRouter from 'vue-router'
import IndexView from '../views/Index.vue'
import EventView from '../views/Event.vue'
import BlogView from '../views/Blog.vue'
import ContactView from '../views/Contact.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'


import BandView from '../views/Bands/Dashboard.vue'
import EventsView from '../views/Bands/Event.vue'
import NewEventView from '../views/Bands/NewEvent.vue'
import EventUpdateView from '../views/Bands/EventUpdate.vue'

import BlogsView from '../views/Bands/Blog.vue'
import NewBlogView from '../views/Bands/NewBlog.vue'
import BlogUpdateView from '../views/Bands/BlogUpdate.vue'

import AdminView from '../views/Admins/Dashboard.vue'
import PermissionView from '../views/Admins/Permission.vue'
import UserView from '../views/Admins/User.vue'
import KeyView from '../views/Admins/Key.vue'
import PermissionUpdateView from '../views/Admins/PermissionUpdate.vue'
import KeySend from '../views/Admins/KeySend.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/event',
    name: 'Event',
    component: EventView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: {
      requiresUnauth: true
    }
  },

  // Band
  {
    path: '/band',
    name: 'Band',
    component: BandView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/newEvent',
    name: 'NewEvent',
    component: NewEventView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/event/:id',
    name: 'EventUpdate',
    component: EventUpdateView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/newBlog',
    name: 'NewBlog',
    component: NewBlogView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blog/:id',
    name: 'BlogUpdate',
    component: BlogUpdateView,
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
    path: '/permissions',
    name: 'Permissions',
    component: PermissionView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/permission-update/:id',
    name: 'PermissionUpdate',
    component: PermissionUpdateView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/keys',
    name: 'Keys',
    component: KeyView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/key-send/:id',
    name: 'KeySend',
    component: KeySend,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: UserView,
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
  const isAuthenticated = store.state.isAuthenticated || localStorage.getItem('token')
  const permissionName = store.state.permissionName
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login'});
  } else if(permissionName === 'Admin' && to.matched.some(record => record.meta.requiresUnauth) && isAuthenticated){
    next({ name: 'Admin'});
  } else if(permissionName === 'Band' && to.matched.some(record => record.meta.requiresUnauth) && isAuthenticated){
    next({ name: 'Band'});
  } else {
    next()
  }
})

export default router
