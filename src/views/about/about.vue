<template>
  <div>
    <Header></Header>
    <div class="banner-wrap">
      <img src="../../assets/about/banner.png" alt="">
    </div>
    <main-content :list="list"></main-content>
  </div>
</template>

<script>
import mainContent from '../../components/content.vue'
import Header from '@/components/header'
export default {
  name: 'About',
  components: { Header, mainContent },
  data () {
    return {
      list: [
        {
          level: 'one-1',
          title: '公司介绍',
          name: 'one'
        },
        {
          level: 'one-4',
          title: '视频中心',
          name: 'one'
        },
        {
          level: 'one-2',
          title: '资质荣誉',
          name: 'one'
        },
        {
          level: 'one-3',
          title: '联系我们',
          name: 'one'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
