import base from './base'
import axios from '@/utils/http'

const api = {
  // 获取新闻列表
  getRecommendList (params) {
    return axios.get(`${base.baseUrl}/video/getRecommendList`, params)
  },
  getList (params) {
    return axios.get(`${base.baseUrl}/video/getList`, { params })
  }
}

export default api
