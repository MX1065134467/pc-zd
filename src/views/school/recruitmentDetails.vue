<template>
  <div class="container">
    <job-header></job-header>
    <div class="breadcrumb">
      <div class="main-width">
        <Breadcrumb :levelList="list"></Breadcrumb>
      </div>
    </div>
    <div class="main">
      <div class="mian-content main-width">
        <div class="bubble">
          <div class="steps">
            <img
              v-if="oneSteps"
              src="../../assets/school/current-bubble.png"
              alt=""
            />
            <img v-else src="../../assets/school/bubble.png" alt="" />
            <div class="content">基本信息</div>
          </div>
          <div class="steps steps-arrow">
            <img
              v-if="oneSteps"
              class="arrows"
              src="../../assets/school/current-arrows.png"
              alt=""
            />
            <img
              v-else
              class="arrows"
              src="../../assets/school/arrows.png"
              alt=""
            />
          </div>
          <div class="steps">
            <img
              v-if="twoSteps"
              src="../../assets/school/current-bubble.png"
              alt=""
            />
            <img v-else src="../../assets/school/bubble.png" alt="" />
            <div :class="[twoSteps ? 'content1' : 'active-content1']">
              家庭成员<br />紧急联系人
            </div>
          </div>
          <div class="steps steps-arrow">
            <img
              v-if="twoSteps"
              class="arrows"
              src="../../assets/school/current-arrows.png"
              alt=""
            />
            <img
              v-else
              class="arrows"
              src="../../assets/school/arrows.png"
              alt=""
            />
          </div>
          <div class="steps">
            <img
              v-if="threeSteps"
              src="../../assets/school/current-bubble.png"
              alt=""
            />
            <img v-else src="../../assets/school/bubble.png" alt="" />
            <div :class="[threeSteps ? 'content1' : 'active-content1']">
              社会实践<br />教育经历
            </div>
          </div>
          <div class="steps steps-arrow">
            <img
              v-if="threeSteps"
              class="arrows"
              src="../../assets/school/current-arrows.png"
              alt=""
            />
            <img
              v-else
              class="arrows"
              src="../../assets/school/arrows.png"
              alt=""
            />
          </div>
          <div class="steps">
            <img
              v-if="fourSteps"
              src="../../assets/school/current-bubble.png"
              alt=""
            />
            <img v-else src="../../assets/school/bubble.png" alt="" />
            <div :class="[fourSteps ? 'content1' : 'active-content1']">
              备注<br />联系方式
            </div>
          </div>
        </div>
        <div class="async-components">
          <div v-if="steps1">
            <recruitment-details-steps1
              :formData="form1"
              @handleClose="handleCloseSteps1"
            ></recruitment-details-steps1>
          </div>
          <div v-if="steps2">
            <recruitment-details-steps2
              @handleClose="handleCloseSteps2"
              @goBack="goBack2"
            ></recruitment-details-steps2>
          </div>
          <div v-if="steps3">
            <recruitment-details-steps3
              @handleClose="handleCloseSteps3"
              @goBack="goBack3"
            ></recruitment-details-steps3>
          </div>
          <div v-if="steps4">
            <recruitment-details-steps4
              @handleClose="handleCloseSteps4"
              @goBack="goBack4"
            ></recruitment-details-steps4>
          </div>
        </div>
      </div>
    </div>
    <job-footer></job-footer>
  </div>
</template>

<script>
import serve from '@/api/join.js'
import moment from 'moment'
import JobFooter from '../../components/jobFooter.vue'
import JobHeader from '../../components/jobHeader.vue'
import Breadcrumb from '../../components/Breadcrumb.vue'
import recruitmentDetailsSteps1 from './recruitmentDetailsSteps1.vue'
import recruitmentDetailsSteps2 from './recruitmentDetailsSteps2.vue'
import recruitmentDetailsSteps3 from './recruitmentDetailsSteps3.vue'
import recruitmentDetailsSteps4 from './recruitmentDetailsSteps4.vue'
export default {
  name: '',
  components: {
    JobHeader,
    JobFooter,
    Breadcrumb,
    recruitmentDetailsSteps1,
    recruitmentDetailsSteps2,
    recruitmentDetailsSteps3,
    recruitmentDetailsSteps4
  },
  data () {
    return {
      // list: ['招聘岗位', '招聘详情', '投递简历'],
      list: [
        {
          path: '/campusRecruitment',
          name: '招聘岗位'
        },
        {
          path: '/campusRecruitDetail',
          name: '招聘详情'
        },
        {
          path: '/recruitmentDetails',
          name: '投递简历'
        }
      ],
      oneSteps: true,
      twoSteps: false,
      threeSteps: false,
      fourSteps: false,
      steps1: true,
      steps2: false,
      steps3: false,
      steps4: false,
      files: '',
      photo: '',
      enclosure: '',
      accessory: '',
      form1: {},
      photoName: '',
      enclosureName: ''
    }
  },
  created () {
    sessionStorage.setItem('detailID', this.$route.query.id)
    sessionStorage.setItem('detailType', this.$route.query.type)
  },
  mounted () {},
  methods: {
    handleCloseSteps1 (file, accessory) {
      this.steps1 = false
      this.steps2 = true
      this.twoSteps = true
      if (file) {
        this.files = file
      }
      if (accessory) {
        this.accessory = accessory
      }
    },
    handleCloseSteps2 () {
      this.steps2 = false
      this.steps3 = true
      this.threeSteps = true
    },
    handleCloseSteps3 () {
      this.steps3 = false
      this.steps4 = true
      this.fourSteps = true
    },
    async handleCloseSteps4 () {
      this.$loading({
        lock: true,
        text: '正在投递，请稍后...',
        spinner: 'el-icon-loading'
      })
      const form1 = this.$store.state.formManage.firstForm
      const form2 = this.$store.state.formManage.secondForm
      const form3 = this.$store.state.formManage.threeForm
      const form4 = this.$store.state.formManage.fourForm
      await this.customUpload()
      await this.fileUpload()
      form2.cardList.forEach(item => {
        item.familyName = item.name
        item.relation = item.urgentRelation
        item.company = item.unit
        item.job = item.position
      })
      form3.cardList1.forEach(item => {
        item.companyName = item.company
        item.startTime = moment(item.time1[0]).valueOf()
        item.endTime = moment(item.time1[1]).valueOf()
      })
      form3.cardList.forEach(item => {
        item.startTime = moment(item.time1[0]).valueOf()
        item.endTime = moment(item.time1[1]).valueOf()
        item.artsScience = item.admitted
        item.educationMajor = item.major
        item.educationJob = item.duty
      })
      form2.resumeFamilyList = form2.cardList
      form3.resumeSocialPracticeList = form3.cardList1
      form3.resumeEducationList = form3.cardList
      const params = {
        ...form1,
        ...form1.ruleForm,
        ...form2,
        ...form2.ruleForm,
        ...form3,
        ...form4,
        ...form4.form
      }
      params.photo = this.photo
      params.photoName = this.photoName
      params.enclosure = this.enclosure
      params.enclosureName = this.enclosureName
      params.type = +this.$route.query.type
      params.positionId = +this.$route.query.id
      if (params.intention === '可以在国内部分城市，具体是') {
        params.intention = 2
      } else {
        params.intention = 1
      }
      console.log(params, 'params')
      serve.resumeAdd(params).then(res => {
        if (res.data.code === 200) {
          this.$loading().close()
          this.$message.success('简历提交成功')
          this.$store.commit('firstStepsData', '')
          this.$store.commit('secondStepsData', '')
          this.$store.commit('threeStepsData', '')
          this.$store.commit('fourStepsData', '')
          this.$router.push({
            path: '/campusRecruitDetail',
            query: {
              id: +this.$route.query.id,
              type: +this.$route.query.type
            }
          })
        } else {
          this.$message.warning(res.data.msg)
          this.$loading().close()
        }
      })
    },
    // 上传图片
    async customUpload () {
      const that = this
      const fileList = []
      fileList.push(that.files.file)
      if (fileList.length) {
        const params = new FormData()
        fileList.map(item => {
          params.append('image', item)
        })
        const res = await serve.photoUpload(params)
        if (res.data.code === 200) {
          that.photo = JSON.parse(JSON.stringify(res.data.data.url))
          that.photoName = JSON.parse(JSON.stringify(res.data.data.originalFilename))
        } else {
          this.$loading().close()
          that.$message.warning(res.data.msg)
        }
      }
    },
    // 附件上传
    async fileUpload () {
      const that = this
      const fileList = []
      fileList.push(this.accessory)
      if (fileList.length) {
        const params = new FormData()
        fileList.map(item => {
          params.append('attachment', item.raw)
        })
        const res = await serve.fileUploads(params)
        if (res.data.code === 200) {
          that.enclosure = JSON.parse(JSON.stringify(res.data.data.url))
          that.enclosureName = JSON.parse(JSON.stringify(res.data.data.originalFilename))
        } else {
          this.$loading().close()
          that.$message.warning(res.data.msg)
        }
      }
    },
    goBack2 () {
      this.steps1 = true
      this.steps2 = false
      this.steps3 = false
      this.steps4 = false
      this.twoSteps = false
      this.threeSteps = false
      this.fourSteps = false
      this.form1.file = this.files
      this.form1.files = this.accessory
    },
    goBack3 () {
      this.steps2 = true
      this.steps3 = false
      this.steps4 = false
      this.twoSteps = true
      this.threeSteps = false
      this.fourSteps = false
    },
    goBack4 () {
      this.steps3 = true
      this.steps4 = false
      this.threeSteps = true
      this.fourSteps = false
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #f8f8f8;
  overflow: hidden;
  .mian-content {
    background: #ffffff;
    margin: 30px auto 30px;
    .bubble {
      display: flex;
      padding-left: 6%;
      padding-top: 36px;
      .steps {
        position: relative;
        width: 105px;
        height: 96px;
        img {
          width: 100%;
          height: 100%;
        }
        .arrows {
          width: 109px;
          height: 10px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-55%, -50%);
        }
        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          font-size: 14px;
          transform: translate(-55%, -50%);
          color: #ffffff;
          line-height: 20px;
        }
        .content1 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          font-size: 14px;
          text-align: center;
          transform: translate(-55%, -50%);
          color: #ffffff;
          line-height: 20px;
        }
        .active-content1 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          font-size: 14px;
          text-align: center;
          transform: translate(-55%, -50%);
          color: #3f6b99;
          line-height: 20px;
        }
      }
      .steps-arrow {
        margin: 0 87px 0 15px;
      }
    }
  }
}
</style>
