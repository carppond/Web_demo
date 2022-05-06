// 封装 axios 请求模板
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  // 请求的基础路径
  baseURL: 'http://toutiao.itheima.net'
})

//  请求拦截器
request.interceptors.request.use(function (config) {
  // 添加拦截代码
  // 请求发起会经过这里
  // config 本次请求的请求配置对象
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (err) {
  // 请求出错进入这里
  return Promise.reject(err)
})

// 响应拦截器
export default request
