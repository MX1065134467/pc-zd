<template>
  <div>
   <div class="content-wrap">
     <p class="title">前端设备-智能交通电警抓拍单元</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品概述</span>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-electric-police-capture.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">智慧电警抓拍单元</div>
        <div class="product-text2">300W/900W高清摄像头可选</div>
        <div class="product-text2">支持覆盖多车道视频电警应用</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-electric-police-capture1.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">智慧环保电警抓拍单元</div>
        <div class="product-text2">300W/900W高清摄像头可选</div>
        <div class="product-text2">支持覆盖多车道视频电警应用</div>
        <div class="product-text2">采用多光谱融合技术，可以在晚间使用红外爆闪灯的情况下，仍得到全彩的图片</div>
      </div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特点</span>
    </div>
    <div class="product-trait-text">
      <div>支持RJ45 10M/100M/1000M自适应以太网口</div>
      <div>支持本地SD卡存储</div>
      <div>红绿灯信号检测方式支持：IO信号，红绿灯检测器，视频检测</div>
      <div>支持车牌、车型、车身颜色等特征信息识别功能</div>
      <div>支持压线、逆行、闯红灯、不按导向行驶等违法检测功能</div>
      <div>支持远程数据上传</div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">适用场景</span>
    </div>
    <div class="product-applicable-scene">广泛应用城市电子警察违法监测系统的目标抓拍和识别，能有效遏制多种违法行为。</div>
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
