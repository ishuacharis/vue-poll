import { authUserGuard, guestGuard } from './guards/route_guards';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound  from '../views/NotFound';

const Home = () => import("@/views/Home.vue");
const Housemates = () => import( '@/views/Housemates/Housemates.vue');
const Housemate = () => import('@/views/Housemate/Housemate.vue');
const Gallery = () => import('@/views/Gallery/Gallery.vue');
const Testing = () => import('@/views/Testing/Testing.vue');
const Auth = () => import('@/views/Auth/Auth.vue');
const ForgotPassword = () => import('@/views/Auth/ForgotPassword.vue');
const ResetPassword = () => import('@/views/Auth/ResetPassword.vue');
const Notifications = () => import('@/views/Notifications/Notifications.vue');
const Messages = () => import('@/views/Messages/Messages.vue');





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
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    beforeEnter: guestGuard,
    meta: { guest: true }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    beforeEnter: guestGuard,
    meta: { guest: true }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications,
    beforeEnter: authUserGuard,
    meta: { requiresAuth: true }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
    beforeEnter: authUserGuard,
    meta: { requiresAuth: true }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/Logout/Logout.vue'),
    beforeEnter: authUserGuard,
    meta: { requiresAuth: true }
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
