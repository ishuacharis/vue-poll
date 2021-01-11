import { authUserGuard, guestGuard } from './guards/route_guards';
import { createRouter, createWebHistory } from 'vue-router'
import NotFound  from '../views/NotFound'

const Home = () => import("@/views/Home.vue")
const Housemates = () => import( '@/views/Housemates/Housemates.vue')
const Housemate = () => import('@/views/Housemate/Housemate.vue')
const Gallery = () => import('@/views/Gallery/Gallery.vue')
const Testing = () => import('@/views/Testing/Testing.vue')
const Auth = () => import('@/views/Auth/Auth.vue')




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/testing',
    name: 'Testing',
    component: Testing
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/housemates',
    name: 'Housemates',
    component: Housemates,
    beforeEnter: authUserGuard,
    meta: {requiresAuth: true}
  },
  {
    path: '/housemate/:screen_name',
    name: 'Housemate',
    component: Housemate
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    beforeEnter: guestGuard,
    meta: { guest: true }
  },
  // {
  //   path: '/auth?a=login',
  //   name: 'Auth',
  //   component: Auth,
  // },
  {
    path: '/**',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
