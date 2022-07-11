// 用于存储分类
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state () {
    return {
      // 依赖 topcategory 重新设置
      categoryList: topCategory.map(item => ({ name: item }))
    }
  },
  // 修改分类函数
  mutations: {
    // payload 所有的分类集合
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    // 定义 show 和 hide 函数,控制二级分类显示和隐藏
    show (state, id) {
      const currentCategory = state.categoryList.find(item => item.id === id)
      currentCategory.open = true
    },
    hide (state, id) {
      const currentCategory = state.categoryList.find(item => item.id === id)
      currentCategory.open = false
    }
  },
  // 获取分类函数
  actions: {
    async getCategoryList ({ commit }) {
      // 获取分类数据
      const { result } = await findAllCategory()
      // 给每个分类添加控制二级分类显示隐藏的数据
      result.forEach(element => {
        element.open = false
      })
      console.log(result)
      // 修改分类数据
      commit('setCategoryList', result)
    }
  }
}
