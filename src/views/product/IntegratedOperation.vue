<template>
  <div>
   <div class="content-wrap">
     <p class="title">一体化运维平台</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
    <p class="text">
      随着智慧城市的建设，项目逐步扩大，运维模式必将逐渐过渡到集中化、服务化、自动化和远程化的服务交互模式。一体化运维平台具备实时监控、统一管理、集中有效的智能运维监控管理能力，解决了客户项目上人、财、物的标准信息化管理，提升运维效率、降低运维成本。
    </p>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-Integrated-charts.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="product-feature">
        <div class="product-text2">
          <div class="product-text2-title">城市级运维：</div>
          <div>平台支持多项目、多系统管理。对于智慧城市这样的高复杂性、大规模的项目具有天然友好性。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">不止于监控：</div>
          <div>一体化运维平台不仅仅只是完成系统监控，更是项目管理、线上运维、智能化运维的结合。将项目现场上的人员、设备、系统档案化，明确资产负责人、促使所有项目问题有人可找，责任制项目管理。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">智能化运维：</div>
          <div>在网络连通的环境下，管理自上而下，对项目、系统实时运行情况的了解一步到位。平台基于故障相关监控数据、故障处理记录、数据分析算法将运维工作智能化、预警前置化。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">物联网支撑：</div>
          <div>基于物联网技术，将项目数据抽象存储，系统运行具象管理。实现万物可运维、轻运维。</div>
        </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <img src="../../assets/product/pic-Integrated-charts1.png" alt="">
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
