// 定义分类相关的 api 接口
import request from '@/utils/request'

/**
 * 获取首页所有分类:顶级/二级/对应的商品推荐数据
 * @returns  Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
