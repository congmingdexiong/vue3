import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'

const routes = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    { name: 'zhuye', path: '/home', component: () => Home },
    { name: 'guanyu', path: '/about', component: () => About },
    { name: 'xinwen', path: '/news', component: () => News },
  ],
})

export default routes
