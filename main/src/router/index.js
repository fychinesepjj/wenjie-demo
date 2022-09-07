import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import APage from '../views/APage.vue'
import BPage from '../views/BPage.vue'
import AppPage from '../views/AppPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/A',
    name: 'A',
    component: APage
  },
  {
    path: '/B',
    name: 'B',
    component: BPage
  },
  {
    path: '/app/:name',
    name: 'app',
    component: AppPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
