<template>
  <div>
   <div class="content-wrap">
     <p class="title">视图智能分析平台IMS</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
    <p class="text">
      针对智能视频应用中对典型目标事件的感知需求，提供包括：人脸识别、目标检测及结构化、行为识别、事件分析等云边端协同智能感知技术，通过各类视图数据的多模态特征融合分析，实现对目标事件的准确发现与认知；在此基础之上，通过公司自研的云、边、端协同的物联网技术框架，实现对上述智能感知能力的插件式封装，基于分布式AI微服务框架，构建出可支撑城市级智能视图分析开放平台，实现对公共安全、智慧交通、智慧城管、智慧环保、智慧工业、智慧店里、智慧商超、智慧金融等领域的各类事件的智能发现能力的支撑，从而提升智能视频分析在不同行业的应用水平。
    </p>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-photo-data.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="product-feature">
        <div class="product-text2">
          <span class="product-text2-title">多摸智能调度：</span>
          <span>提供人脸识别、目标检测及结构化分析、行为识别、事件感知等视图智能分析能力的分布式智能调度，满足视图智能分析的业务需求的同时为客户节省建设的投入。</span>
        </div>
        <div class="product-text2">
          <span class="product-text2-title">分布式特征向量检索：</span>
          <span>自主研发大规模特征向量并行检索引擎技术，为云端和边缘端的海量特征向量提供高性能、高可用、可扩展性强、可伸缩的存储和计算服务，为AI领域的向量检索提供基础系统支撑与保障。</span>
        </div>
        <div class="product-text2">
          <span class="product-text2-title">目标特征聚类与轨迹分析：</span>
          <span>针对人脸、行人、车辆等目标的特征向量，基于目标的时空属性，提供特征聚类与轨迹生成挖掘功能，有效降低特征向量的计算压力，提升目标事件的轨迹生成精度，支撑复杂关联目标的时空挖掘分析，进一步挖掘感知数据价值。</span>
        </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <img src="../../assets/product/pic-photo-data1.png" alt="">
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
      font-family: msyh;
      font-size: 16px;
      color: #333333;
      line-height: 30px;
      .product-text2-title {
        font-weight: bold;
      }
    }
    .product-text2:nth-child(n+2) {
      margin-top: 5px;
    }
}
</style>
