<template>
  <div>
   <div class="content-wrap">
     <p class="title">兴发容器云</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
    <p class="text text2">
      兴发容器云平台是在Kubernetes之上构建的以应用为中心的企业级分布式容器平台，提供简单易用的操作界面以及向导式操作方式，在降低用户使用容器调度平台学习成本的同时，极大减轻开发、测试、运维的日常工作的复杂度，旨在解决Kubernetes本身存在的存储、网络、安全和易用性等痛点。除此之外，平台已经整合并优化了多个适用于容器场景的功能模块，以完整的解决方案帮助企业轻松应对敏捷开发与自动化运维、DevOps、微服务治理、灰度发布、多租户管理、工作负载和集群管理、监控告警、日志查询与收集、服务与网络、应用商店、镜像构建与镜像仓库管理和存储管理等多种业务场景。
    </p>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <p class="text text2">
     兴发容器云为用户提供了一个具备极致体验的控制台，以向导式UI实现工作负载管理、镜像管理、服务与应用路由管理 (服务发现)、密钥配置管理等，并提供弹性伸缩 (HPA) 和容器健康检查支持，以及可视化的运行状态监控数据。支持数万规模的容器资源调度，保证业务在高峰并发情况下的高可用性。
   </p>
   <img src="../../assets/product/pic-specialContainerCloud.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="product-feature">
     <div>
       <p>高性能大规模并行计算</p>
       <p>应用监控定制</p>
       <p>多维度系统监控</p>
       <p>开发工具集丰富</p>
     </div>
     <div class="product-feature-child">
       <p>应用热更新</p>
       <p>操作简便、引导水畅想云原生</p>
       <p>强大的存储与网络支持</p>
       <p>可视化网络管理</p>
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
  display: flex;
  justify-content: start;
  font-family: msyh;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  line-height: 30px;
  .product-feature-child {
    margin-left: 77px;
  }
}
</style>
