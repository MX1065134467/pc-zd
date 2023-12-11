<template>
  <div class="main-width-wrap">
    <div class="main-left-wrap">
      <Tabs :list="list" :class="fixed == true ? 'fixedMenu' :''"></Tabs>
    </div>
    <div class="main-right-wrap">
      <keep-alive>
       <component :is="currentComponents"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/tabs'
import researchInstitute from '../views/product/researchInstitute.vue'
import IntelligentEdgeEnd from '../views/product/IntelligentEdgeEnd'
import AIVidicon from '../views/product/AIVidicon'
import bayonetCaptureUnit from '../views/product/bayonetCaptureUnit'
import bayonetCaptureUnitTwo from '../views/product/bayonetCaptureUnitTwo.vue'
import electricPoliceCapture from '../views/product/electricPoliceCapture.vue'
import videoDecodingSplicingControl from '../views/product/videoDecodingSplicingControl.vue'
import specialEquipment from '../views/product/specialEquipment.vue'
import AIIntelligentAnalysisEngine from '../views/product/AIIntelligentAnalysisEngine.vue'
import networkTransmission from '../views/product/networkTransmission.vue'
import specialContainerCloud from '../views/product/specialContainerCloud.vue'
import specialCloud from '../views/product/specialCloud.vue'
import videoCloudStorage from '../views/product/videoCloudStorage.vue'
import universalCloudStorage from '../views/product/universalCloudStorage.vue'
import cityBigData from '../views/product/cityBigData.vue'
import dataSharingExchange from '../views/product/dataSharingExchange.vue'
import IntegratedOperation from '../views/product/IntegratedOperation.vue'
import internetData from '../views/product/internetData.vue'
import videoData from '../views/product/videoData.vue'
import photoData from '../views/product/photoData.vue'
import dataApplication from '../views/product/dataApplication.vue'
import introduce from '../views/about/introduce'
import hezhang from '../views/case/hezhang'
import fenghuang from '../views/case/fenghuang'
import industry from '../views/case/industry'
import honour from '../views/about/honour'
import alink from '../views/about/link'
import software from '../views/case/software.vue'
import videos from '../views/about/videos.vue'

export default {
  name: 'Case',
  components: {
    Tabs,
    researchInstitute,
    IntelligentEdgeEnd,
    AIVidicon,
    bayonetCaptureUnit,
    bayonetCaptureUnitTwo,
    electricPoliceCapture,
    videoDecodingSplicingControl,
    AIIntelligentAnalysisEngine,
    specialEquipment,
    networkTransmission,
    specialContainerCloud,
    specialCloud,
    videoCloudStorage,
    universalCloudStorage,
    cityBigData,
    dataSharingExchange,
    IntegratedOperation,
    internetData,
    videoData,
    photoData,
    dataApplication,
    introduce,
    hezhang,
    fenghuang,
    industry,
    honour,
    alink,
    software
  },
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      currentComponents: null,
      fixed: false
    }
  },
  computed: {
    newVlaue () {
      return this.$store.state.tabsTitle
    }
  },
  watch: {
    newVlaue: {
      handler: function (newValue, oldValue) {
        console.log(newValue, 'newValue')
        switch (newValue) {
          case null:
            this.currentComponents = researchInstitute
            break
          case '研发机构':
            this.currentComponents = researchInstitute
            break
          case '高清监控摄像机':
            this.currentComponents = IntelligentEdgeEnd
            break
          // case '核心技术与产品':
          //   this.currentComponents = IntelligentEdgeEnd
          //   break
          case '数字云底座':
            this.currentComponents = specialContainerCloud
            break
          case '智能边缘端':
            this.currentComponents = IntelligentEdgeEnd
            break
          case 'AI摄像机（人脸+结构化）':
            this.currentComponents = AIVidicon
            break
          case '智能交通卡口抓拍单元1':
            this.currentComponents = bayonetCaptureUnit
            break
          case '智能交通卡口抓拍单元2':
            this.currentComponents = bayonetCaptureUnitTwo
            break
          case '智能交通电警抓拍单元':
            this.currentComponents = electricPoliceCapture
            break
          case '特种设备':
            this.currentComponents = specialEquipment
            break
          case '高清视频解码拼接控制器':
            this.currentComponents = videoDecodingSplicingControl
            break
          case 'AI智能分析引擎':
            this.currentComponents = AIIntelligentAnalysisEngine
            break
          case '网络传输端':
            this.currentComponents = networkTransmission
            break
          case '兴发容器云':
            this.currentComponents = specialContainerCloud
            break
          case '兴发智云':
            this.currentComponents = specialCloud
            break
          case '视频云存储系统':
            this.currentComponents = videoCloudStorage
            break
          // case '云存储产品':
          //   this.currentComponents = videoCloudStorage
          //   break
          case '融合云存储系统':
            this.currentComponents = universalCloudStorage
            break
          case '城市大数据平台':
            this.currentComponents = cityBigData
            break
          case '数据共享交换系统':
            this.currentComponents = dataSharingExchange
            break
          case '一体化运维平台':
            this.currentComponents = IntegratedOperation
            break
          case '物联网数据管理平台TMS':
            this.currentComponents = internetData
            break
          case '视频综合管理平台VMS':
            this.currentComponents = videoData
            break
          case '视图智能分析平台IMS':
            this.currentComponents = photoData
            break
          case '大数据应用':
            this.currentComponents = dataApplication
            break
          case '公司介绍':
            this.currentComponents = introduce
            break
          case '赫章智慧城市':
            this.currentComponents = hezhang
            break
          case '凤凰智慧城市':
            this.currentComponents = fenghuang
            break
          case '智慧城市典型案例':
            this.currentComponents = hezhang
            break
          case '智慧行业典型案例':
            this.currentComponents = industry
            break
          case '资质荣誉':
            this.currentComponents = honour
            break
          case '联系我们':
            this.currentComponents = alink
            break
          case '视频中心':
            this.currentComponents = videos
            break
          case '应用软件典型案例':
            this.currentComponents = software
            break
        }
        // this.list.map((item, index) => {
        //   if (this.newVlaue === item.title) {
        //     this.$store.commit('tabsCompontentsLevel', this.list[index].level)
        //   }
        // })
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.fixedActiveMenu)
  },
  methods: {
    fixedActiveMenu () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop >= 430 ? this.fixed = true : this.fixed = false
    }
  }
}
</script>

<style lang="scss" scoped>
.main-width-wrap {
  display: flex;
  width: 1200px;
  margin: auto;
  background-color: #fff;
  color: #333333;
  .main-left-wrap {
    width: 266px;
    padding-top: 34px;
    .fixedMenu {
      position: fixed;
      top: 60px;
    }
  }
  .main-right-wrap {
    padding: 60px 0 110px 100px;
    width: 834px;
    // height: 900px;
    // overflow: scroll;
    border-left: 1px solid #d8d8d8;
    text-align: left;
  }
}
</style>
