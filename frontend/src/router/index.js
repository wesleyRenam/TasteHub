import {createRouter, createWebHistory} from 'vue-router';
import Login from '../components/LoginComponent.vue'
// import Register from '../components/RegisterComponent.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;