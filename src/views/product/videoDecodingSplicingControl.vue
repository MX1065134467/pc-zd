<template>
  <div>
   <div class="content-wrap">
     <p class="title">前端设备-高清视频解码拼接控制器</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品概述</span>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-splicings-control.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">高清视频解码拼接控制器</div>
        <div class="product-text2">为高清监控系统中解码上墙服务设计的网络解码器，主要服务于大型安防监控领域。</div>
      </div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特点</span>
    </div>
    <div class="product-trait-text">
      <div>采用标准2U高度短型机箱，满配可装载16块高清视频解码加速卡</div>
      <div>支持MPEG2/MPEG4/H.264/H.265标准网络视频流解码</div>
      <div>支持QCIF/CIF/D1/720P/1080P/300W/500W/600W/800W视频解码</div>
      <div>支持Onvif、RTSP协议接入，支持国标GB/T28181接入</div>
      <div>支持每块卡2路HDMI输出，单机最多支持16卡，32路HDMI输出</div>
      <div>单卡具备1个10-1000M自适应以太网接口，整机最多16个千兆网口</div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">适用场景</span>
    </div>
    <div class="product-applicable-scene">主要应用于公安局指挥大厅、派出所、指挥调度大厅等有将视频资源解码上墙，在大屏展示的场所。</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.product-box {
  height: 135px;
  display: flex;
  justify-content: start;
  .img {
    margin: auto 0;
    img {
      width: 114px;
      height: 114px;
    }
  }
  .product-text {
    margin: auto 0 auto 62px;
    .product-text1 {
      font-family: msyh;
      font-size: 16px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 5px;
    }
    .product-text2 {
      font-family: msyh;
      font-size: 16px;
      color: #333333;
      line-height: 30px;
    }
  }
}
.product-box:nth-child(n+2) {
  margin-top: 45px;
}
.product-trait-text {
  font-family: msyh;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  line-height: 30px;
}
.product-applicable-scene {
  font-family: msyh;
  font-size: 16px;
  color: #333333;
  line-height: 30px;
}
</style>
