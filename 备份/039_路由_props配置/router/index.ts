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
        //第一种写法 param
        // {
        //   name: 'xiangqing',
        //   path: 'detail/:id/:title/:content?',
        //   component: () => Detail,
        //   props(route) {
        //     return route.query
        //   },
        // },
        //第一种写法 query
        {
          name: 'xiangqing',
          path: 'detail',
          component: () => Detail,
          props(route) {
            return route.query
          },
        },
        //第三种 对象写法 可以自己决定讲什么作为props给路由组件
        // {
        //   name: 'xiangqing',
        //   path: 'detail',
        //   component: () => Detail,
        //   props: {
        //     a: 100,
        //     b: 200,
        //     c: 300,
        //   },
        // },
      ],
    },
    // { name: '404', path: '/:pathMatch(.*)*', component: () => Home },
  ],
})

export default routes
