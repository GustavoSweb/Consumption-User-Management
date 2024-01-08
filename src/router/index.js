import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import RegisterPage from '../pages/register/index'
import LoginPage from '../pages/login/index'
import Users from '../pages/Admin/Users/index'
import Auth from '@/services/Auth/index'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path:'/admin/users',
    name:'Users',
    beforeEnter: Auth.ValidateAdmin,
    component: Users
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
