<template>
  <div class="upload-box">
    <div class="avatar-uploader-box">
      <!-- 图片预览 -->
      <div :key="item.id" class="image-preview" v-for="(item, index) in viewArr">
        <!-- 上传的图片 -->
        <img
          v-if="item.link"
          :src="imgBaseUrl + item.link"
          @mouseover.stop="item.isShowPopup = true"
          class="avatar"/>
        <img v-else :src="item.base64Url" @mouseover.stop="item.isShowPopup = true" class="avatar" />
        <!-- 显示查看和删除的按钮弹窗 -->
        <div
          @mouseleave="item.isShowPopup = false"
          class="avatar-uploader-popup"
          v-show="(item.link || item.base64Url) && item.isShowPopup">
          <i @click="previewImg(item)" class="el-icon-zoom-in"></i>
          <i @click="delImageUrl(index)" class="el-icon-delete"></i>
        </div>
        <div class="img-choose" v-show="Boolean(item.isMaster)"></div>
        <el-button type="text" @click="setBanner(item, index)">设为主图</el-button>
      </div>

      <!-- 方框样式 -->
      <el-upload
        v-if="imageArr.length !== numLimit"
        :action="actionUrl"
        :auto-upload="false"
        :on-change="handleAvatarChange"
        :show-file-list="false"
        accept="image/*"
        class="avatar-uploader"
        ref="avatarUploader">
        <span
          element-loading-background="rgba(0, 0, 0, 0.8)"
          element-loading-spinner="el-icon-loading"
          element-loading-text="上传中"
          style="display:block;"
          v-loading="loading">
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </span>
      </el-upload>

      <!-- 上传提示文字样式 -->
      <div class="upload-tip">
        <slot></slot>
      </div>
    </div>

    <!-- 查看大图 -->
    <el-dialog :visible.sync="dialogVisible" append-to-body center title="图片查看">
      <img :src="imgSrc" alt width="100%" />
    </el-dialog>

    <!-- 裁剪图片 start-->
    <vue-cropper-item @confirm="confirmCropper" ref="VueCropperItem" />
    <!-- 裁剪图片 end-->
  </div>
</template>

<script>
import vueCropperItem from './ImgCropperItem'
export default {
  name: 'ImgCropper',
  components: {
    vueCropperItem
  },
  props: {
    /**
     * 外部传入的图片信息
     * 传入数据格式：
     * [...{..., link: 图片路径, ... }...]
     */
    introduceImg: {
      type: Array,
      default: function() {
        return []
      }
    },
    numLimit: {
      // 最大允许上传个数
      type: Number,
      default: 1
    },
    sizeLimit: {
      // 最大单文件大小
      type: Number,
      default: 10
    },
    imgBaseUrl: {
      // 已上传图片服务器路径
      type: String,
      required: true
    },
    postCropWidth: {
      // 裁剪后图片宽度
      type: Number,
      default: 0
    },
    postCropHeight: {
      // 裁剪后图片高度
      type: Number,
      default: 0
    },
    isCompress: {
      // 是否压缩
      type: Boolean,
      default: true
    },
    compress: {
      // 压缩率
      type: String,
      default: '0.8'
    }
  },
  data() {
    return {
      loading: false,
      dialogVisible: false,
      imageArr: [],
      imgSrc: '',
      actionUrl: '',
      viewArr: []
    }
  },
  computed: {},
  watch: {
    introduceImg: {
      handler() {
        const isArray = Array.isArray(this.introduceImg)
        if (isArray && this.introduceImg.length > 0) {
          if (this.introduceImg.length <= 1) {
            this.introduceImg[0].isMaster = 1
          }
          this.introduceImg.map(item => {
            item.isShowPopup = false
          })
          this.imageArr = this.introduceImg
          this.viewArr = JSON.parse(JSON.stringify(this.introduceImg))
        } else {
          this.imageArr = []
          this.viewArr = JSON.parse(JSON.stringify(this.introduceImg))
        }
      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  methods: {
    // 上传之前
    beforeAvatarUpload(file) {
      return new Promise((resolve, reject) => {
        if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(file.name)) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return reject('上传图片只能是JPG或PNG格式!')
        }

        if (file.size > this.sizeLimit * 1024 * 1024) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return reject(`上传图片大小不能超过${this.sizeLimit}M!`)
        }
        if (this.imageArr.length === this.numLimit) {
          // eslint-disable-next-line prefer-promise-reject-errors
          return reject(`最多上传${this.numLimit}张图片`)
        }

        resolve('符合表單規則')
      })
    },
    // 上传改变
    async handleAvatarChange(file, fileList) {
      try {
        await this.beforeAvatarUpload(file)
        this.showVueCropperItem(file)
      } catch (e) {
        this.$message.warning(JSON.stringify(e))
      }
    },
    // 转换图片并emit
    async uploadOssApi(data) {
      const fileReader = new FileReader()
      const id = Number(
        Math.random()
          .toString()
          .substr(3, 3) + Date.now()
      ).toString(36)
      fileReader.readAsDataURL(data)
      fileReader.onload = () => {
        const imgUrl = fileReader.result
        this.imageArr.push({
          id: id,
          base64Url: imgUrl,
          file: data,
          isMaster: 0,
          isShowPopup: false
        })
        this.$emit('change', this.imageArr)
      }
    },
    // 预览图片
    previewImg(data) {
      if (data.link) {
        this.imgSrc = `${this.imgBaseUrl}${data.link}`
      } else {
        this.imgSrc = data.base64Url
      }
      this.dialogVisible = true
    },
    // 删除图片
    delImageUrl(index) {
      this.$emit('delete', index)
    },
    // 显示裁剪框
    showVueCropperItem(file) {
      this.$refs.VueCropperItem.init()
      this.$refs.VueCropperItem.fileName = file.name
      this.$refs.VueCropperItem.options.img = URL.createObjectURL(file.raw)
      this.setVueCropperOptions()
    },
    // 确认裁剪后上传
    async confirmCropper(file) {
      this.loading = true
      await this.uploadOssApi(file)
      this.loading = false
    },
    // 设置裁剪的配置
    setVueCropperOptions() {
      this.$refs.VueCropperItem.postCropWidth = this.postCropWidth
      this.$refs.VueCropperItem.postCropHeight = this.postCropHeight
      this.$refs.VueCropperItem.isCompress = this.isCompress // 是否压缩图片
      this.$refs.VueCropperItem.compress = this.compress // 压缩率
    },
    clearData() {
      this.imageArr = []
    },
    // 设置为主图
    setBanner (item, index) {
      this.imageArr.map(element => element.isMaster = 0)
      this.imageArr[index].isMaster = 1
      this.$emit('change', this.imageArr)
    }
  }
}
</script>

<style lang="scss">
$width: 120px;
$height: 120px;

.upload-box {
  .avatar-uploader-box {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 20px;
    min-width: 350px;
    .avatar-uploader {
      .el-upload {
        width: $width;
        height: $height;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
          border-color: #409eff;
        }
        .el-loading-spinner {
          width: $width;
          height: $height;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 0;
          top: 0;
          .el-loading-text {
            margin: 0;
          }
        }
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: $width;
        height: $height;
        line-height: $height;
        text-align: center;
      }
    }
    .image-preview {
      position: relative;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .avatar {
        width: $width;
        height: $height;
        display: block;
        border-radius: 6px;
      }
      .avatar-uploader-popup {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: $width;
        height: $height;
        background: rgba($color: #000000, $alpha: 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 20px;
        border-radius: 6px;
        i {
          width: 30%;
          text-align: center;
          padding: 0 5%;
          font-size: 24px;
        }
      }
      .img-choose {
        position: absolute;
        right: 20px;
        bottom: 40px;
        z-index: 10;
        width: 30px;
        height: 30px;
        background-image: url(data:image/png;base64,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);
        background-position:center;
        // background-size: 30px 30px;
        background-size: contain;
      }
    }
    .upload-tip {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 12px;
      color: #606266;
      max-width: 350px;
      line-height: 20px;
    }
  }
}
</style>
