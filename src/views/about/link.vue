<template>
  <div>
    <p class="title">北京总部</p>
    <baidu-map
      class="bm-view"
      :center="{ lng: 116.181732, lat: 40.06492 }"
      :zoom="18"
      :scroll-wheel-zoom="true"
    >
      <bm-marker
        :position="{ lng: 116.181732, lat: 40.06492 }"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      />
    </baidu-map>
    <div class="link-wrap">
      <div class="link-content">
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-one.png"
            alt="加载失败"
          /><span class="link-text">服务热线：</span>400-863-9696
        </p>
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-two.png"
            alt="加载失败"
          /><span class="link-text">项目合作：</span>project@ichinae.com
        </p>
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-three.png"
            alt="加载失败"
          /><span class="link-text">供应商推荐：</span>sourcing@ichinae.com
        </p>
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-four.png"
            alt="加载失败"
          /><span class="link-text">产品销售：</span>product@ichinae.com
        </p>
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-five.png"
            alt="加载失败"
          /><span class="link-text">公司总机：</span>010-5828 6000
        </p>
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-six.png"
            alt="加载失败"
          /><span class="link-text">传 真：</span>010-5828 6111
        </p>
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-seven.png"
            alt="加载失败"
          /><span class="link-text">邮 编：</span>100095
        </p>
        <p class="link-item">
          <img
            class="link-icon"
            src="../../assets/about/icon-eight.png"
            alt="加载失败"
          /><span class="link-text">公司地址：</span
          >北京市海淀区中关村环保科技示范园地锦路7号院5号楼
        </p>
      </div>
      <div class="link-code">
        <img src="../../assets/about/pic-code.png" alt="加载失败" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
.link-wrap {
   margin-top: 30px;
   display: flex;
  .link-content {
    width: 800px;
    .link-item {
      font-family: msyh;
      margin-bottom: 15px;
      font-size: 16px;
      .link-icon {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      .link-text {
        font-size: 16px;
        color: #000000;
        margin: 0 10px 0 12px;
      }
    }
  }
  .link-code {
    width: 400px;
    height: 290px;
    line-height: 290px;
    text-align: center;
    img {
      width: 170px;
      height: 170px;
      vertical-align: middle;
    }
  }
}
::v-deep .BMap_Marker {
  div {
    width: 40px !important;
    height: 25px !important;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
