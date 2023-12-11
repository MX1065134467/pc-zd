<template>
  <div>
   <div class="content-wrap">
     <p class="title">前端设备-AI摄像机（人脸+结构化）</p>
   </div>
   <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品概述</span>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-face-ball-mill.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">人脸抓拍球机</div>
        <div class="product-text2">200w人脸抓拍球机：大范围非配合式人脸捕获的场所</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-face-tube-machine.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">人脸抓拍枪机、筒机</div>
        <div class="product-text2">200W人脸抓拍枪机、筒机：优秀的前端智能处理能力，部署在固定式的公共安全防范场景</div>
        <div class="product-text2">400w人脸抓拍枪机、筒机：较远距离有效捕获人脸</div>
        <div class="product-text2">800w人脸抓拍枪机、筒机：较远距离有效捕获人脸</div>
      </div>
    </div>
    <div class="product-box">
      <div class="img">
        <img src="../../assets/product/pic-hemisphere-machine.png" alt="">
      </div>
      <div class="product-text">
        <div class="product-text1">智能结构化摄像机</div>
        <div class="product-text2">200w智能结构化摄像机</div>
        <div class="product-text2">400w智能结构化摄像机</div>
      </div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">产品特点</span>
    </div>
    <div class="product-trait-text">
      <div>采用深度学习算法，以海量图片及视频资源为路基，通过机器自身提取目标特征，形成深层可供学习的人脸图像，极大的提升了目标人脸的检出率</div>
      <div>人脸抓拍：支持对运动人脸进行检测、跟踪、抓拍、评分、筛选。</div>
      <div>人脸属性分析：支持性别，是否戴眼镜，是否面部遮挡，年龄等人脸结构化数据。</div>
      <div>支持人体自动检测抓拍，并提供结构化后的人体属性图片</div>
      <div>支持车辆自动检测抓拍，并提供结构化后的车辆属性及车牌图片</div>
      <div>一般智能安防，越界侦测/区域入侵/奔跑/徘徊/聚集/运动检测/物品遗留/停车侦测/物品拿取等</div>
    </div>
    <div class="colortitle">
      <span class="circle"></span>
      <span class="smalltitle">适用场景</span>
    </div>
    <div class="product-applicable-scene">集成人脸抓拍智能算法，广泛应用于广场、车站、码头、路口等重要场景和案件多发区监控和人脸抓拍。</div>
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
      font-size: 16px;
      font-family: msyh;
      font-weight: bold;
      color: #333333;
      margin-bottom: 5px;
    }
    .product-text2 {
      font-size: 16px;
      font-family: msyh;
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
