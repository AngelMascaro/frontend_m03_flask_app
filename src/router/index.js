import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import InitView from '../views/InitView.vue'
import LoginView from '../views/LoginView.vue'
import VerifyView from '../views/VerifyView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: {
      path: "/register"
    },
  },
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
    path: '/init',
    name: 'init',
    component: InitView
  },
  {
    path: '/verify/:token?',
    name: 'verify',
    component: VerifyView,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
