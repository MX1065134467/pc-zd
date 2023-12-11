import base from './base'
import axios from '@/utils/http'

const api = {
  // 获取首页视频
  getVideo () {
    return axios.get(`${base.baseUrl}/home/page/video`)
  },
  // 获取首页股票信息
  stock () {
    return axios.get(`${base.baseUrl}/shares/getShares`)
  }
}

export default api
