import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from './modules/products'
import About from './modules/about'
import Cases from './modules/cases'
import Join from './modules/join'
import News from './modules/news'
import Home from '../views/home/Home'
import School from './modules/school'
import store from '../store'
import Socity from './modules/society'
import Journalism from './modules/journalism'
import down from './modules/down'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...Products,
  ...About,
  ...Cases,
  ...Join,
  ...News,
  ...Socity,
  ...News,
  ...School,
  ...Journalism,
  ...down
]

const router = new VueRouter({
  routes
})
// 跳转本页面
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

router.beforeEach((to, from, next) => {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  const herf = window.location.href
  var index = herf.split('/')[2]
  if (flag && index.substr(0, 1) !== 'm') {
    // window.location.replace('https://m.ichinae.com')
    window.location.href = 'http://m.ichinae.com' + '?time=' + ((new Date()).getTime())
  }
  if (!flag && index.substr(0, 1) === 'm') {
    // window.location.replace('https://www.ichinae.com')
    window.location.href = 'https://www.ichinae.com' + '?time=' + ((new Date()).getTime())
  }

  if (to.path === '/campusRecruitment' || to.path === '/campusRecruitDetail' || to.path === '/recruitmentDetails' || to.path === '/recruitmentNotice' || to.path === '/growthAndDev' || to.path === '/problem') {
    store.commit('floatShowData', false)
    store.commit('handleHeaderShow', false)
    next()
  } else {
    store.commit('floatShowData', true)
    store.commit('handleHeaderShow', true)
    next()
  }
})

export default router
