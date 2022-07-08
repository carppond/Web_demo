import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 创建一个 axios 实例
// 请求拦截器,如果有 token,进行头部携带 token
// 响应拦截器 1. 剥离无效数据  2.处理 token 失效
//  导出一个函数,调用当前的 axios 实例发请求

// 导出基准地址, 其他地方不是通过 axios 发请求的地方可能也需要用到
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
const instance = axios.create({
  // axios 的配置
  baseURL,
  timeout: 5000
})
// 请求拦截器
instance.interceptors.request.use((config) => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有 token 就在头部添加
  const profile = store.state.user.profile
  // 判断是否有 token
  if (profile.token) {
    // 设置 token
    config.headers.Authorization = 'Bearer ' + profile.token
  }
  return config
}, err => {
  return Promise.reject(err)
})
// 响应拦截器
instance.interceptors.response.use((res) => {
  return res.data
}, err => {
  // 401 状态码,进入该函数
  if (err.response && err.response.status === 401) {
    // 1. 清空无效登录信息
    store.commit('user/setUser', {})
    // 2. 跳转到登录页
    // 当前路由地址
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
const request = (url, method, submitData) => {
  // 负责发请求
  return instance({
    url,
    method,
    // [] 设置一个动态的 key, 写 js 表达式, js 表达式的执行结果当做 key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
