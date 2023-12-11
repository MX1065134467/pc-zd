<template>
  <div>
   <el-upload
      class="upload-demo"
      action=""
      :auto-upload="false"
      :on-change="submitFile"
      :before-remove="handleRemove"
      :limit="limit"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :show-file-list="showFile"
    >
      <el-button
        icon="el-icon-upload2"
        style="position: absolute; left: 120px; top: 0px;"
      >上传文件</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    limit: {
      type: Number,
      default: 1
    },
    fileList: {
      type: Array,
      default: function () {
        return []
      }
    },
    showFile: {
      type: Boolean,
      default: true
    },
    sizeLimit: {
      // 最大单文件大小
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      file: ''
    }
  },
  created () {},
  mounted () {},
  methods: {
    beforeUpload (file) {
      console.log(file, 'file.name')
      return new Promise((resolve, reject) => {
        if (!/\.(jpg|jpeg|png|JPG|PNG|pdf|doc|docx)$/.test(file.name)) {
          // eslint-disable-next-line prefer-promise-reject-errors
          this.$message.warning('附件只支持JPG/JPEG/PNG/PDF/DOC/DOCX格式!')
          this.fileList = []
          return false
        }
        const filePost = file.name.substring(
          file.name.lastIndexOf('.') + 1
        )
        console.log(filePost, 'filePost')

        if (filePost === 'doc' || filePost === 'docx') {
          if (file.size > 10 * 1024 * 1024) {
            console.log(file.size, 'file.size')
            // eslint-disable-next-line prefer-promise-reject-errors
            this.$message.warning('上传word大小不能超过10M!')
            this.fileList = []
            return false
          }
        } else {
          if (file.size > this.sizeLimit * 1024 * 1024) {
            console.log(file.size, 'file.size')
            // eslint-disable-next-line prefer-promise-reject-errors
            this.$message.warning(`上传附件大小不能超过${this.sizeLimit}M!`)
            this.fileList = []
            return false
          }
        }
        // if (file.size > this.sizeLimit * 1024 * 1024) {
        //   console.log(file.size, 'file.size')
        //   // eslint-disable-next-line prefer-promise-reject-errors
        //   this.$message.warning(`上传图片大小不能超过${this.sizeLimit}M!`)
        //   this.fileList = []
        //   return false
        // }
        resolve()
      })
    },
    async submitFile (file, fileList) {
      // 获取上传的文件
      console.log(file, 'file')
      await this.beforeUpload(file)
      this.$emit('success', file, fileList)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList, '移除前确认')
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`仅可上传${this.limit}个附件`)
    }
  }
}
</script>

<style lang='scss' scoped>
::v-deep .el-upload-list {
    margin-left: 46px;
}
</style>
