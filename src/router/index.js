import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hr from '../views/Hr.vue'
import It from '../views/It.vue'
import Account from '../views/Account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hr',
      name: 'hr',
      component: Hr
    },
    {
      path: '/it',
      name: 'It',
      component: It
    },
    {
      path: '/acc',
      name: 'acc',
      component: Account
    },

  ]
})

export default router
