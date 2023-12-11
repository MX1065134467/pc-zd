<template>
  <div class="container">
   <div class="form">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="应聘岗位：" prop="positionName">
            <el-select v-model="ruleForm.positionName" filterable disabled placeholder="请选择/输入岗位" style="width:100%;">
              <el-option
                v-for="item in postList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="意向工作城市：" prop="intention">
            <el-radio-group v-model="ruleForm.intention" @change="cityChange">
              <el-radio
                v-for="item in cityList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-radio>
            </el-radio-group>
            <span :class="[ ruleForm.intention === '可以在国内部分城市' ? 'check' : 'uncheck' ]">,具体是</span>
            <el-input class="intention-city" maxlength="20" :disabled="isIntentionCity" v-model="ruleForm.city"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别：" prop="sex">
            <el-select v-model="ruleForm.sex" filterable placeholder="请选择性别" style="width:100%;">
              <el-option
                v-for="item in sexList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="出生日期：" prop="birthday">
            <el-input v-model="ruleForm.birthday" placeholder="请输入出生日期"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="民族：" prop="nation">
            <el-input v-model="ruleForm.nation" placeholder="请输入民族"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="籍贯：" prop="nativePlace">
            <el-input v-model="ruleForm.nativePlace" placeholder="请输入籍贯"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="政治面貌：" prop="politicalOutlook">
            <el-select v-model="ruleForm.politicalOutlook" filterable placeholder="请选择政治面貌" style="width:100%;">
              <el-option
                v-for="item in politicsStatusList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="健康状况：" prop="health">
            <el-input v-model="ruleForm.health" placeholder="请输入健康状况"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="身高：" prop="height">
            <el-input v-model="ruleForm.height" placeholder="请输入身高"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="体重：" prop="weight">
            <el-input v-model="ruleForm.weight" placeholder="请输入体重"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="毕业院校：" prop="school">
            <el-input v-model="ruleForm.school" placeholder="请输入毕业院校"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业：" prop="major">
            <el-input v-model="ruleForm.major" placeholder="请输入专业"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="学历：" prop="education">
            <el-select v-model="ruleForm.education" filterable placeholder="请选择学历" style="width:100%;">
              <el-option
                v-for="item in educationBackgroundList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="外语级别：" prop="language">
            <el-input v-model="ruleForm.language" placeholder="请输入外语级别"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="外语分数：" prop="score">
            <el-input v-model="ruleForm.score" placeholder="请输入外语分数"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计算机等级：">
            <el-input v-model="ruleForm.computerLevel" maxlength="10" placeholder="请输入计算机等级"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="档案归属地：">
            <el-input v-model="ruleForm.fileOwnership" maxlength="30" placeholder="请输入档案归属地"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="生源地：">
            <el-input v-model="ruleForm.source" maxlength="30" placeholder="请输入生源地"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="期望薪资：" prop="salaryExpect">
            <el-input v-model="ruleForm.salaryExpect" min="0" placeholder="请输入期望薪资">
              <!-- <i slot="suffix">/月</i> -->
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="户籍地址：" prop="permanentAddress">
            <el-input v-model="ruleForm.permanentAddress" placeholder="请输入户籍地址"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="户口性质：" prop="permanentType">
            <el-select v-model="ruleForm.permanentType" filterable placeholder="请选择户口性质" style="width:100%;">
              <el-option
                v-for="item in householdRegistrationList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="身份证号码：" prop="idCard">
            <el-input v-model="ruleForm.idCard" placeholder="请输入身份证号码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="特长：" prop="specialty">
            <el-input v-model="ruleForm.specialty" placeholder="请输入特长"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="联系电话：" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="请输入联系电话"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="photo">
        <el-col :span="12">
            <el-form-item label="上传个人照片：" required>
              <ImgCropper
                :numLimit="1"
                :imgBaseUrl="IMAGEURL"
                @change="getImages($event)"
                @delete="deleteFile($event)"
                :introduceImg="photoList"
              ></ImgCropper>
            <div
              style="
                width: 200px;
                color: #999;
                margin-top: -28%;
                margin-left: 112px;
                font-size: 12px;
                line-height: 20px;
              "
            >
              请点击上传个人照片 图片格式：JPG、PNG 图片大小：小于10MB
            </div>
            </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上传附件:" class="accessory" required>
            <file-upload
              :fileList="accessory"
              @success="handlesuccess"
            ></file-upload>
            <div
              style="
                width: 300px;
                color: #999;
                margin-left: 120px;
                margin-top: 10px;
                font-size: 12px;
                line-height: 20px;
              "
            >
              <p>可上传本人简历，作品集及其他代表性附件内容</p>
              <p>附件大小：DOC/DOCX小于10MB，其它小于50MB</p>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
   </div>
   <div class="nextButton">
     <button @click="nextSteps">下一步</button>
   </div>
  </div>
</template>

<script>
import serve from '@/api/join.js'
import { validateIdCard, validatePhone, validateEmail } from '@/utils/validator.js'
import ImgCropper from '../../components/ImgCropper/ImgCropper'
import fileUpload from '../../components/fileUpload.vue'

export default {
  name: '',
  components: { ImgCropper, fileUpload },
  props: {
    formData: {
      type: Object
    }
  },
  data () {
    var expectation = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入期望薪资'))
      } else if (isNaN(value)) {
        callback(new Error('请输入数字值'))
      } else if (value < 0) {
        callback(new Error('请输入大于等于0的期望薪资'))
      } else {
        callback()
      }
    }
    var score = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入外语分数'))
      } else if (isNaN(value)) {
        callback(new Error('请输入数字值'))
      } else if (value < 0) {
        callback(new Error('请输入大于等于0的分数'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        positionName: '',
        intention: '可以在国内各地工作',
        city: '',
        name: '',
        birthday: '',
        nation: '',
        nativePlace: '',
        politicalOutlook: '',
        health: '',
        height: '',
        weight: '',
        school: '',
        major: '',
        education: '',
        language: '',
        score: '',
        computerLevel: '',
        fileOwnership: '',
        source: '',
        salaryExpect: '',
        permanentAddress: '',
        permanentType: '',
        idCard: '',
        specialty: '',
        phone: '',
        email: '',
        accessory: []
      },
      rules: {
        positionName: [
          { required: true, message: '请选择应聘岗位', trigger: 'change' }
        ],
        intention: [
          { required: true, message: '请选择意向工作城市', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '请输入出生日期', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        nation: [
          { required: true, message: '请输入民族', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        nativePlace: [
          { required: true, message: '请输入籍贯', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        politicalOutlook: [
          { required: true, message: '请选择政治面貌', trigger: 'change' }
        ],
        health: [
          { required: true, message: '请输入健康状况', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        height: [
          { required: true, message: '请输入身高', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        weight: [
          { required: true, message: '请输入体重', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        school: [
          { required: true, message: '请输入毕业院校', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        major: [
          { required: true, message: '请输入专业', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请选择学历', trigger: 'change' }
        ],
        language: [
          { required: true, message: '请输入外语级别', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        score: [
          { required: true, validator: score, trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        salaryExpect: [
          { required: true, validator: expectation, trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        permanentAddress: [
          { required: true, message: '请输入户籍地址', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],
        permanentType: [
          { required: true, message: '请选择户口性质', trigger: 'change' }
        ],
        idCard: [{ required: true, validator: validateIdCard, trigger: 'blur' }],
        specialty: [
          { required: true, message: '请输入特长', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],
        phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
        email: [{ required: true, validator: validateEmail, trigger: 'blur' }]
      },
      postList: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      isIntentionCity: true,
      sexList: [], // 性别
      politicsStatusList: [], // 政治面貌
      educationBackgroundList: [],
      householdRegistrationList: [], // 户口性质
      cityList: [],
      IMAGEURL: 'http://192.168',
      fileList: '',
      file: '',
      accessory: [],
      photoList: []
    }
  },
  created () {
    this.ruleForm.positionName = this.$route.query.name
    if (this.$store.state.formManage.firstForm && this.$store.state.formManage.firstForm !== '') {
      const form = JSON.parse(JSON.stringify(this.$store.state.formManage.firstForm))
      this.ruleForm = form.ruleForm
      this.isIntentionCity = form.isIntentionCity
      console.log(this.formData, 'this.formData')
      this.fileList = this.formData.file
      this.photoList = form.photoList
      this.file = this.formData.files
      this.accessory = []
      this.accessory[0] = this.formData.files
    }
    this.edcationList() // 学历
    this.jobCity() // 工作地
    this.sex() // 性别
    this.registered() // 户口
    this.politicsStatus() // 政治面貌
  },
  mounted () {},
  methods: {
    cityChange (e) {
      if (e === '可以在国内部分城市') {
        this.isIntentionCity = false
      } else {
        this.isIntentionCity = true
        this.ruleForm.city = ''
      }
    },
    async nextSteps () {
      if (this.ruleForm.intention === '1' && this.ruleForm.city === '') {
        this.$message.warning('请输入意向城市')
        return false
      }
      if (this.fileList === '') {
        this.$message.warning('请先上传个人照片')
        return false
      }
      if (this.file === '') {
        this.$message.warning('请先上传附件')
        return false
      }
      this.$refs.ruleForm.validate(async valid => {
        if (!valid) {
          this.$message.warning('请检查必填项')
          return false
        } else {
          const firstForm = {}
          if (this.fileList) {
            await this.getBase64(this.fileList).then(res => {
              firstForm.photoList = res
            })
          } else {
            firstForm.photoList = this.photoList
          }
          firstForm.ruleForm = this.ruleForm
          firstForm.isIntentionCity = this.isIntentionCity
          firstForm.file = this.file
          firstForm.fileList = this.fileList
          this.$store.commit('firstStepsData', firstForm)
          this.$emit('handleClose', this.fileList, this.file)
        }
      })
    },
    getImages (file) {
      this.fileList = file
      console.log(file, 'this.fileList')
    },
    deleteFile (file) {
      this.fileList = ''
    },
    handlesuccess (file, fileList) {
      this.file = file
    },
    edcationList () {
      serve.getEducation().then(res => {
        if (res.data.code === 200) {
          const list = res.data.data
          list.forEach(item => {
            item.value = item.id
            item.label = item.name
          })
          this.educationBackgroundList = list
        }
      })
    },
    jobCity () {
      serve.getJobCity().then(res => {
        if (res.data.code === 200) {
          const list = res.data.data
          list.forEach(item => {
            item.value = item.id
            item.label = item.name
          })
          this.cityList = list
        }
      })
    },
    sex () {
      serve.getSex().then(res => {
        if (res.data.code === 200) {
          const list = res.data.data
          list.forEach(item => {
            item.value = item.id
            item.label = item.name
          })
          this.sexList = list
        }
      })
    },
    registered () {
      serve.getRegistered().then(res => {
        if (res.data.code === 200) {
          const list = res.data.data
          list.forEach(item => {
            item.value = item.id
            item.label = item.name
          })
          this.householdRegistrationList = list
        }
      })
    },
    politicsStatus () {
      serve.getPoliticsStatus().then(res => {
        if (res.data.code === 200) {
          const list = res.data.data
          list.forEach(item => {
            item.value = item.id
            item.label = item.name
          })
          this.politicsStatusList = list
        }
      })
    },
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        reader.readAsDataURL(file.file)
        reader.onload = function (e) {
          const imgResult = e.target.result
          this.photoList = []
          this.photoList.push({ url: imgResult })
          resolve(this.photoList)
        }
        reader.onerror = function (error) {
          reject(error)
        }
        // reader.onloadend = function () {
        //   resolve(this.imgResult)
        // }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  .form {
    margin: 37px 30px 0 30px;
    background: #f5f5f5;
    padding: 30px;
    .photo {
      margin-top: 20px !important;
    }
    .check {
      color: #539FFF;
    }
    .uncheck {
      color: #616973;
    }
  }
}
::v-deep .intention-city {
  width: 30%;
  margin-left: 16px;
}
.nextButton {
  text-align: center;
  button {
    border: none;
    background-color: transparent;
    outline: none;
    width: 200px;
    height: 48px;
    background: #4281ff;
    border-radius: 24px;
    color: #fff;
    margin: 30px auto;
  }
}
::v-deep .accessory {
  .el-form-item__content {
    margin-left: 0 !important;
  }
}
</style>
