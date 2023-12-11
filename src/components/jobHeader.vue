<template>
  <div class="container">
   <div class="main main-width">
     <div class="main-left">
       <div class="img" @click="goback">
          <img src="../assets/school/logo.png" alt="北京中电兴发科技有限公司">
        </div>
        <div class="goback" @click="goback">返回中电兴发官网</div>
     </div>
     <div class="main-right">
       <div class="link">
        <ul class="clacategory-list">
          <li class="list-item" v-for="(item, index) in navList" :key="index">
            <span
            @click="handleNav(index)"
            :class="flagIndex === index ? 'active' : ''"
            >{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="call">
        <div class="wechat">
          <!-- <img src="../assets/school/wechat.png" alt="" @mouseover="mouseover" @mouseout="mouseout"> -->
          <!-- <div class="msgBox" v-if="isShow">
            <img src="../assets/images/code.png" alt="">
          </div> -->
          <div class="msgBox1" v-if="isShow1">
            <div class="photoBox">
              <div class="img">
                <img src="../assets/school/icon_dianhua.png" alt="">
              </div>
              <div class="text">
                <div class="txt">咨询电话1：</div>
                <div class="phone">18101310929</div>
              </div>
            </div>
            <div class="photoBox">
              <div class="img">
                <img src="../assets/school/icon_dianhua.png" alt="">
              </div>
              <div class="text">
                <div class="txt">咨询电话2：</div>
                <div class="phone">18710606412</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="border"></div> -->
        <div class="serve"><img src="../assets/school/serve.png" alt="" @mouseover="mouseover1" @mouseout="mouseout1">
        </div>
      </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      flagIndex: 0,
      navList: [
        '招聘岗位',
        '招聘须知',
        '成长与发展',
        '常见问题'
      ],
      isShow: false,
      isShow1: false
    }
  },
  created () {},
  mounted () {
    this.url = window.location.href.split('#')[1]
    console.log(this.url, 'url')
    if (this.url.includes('/campusRecruitment')) {
      this.flagIndex = 0
    } else if (this.url.includes('/recruitmentNotice')) {
      this.flagIndex = 1
    } else if (this.url.includes('/growthAndDev')) {
      this.flagIndex = 2
    } else if (this.url.includes('/problem')) {
      this.flagIndex = 3
    }
  },
  methods: {
    goback () {
      this.$router.push('/join')
    },
    handleNav (index) {
      const url = window.location.href.split('#')[1]
      this.flagIndex = index
      if (index === 0 && url !== '/campusRecruitment') {
        this.$router.push(
          {
            path: '/campusRecruitment'
          }
        )
      } else if (index === 1 && url !== '/recruitmentNotice') {
        this.$router.push(
          {
            path: '/recruitmentNotice'
          }
        )
      } else if (index === 2 && url !== '/growthAndDev') {
        this.$router.push(
          {
            path: '/growthAndDev'
          }
        )
      } else if (index === 3 && url !== '/problem') {
        this.$router.push(
          {
            path: '/problem'
          }
        )
      }
    },
    mouseover () {
      this.isShow = true
    },
    mouseout () {
      this.isShow = false
    },
    mouseover1 () {
      this.isShow1 = true
    },
    mouseout1 () {
      this.isShow1 = false
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  width: 100%;
  height: 60px;
  background: #4281ff;
  .main {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .main-left {
      display: flex;
      justify-content: start;
      .img {
        width: 32px;
        height: 32px;
        margin: auto 0;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .goback {
        cursor: pointer;
        margin: auto 0 auto 12px;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
      }
    }
    .main-right {
      display: flex;
      justify-content: start;
      .link {
        box-sizing: border-box;
        margin: auto 0;
        .clacategory-list {
          .list-item {
            position: relative;
            cursor: pointer;
            list-style: none;
            display: inline-block;
            font-size: 14px;
            font-weight: 500;
            color: #ffffff;
            line-height: 20px;
            margin-right: 50px;
          }
          .active {
            &:after {
                content: '';
                position: absolute;
                bottom: -15px;
                top: auto;
                left: 50%;
                margin-left: -7.5px;
                height: 3px;
                width: 15px;
                background-color: #fff;
              }
          }
        }
      }
      .call {
        display: flex;
        justify-content: start;
        margin: auto 0;
        .wechat {
          position: relative;
          cursor: pointer;
          width: 20px;
          height: 17px;
          margin-left: 5px;
          img {
            width: 100%;
            height: 100%;
          }
          .msgBox {
            position: absolute;
            top: 39px;
            right: -90px;
            box-sizing: border-box;
            width: 140px;
            height: 140px;
            background: #ffffff;
            border-radius: 10px;
            padding: 12px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .msgBox1 {
            position: absolute;
            top: 39px;
            right: -90px;
            box-sizing: border-box;
            // width: 140px;
            // min-width: 140px;
            background: #ffffff;
            border-radius: 10px;
            padding: 12px;
            .photoBox {
              display: flex;
              justify-content: start;
              z-index: 9999999999;
              .text {
                line-height: 15px;
                .txt {
                  font-size: 10px;
                  color: #000000;
                }
                .phone {
                  font-size: 12px;
                  color: #eb232b;
                  font-weight: bold;
                }
              }
              .img {
                width: 30px;
                height: 30px;
                min-width: 30px;
                margin-right: 5px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .photoBox:nth-child(2) {
              margin-top: 10px;
            }
          }
        }
        .border {
          margin: 0 10px 0 10px;
          width: 1px;
          height: 14px;
          opacity: 0.3;
          background: #ffffff;
        }
        .serve {
          cursor: pointer;
          width: 18px;
          height: 16px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
