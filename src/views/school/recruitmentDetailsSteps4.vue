<template>
  <div class="container">
   <div class="activity-container">
    <div class="activity-header"><span></span>请提供以下人员联系方式：<span>（可通知到的联系人）</span></div>
    <el-form :model="form" :rules="rules" ref="form" label-width="130px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="您的辅导员姓名：" prop="teacherName">
            <el-input v-model="form.teacherName" size="small" maxlength="10" placeholder="请输入辅导员姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系电话：" prop="teacherPhone">
            <el-input v-model="form.teacherPhone" size="small" placeholder="请输入辅导员电话"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="您的舍友姓名：" prop="roommateName">
            <el-input v-model="form.roommateName" size="small" maxlength="10" placeholder="请输入舍友姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系电话：" prop="roommatePhone">
            <el-input v-model="form.roommatePhone" size="small" placeholder="请输入舍友电话"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
   </div>
   <div class="activity-container">
    <div class="activity-header"><span>*</span>应聘者确认：<span><el-checkbox v-model="checked" class="check">确认并同意该条款</el-checkbox></span></div>
    <div class="activity-text">以上所填各项均为真实情况，并充分了解上述资料的真实性是双方订立劳动合同的前提条件，录用后如发现有弄虚作假或隐瞒的情况，属于严重违反公司规章制度，同意公司有权利解除劳动合同或对劳动合同做无效认定处理，公司因此遭受的损失，员工有对此赔偿的义务。</div>
   </div>
   <div class="nextButton">
     <button @click="GobackSteps">返回上一步</button>
     <button @click="nextSteps">提交</button>
   </div>
  </div>
</template>

<script>
// import { validatePhone } from '@/utils/validator.js'
export default {
  name: '',
  components: {},
  props: {
    formData: {
      type: Object
    }
  },
  data () {
    // var instructor1 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入辅导员姓名'))
    //   } else {
    //     callback()
    //   }
    // }
    // var roommate1 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入舍友姓名'))
    //   } else {
    //     callback()
    //   }
    // }
    const validatePhone = (rule, value, callback) => {
      const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
      if (value.trim() !== '') {
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    return {
      username: '',
      form: {
        teacherName: '',
        teacherPhone: '',
        roommateName: '',
        roommatePhone: ''
      },
      rules: {
        // teacherName: [{ validator: instructor1, trigger: 'blur' }],
        teacherPhone: [{ validator: validatePhone, trigger: 'blur' }],
        // roommateName: [{ validator: roommate1, trigger: 'blur' }],
        roommatePhone: [{ validator: validatePhone, trigger: 'blur' }]
      },
      checked: false
    }
  },
  created () {
    if (this.$store.state.formManage.fourForm && this.$store.state.formManage.fourForm !== '') {
      const form = JSON.parse(JSON.stringify(this.$store.state.formManage.fourForm))
      this.form = form.form
      this.username = form.username
      this.checked = form.checked
    }
  },
  mounted () {},
  methods: {
    GobackSteps () {
      this.storageData()
      this.$emit('goBack')
    },
    nextSteps () {
      if (!this.checked) {
        this.$message.warning('请先确认勾选条款后再提交')
        return false
      } else {
        this.storageData()
        this.$emit('handleClose')
      }
    },
    storageData () {
      const fourForm = {}
      fourForm.form = this.form
      fourForm.username = this.username
      fourForm.checked = this.checked
      this.$store.commit('fourStepsData', fourForm)
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  .activity-container {
    margin: 37px 30px 0 30px;
    background: #f5f5f5;
    padding: 30px;
    ::v-deep.activity-header {
      font-size: 16px;
        color: #000000;
        line-height: 22px;
        margin-bottom: 16px;
        span:nth-child(1) {
          color: #ff0000;
          margin-right: 5px;
        }
        span:nth-child(2) {
          color: #d40000;
          padding-left: 0;
        }
    }
    .activity-text {
      font-size: 16px;
      color: #666666;
      line-height: 30px;
    }
  }
  .nextButton {
    text-align: center;
    button:nth-child(1) {
      cursor: pointer;
      border: none;
      background-color: transparent;
      outline: none;
      width: 200px;
      height: 48px;
      background: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 25px;
      color: #333;
      margin: 30px 20px 30px 0;
    }
    button:nth-child(2) {
      cursor: pointer;
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
}
  /* 设置带边框的checkbox，选中后边框的颜色 */
  ::v-deep .el-checkbox__inner {
    border-color: #d40000;
  }
  /* 设置选中后的文字颜色 */
  // ::v-deep .check .el-checkbox__input.is-checked+.el-checkbox__label {
  //   color: #d40000;
  // }
  /* 设置选中后对勾框的边框和背景颜色 */
  ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    border-color: #d40000;
    background-color:#d40000;
  }
  /* 设置checkbox获得焦点后，对勾框的边框颜色 */
  ::v-deep .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color: #d40000;
  }
  /* 设置鼠标经过对勾框，对勾框边框的颜色 */
  ::v-deep .el-checkbox__inner:hover{
    border-color: #d40000;
  }
</style>
