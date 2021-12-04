import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Services from '../views/Services'


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
  }
  // {
  //   path: '/services',
  //   name: 'Services',
  //   component: Services
  // }
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // }
  // {
  //   path:'/Stacks/:id',
  //   name:'Stacks',
  //   component:Stacks
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
