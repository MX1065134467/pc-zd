import base from './base'
import axios from '@/utils/http'

const api = {
  // 获取学历
  getEducation () {
    return axios.get(`${base.baseUrl}/education/list`)
  },
  // 工作城市
  getJobCity () {
    return axios.get(`${base.baseUrl}/intention/city/list`)
  },
  // 工作城市
  getSex () {
    return axios.get(`${base.baseUrl}/sex/list`)
  },
  // 户口性质
  getRegistered () {
    return axios.get(`${base.baseUrl}/permanent/type/list`)
  },
  // 政治面貌
  getPoliticsStatus () {
    return axios.get(`${base.baseUrl}/political/status/list`)
  },
  // 简历提交
  resumeAdd (params) {
    return axios.post(`${base.baseUrl}/resume/info/add`, params)
  },
  // 图片上传
  photoUpload (params) {
    return axios.post(`${base.baseUrl}/resume/info/upload/image`, params)
  },
  // 附件上传
  fileUploads (params) {
    return axios.post(`${base.baseUrl}/resume/info/upload/attachment`, params)
  }
}

export default api
