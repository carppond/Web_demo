import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

// vue 2.0 new VueRouter({}) 创建路由实例
// vue 3.0  createRouter({}) 创建路由实例
const router = createRouter({
  // 路由模式, Hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
