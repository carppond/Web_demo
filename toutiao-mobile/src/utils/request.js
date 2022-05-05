// 封装 axios 请求模板
import axios from "axios";

const request = axios.create({
     // 请求的基础路径
     baseURL: 'http://ttapi.research.itcast.cn/'
})

export default request
