<template>
  <div class="all">
    <Header></Header>
    <div class="breadcrumb">
      <div class="main-width">
        <Breadcrumb :levelList="list"></Breadcrumb>
      </div>
    </div>
    <div class="detail">
      <div class="bgcontent">
        <div class="societytitle-wrap">
          <p class="title-wrap">
            {{ resData.name }}<span>{{ resData.typeName }}</span>
          </p>
          <p>工作地点：{{ resData.workCity }}</p>
          <p class="kong">
            在岗要求：<span class="border">{{
              resData.workExperienceName
            }}</span
            ><span>{{ resData.educationName }}</span>
          </p>
          <p class="kong btn-wrap">
            所属部门：{{ resData.positionName }}
            <button class="btn" @click="handleShowDialog">投递简历</button>
          </p>
        </div>
      </div>
      <div class="content-wrap">
        <div class="soft-title">
          <span class="bgtext">JOBDESCRIPTION</span>
          <span class="softtext">职位描述</span>
        </div>
        <p class="line"></p>
        <div class="description">
          <el-input
            type="textarea"
            v-model="resData.positionDesc"
            :autosize="true"
            readonly=""
          ></el-input>
        </div>
        <div class="soft-title">
          <span class="bgtext">WORKPLACE</span>
          <span class="softtext">工作地点</span>
        </div>
        <p class="line"></p>
        <div v-if="resData !== ''">
          <baidu-map
          class="bm-view"
          :center="location"
          :zoom="18"
          :scroll-wheel-zoom="true"
        >
          <bm-marker
            :position="location"
            :dragging="true"
            animation="BMAP_ANIMATION_BOUNCE"
          />
        </baidu-map>
        </div>
        <div class="location">
          <div class="img"><img src="../../assets/join/location.png" alt="" /></div>
          <div class="address">办公地址：{{ resData.workAddress }}</div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="39%"
      center
      :close-on-click-modal="false"
    >
      <template slot="title">
        <div class="diatitle">投递简历</div>
      </template>
      <el-form ref="form" :rules="rules" :model="form" label-width="150px">
        <el-form-item label="意向工作城市：" prop="city" class="city-wrap">
          <el-radio-group v-model="form.intention" @change="handleCity">
            <el-radio
              :label="item.id"
              style="width: 80%; margin: 10px 0"
              v-for="item in intentionList"
              :key="item.id"
              >{{ item.name }}</el-radio
            >
          </el-radio-group>
          <el-input
              size="small"
              class="city"
              v-model="form.city"
              :disabled="form.intention === 1"
              placeholder="请输入城市"
              style="width: 25%;"
            ></el-input>
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input
            v-model="form.name"
            style="width: 65%;"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别：" prop="sex">
          <el-select
            v-model="form.sex"
            style="width: 65%;"
            :popper-append-to-body="false"
          >
            <el-option
              :label="item.name"
              :value="item.id"
              v-for="item in sexList"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系电话：" prop="phone">
          <el-input
            v-model="form.phone"
            style="width: 65%;"
            placeholder="请输入联系电话"
          ></el-input>
        </el-form-item>
        <div style="color: #f56c6c; margin-bottom: -38px; margin-left: 60px;padding-top:10px">
          *
        </div>
        <el-form-item label="上传附件：" class="accessory" style="width: 520px;margin-top:10px">
          <file-upload
            :fileList="accessory"
            @success="handlesuccess"
          ></file-upload>
          <div
              style="
                width: 300px;
                color: #999;
                margin-left: 120px;
                font-size: 12px;
              "
            >
              <p>可上传本人简历，作品集及其他代表性附件内容</p>
              <p style="margin-top:-10px">附件大小：DOC/DOCX小于10MB，其它小于50MB</p>
            </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('form')"
          >投递简历</el-button
        >
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Header from '@/components/header'
import Breadcrumb from '../../components/Breadcrumb.vue'
import { validatePhone } from '@/utils/validator.js'
import serve from '@/api/society.js'
import fileUpload from '../../components/fileUpload.vue'
export default {
  name: 'SocietyDetail',
  components: { Header, Breadcrumb, fileUpload },
  data () {
    var checkCity = (rule, value, callback) => {
      if (this.form.intention === 2 && value === '') {
        return callback(new Error('请输入城市'))
      } else {
        callback()
      }
    }
    return {
      // list: ['社会招聘', '招聘详情'],
      list: [
        {
          path: '/society',
          name: '招聘岗位'
        },
        {
          path: '/societyDetail',
          name: '招聘详情'
        }
      ],
      dialogVisible: false,
      id: null,
      form: {
        intention: 1,
        city: '',
        name: '',
        sex: 1,
        phone: '',
        enclosure: '',
        type: 1
      },
      rules: {
        city: [
          { required: true, validator: checkCity, trigger: 'change' },
          {
            max: 20,
            message: '长度在 20 个字符以内',
            trigger: 'change'
          }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 6 个字符',
            trigger: 'change'
          }
        ],
        sex: { required: true, message: '请选择性别', trigger: 'change' },
        phone: [{ required: true, validator: validatePhone, trigger: 'blur' }]
      },
      accessory: [],
      resData: '',
      intentionList: [],
      sexList: [],
      file: '',
      location: {
        lng: 116.181732,
        lat: 40.06492
      }
    }
  },
  mounted () {
    this.form.positionId = +this.$route.query.id
    this.getData()
    this.getIntentionList()
    this.getSex()
    document.documentElement.scrollTop = 0
    window.pageYOffset = 0
    document.body.scrollTop = 0
  },
  methods: {
    // 详情
    getData () {
      serve.getDetail(this.form.positionId, 1).then((res) => {
        if (res.data.code === 200) {
          this.resData = res.data.data
          this.location.lng = this.resData.workLongitude
          this.location.lat = this.resData.workLatitude
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    // 意向城市
    getIntentionList () {
      serve.intentionCity().then((res) => {
        if (res.data.code === 200) {
          this.intentionList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    // 获取性别
    getSex () {
      serve.sexList().then((res) => {
        if (res.data.code === 200) {
          this.sexList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    handleShowDialog () {
      this.dialogVisible = true
    },
    handleCity () {
      if (this.form.intention === 1) {
        this.form.city = ''
        this.$refs.form.clearValidate('city')
      }
    },
    handlesuccess (file, fileList) {
      this.file = file
    },
    // 附件上传
    async fileUpload () {
      const that = this
      const fileList = []
      fileList.push(this.file)
      if (fileList.length) {
        const params = new FormData()
        fileList.map((item) => {
          params.append('attachment', item.raw)
        })
        const res = await serve.fileUploads(params)
        if (res.data.code === 200) {
          that.form.enclosure = JSON.parse(JSON.stringify(res.data.data.url))
        } else {
          this.$loading().close()
          that.$message.warning(res.data.msg)
          return false
        }
      }
    },
    // 提交
    submitForm (formName) {
      if (this.file !== '') {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$loading({
              lock: true,
              text: '正在投递，请稍后...',
              spinner: 'el-icon-loading'
            })
            this.fileUpload().then((res) => {
              if (res !== false) {
                serve.addInfo(this.form).then((res) => {
                  if (res.data.code === 200) {
                    this.$message.success(res.data.msg)
                    this.dialogVisible = false
                    this.$loading().close()
                    this.form = {
                      intention: 1,
                      city: '',
                      name: '',
                      sex: 1,
                      phone: '',
                      enclosure: '',
                      type: 1,
                      positionId: +this.$route.query.id
                    }
                    this.file = ''
                    this.accessory = []
                  } else {
                    this.$loading().close()
                    this.$message.error(res.data.msg)
                  }
                })
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else if (this.file === '' && this.form.enclosure === '') {
        this.$message.warning('请先上传附件')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

::v-deep .el-button--primary {
  background-color: #e18691;
  border-color: #e18691;
}

::v-deep .el-button {
  width: 130px;
}

::v-deep .el-button:hover {
  color: #606266;
  border-color: #e18691;
  background-color: #fff;
}

::v-deep .el-button--primary:hover {
  color: #fff;
  background-color: #e18691;
}

::v-deep .el-radio__inner {
  border: 1px solid lightgrey;
}
::v-deep .el-radio__input.is-checked .el-radio__inner {
  border-color: #c30d23;
  background: #c30d23;
}

::v-deep .el-radio__input.is-checked + .el-radio__label {
  color: #606266;
}

::v-deep .el-input__inner:focus {
  border-color: #e18691;
}

::v-deep .el-dialog {
  border-radius: 5px;
}

::v-deep .el-input .el-input__inner {
  border-color: #dcdfe6;
}

::v-deep .el-input .el-input__inner:focus {
  border-color: #e18691;
}

::v-deep .el-select-dropdown__item.selected {
  color: #e18691;
}

::v-deep .accessory {
  .el-form-item__content {
    margin-left: 30px !important;
  }
}

::v-deep .el-upload-list__item {
  width: 100%;
}

::v-deep .el-textarea__inner {
  // outline: none;
  border: none;
  resize: none;
  overflow-y: hidden;
  cursor: default;
  width: 60%;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
  padding-left: 0;
}
.all {
  margin-top: 70px;
  font-family: msyh;
  .detail {
    width: 100%;
    height: 100%;
    .bgcontent {
      width: 100%;
      height: 260px;
      background-image: url("../../assets/join/societydetailbg.png");
      background-size: contain;
      .societytitle-wrap {
        width: 1200px;
        height: 100%;
        margin: auto;
        border: 1px solid transparent;
        font-size: 14px;
        .title-wrap {
          color: #1f2532;
          font-size: 34px;
          font-weight: bold;
          margin: 40px 0 30px 0;
          span {
            margin-left: 22px;
            color: #e6382e;
            font-size: 40px;
          }
        }
        .btn-wrap {
          position: relative;
          .btn {
            cursor: pointer;
            padding: 12px 64px;
            background-color: #c30d23;
            color: #ffffff;
            font-size: 18px;
            border: none;
            position: absolute;
            right: 0;
            bottom: 10px;
            border-radius: 5px;
          }
        }
        .kong {
          margin-top: 11px;
        }
        .border {
          border-right: 1px solid #cccccc;
          padding-right: 15px;
          margin-right: 15px;
        }
      }
    }
    .content-wrap {
      width: 1200px;
      margin: 60px auto 128px auto;
      .soft-title {
        position: relative;
        .bgtext {
          font-family: Impact;
          opacity: 0.05;
          font-size: 20px;
        }
        .softtext {
          font-size: 16px;
          position: absolute;
          left: 0px;
          top: 9px;
          font-weight: bold;
        }
      }
      .line {
        margin-top: 15px;
        width: 20px;
        height: 3px;
        background-color: #c30d23;
        margin-bottom: 22px;
      }
      .description {
        color: #000000;
        font-size: 14px;
        line-height: 30px;
        margin-bottom: 20px;
      }
      .bm-view {
        width: 100%;
        height: 300px;
      }
      .location {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 1px;
        .img {
          width: 12px;
          height: 14px;
          margin-right: 8px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .address {
          font-size: 14px;
        }
      }
    }
  }
  .diatitle {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
  }
  .city-wrap {
    position: relative;
    .city {
      position: absolute;
      top: 48%;
      left: 170px;
    }
  }
}
</style>
