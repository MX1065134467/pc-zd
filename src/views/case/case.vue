<template>
  <div>
    <Header></Header>
    <div class="banner-wrap">
      <img src="../../assets/case/banner.png" alt="">
    </div>
    <main-content :list="list"></main-content>
  </div>
</template>

<script>
import mainContent from '../../components/content.vue'
import Header from '@/components/header'
export default {
  name: 'Case',
  components: { mainContent, Header },
  data () {
    return {
      list: [
        {
          level: 'one-1',
          title: '智慧城市典型案例',
          name: 'one',
          children: [
            {
              level: 'two-1',
              title: '赫章智慧城市',
              name: 'two'
            },
            {
              level: 'two-2',
              title: '凤凰智慧城市',
              name: 'two'
            }
          ]
        },
        {
          level: 'one-2',
          title: '智慧行业典型案例',
          name: 'one'
        },
        {
          level: 'one-3',
          title: '应用软件典型案例',
          name: 'one'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
