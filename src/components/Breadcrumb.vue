<template>
  <div class="bread_tags">
    <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in levelList" :key="item.name" :to="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    levelList: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss">
.bread_tags {
  .app-breadcrumb {
    .el-breadcrumb__item {
      &:last-child {
        .el-breadcrumb__inner {
          color: #000000;
        }
      }
    }
  }
}
</style>

<style scoped lang="scss">
.bread_tags {
  color: #666666;
  width: 100%;
  height: 48px;
  opacity: 0.95;
  // background: #ffffff;
  display: flex;
  flex-direction: row;
  .app-breadcrumb {
    font-size: 14px;
    line-height: 48px;
  }
}
</style>
