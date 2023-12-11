/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import base from './base'
import axios from '@/utils/http'

const api = {
    // 获取新闻列表
    getNews(params) {
        return axios.post(`${base.baseUrl}/news/selectAll`, params)
    },
    // 获取新闻详情
    getDetail(params) {
        return axios.get(`${base.baseUrl}/news/selectById`, { params })
    },
    // 获取下载列表
    getProduct(params) {
        return axios.post(`${base.baseUrl}/product/selectAll`, params)
    }
}

export default api