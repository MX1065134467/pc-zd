import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import './utils/flexible.js'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import './utils/fullpages.mini.css'

// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Row,
  Col,
  Select,
  Option,
  Button,
  Upload,
  Dialog,
  Switch,
  Tooltip,
  Message,
  Icon,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DatePicker,
  Checkbox,
  Loading,
  CheckboxButton,
  MessageBox,
  Pagination,
  Table,
  TableColumn,
  Popover,
  Carousel,
  CarouselItem
} from 'element-ui'

// 全屏滚动 vue-fullpage.js
import 'fullpage.js/vendors/scrolloverflow'
// import 'element-ui/lib/theme-chalk/base.css'
import VueFullpage from 'vue-fullpage.js'

Vue.use(VideoPlayer)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(DatePicker)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(Loading)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Carousel)
Vue.use(CarouselItem)
// Vue.use(Loading)
// Vue.use(MessageBox)
// Vue.use(Alert)
Vue.use(BaiduMap, {
  ak: 'AkZyWsvUeKq3FBciMM0v4V1OG6mKKrBk'
})
Vue.use(VueFullpage)
Vue.config.productionTip = false
Vue.prototype.$message = Message
// Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
// Vue.component(CollapseTransition.name, CollapseTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
