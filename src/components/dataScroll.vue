<template>
  <div>
   <div class="number-box">
     <div class="box-item" v-for="(item, index) in prosecutorArr" :key="index">
       <span ref="numberDom">0123456789</span>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    number: {
      type: Object
    }
  },
  data () {
    return {
      prosecutorArr: []
      // timeTicket: null
    }
  },
  created () {},
  mounted () {
    this.refresh()
  },
  watch: {
    'number.time': {
      handler (newValue, oldValue) {
        if (newValue) {
          this.refresh()
        }
      }
    }
  },
  methods: {
    prefixzero (num, n) {
      return (Array(n).join(0) + num).slice(-n).split('')
    },
    // getRandomNumber (min, max) {
    //   return Math.floor(Math.random() * (max - min) + min)
    // },
    setNumberTransform () {
      const numberItems = this.$refs.numberDom
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${Number(this.prosecutorArr[index]) * 10}%)`
      }
    },
    // increaseNumber () {
    //   this.refresh()
    //   this.timeTicket = setTimeout(this.increaseNumber, 5000)
    // },
    refresh () {
      // this.prosecutorArr = this.prefixzero(this.number.number, this.number.number.length === 2 ? 2 : 3)
      this.prosecutorArr = this.prefixzero(this.number.number, 3)
      this.$nextTick(() => this.setNumberTransform())
    }
  },
  destroyed () {
    // window.clearTimeout(this.timeTicket)
    // this.timeTicket = null
  }
}
</script>

<style lang='scss' scoped>
.number-box {
  display: flex;
  justify-content: center;
  margin: 60px 0 30px 0;
  box-sizing: border-box;
  .box-item {
    flex: 1;
    height: 80px;
    line-height: 80px;
    text-align: center;
    display: inline-block;
    // font-size: 60px;
    position: relative;
    writing-mode: vertical-lr;
    text-orientation: upright;
    overflow: hidden;
    &:last-child {
      margin-right: 0px;
    }
    span {
      position: absolute;
      font-size: 60px;
      font-weight: bold;
      top: 10px;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: transform 2s;
      letter-spacing: 10px;
    }
  }
}
</style>
