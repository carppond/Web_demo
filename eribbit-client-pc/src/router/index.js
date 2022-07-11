import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')
const TopCategory = () => import('@/views/category/index')
const SubCategory = () => import('@/views/category/sub')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: TopCategory
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
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
