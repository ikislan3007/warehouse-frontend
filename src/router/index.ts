import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import MainVue from '@/views/MainView.vue'
import App from '@/App.vue'
import RegistrationView from '@/views/RegistrationView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/warehouse',
    name: 'MainVue',
    component: MainVue
  },
  {
    path: '/sign-up',
    name: 'RegistrationView',
    component: RegistrationView
  }
]

const router = new VueRouter({
  routes
})

export default router
