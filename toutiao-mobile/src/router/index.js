import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置自己的路由
const routes = [
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    // name: 'layout',// 因为有默认子路由，这里的 name 没有意义
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: '/question', // 默认只路由
        name: 'question',
        component: () => import('@/views/Question')
      },
      {
        path: '/video', // 默认只路由
        name: 'video',
        component: () => import('@/views/Video')
      },
      {
        path: '/my', // 默认只路由
        name: 'my',
        component: () => import('@/views/My')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
