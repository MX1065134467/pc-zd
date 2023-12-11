import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    floatShow: true,
    showSearch: true,
    tabsTitle: null,
    searchTitle: null,
    headerShow: true,
    tabsLevel: null,
    formManage: {
      firstForm: '',
      secondForm: '',
      threeForm: '',
      fourForm: ''
    }
  },
  mutations: {
    handleHeaderShow (state, data) {
      state.headerShow = data
    },
    handleSearchShow (state) {
      state.showSearch = false
    },
    handleSerchHide (state) {
      state.showSearch = true
    },
    tabsCompontentsIndex (state, data) {
      state.tabsTitle = data
    },
    tabsCompontentsLevel (state, data) {
      state.tabsLevel = data
    },
    firstStepsData (state, data) {
      state.formManage.firstForm = data
    },
    secondStepsData (state, data) {
      state.formManage.secondForm = data
    },
    threeStepsData (state, data) {
      state.formManage.threeForm = data
    },
    fourStepsData (state, data) {
      state.formManage.fourForm = data
    },
    floatShowData (state, data) {
      state.floatShow = data
    }
  },
  actions: {},
  modules: {}
})
