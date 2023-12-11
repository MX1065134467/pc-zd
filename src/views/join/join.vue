<template>
  <div>
    <Header></Header>
    <div class="bgimg">
      <div class="content—wrap">
        <!-- 校园招聘 -->
        <div
          class="school"
          :class="activeSchool ? 'activeSchool' : 'school'"
          @mouseover="handleSchool"
          @mouseleave="handleSociety"
        >
          <div class="content">
            <p class="school-title">
              <span>校</span><span>园</span><span>招</span><span>聘</span>
            </p>
            <p class="entitle">Campus Recruitment</p>
            <p class="content-line"></p>
            <p class="target">面向所有2021届应届毕业生</p>
            <p><span class="know" @click="handleSchoolLink">了解更多</span></p>
          </div>
        </div>
        <!-- 社会招聘 -->
        <div
          class="society"
          :class="activeSociety ? 'activeSociety' : 'society'"
          @mouseover="handleSociety"
          @mouseleave="handleSchool"
        >
          <div class="showschool" @mousemove="handleSchool" @mouseleave="handleSociety"></div>
          <div class="content content1">
            <p class="school-title">
              <span>社</span><span>会</span><span>招</span><span>聘</span>
            </p>
            <p class="entitle">Social recruitment</p>
            <p class="content-line content-line1"></p>
            <div class="target target1">
              寻找人群中优秀的你
              <p class="target2">欢迎全社会的有志之士加入</p>
            </div>
            <p><span class="know know1" @click="handleSocietyLink">投递简历</span></p>
          </div>
        </div>
        <div class="line">
          <img src="../../assets/hr/line.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'Join',
  components: { Header },
  data () {
    return {
      list: [],
      activeSchool: false,
      activeSociety: false
    }
  },
  methods: {
    handleSchool () {
      this.activeSchool = true
      this.activeSociety = false
      console.log(this.activeSociety, 1111)
    },
    handleSociety () {
      this.activeSociety = true
      this.activeSchool = false
      console.log(this.activeSchool, 22222)
    },
    handleSocietyLink () {
      this.$router.push({
        path: '/society'
      })
    },
    handleSchoolLink () {
      this.$router.push({
        path: '/campusRecruitment'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  padding: 60px 0;
  box-sizing: border-box;
  background-image: url('../../assets/hr/hrbg.png');
  background-size: cover;
  background-repeat: no-repeat;
  .content—wrap {
    position: relative;
    width: 1200px;
    height: 663px;
    margin: 215px auto;
    .school {
      width: 843px;
      height: 515px;
      transition: 0.3s ease-in-out;
      background-image: url('../../assets/hr/school-no.png');
      background-size: contain;
    }
    .activeSchool {
      transition: 0.3s ease-in-out;
      background-image: url('../../assets/hr/school.png');
      background-size: contain;
    }
    .society {
      position: absolute;
      top: 142px;
      right: -38px;
      width: 856px;
      height: 521px;
      transition: 0.3s ease-in-out;
      background-image: url('../../assets/hr/society-no.png');
      background-size: contain;
      .showschool {
        width: 200px;
        height: 200px;
      }
    }
    .activeSociety {
      transition: 0.3s ease-in-out;
      background-image: url('../../assets/hr/society.png');
      background-size: contain;
    }
    .line {
      position: absolute;
      left: 311px;
      bottom: -36px;
      img {
        width: 122px;
        height: 166px;
      }
    }
    .content {
      width: 300px;
      height: 400px;
      padding: 87px 0 0 75px;
      color: #ffffff;
      .school-title {
        margin-bottom: 12px;
        font-family: msyh;
        font-size: 60px;
        font-weight: bold;
        span {
          margin-right: 5px;
        }
      }
      .entitle {
        margin-bottom: 30px;
        font-family: msyh;
        font-size: 28px;
        // padding: 2px 0;
      }
      .content-line {
        width: 100px;
        border: 1px solid #ffffff;
        margin-bottom: 34px;
      }
      .content-line1 {
        margin-left: 200px;
        margin-bottom: 38px;
      }
      .target {
        margin-bottom: 56px;
        font-family: msyh;
        font-size: 20px;
        // padding: 7px 0;
      }
      .target1 {
        margin-bottom: 48px;
      }
      // .target2 {
      //   margin-top: 10px;
      // }
      .know {
        font-family: msyh;
        font-size: 16px;
        color: #0a67e2;
        padding: 16px 38px;
        background-color: #f1f6ff;
        font-weight: bold;
        cursor: pointer;
      }
      .know1 {
        color: #3225ba;
      }
    }
    .content1 {
      text-align: right;
      padding: 62px 0 0 75px;
      position: absolute;
      top: 0;
      right: 95px;
    }
  }
}
</style>
