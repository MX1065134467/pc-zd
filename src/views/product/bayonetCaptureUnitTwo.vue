<template>
  <div>
   <div class="content-wrap">
     <p class="title">前端设备-智能交通卡口抓拍单元 2</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品概述</span>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-non-motor-vehicle.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">非机动车抓拍单元</div>
        <div class="product-text2">900W高清全彩摄像头：大范围高清画质监控目标场所</div>
        <div class="product-text2">支持机动车车牌、车型、车身颜色等信息识别功能，支持压线、逆行、闯红灯、不按导向行驶等违法检测功能</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-running-red-light.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">行人闯红灯抓拍单元</div>
        <div class="product-text2">900W高清全彩摄像头：大范围高清画质监控目标场所</div>
        <div class="product-text2">支持行人闯红灯行为检测抓拍，输出闯红灯人脸抠图</div>
        <div class="product-text2">视频和抓拍图片独立配置字符叠加功能</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-detecting-test.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">车辆检测单元</div>
        <div class="product-text2">200W高清摄像头</div>
        <div class="product-text2">支持ICR红外滤片式日夜转换</div>
        <div class="product-text2">支持3D数字降噪</div>
      </div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特点</span>
    </div>
    <div class="product-trait-text">
      <div>支持RJ45 10M/100M/1000M自适应以太网口</div>
      <div>支持本地SD卡存储</div>
      <div>支持路段、路口场景下抓拍</div>
      <div>支持正、背向抓拍</div>
      <div>支持报警输出</div>
      <div>红绿灯信号检测方式支持：IO信号，红绿灯检测器，视频检测</div>
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
