<template>
  <div>
   <div class="content-wrap">
     <p class="title">融合云存储系统</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
   <div class="video-case">
     <div class="case-box">
       <div class="case-title">分布式云存储系列</div>
       <div>融合云存储服务器是针对中、大型规模的通用存储场景设计的分布式存储产品，利用软件定义存储为用户提供文件、块、对象海量数据的统一服务，实现海量数据的分层分域存储、高效能的数据存储、更优的存储成本，该系列主要应用于云计算、视图存储、大数据、广电媒资、物联网等场景，为用户提供容量按需扩展、性能按需供给、服务按需部署的存储系统。</div>
     </div>
     <img src="../../assets/product/pic1-universal-cloud.png" alt="">
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-universal-cloud-charts.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="video-cloud-content">
     <div class="video-cloud-box">
       <div class="video-cloud-title">自主可控</div>
       <div>产品采用跨平台软件开发，不仅支持x86平台，还可支持飞腾、龙芯、鲲鹏等多款主流国产化硬件平台，真正实现了通用存储国产化。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">对称架构</div>
       <div>产品采用全对称、去中心化的分布式架构，关键部件均采用冗余设计，全面提升单个物理节点的可靠性，数据采用副本或纠删码存储形式在多个安全域分 散存储，保护数据的安全性。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">统一存储</div>
       <div>产品具有统一的底层存储系统，底层存储系统提供存储资源池，客户端实现 多种存储服务，目前可存储块、对象、文件、数据库、大数据等多种类型数据，访问接口可支持NFS、SMB、HTTP、FTP、POSIX、S3、Swift等协议。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">便捷运维</div>
       <div>产品不仅具有统一人机交互WEB界面，还为专业运维人员提供CLI命令行管理系统。管理人员不仅可以在数据中心进行本地，还可通过互联网进行远程管理。系统提供短信、邮件、微信等告警方式。</div>
     </div>
     <div class="video-cloud-box">
       <div class="video-cloud-title">安全可靠</div>
       <div>数据存储采用多副本或纠删码方式，数据分散在多个安全域可以有效防止数据丢失，同时可对每块数据进行算法加密，防止数据被篡改。系统对数据进行全局动态校验并恢复错误数据。</div>
     </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <div class="product-applicable-scene">分布式云存储系统广泛应用于云计算、大数据、人工智能、更性能计算、大容量等场景， 典型应用示意图如下:</div>
   <img src="../../assets/product/pic2-success-img.png" alt="">
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
.product-applicable-scene {
  font-family: msyh;
  font-size: 16px;
  color: #333333;
  line-height: 30px;
}
</style>
