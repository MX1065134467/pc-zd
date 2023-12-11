<template>
  <div class="container">
   <div class="family">
     <div class="linkman-header">
      <div class="family-title">主要教育与培训经历：<span>（按学习经历倒序填写）</span></div>
      <div class="add" @click="add">
        <img src="../../assets/school/add.png" alt="">
        添加
      </div>
     </div>
     <div class="family-content">
      <div class="family-card" v-for="(item, index) in cardList" :key="index">
        <div class="family-edit">
          <div class="bianji" @click="cardEdit(item, 1)"><img src="../../assets/school/icon_bianji.png" alt=""></div>
          <div @click="cardDel(item, 1)"><img src="../../assets/school/icon_shanchu.png" alt=""></div>
        </div>
        <div class="family-card-text">
         <div class="name">{{item.school}}</div>
         <div class="content">
           <div class="content-title">起止时间：</div>
           <div>{{item.time}}</div>
         </div>
         <div class="content">
           <div class="content-title"><span style="letter-spacing:2em;">学</span>历：</div>
           <div>{{item.education}}</div>
         </div>
         <div class="content">
           <div class="content-title">文理/专业：</div>
           <div>{{item.admittedMajor}}</div>
         </div>
         <div class="content">
           <div class="content-title">担任职务：</div>
           <div>{{item.duty}}</div>
         </div>
        </div>
      </div>
      <div class="formData" v-if="isShow">
        <div class="content">
          <el-form :model="form" :rules="rules1" ref="form" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="学校：" prop="school">
                  <el-input v-model="form.school" maxlength="10" size="small" placeholder="请输入学校名称"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="起止时间：" prop="time">
                  <el-date-picker
                    v-model="form.time"
                    size="small"
                    type="monthrange"
                    style="width:100%;"
                    value-format="yyyy.MM"
                    range-separator="|"
                    @change="timeChange1"
                    start-placeholder="入学"
                    end-placeholder="毕业">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="学历：" prop="education">
                  <el-input v-model="form.education" maxlength="10" size="small" placeholder="请输入学历"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="文理科：" prop="admitted">
                  <el-input v-model="form.admitted" maxlength="5" size="small" placeholder="输入文科或理科"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="专业：" prop="major">
                  <el-input v-model="form.major" maxlength="10" size="small" placeholder="请输入专业"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="担任职务：" prop="duty">
                  <el-input v-model="form.duty" maxlength="10" size="small" placeholder="请输入担任职务"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
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
   <div class="family">
     <div class="linkman-header">
      <div class="family-title"><span></span>社会实践经历：<span>（非必填）</span></div>
      <div class="add" @click="add1">
        <img src="../../assets/school/add.png" alt="">
        添加
      </div>
     </div>
     <div class="family-content">
      <div class="family-card" v-for="(item, index) in cardList1" :key="index">
        <div class="family-edit">
          <div class="bianji" @click="cardEdit(item, 2)"><img src="../../assets/school/icon_bianji.png" alt=""></div>
          <div @click="cardDel(item, 2)"><img src="../../assets/school/icon_shanchu.png" alt=""></div>
        </div>
        <div class="family-card-text">
         <div class="name">{{item.company}}</div>
         <div class="content">
           <div class="content-title">起止时间：</div>
           <div>{{item.time}}</div>
         </div>
         <div class="content">
           <div class="content-title">实践内容：</div>
           <div class="content-practice">{{item.practice}}</div>
         </div>
        </div>
      </div>
      <div class="formData" v-if="isShow1">
        <div class="content">
          <el-form :model="form1" :rules="rules1" ref="form1" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="公司：" prop="company">
                  <el-input v-model="form1.company" maxlength="20" size="small" placeholder="请输入公司名称"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="起止时间：" prop="time">
                  <el-date-picker
                    v-model="form1.time"
                    size="small"
                    type="monthrange"
                    style="width:100%;"
                    value-format="yyyy.MM"
                    range-separator="|"
                    @change="timeChange"
                    start-placeholder="入职"
                    end-placeholder="离职">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="实践内容：" prop="practice">
                  <el-input v-model="form1.practice" type="textarea" resize="none" show-word-limit maxlength="300" :rows="5" size="small" placeholder="请输入实践内容的文字描述"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="sure">
                  <el-button class="button" type="primary" size="small" round @click="sure1">保存</el-button>
                  <el-button class="button" round size="small" @click="cancel1">取消</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
     </div>
   </div>
   <div class="activity-container">
    <div class="activity-header"><span></span>学生干部经历及社团活动：<span>（简单描述，非必填）</span></div>
    <div>
      <el-input v-model="activity" type="textarea" resize="none" show-word-limit maxlength="500" :rows="6" size="small" placeholder="请输入文字内容"></el-input>
    </div>
   </div>
   <div class="activity-container">
    <div class="activity-header"><span></span>获奖情况及资质证书情况：<span>（简单描述，非必填）</span></div>
    <div>
      <el-input v-model="certificates" type="textarea" resize="none" show-word-limit maxlength="500" :rows="6" size="small" placeholder="请输入文字内容"></el-input>
    </div>
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
import ReminderModal from '@/components/ReminderModal'
export default {
  name: '',
  components: { ReminderModal },
  props: {
    formData: {
      type: Object
    }
  },
  data () {
    return {
      // 删除模态框
      messageData: {
        show: false,
        title: '确认删除',
        type: '',
        content: ''
      },
      form: {
        school: '',
        time: '',
        education: '',
        admitted: '',
        major: '',
        duty: '',
        time1: []
      },
      rules1: {
        // school: [
        //   { required: true, message: '请输入学校名称', trigger: 'blur' },
        //   { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        // ],
        // time: [
        //   { required: true, message: '请选择日期', trigger: 'blur' }
        // ],
        // education: [
        //   { required: true, message: '请输入学历', trigger: 'blur' }
        // ],
        // admitted: [
        //   { required: true, message: '请输入文科或理科', trigger: 'blur' },
        //   { min: 2, max: 2, message: '请输入2个字符', trigger: 'blur' }
        // ],
        // major: [
        //   { required: true, message: '请输入专业', trigger: 'blur' },
        //   { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        // ],
        // duty: [
        //   { required: true, message: '请输入担任职务', trigger: 'blur' },
        //   { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        // ]
      },
      cardList: [],
      form1: {
        company: '',
        time: '',
        practice: '',
        time1: []
      },
      cardList1: [],
      isShow: true,
      isShow1: true,
      activity: '',
      certificates: '',
      cardItem: ''
    }
  },
  created () {
    if (this.$store.state.formManage.threeForm && this.$store.state.formManage.threeForm !== '') {
      const form = JSON.parse(JSON.stringify(this.$store.state.formManage.threeForm))
      this.form = form.form
      this.form1 = form.form1
      this.cardList = form.cardList
      this.cardList1 = form.cardList1
      this.isShow = form.isShow
      this.isShow1 = form.isShow1
      this.activity = form.activity
      this.certificates = form.certificates
    }
  },
  mounted () {},
  methods: {
    cardEdit (item, type) {
      console.log(item, type, 'item')
      this.cardItem = item
      if (type === 1) {
        const item = this.cardList.find(res => {
          return res.random === this.cardItem.random
        })
        this.form = item
        this.form.time = item.time1
        const index = this.cardList.findIndex(res => {
          return res.random === this.cardItem.random
        })
        this.cardList.splice(index, 1)
        // if (this.cardList.lenght <= 0) {
        //   this.form.school = ''
        //   this.form.time = ''
        //   this.form.education = ''
        //   this.form.admitted = ''
        //   this.form.major = ''
        //   this.form.time1 = []
        // }
        this.isShow = true
      }
      if (type === 2) {
        const item = this.cardList1.find(res => {
          return res.random === this.cardItem.random
        })
        this.form1 = item
        console.log(this.form1, 'this.form1')
        this.form1.time = item.time1
        const index = this.cardList1.findIndex(res => {
          return res.random === this.cardItem.random
        })
        console.log(index, 'index')
        this.cardList1.splice(index, 1)
        // if (this.cardList1.length <= 0) {
        //   console.log(123)
        //   this.form1.company = ''
        //   this.form1.time = ''
        //   this.form1.practice = ''
        //   this.form1.time1 = []
        // }
        this.isShow1 = true
      }
    },
    cardDel (item, type) {
      console.log(item, type, 'item')
      this.cardItem = item
      if (type === 1) {
        this.messageData.type = '1卡片删除'
        this.messageData.title = '卡片删除'
        this.messageData.content = '确认删除这个教育与培训卡片？'
        this.messageData.show = true
      }
      if (type === 2) {
        this.messageData.type = '2卡片删除'
        this.messageData.title = '卡片删除'
        this.messageData.content = '确认删除这个社会实践卡片？'
        this.messageData.show = true
      }
    },
    // 删除
    handleModalShow (type) {
      console.log(type, 'type')
      if (type === '1卡片删除') {
        const index = this.cardList.findIndex(res => {
          return res.random === this.cardItem.random
        })
        this.cardList.splice(index, 1)
        if (this.cardList.length <= 0) {
          this.isShow = true
        }
      }
      if (type === '2卡片删除') {
        const index = this.cardList1.findIndex(res => {
          return res.random === this.cardItem.random
        })
        this.cardList1.splice(index, 1)
        if (this.cardList1.length <= 0) {
          this.isShow1 = true
        }
      }
    },
    timeChange (e) {
      this.form1.time1 = e
    },
    timeChange1 (e) {
      this.form.time1 = e
    },
    add () {
      if (this.cardList.lenght > 10) {
        this.$message.warning('教育与培训经历添加已达上限')
        return false
      } else {
        this.form.school = ''
        this.form.education = ''
        this.form.time = ''
        this.form.admitted = ''
        this.form.major = ''
        this.form.duty = ''
        this.isShow = true
      }
    },
    cancel () {
      this.$refs.form.resetFields()
      this.isShow = false
    },
    sure () {
      const form = JSON.parse(JSON.stringify(this.form))
      if (form.school.trim() === '' && form.time === '' && form.education.trim() === '' && form.admitted.trim() === '' && form.major.trim() === '' && form.duty.trim() === '') {
        this.$message.warning('禁止提交空表单')
        return false
      }
      form.time = form.time[0] + '~' + form.time[1]
      if (form.time === 'undefined~undefined') {
        form.time = ''
        form.time1 = []
      }
      if (form.admitted && form.major.trim() === '') {
        form.admittedMajor = form.admitted + '、' + '无'
      } else if (form.admitted.trim() === '' && form.major) {
        form.admittedMajor = '无' + '、' + form.major
      } else if (form.admitted && form.major) {
        form.admittedMajor = form.admitted + '、' + form.major
      }
      form.random = new Date().getTime()
      this.cardList.push(form)
      this.isShow = false
      this.$refs.form.resetFields()
    },
    sure1 () {
      const form = JSON.parse(JSON.stringify(this.form1))
      if (form.company.trim() === '' && form.time === '' && form.practice.trim() === '') {
        this.$message.warning('禁止提交空表单')
        return false
      }
      form.time = form.time[0] + '~' + form.time[1]
      if (form.time === 'undefined~undefined') {
        form.time = ''
        form.time1 = []
      }
      form.random = new Date().getTime()
      this.cardList1.push(form)
      this.isShow1 = false
      this.reset()
    },
    cancel1 () {
      this.$refs.form1.resetFields()
      this.isShow1 = false
    },
    reset () {
      this.form1.company = ''
      this.form1.time = ''
      this.form1.practice = ''
    },
    storageData () {
      const threeForm = {}
      threeForm.form = this.form
      threeForm.form1 = this.form1
      threeForm.cardList = this.cardList
      threeForm.cardList1 = this.cardList1
      threeForm.isShow = this.isShow
      threeForm.isShow1 = this.isShow1
      threeForm.activity = this.activity
      threeForm.certificates = this.certificates
      this.$store.commit('threeStepsData', threeForm)
      this.$emit('handleClose')
    },
    add1 () {
      if (this.cardList1.lenght > 10) {
        this.$message.warning('社会与实践经历添加已达上限')
        return false
      } else {
        this.isShow1 = true
      }
    },
    GobackSteps () {
      this.storageData()
      this.$emit('goBack')
    },
    nextSteps () {
      this.storageData()
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
      justify-content: space-between;
      flex-wrap: wrap;
      .family-card {
        position: relative;
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        min-height: 230px;
        background: url('../../assets/school/bgCard.png') no-repeat;
        background-size: 100% 230px;
        padding: 40px;
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
        .family-card-text {
          margin: auto 0;
          width: 100%;
          .name {
            font-size: 20px;
            font-weight: 600;
            color: #000000;
            padding-bottom: 6px;
          }
          .content {
            display: flex;
            justify-content: start;
            box-sizing: border-box;
            font-size: 14px;
            margin-top: 6px;
            color: #666666;
            .content-title {
             white-space: nowrap;
            }
            .content-practice {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              word-wrap:break-word;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;   //  显示4行
            }
          }
        }
      }
      .formData {
        width: 50%;
        height: 230px;
        position: relative;
        .content {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          box-sizing: border-box;
          padding-right: 7px;
          .sure {
            text-align: right;
            .button {
              width: 80px !important;
            }
          }
        }
      }
    }
  }
  .activity-container {
    margin: 37px 30px 0 30px;
    background: #f5f5f5;
    padding: 30px;
    .activity-header {
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
