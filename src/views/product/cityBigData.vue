<template>
  <div>
   <div class="content-wrap">
     <p class="title">智慧城市大数据平台</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统概述</span>
   </div>
    <p class="text">
      随着计算机技术全面融入社会生活，信息爆炸已经积累到了一个开始引发变革的程度，各级企业部门不断的进行信息化建设，新系统不断的投入使用，老的系统数据量不断的增加，多个系统之间数据各自孤立，数据的不断增加，系统运行速度逐渐变慢，多系统之间也不能进行横向的数据挖掘分析，数据本身的价值没有得到很好的挖掘利用。而传统关系型数据库采用的分库分表、索引、读写分离等解决方式，只能暂时的在时间检索范围内解决查询的问题，对于随机查询业务不能很好的支持业务要求，更不能在更广泛的维度上进行业务支撑，反而带来了很大的维护成本、数据安全风险。
    </p>
    <p class="text">
      为了整合多种数据源，提供标准接口快速的分析检索能力，打通数据孤岛，从各个维度进行数据分析的展示，我司提出智慧城市大数据平台的建设。通过使用大数据技术，解决海量数据快速查询、运算和数据分析的问题，同时将各个系统之间的数据壁垒打通，真正实现了各系统数据的统一管理，形成一个统一的数据中心，为政府机构提供统一决策提供真生意义上的数据支持。
    </p>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">系统架构</span>
   </div>
   <img src="../../assets/product/pic-city-big-data-charts.png" alt="">
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特色</span>
   </div>
   <div class="product-feature">
        <div class="product-text2">
          <div class="product-text2-title">多源采集：</div>
          <div>兼具多组件多数据源的数据采集扩展能力。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">数据治理：</div>
          <div>构建统一的用户体系，规范的ETL流程，安全可靠的数据加密保证。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">数据仓库：</div>
          <div>针对用户行为数据打造的通用数据仓库系统，实时的数据存储和查询能力，满足业务分钟级的数据分析和应用需求，支持任意结构化数据，多种存储类型，支撑多场景应用。</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">数据挖掘：</div>
          <div>支持深度学习等算法模型训练能力，赋能多场景智能应用，包括预测，预警,个性化推荐等。</div>
        </div>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">成功案例</span>
   </div>
   <div class="product-applicable-scene">智慧城市赫章、凤凰大数据平台</div>
   <img src="../../assets/product/pic2-city-big-data-charts2.png" alt="">
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
.product-applicable-scene {
  font-family: msyh;
  font-size: 16px;
  color: #333333;
  line-height: 30px;
}
</style>
