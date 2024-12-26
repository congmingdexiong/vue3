import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

const routes = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    { name: 'zhuye', path: '/', component: () => Home },
    { name: 'zhuye1', path: '/home', component: () => Home },
    { name: 'guanyu', path: '/about', component: () => About },
    {
      name: 'xinwen',
      path: '/news',
      component: () => News,
      children: [
        {
          name: 'xiangqing',
          path: 'detail/:id/:title/:content?',
          component: () => Detail,
        },
      ],
    },
    // { name: '404', path: '/:pathMatch(.*)*', component: () => Home },
  ],
})

export default routes
