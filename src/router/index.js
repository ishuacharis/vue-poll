import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import NotFound  from '../views/NotFound'

const Housemates = () => import( '@/views/Housemates/Housemates.vue')
const Housemate = () => import('@/views/Housemate/Housemate.vue')
const Testing = () => import('@/views/Testing/Testing.vue')

const routes = [
  {
    path: '/',
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
    component: Housemates
  },
  {
    path: '/housemate/:screen_name',
    name: 'Housemate',
    component: Housemate
  },
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
