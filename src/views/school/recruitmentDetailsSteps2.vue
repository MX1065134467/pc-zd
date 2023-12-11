<template>
  <div class="container">
   <div class="family">
     <div class="linkman-header">
      <div class="family-title"><span>*</span>家庭成员：<span>（最少填写一位家庭成员）</span></div>
      <div class="add" @click="add">
        <img src="../../assets/school/add.png" alt="">
        添加成员
      </div>
     </div>
     <div class="family-content">
      <div class="family-card" v-for="(item, index) in cardList" :key="index">
        <div class="family-edit">
          <div class="bianji" @click="cardEdit(item)"><img src="../../assets/school/icon_bianji.png" alt=""></div>
          <div @click="cardDel(item)"><img src="../../assets/school/icon_shanchu.png" alt=""></div>
        </div>
        <div class="family-card-img">
          <img src="../../assets/school/tx-head.png" alt="">
        </div>
        <div class="family-card-text">
         <div class="name">{{item.name}}<span>{{item.age}}岁</span></div>
         <div class="content">
           <div class="content-title">关系：</div>
           <div>{{item.urgentRelation}}</div>
         </div>
         <div class="content">
           <div class="content-title">单位：</div>
           <div>{{item.unit}}</div>
         </div>
         <div class="content">
           <div class="content-title">职务：</div>
           <div>{{item.position}}</div>
         </div>
        </div>
      </div>
      <div class="formData" v-if="isShow">
        <div class="content">
          <el-form :model="form" :rules="rules1" ref="form" label-width="110px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="姓名：" prop="name">
                  <el-input v-model="form.name" size="small" placeholder="请输入姓名"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="与本人关系：" prop="urgentRelation">
                  <el-input v-model="form.urgentRelation" size="small" placeholder="输入与本人关系"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="年龄：" prop="age">
                  <el-input v-model="form.age" size="small" placeholder="请输入年龄"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="工作单位：" prop="unit">
                  <el-input v-model="form.unit" size="small" placeholder="输入工作单位"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="职位：" prop="position">
                  <el-input v-model="form.position" size="small" placeholder="请输入职位"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <div class="sure">
                  <el-button class="button" type="primary" size="small" round @click="sure">保存</el-button>
                  <el-button class="button" round size="small" @click="cancel">取消</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
     </div>
   </div>
   <div class="linkman">
    <div class="linkman-title"><span>*</span>紧急联系人：<span>（可通知到的联系人）</span></div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="联系人姓名" prop="urgentName">
            <el-input v-model="ruleForm.urgentName" placeholder="请输入联系人姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="与本人关系" prop="urgentRelation">
            <el-input v-model="ruleForm.urgentRelation" placeholder="与本人关系"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="联系电话" prop="urgentPhone">
            <el-input v-model="ruleForm.urgentPhone" placeholder="请输入联系电话"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
   </div>
   <div class="nextButton">
     <button @click="GobackSteps">返回上一步</button>
     <button @click="nextSteps">下一步</button>
   </div>
   <!-- 删除模态框 -->
    <div v-if="messageData.show">
      <reminder-modal @handleDialog="handleModalShow" v-bind:message="messageData">
        <div slot="content">
          {{messageData.content}}
        </div>
      </reminder-modal>
    </div>
  </div>
</template>

<script>
import { validatePhone } from '@/utils/validator.js'
import ReminderModal from '@/components/ReminderModal'
export default {
  // name: '',
  components: { ReminderModal },
  props: {
    formData: {
      type: Object
    }
  },
  data () {
    var age = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入年龄'))
      } else if (!Number(value)) {
        callback(new Error('请输入数字值'))
      } else if (value <= 0 || value >= 150) {
        callback(new Error('请输入合适的年龄'))
      } else {
        callback()
      }
    }
    return {
      // 删除模态框
      messageData: {
        show: false,
        title: '确认删除',
        type: '',
        content: ''
      },
      cardItem: '',
      ruleForm: {
        urgentName: '',
        urgentRelation: '',
        urgentPhone: ''
      },
      rules: {
        urgentName: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        urgentRelation: [
          { required: true, message: '请输入与本人关系', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        urgentPhone: [{ required: true, validator: validatePhone, trigger: 'blur' }]
      },
      form: {
        name: '',
        urgentRelation: '',
        age: '',
        unit: '',
        position: ''
      },
      rules1: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        urgentRelation: [
          { required: true, message: '请输入与本人关系', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        age: [
          { required: true, validator: age, trigger: 'blur' }
        ],
        unit: [
          { required: true, message: '请输入工作单位', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请输入职位', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ]
      },
      cardList: [],
      isShow: true
    }
  },
  created () {
    if (this.$store.state.formManage.secondForm && this.$store.state.formManage.secondForm !== '') {
      const form = JSON.parse(JSON.stringify(this.$store.state.formManage.secondForm))
      this.ruleForm = form.ruleForm
      this.form = form.form
      this.cardList = form.cardList
      this.isShow = form.isShow
    }
  },
  mounted () {},
  methods: {
    GobackSteps () {
      this.storageData()
      this.$emit('goBack')
    },
    nextSteps () {
      if (this.cardList.length <= 0) {
        this.$message.warning('请至少填写一位家庭成员信息后再点击下一步')
        return false
      }
      this.$refs.ruleForm.validate(valid => {
        if (!valid) {
          this.$message.warning('请补全紧急联系人信息后再点击下一步')
          return false
        } else {
          this.storageData()
        }
      })
    },
    storageData () {
      const secondForm = {}
      secondForm.ruleForm = this.ruleForm
      secondForm.form = this.form
      secondForm.cardList = this.cardList
      secondForm.isShow = this.isShow
      this.$emit('handleClose')
      this.$store.commit('secondStepsData', secondForm)
    },
    add () {
      if (this.cardList.lenght > 10) {
        this.$message.warning('家庭成员添加已达上限')
        return false
      } else {
        this.isShow = true
      }
    },
    cancel () {
      this.$refs.form.resetFields()
    },
    cardEdit (item) {
      const index = this.cardList.findIndex(res => {
        return res.name === item.name
      })
      console.log(index, 'index')
      this.cardList.splice(index, 1)
      this.form = item
      this.isShow = true
    },
    cardDel (item) {
      console.log(item, 'item')
      this.cardItem = item
      this.messageData.type = 1
      this.messageData.content = '确认删除这个家庭成员卡片？'
      this.messageData.show = true
    },
    // 删除
    handleModalShow (type) {
      if (type === 1) {
        console.log(type, 'type111')
        this.form.name = ''
        this.form.urgentRelation = ''
        this.form.age = ''
        this.form.unit = ''
        this.form.position = ''
      }
      const index = this.cardList.findIndex(res => {
        return res.name === this.cardItem.name
      })
      console.log(index, 'index')
      this.cardList.splice(index, 1)
      this.cardItem = ''
      if (this.cardList.length <= 0) {
        this.isShow = true
      }
    },
    sure () {
      this.$refs.form.validate(valid => {
        if (!valid) {
          this.$message.warning('请补全家庭成员信息后再提交')
          return false
        } else {
          const form = JSON.parse(JSON.stringify(this.form))
          this.cardList.push(form)
          this.isShow = false
          this.$refs.form.resetFields()
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  .family {
    margin: 37px 30px 0 30px;
    background: #f5f5f5;
    padding: 30px;
    .linkman-header {
      display: flex;
      justify-content: space-between;
      .add {
        font-size: 16px;
        color: #4281ff;
        vertical-align: middle;
        cursor: pointer;
        img {
          width: 13px;
          height: 14px;
          margin-right: 5px;
        }
      }
      .family-title {
        font-size: 16px;
        color: #000000;
        line-height: 22px;
        margin-bottom: 30px;
        span:nth-child(1) {
          color: #ff0000;
          margin-right: 5px;
        }
        span:nth-child(2) {
          color: #999;
        }
      }
    }
    .family-content {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      .family-card {
        display: flex;
        justify-content: start;
        position: relative;
        width: 480px;
        height: 230px;
        background: url('../../assets/school/bgCard.png') no-repeat;
        background-size: 100% 230px;
        padding: 0 30px;
        .family-edit {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: start;
          margin: 24px 24px 0 0;
          div {
            width: 20px;
            height: 20px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .bianji {
            margin-right: 20px;
          }
        }
        .family-card-img {
          width: 150px;
          height: 150px;
          margin: auto 20px auto 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .family-card-text {
          width: 300px;
          margin: auto 0;
          .name {
            font-size: 20px;
            font-weight: 600;
            color: #000000;
            padding-bottom: 6px;
            span {
              margin-left: 20px;
            }
          }
          .content {
            display: flex;
            justify-content: start;
            margin-top: 6px;
            color: #666666;
            .content-title {
             white-space: nowrap;
            }
          }
        }
      }
      ::v-deep .formData {
        width: 50%;
        height: 230px;
        position: relative;
        .content {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          .sure {
            text-align: right;
            .button {
              width: 90px !important;
            }
          }
        }
      }
    }
  }
  .linkman {
    margin: 30px 30px 0 30px;
    background: #f5f5f5;
    padding: 30px;
    .linkman-title {
      font-size: 16px;
      color: #000000;
      line-height: 22px;
      margin-bottom: 30px;
      span:nth-child(1) {
        color: #ff0000;
        margin-right: 5px;
      }
      span:nth-child(2) {
        color: #999;
      }
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
</style>
