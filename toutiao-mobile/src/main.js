import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载 vant 核心组件库
import Vant from 'vant'
// 加载 vant 全局样式
import 'vant/lib/index.css'
// 加载全局样式表
import '@/style/index.css'
// 动态设置 rem 基准值
import 'amfe-flexible'
// 加载日期处理
import '@/utils/dayjs'

// 注册使用组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
