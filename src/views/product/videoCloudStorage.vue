<template>
  <div>
   <div class="content-wrap">
     <p class="title">视频云存储系统</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
   <div class="video-case">
     <div class="case-box">
       <div class="case-title">视频云存储系统</div>
       <div>视频云存储是中电兴发在安防领域针对视频监控推出的云存储产品，其具备高稳定、高安全、强扩展、易维护、低功耗、高密度的特点，产品利用软硬件结合体技术，采用分布式云架构，以嵌入式硬件、高存储密度的结构为依托，运用自研数据分散算法，构建了视频流数据的专用存储系统，应用于公安、交通、司法、能源等行业，适于安防监控大多数应用场景。</div>
     </div>
     <img src="../../assets/product/pic1-video-cloud.png" alt="">
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-video-charts.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="video-cloud-content">
     <div class="video-cloud-box">
       <div class="video-cloud-title">自主可控跨平台</div>
       <div>产品采用跨平台软件开发，不仅x86平台，还可支持飞腾、龙芯、鲲鹏、 麒麟等多款主流国产化硬件平台，真正实现了国产化。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">全对称分布式架构</div>
       <div>产品采用全对称分布式架构，无独立元数据节点，支持多节点协同并行数据读写，实现存储节点的负载均衡及故障节点的在线切换，可为前端多类业务系统提供全局统一命名空间，提供NFS、FTP、POSIX、“流”接口等存储接口。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">大容量高扩展</div>
       <div>支持高达288节点，EB级容量在线平滑扩展。单节点最高可配置72盘位， 大大提高了单位体积存储密度。每个节点采用标准化接口设计，“开箱即用”。系统易于扩展，同时支持异构节点的扩展，使得性能随系统扩展得到进一步提升，可与第三方管理平台集成，提供对应的接口。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">低功耗高可靠</div>
       <div>产品支持多款嵌入式硬件。设计了磁盘轮休、节点轮休、单盘多状态等多种低功耗策略，实现系统最低功耗，降低使用成本。系统在发生意外情况下，允许超过上限的冗余损坏，在允许丢失部分数据的前提下，仍然保持业务连续性。双电源冗余，保证设备供电正常。系统支持从硬件层面，系统管理层面，数据层面到业务层面高可用，满足可用性原则。</div>
     </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <img src="../../assets/product/pic2-success.png" alt="">
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
.video-case {
  display: flex;
  justify-content: start;
  .case-box {
    margin: auto 40px auto 0;
    font-family: msyh;
    font-size: 14px;
    color: #333333;
    line-height: 30px;
    .case-title {
      font-weight: bold;
    }
  }
}
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
