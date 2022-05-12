import axios from 'axios'

const service = axios.create({

})

// 拦截请求头和响应信息
service.interceptors.request.use()
service.interceptors.response.use()

export default service
