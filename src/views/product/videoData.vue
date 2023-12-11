<template>
  <div>
   <div class="content-wrap">
     <p class="title">视频综合管理平台VMS</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
    <p class="text">
      视频综合管理平台可兼容多种协议，实现前端设备集中管理、视频数据集中存储、存储设备集中维护等功能。它可以实现支持PB级的视频存储，上万路的摄像机的实时接入以及存储以及实时中转、回放功能，RAID5为系统提供数据保障。对前端监控视频、NVR以及各厂家视频监控平台实现接入，可进行实时浏览浏览、视频巡逻、云台控制，自定义时间对设备的存储，智能检索回放、录像下载等操作；基于电子地图，可实现设备的定位；当发生报警后，能及时提醒。
    </p>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-video-data.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="product-feature">
        <div class="product-text2">
          <span class="product-text2-title">多方兼容：</span>
          <span>支持国标GB28181、onvif协议以及市面主流厂家的私有协议，实现应接尽接，同时支持执法记录仪等特殊设备接入，确保数据全覆盖。</span>
        </div>
        <div class="product-text2">
          <span class="product-text2-title">高效资源利用：</span>
          <span>支持接入平安城市资源、雪亮工程资源以及社会资源，充分利用利旧设备，节省成本同时保证数据量。</span>
        </div>
        <div class="product-text2">
          <span class="product-text2-title">海量数据存储利用：</span>
          <span>以实现支持PB级的视频存储，上万路的摄像机的实时接入以及存储以及实时中转、回放功能，同时支持级联平台数据转发。</span>
        </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <img src="../../assets/product/pic1-video-data2.png" alt="">
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
.text2 {
  margin: 30px 0 30px;
}
.product-feature {
  .product-text1 {
    font-family: msyh;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 5px;
  }
    .product-text2 {
    //   display: flex;
    //   justify-content: start;
    font-family: msyh;
      font-size: 16px;
      color: #333333;
      line-height: 30px;
      .product-text2-title {
        // white-space: nowrap;
        font-weight: bold;
      }
    }
}
</style>
