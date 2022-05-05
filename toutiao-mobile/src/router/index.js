import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置自己的路由
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
