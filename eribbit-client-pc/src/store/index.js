import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 3 个子模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

export default createStore({
  // 分模块
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 默认存储到 localstorage
    createPersistedState({
      key: 'eribbit-client-pc',
      paths: ['user', 'cart']
    })
  ]
})
