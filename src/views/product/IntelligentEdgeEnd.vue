<template>
  <div>
   <div class="content-wrap">
     <p class="title">前端设备-高清监控摄像机</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品概述</span>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-ballhead-camera.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">球机</div>
        <div class="product-text2">200w高清球机：大范围高清画质监控场所</div>
        <div class="product-text2">800W高清球机：高点监控</div>
        <div class="product-text2">双SENSOR球机：超低照度</div>
        <div class="product-text2">全景融合球机：单个画面中提供宽广覆盖区域的监控应用场景</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-bolt.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">枪机、筒机</div>
        <div class="product-text2">200w高清球机：大范围高清画质监控场所</div>
        <div class="product-text2">800w枪机、筒机：高清画质监控场所监控</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-hemisphere-machine.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">半球机</div>
        <div class="product-text2">200w半球型摄像机：室内、走廊、楼梯等小范围场所</div>
      </div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特点</span>
    </div>
    <div class="product-trait-text">
      <div>低照度，感光灵敏度高，低照效果好</div>
      <div>宽动态，轻松应对复杂环境</div>
      <div>可根据环境光照度自动调节光圈大小</div>
      <div>支持ONVIF及GB/T 28181</div>
      <div>支持本地SD卡存储</div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">适用场景</span>
    </div>
    <div class="product-applicable-scene">为高清视频监控设计，广泛应用于金融、电信、超市、酒店、政府、学校、机场、工厂、博物馆、公安、司法、平安城市等要求高清画质的场所。</div>
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
  width: 828px;
  height: 60px;
  opacity: 1;
  font-family: msyh;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  color: #333333;
  line-height: 30px;
}
</style>
