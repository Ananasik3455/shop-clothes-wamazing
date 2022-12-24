import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './views/HomePage'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'HomePage'
    }
  ]
})

export default router