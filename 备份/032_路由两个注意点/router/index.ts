import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: () => Home },
    { path: '/about', component: () => About },
    { path: '/news', component: () => News },
  ],
})

export default routes
