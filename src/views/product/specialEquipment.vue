<template>
  <div>
   <div class="content-wrap">
     <p class="title">前端设备-特种设备</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品概述</span>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-special-equipment1.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">热成像摄像机</div>
        <div class="product-text2">
          <div class="product-text2-title">特点：</div>
          <div>通常由特殊探测器和感知镜头组成，可感知温度，形成热成像，完全不受到可见光照度的影响</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">场景：</div>
          <div>应用在边防安全，森林防火，周界监控，活体探测等对温度敏感的监控场景，也可以辅助可见光相机进行全天候不间断监控以及温度检测</div>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-special-equipment2.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">执法记录仪</div>
        <div class="product-text2">
          <div class="product-text2-title">特点：</div>
          <div>专为公安、武警、城管、工商等执法部门业开发的高度集成设备，公正、客观的还原执法现场实景，保证执法人员的正当权益</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">场景：</div>
          <div>适用于公安、武警、城管、工商等执法部门人员现场执法</div>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-special-equipment3.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">全智能红外城管球机</div>
        <div class="product-text2">
          <div class="product-text2-title">特点：</div>
          <div>专为城管开发的专用型摄像机，支持流动摊贩、出店经营、机动车违停、非机动车违停、暴露垃圾、垃圾桶满溢、违规撑伞、门前（三包）脏乱等8类违章行为的检测</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">场景：</div>
          <div>适用于各种路口，街口，摊贩点等地进行监控</div>
        </div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-special-equipment4.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">全智能报警系统</div>
        <div class="product-text2">
          <div class="product-text2-title">特点：</div>
          <div>支持一键报警、视频语音的紧急求助设备,集成200W高清摄像头</div>
        </div>
        <div class="product-text2">
          <div class="product-text2-title">场景：</div>
          <div>适合城市道路，城市广场，车站，机场，学校大楼，景区，社区，医院大楼，停车场，银行，办公楼等</div>
        </div>
      </div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特点</span>
    </div>
    <div class="product-applicable-scene">有特定功能的，用于特殊场景的设备，如热成像摄像机、城管摄像机、执法记录仪等。</div>
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
    div:nth-child(n+2) {
    margin-top: 15px;
  }
}
.product-applicable-scene {
  font-family: msyh;
  font-size: 16px;
  color: #333333;
  line-height: 30px;
}
</style>
