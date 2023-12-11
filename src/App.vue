<template>
  <div id="app">
    <router-view :key="$route.query.type"/>
    <Footer v-if="$store.state.headerShow"></Footer>
    <div class="position" v-if="$store.state.floatShow">
      <img src="./assets/school/float.png" alt="">
    </div>
  </div>
</template>

<script>
import Footer from '@/components/footer'
import './utils/font/font.css'
export default {
  data () {
    return {}
  },
  components: { Footer },
  computed: {
    newName () {
      return this.$store.state.floatShow
    }
  },
  watch: {
    newName (val) {
      console.log(val, 'val')
      this.$store.state.floatShow = val
    }
  },
  created () {
    // vuex持久化方案
    // sessionStorage.getItem('keep') && this.$store.replaceState(JSON.parse(sessionStorage.getItem('keep')))
    // window.addEventListener('beforeunload', () => {
    //   sessionStorage.setItem('keep', JSON.stringify(this.$store.state))
    // })
  },
  methods: {}
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: msyh, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .position {
    position: fixed;
    bottom: 76px;
    right: 15px;
    color:#c1141b;
    width: 190px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.banner-wrap {
  width: 100%;
  margin-top: 60px;
  img {
    width: 100%;
    height: 430px;
  }
}
body {
  padding: 0;
  margin: 0;
  font-family: msyh;
  padding-right: 0 !important;
}
body::-webkit-scrollbar{
  display: none;
}
.main-width {
  width: 1200px;
  margin: auto;
}
// 主标题
.title {
  font-family: msyh;
  padding-bottom: 24px;
  border-bottom: 1px solid #d8d8d8;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 36px;
}
// 段落
.text-wrap {
  margin-top: 30px;
  text-align: justify;
  .paragraph {
    font-family: msyh;
    margin-top: 35px;
    font-size: 14px;
    line-height: 30px;
  }
}
// 彩色副标题
.colortitle {
  margin: 30px 0;
  .circle {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #c1141b;
    opacity: 0.1;
  }
  .smalltitle {
    font-family: msyh;
    font-size: 20px;
    font-weight: bold;
    color: #c1141b;
    margin-left: -10px;
  }
}
// 正文
.text {
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  font-family: msyh;
  text-align: justify;
}

.el-dialog__footer {
  padding-bottom: 30px;
}
</style>
