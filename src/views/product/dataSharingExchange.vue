<template>
  <div>
   <div class="content-wrap">
     <p class="title">数据共享交换系统</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
   <p class="text">
      大数据共享交换平台是依据国家政务信息资源共享开放的有关政策，深入应用云计算、大数据等先进技术，为各级政务部门提供政务信息资源共享、交换、开放的数据服务平台。是管理政务信息资源目录，支撑个部门开展政务信息资源共享交换的基础设施，平台核心是资源目录和交换体系等。
    </p>
    <p class="text">
      大数据共享交换平台基于分布式架构，帮助政府和企业打破部门间的数据孤岛，适应于大数据时代的数据交换场景。数据共享交换平台用以梳理各部门的数据资产，提供各种数据和API的共享交换服务，在各部门间打造高速的“数据物流中枢”，做到数据的有效“服务化”。
    </p>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-data-share-charts.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="video-cloud-content">
     <div class="video-cloud-box">
       <div class="video-cloud-title">自主可控跨平台</div>
       <div>支持包括Oracle、MySQL、SQL Server在内的各种主流关系型数据库，支持包括Spark、Hadoop、ODPS在内的各种大数据平台</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">快速高效</div>
       <div>采用分布式架构，具有较高的横向扩展性，可线性提升交换性能，满足处理海量数据的交换需求。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">安全可靠</div>
       <div>采用分布式架构具有单节点无效容错机制，支持自动断点续传，数据加密传输，保障数据传输的安全。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">简单易用</div>
       <div>全WEB操作，简单易用，操作人性化，数据资源目录的申请可驱动数据交换。</div>
       <div>新型交换模式：在大数据平台下，采用新型的交换模式，实现数据交换不搬家，数据交换可用不可见。</div>
     </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <img src="../../assets/product/pic-data-share-charts1.png" alt="">
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
.video-cloud-content {
  .video-cloud-box {
    font-family: msyh;
    font-size: 16px;
    color: #333333;
    line-height: 30px;
    .video-cloud-title {
      font-weight: bold;
    }
  }
  .video-cloud-box:nth-child(n+2) {
    margin-top: 16px;
  }
}
</style>
