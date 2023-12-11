import base from './base'
import axios from '@/utils/http'

const api = {
  // 问题类型列表
  questionType () {
    return axios.get(`${base.baseUrl}/question/type`)
  },
  // 问题列表
  question (params) {
    return axios.get(`${base.baseUrl}/question/list`, { params })
  },
  // 招聘流程
  recruitmentProcess () {
    return axios.get(`${base.baseUrl}/line/list`)
  },
  // 联系我们
  contactUs () {
    return axios.get(`${base.baseUrl}/line/person`)
  },
  // 风采展示视频
  video () {
    return axios.get(`${base.baseUrl}/recruitment/video`)
  }
}

export default api
