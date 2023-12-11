<template>
  <div>
   <div class="content-wrap">
     <p class="title">兴发智云平台</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
    <p class="text text2">
      兴发智云平台基于“软件定义数据中心”理念，提供便捷的云计算服务能力，支持从单台物理机到超大规模云计算集群的平滑演进，企业可随着自身业务增长实现弹性扩容和按需升级。帮助用户解决数据中心云 化和业务数字化转型过程中遇到的各种技术难题，通过兴发智云平台可以简化企业和组织业务上云的过程，提升组织管理和业务管理效率，提升数字化转型价值。
    </p>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <p class="text text2">
     云平台系统功能框架包括通用硬件层、核心功能区、云计算管理平台、多云管理平台四个层级。根据这 一设计，数据中心的各个应用无需独立规划建设支撑各自业务的数据中心、硬件资源、存储基础设施。 各个应用均作为统一的弹性计算平台的租户，根据实际业务需要获取和扩张资源利用。
   </p>
   <img src="../../assets/product/pic-structure-chart.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="product-feature">
     <div>
       <span class="blod">简单性：</span>
       <span>兴发智云为企业数字化转型提供架构简单、部署简单、扩容简单的资源供给系统。</span>
     </div>
     <div>
       <span class="blod">稳定性：</span>
       <span>兴发智云平台系统稳定、数据可靠、备份还原，满足业务上云的稳定性诉求。</span>
     </div>
     <div>
       <span class="blod">安全性：</span>
       <span>兴发智云平台内置虚拟防火墙、安全组及逻辑租户管理，提供资源层面的网络隔离，租户间资源不可见的双重防护需求。</span>
     </div>
     <div>
       <span class="blod">易用性：</span>
       <span>兴发智云平台提供统一的、简洁的用户操作管理界面，提供资源编排、自动伸缩、监控告警、配额管理等便捷运维管理功能。</span>
     </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <img src="../../assets/product/pic-success.png" alt="">
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
  div {
    font-family: msyh;
    font-size: 16px;
    color: #333333;
    line-height: 30px;
    .blod {
      font-weight: bold;
    }
  }
}
</style>
