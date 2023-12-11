<template>
  <div>
   <div class="content-wrap">
     <p class="title">物联网数据管理平台TMS</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
    <p class="text">
      物联网数据管理平台主要应用在智慧城市建设、数据共享平台建设、一体化感知平台建设等多个方面，提供了安全可靠的设备连接通信能力，支持设备数据采集上云，规则引擎数据流转和云端数据下发等功能，同时支持方便快捷的设备管理能力，支持标准物模型定义、数据管理处理、和数据结构化存储，为城市智能管控平台、智慧综治平台、智慧城管平台以及城市一张图等各上层应用平台提供数据支持，确保海量数据供应。
    </p>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-internet-data-charts.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="product-feature">
        <div class="product-text2">
          <div class="product-text2-title">统一设备接入：</div>
          <div>支持设备采用TCP、MQTT、WebSocket等多种主流协议接入；支持设备采用蜂窝网、4G、5G、ZigBee等多网络接 入。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">统一物模型：</div>
          <div>提供灵活的物模型定义，构建标准化数据模型，解决数据碎片化，简化设备与应用开发。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">数据标准化：</div>
          <div>为“物”提供标准数据接口，通过中电兴发标准数据协议，方便快速接入，打通物物互联的通道。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">规则引擎：</div>
          <div>支持用户根据实际业务场景设置数据规则，通过数据的组合，以实现服务端订阅、数据流转和场景联动等功能。</div>
        </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <img src="../../assets/product/pic-internet-data-charts1.png" alt="">
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
      display: flex;
      justify-content: start;
      font-family: msyh;
      font-size: 16px;
      color: #333333;
      line-height: 30px;
      .product-text2-title {
        white-space: nowrap;
        font-weight: bold;
      }
    }
}
</style>
