<template>
  <div>
   <div class="content-wrap">
     <p class="title">前端设备-智能交通卡口抓拍单元 1</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品概述</span>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-enter-out.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">出入口抓拍单元</div>
        <div class="product-text2">200W高清摄像头：大范围高清画质监控目标场所</div>
        <div class="product-text2">集成摄像机、护罩、LED补光灯、镜头、电源适配器于一体</div>
        <div class="product-text2">车辆特征智能识别</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-bayonet.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">智慧卡口抓拍单元</div>
        <div class="product-text2">300W/900W高清摄像头可选</div>
        <div class="product-text2">大范围高清画质监控目标场所</div>
        <div class="product-text2">支持包括机动车辆、非机动车辆、行人识别及属性分析全结构化视频分析</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-environmental-protection-bayonet.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">智慧环保卡口单元</div>
        <div class="product-text2">300W/900W高清摄像头可选</div>
        <div class="product-text2">采用多光谱融合技术，可以在晚间使用红外爆闪灯的情况下，仍得到全彩的图片</div>
        <div class="product-text2">支持车牌、车型、车身颜色、车标及车辆子品牌、挂坠、安全带、遮阳板等信息识别</div>
      </div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特点</span>
    </div>
    <div class="product-trait-text">
      <div>支持RJ45 10M/100M/1000M自适应以太网口</div>
      <div>支持本地SD卡存储</div>
      <div>支持黑、白名单的导入及对比</div>
      <div>支持线圈触发、视频触发等多种触发模式</div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">适用场景</span>
    </div>
    <div class="product-applicable-scene">适用于城市道路或高速公路出入口、收费站等车辆出入口，以及主要道路路口等重点治安监控地段全天候实时检测，实现卡口场景全目标属性识别和捕获。</div>
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
.product-box {
  height: 135px;
  display: flex;
  justify-content: start;
  .img {
    margin: auto 0;
    img {
      width: 114px;
      height: 114px;
    }
  }
  .product-text {
    margin: auto 0 auto 62px;
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
    }
  }
}
.product-box:nth-child(n+2) {
  margin-top: 45px;
}
.product-trait-text {
  font-family: msyh;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  line-height: 30px;
}
.product-applicable-scene {
  font-family: msyh;
  font-size: 16px;
  color: #333333;
  line-height: 30px;
}
</style>
