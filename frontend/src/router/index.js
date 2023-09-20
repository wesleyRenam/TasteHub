import {createRouter, createWebHistory} from 'vue-router';
import Login from '../components/LoginComponent.vue'

const routes = [
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../components/RegisterComponent.vue')
  },
  {
    path:'/',
    name:'Home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path:'/myrecipes',
    name:'MyRecipes',
    component: () => import('../pages/MyRecipes.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;