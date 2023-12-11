import base from './base'
import axios from '@/utils/http'

const api = {
  // 获取社招列表
  list (params1, params2, params3, params4, params5) {
    return axios.get(`${base.baseUrl}/position/management/list?keyword=${params1}&pageNo=${params2}&type=${params3}&intention=${params4}&id=${params5}`)
  },
  // 获取工作城市
  cityList () {
    return axios.get(`${base.baseUrl}/dictionary/city/list`)
  },
  // 获取岗位名称
  jobNameList (params) {
    return axios.get(`${base.baseUrl}/position/management/name/list?type=${params}`)
  },
  // 获取社招列表详情
  getDetail (params, params1) {
    return axios.get(`${base.baseUrl}/position/management/detail/${params}?type=${params1}`)
  },
  // 获取意向城市
  intentionCity () {
    return axios.get(`${base.baseUrl}/intention/city/list`)
  },
  // 获取性别
  sexList () {
    return axios.get(`${base.baseUrl}/sex/list`)
  },
  // 获取性别
  addInfo (params) {
    return axios.post(`${base.baseUrl}/resume/info/add`, params)
  },
  // 附件上传
  fileUploads (params) {
    return axios.post(`${base.baseUrl}/resume/info/upload/attachment`, params)
  }
}

export default api
