import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import BrowseView from '../views/Browse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowseView,
    },
  ],
})

export default router
