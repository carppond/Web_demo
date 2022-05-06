
import Request from '@/utils/request'

export const getArticles = params => {
  return Request({
    method: 'GET',
    url: '/v1_0/articles',
    params
  })
}
