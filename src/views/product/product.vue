<template>
  <div>
    <Header></Header>
    <div>
      <div class="banner-wrap">
        <img src="../../assets/product/banner.png" alt="">
      </div>
    </div>
    <main-content :list="list"></main-content>
  </div>
</template>

<script>
import mainContent from '../../components/content.vue'
import Header from '@/components/header'
export default {
  name: '',
  components: { mainContent, Header },
  data () {
    return {
      list: [
        {
          level: 'one-1',
          title: '研发机构',
          name: 'one'
        },
        {
          level: 'one-2',
          name: 'one',
          title: '智能边缘端',
          children: [
            {
              level: 'two-1',
              title: '高清监控摄像机',
              name: 'two'
            },
            {
              level: 'two-2',
              title: 'AI摄像机（人脸+结构化）',
              name: 'two'
            },
            {
              level: 'two-3',
              title: '特种设备',
              name: 'two'
            },
            {
              level: 'two-4',
              title: '智能交通卡口抓拍单元1',
              name: 'two'
            },
            {
              level: 'two-5',
              title: '智能交通卡口抓拍单元2',
              name: 'two'
            },
            {
              level: 'two-6',
              title: '智能交通电警抓拍单元',
              name: 'two'
            },
            {
              level: 'two-7',
              title: '高清视频解码拼接控制器',
              name: 'two'
            }
            // {
            //   level: 'three-8',
            //   title: 'AI智能分析引擎',
            //   name: 'three'
            // }
          ]
        },
        {
          level: 'one-3',
          title: '网络传输端',
          name: 'one'
        },
        {
          level: 'one-4',
          title: '数字云底座',
          name: 'one',
          children: [
            {
              level: 'two-1',
              name: 'two',
              title: '云计算产品',
              children: [
                {
                  level: 'three-1',
                  name: 'three',
                  title: '兴发容器云'
                },
                {
                  level: 'three-2',
                  name: 'three',
                  title: '兴发智云'
                }
              ]
            },
            {
              level: 'two-2',
              name: 'two',
              title: '云存储产品',
              children: [
                {
                  level: 'three-1',
                  name: 'three',
                  title: '视频云存储系统'
                },
                {
                  level: 'three-2',
                  name: 'three',
                  title: '融合云存储系统'
                }
              ]
            },
            {
              level: 'two-3',
              name: 'two',
              title: '大数据产品',
              children: [
                {
                  level: 'three-1',
                  name: 'three',
                  title: '城市大数据平台'
                },
                {
                  level: 'three-2',
                  title: '数据共享交换系统',
                  name: 'three'
                },
                {
                  level: 'three-3',
                  title: '一体化运维平台',
                  name: 'three'
                },
                {
                  level: 'three-4',
                  title: '物联网数据管理平台TMS',
                  name: 'three'
                },
                {
                  level: 'three-5',
                  title: '视频综合管理平台VMS',
                  name: 'three'
                },
                {
                  level: 'three-6',
                  title: '视图智能分析平台IMS',
                  name: 'three'
                }
              ]
            }
            // {
            //   level: 'three-4',
            //   title: 'AI产品',
            //   name: 'three'
            // }
          ]
        },
        {
          level: 'one-5',
          title: '大数据应用',
          name: 'one'
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
