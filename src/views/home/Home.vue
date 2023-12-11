<template>
  <div class="container">
   <full-page :options="options" ref="page">
     <div class="section">
       <div class="home-header">
         <Header></Header>
       </div>
         <div class="slide">
            <div class="slide-first-screen">
              <video ref="videoPlay" id="bg_video1" width="100%" autoplay loop muted poster='../../assets/home/firstScreenBgOne.png'>
                <source :src="firstVideoUrl">
              </video>
              <div class="bg1-first-screen">
                <div class="first-screen main-width">
                  <div class="bg">
                    <div class="first-screen-text1">智慧中国核心技术、产品与全面解决方案供应商、运营服务商</div>
                    <div class="first-screen-text2">
                      <div class="first-screen-text">致力于为现代国防、政府治理、民生服务和数字经济等行业的客户</div>
                      <div class="first-screen-text">提供“涵盖数字基础设施、智慧行业应用、数据综合运营等的全方位数字化技术服务”</div>
                    </div>
                    <div class="first-screen-btn">
                      <div class="first-screen-btn-text" @click="knowMore">了解更多</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         <div class="slide">
           <div class="slide-first-screen">
            <img src="../../assets/home/first-slide-two.png" alt="">
            <div class="bg1-first-slide-screen">
              <div class="first-screen main-width">
                <div class="first-screen-text1">智能边缘端</div>
                <div class="first-screen-text2">全光谱全智能5G摄像机、异构多源智能感知设备</div>
                <div class="first-screen-btn">
                  <div class="first-screen-btn-text" @click="product(1)">了解更多</div>
                </div>
              </div>
            </div>
           </div>
         </div>
         <div class="slide">
           <div class="slide-first-screen">
            <img src="../../assets/home/first-slide-three.png" alt="">
            <div class="bg1-first-slide-screen">
              <div class="first-screen main-width">
                <div class="first-screen-text1">网络传输端</div>
                <div class="first-screen-text2">以4G/5G新基础通信业务和新一代高速主干光纤</div>
                <div class="first-screen-text2">网业务为两翼的主营业务发展格局</div>
                <div class="first-screen-btn">
                  <div class="first-screen-btn-text" @click="product(2)">了解更多</div>
                </div>
              </div>
            </div>
           </div>
         </div>
         <div class="slide">
           <div class="slide-first-screen">
            <img src="../../assets/home/first-slide-four.png" alt="">
            <div class="bg1-first-slide-screen1">
              <div class="first-screen">
                <div class="first-screen-text1">数字云底座</div>
                <div class="first-screen-text2">国产替代、自主可控的云计算、大数据、人工智能全技术栈软硬件产品</div>
                <div class="first-screen-btn">
                  <div class="first-screen-btn-text" @click="product(3)">了解更多</div>
                </div>
              </div>
            </div>
           </div>
         </div>
         <div class="slide">
           <div class="slide-first-screen">
            <img src="../../assets/home/first-slide-five.png" alt="">
            <div class="bg1-first-slide-screen">
              <div class="first-screen main-width">
                <div class="first-screen-text1">大数据应用</div>
                <div class="first-screen-text2">面向政府、企业、公众提供基于数据、信息、知识的数字</div>
                <div class="first-screen-text2">政府SaaS服务和数字经济运营服务</div>
                <div class="first-screen-btn">
                  <div class="first-screen-btn-text" @click="product(4)">了解更多</div>
                </div>
              </div>
            </div>
           </div>
         </div>
      </div>
      <div class="section">
        <div class="slide">
          <div class="slide-second-screen">
            <video ref="videoPlay1" id="bg_video2" width="100%" autoplay loop muted poster='../../assets/home/firstScreenBgTwo.png'>
              <source :src="secondVideoUrl">
            </video>
            <div class="bg1-second-screen">
              <div class="screen-main main-width">
                <div class="bg1-second-screen-text">基于数据、信息、知识的</div>
                <div class="bg1-second-screen-text">数字政府SaaS服务商和数字经济运营服务商</div>
                <div class="bg1-second-screen-echarts">
                  <div class="bg1-second-screen-count">
                    <div class="count-left">
                      <div class="terminals-img"><img src="../../assets/home/icon-first-terminals.png" alt=""></div>
                      <div class="terminals-data1">
                        <data-scroll1 :number="numbers"></data-scroll1>
                      </div>
                      <div class="terminals-title">终端接入</div>
                    </div>
                    <div class="count-right">
                      <div class="wan-add">万+</div>
                    </div>
                  </div>
                  <div class="second-screen-count-right">
                    <div class="second-screen-count-right-border"></div>
                  </div>
                  <div class="bg1-second-screen-count">
                    <div class="count-left">
                      <div class="terminals-img"><img src="../../assets/home/icon-first-screen-active.png" alt=""></div>
                      <div class="terminals-data">
                        <data-scroll :number="numbers1"></data-scroll>
                      </div>
                      <div class="terminals-title">活跃用户</div>
                    </div>
                    <div class="count-right">
                      <div class="wan-add">万+</div>
                    </div>
                  </div>
                  <div class="second-screen-count-right">
                    <div class="second-screen-count-right-border"></div>
                  </div>
                  <div class="bg1-second-screen-count">
                    <div class="count-left">
                      <div class="terminals-img"><img src="../../assets/home/icon-first-screen-event-data.png" alt=""></div>
                      <div class="terminals-data1">
                        <data-scroll1 :number="numbers2"></data-scroll1>
                      </div>
                      <div class="terminals-title">每天事件数据</div>
                    </div>
                    <div class="count-right">
                      <div class="wan-add">万+</div>
                    </div>
                  </div>
                  <div class="second-screen-count-right">
                    <div class="second-screen-count-right-border"></div>
                  </div>
                  <div class="bg1-second-screen-count">
                    <div class="count-left">
                      <div class="terminals-img"><img src="../../assets/home/icon-first-screen-government-organization.png" alt=""></div>
                      <div class="terminals-data">
                        <data-scroll :number="numbers3"></data-scroll>
                      </div>
                      <div class="terminals-title">政府组织机构</div>
                    </div>
                    <div class="count-right">
                      <div class="wan-add">+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
      <div class="section">
        <div class="slide">
          <div class="slide-three-screen">
            <div class="bg1-three-screen">
              <div class="three-main main-width">
                <div class="text-box">
                  <div class="bg1-three-screen-text">DI-DA解决方案</div>
                  <div class="bg1-three-screen-text1">以用户为中心，快速简洁的交互式应用体验</div>
                  <div class="bg1-three-screen-text1">数据即服务即运营</div>
                  <div class="bg1-three-screen-text1">统一标准化设计，集中共享共用，节约建设</div>
                  <div class="bg1-three-screen-text1">高效运维全局全域数据基础能力</div>
                  <div class="first-screen-btn">
                    <div class="first-screen-btn-text" @click="knowMoreDIDA">了解更多</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <div class="slide-four-screen">
            <div class="bg1-four-screen">
              <div class="four-screen-child-box" @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)">
                <div class="noMouse" v-show="isShow">
                  <div class="child-box">DIe</div>
                  <div class="child-box1">Data Infrastructure Edge</div>
                  <div class="child-box2">智能边缘端</div>
                </div>
                <div class="enterMouse" v-show="isShow === false">
                  <div class="child-box">智能边缘端</div>
                  <div class="child-box1">Data Infrastructure Edge</div>
                  <div class="child-box2">AI视频感知</div>
                  <div class="child-box3">全光谱视频摄像机+AI视图算法</div>
                  <div class="child-box2">AI物联感知</div>
                  <div class="child-box3">异构多维感知+AI物联网</div>
                  <div class="child-box2">人工交互数据</div>
                  <div class="child-box3">人工记录+人工处理</div>
                  <div class="child-box2">互联网数据</div>
                  <div class="child-box3">爬虫工具+AP对接</div>
                  <div class="child-box4" @click="product(1)">
                    <img src="../../assets/home/first-location.png" alt="">
                  </div>
                </div>
              </div>
              <div class="four-screen-child-box" @mouseover="mouseOver(2)" @mouseleave="mouseLeave(2)">
                <div class="noMouse" v-show="isShow1">
                  <div class="child-box">DIn</div>
                  <div class="child-box1">Network</div>
                  <div class="child-box2">网络传输端</div>
                </div>
                <div class="enterMouse" v-show="isShow1 === false">
                  <div class="child-box">网络</div>
                  <div class="child-box1">Network</div>
                  <div class="child-box2">5G (4G) 量子通信网</div>
                  <div class="child-box5">高速光纤主干网络</div>
                  <div class="child-box5">城域光纤网</div>
                  <div class="child-box5">互联网</div>
                  <div class="child-box5">其他</div>
                  <div class="child-box4" @click="product(2)">
                    <img src="../../assets/home/first-location.png" alt="">
                  </div>
                </div>
              </div>
              <div class="four-screen-child-box" @mouseover="mouseOver(3)" @mouseleave="mouseLeave(3)">
                <div class="noMouse" v-show="isShow2">
                  <div class="child-box">DIc</div>
                  <div class="child-box1">Data Infrastructure Cloud</div>
                  <div class="child-box2">数字云底座</div>
                </div>
                <div class="enterMouse" v-show="isShow2 === false">
                  <div class="child-box">数字云底座</div>
                  <div class="child-box1">Data Infrastructure Cloud</div>
                  <div class="child-box6">兴发智云</div>
                  <div class="child-box6">视频云存储系统</div>
                  <div class="child-box6">视频综合管理平台</div>
                  <div class="child-box6">物联网数据管理平台</div>
                  <div class="child-box6">视图智能分析平台</div>
                  <div class="child-box6">大数据平台</div>
                  <div class="child-box4" @click="product(3)">
                    <img src="../../assets/home/first-location.png" alt="">
                  </div>
                </div>
              </div>
              <div class="four-screen-child-box" @mouseover="mouseOver(4)" @mouseleave="mouseLeave(4)">
                <div class="noMouse" v-show="isShow3">
                  <div class="child-box">DA</div>
                  <div class="child-box1">Data Application</div>
                  <div class="child-box2">大数据应用</div>
                </div>
                <div class="enterMouse" v-show="isShow3 === false">
                  <div class="child-box">大数据应用</div>
                  <div class="child-box1">Data Application</div>
                  <div class="child-box2">数字政府</div>
                  <div class="child-box3">G2B G2C</div>
                  <div class="child-box2">数字经济</div>
                  <div class="child-box3">B2B B2C</div>
                  <div class="child-box4" @click="product(4)">
                    <img src="../../assets/home/first-location.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section5">
        <div class="slide">
          <div class="slide-five-screen">
            <div class="bg1-five-screen">
              <div class="five-main main-width">
                <div class="bg1-five-screen-box">
                  <div class="bg1-three-screen-text">研发机构</div>
                  <div class="bg1-three-screen-text1">公司在北京、芜湖、西安、成都、长沙设立了五</div>
                  <div class="bg1-three-screen-text1">个研发机构，承担不同方向技术和产品的研发</div>
                  <div class="first-screen-btn">
                    <div class="first-screen-btn-text" @click="research">了解更多</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section fp-auto-height">
        <Footer></Footer>
      </div>
   </full-page>
  </div>
</template>

<script>
import serve from '@/api/home.js'
import dataScroll from '../../components/dataScroll.vue'
import dataScroll1 from '../../components/dataScroll1.vue'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default {
  name: '',
  components: { dataScroll, Header, Footer, dataScroll1 },
  data () {
    return {
      options: {
        // key
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // 是否显示导航，默认为false
        navigation: true,
        // 是否显示横向幻灯片的导航
        slidesNavigation: true,
        // 横向幻灯片导航的位置，可以为top或者bottom
        slidesNavPosition: 'bottom',
        // 横向slide幻灯片是否循环滚动
        loopHorizontal: true,
        // 用来控制slide幻灯片的箭头，设置为false，两侧的箭头会消失
        controlArrows: false,
        // 是否循环滚动，不会出现跳动，效果很平滑
        // continuousVertical: true,
        // 是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
        // autoScrolling: true,
        // 设置每个section底部的padding，当我们要设置一个固定在底部的菜单、导航、元素等时使用
        // paddingBottom: '0',
        // 滚动到某一屏的回调
        afterLoad: this.afterLoad
        // onLeave: this.onLeave
      },
      numbers: {},
      numbers1: {},
      numbers2: {},
      numbers3: {},
      isShow: true,
      isShow1: true,
      isShow2: true,
      isShow3: true,
      timer: null,
      time: null,
      firstVideoUrl: '',
      secondVideoUrl: ''
    }
  },
  created () {
    this.getVideos()
  },
  mounted () {
    const params = {
      id: 15
    }
    serve.test(params).then(res => {
      console.log(res.data.code)
    })
    this.handleScroll()
    this.time = setInterval(() => {
      this.$refs.page.api.moveSlideRight()
    }, 15000)
  },
  destroyed () {
    clearInterval(this.timer)
    clearInterval(this.time)
  },
  methods: {
    // videoTime () {
    //   const video = document.getElementById('bg_video1');
    //   video.addEventListener('timeupdate', function(){
    //     var timeDisplay;
    //     var duration;
    //     timeDisplay = Math.floor(video.currentTime);
    //     duration = Math.floor(video.duration);
    //     console.log('总时长',duration)
    //     console.log('当前播放的时长',timeDisplay)
    //     if (timeDisplay === 20) {
    //       video.pause()
    //       video.play()
    //     }
    //   }, false)
    // },
    handleScroll () {
      this.timer = setInterval(() => {
        const scrollY = document.documentElement.scrollTop
        if (scrollY < 1000) {
          var x = document.getElementById('bg_video1')
          x.play()
        }
        if (scrollY < 2000) {
          var y = document.getElementById('bg_video2')
          y.play()
        }
      }, 1000)
    },
    afterLoad: function (anchors, item) {
      if (item.index === 1) {
        this.numbers = {
          number: 50,
          time: (new Date()).getTime()
        }
        this.numbers1 = {
          number: 100,
          time: (new Date()).getTime()
        }
        this.numbers2 = {
          number: 50,
          time: (new Date()).getTime()
        }
        this.numbers3 = {
          number: 200,
          time: (new Date()).getTime()
        }
        console.log(this.numbers)
      }
    },
    mouseOver (type) {
      switch (type) {
        case 1:
          this.isShow = false
          break
        case 2:
          this.isShow1 = false
          break
        case 3:
          this.isShow2 = false
          break
        case 4:
          this.isShow3 = false
          break
      }
    },
    mouseLeave (type) {
      switch (type) {
        case 1:
          this.isShow = true
          break
        case 2:
          this.isShow1 = true
          break
        case 3:
          this.isShow2 = true
          break
        case 4:
          this.isShow3 = true
          break
      }
    },
    knowMore () {
      sessionStorage.setItem('parentLev', ['one-1'])
      sessionStorage.setItem('level', 'one-1')
      sessionStorage.setItem('name', '公司介绍')
      this.$router.push('/about')
    },
    knowMoreDIDA () {
      sessionStorage.setItem('level', 'one-5')
      sessionStorage.setItem('parentLev', ['one-5'])
      sessionStorage.setItem('name', '大数据应用')
      this.$router.push('/product')
    },
    product (type) {
      if (type === 1) {
        sessionStorage.setItem('level', 'one-2')
        sessionStorage.setItem('parentLev', ['one-2', 'two-1', 'three-1'])
        sessionStorage.setItem('name', '高清监控摄像机')
        this.$router.push('/product')
      }
      if (type === 2) {
        sessionStorage.setItem('level', 'one-3')
        sessionStorage.setItem('name', '网络传输端')
        sessionStorage.setItem('parentLev', ['one-3'])
        this.$router.push('/product')
      }
      if (type === 3) {
        sessionStorage.setItem('level', 'one-4')
        sessionStorage.setItem('name', '兴发容器云')
        sessionStorage.setItem('parentLev', ['one-4', 'two-1', 'three-1'])
        this.$router.push('/product')
      }
      if (type === 4) {
        sessionStorage.setItem('level', 'one-5')
        sessionStorage.setItem('name', '大数据应用')
        sessionStorage.setItem('parentLev', ['one-5'])
        this.$router.push('/product')
      }
    },
    research () {
      sessionStorage.setItem('level', 'one-2')
      sessionStorage.setItem('name', '研发机构')
      sessionStorage.setItem('parentLev', ['one-1'])
      this.$router.push('/product')
    },
    getVideos () {
      serve.getVideo().then(res => {
        if (res.data.code === 200) {
          this.firstVideoUrl = res.data.data.firstVideoUrl
          this.secondVideoUrl = res.data.data.secondVideoUrl
          this.$refs.videoPlay.load()
          this.$refs.videoPlay1.load()
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  // min-width: 1600px;
  font-family: msyh;
  .section {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    position: relative;
    .slide {
      .home-header {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99999;
      }
      .slide-first-screen {
        width: 100%;
        height: 100%;
        position: relative;
        #bg_video1 {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
        .bg1-first-screen {
          position: absolute;
          top: 40%;
          width: 100%;
          .first-screen {
            text-align: left;
            .bg {
              box-sizing: border-box;
              width: 840px;
              background: rgba(0,0,0,0.3);
              padding: 30px 40px 30px 40px;
              .first-screen-text1 {
                font-size: 50px;
                font-weight: 500;
                color: #ffffff;
              }
              .first-screen-text2 {
                margin-top: 27px;
                .first-screen-text {
                  font-size: 24px;
                  font-weight: 500;
                  color: #ffffff;
                  line-height: 42px;
                }
              }
              .first-screen-btn {
                cursor: pointer;
                margin-top: 30px;
                width: 146px;
                height: 50px;
                background: #c30d23;
                display: table;
                .first-screen-btn-text {
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-size: 16px;
                  color: #ffffff;
                }
              }
            }
          }
        }
        .bg1-first-slide-screen {
          position: absolute;
          top: 431px;
          width: 100%;
          .first-screen {
            text-align: left;
            .first-screen-text1 {
              font-size: 66px;
              font-weight: 500;
              color: #ffffff;
            }
            .first-screen-text2 {
              font-size: 40px;
              font-weight: 500;
              color: #ffffff;
              margin-top: 21px;
            }
            .first-screen-btn {
              cursor: pointer;
              margin-top: 30px;
              width: 146px;
              height: 50px;
              background: #c30d23;
              display: table;
              .first-screen-btn-text {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-size: 16px;
                color: #ffffff;
              }
            }
          }
        }
        .bg1-first-slide-screen1 {
          position: absolute;
          top: 291px;
          width: 100%;
          .first-screen {
            text-align: center;
            .first-screen-text1 {
              font-size: 66px;
              font-weight: 500;
              color: #ffffff;
            }
            .first-screen-text2 {
              font-size: 40px;
              font-weight: 500;
              color: #ffffff;
              margin-top: 21px;
            }
            .first-screen-btn {
              cursor: pointer;
              margin: 60px auto 0;
              width: 146px;
              height: 50px;
              background: #c30d23;
              display: table;
              .first-screen-btn-text {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
                font-size: 16px;
                color: #ffffff;
              }
            }
          }
        }
      }
      .slide-second-screen {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        position: relative;
        #bg_video2 {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
        .bg1-second-screen {
          position: absolute;
          top: 45%;
          margin-top: -320px;
          width: 100%;
          height: 640px;
          background: rgba(0,135,219,0.85);
          .screen-main {
            .bg1-second-screen-text {
              box-sizing: border-box;
              font-size: 45px;
              text-align: center;
              color: #ffffff;
              height: 75px;
              line-height: 75px;
            }
            .bg1-second-screen-text:nth-child(1) {
              margin-top: 50px;
            }
            .bg1-second-screen-echarts {
              display: flex;
              justify-content: space-start;
              margin-top: 44px;
              .bg1-second-screen-count {
                display: flex;
                box-sizing: border-box;
                .count-left {
                  .terminals-img {
                    img {
                      width: 150px;
                      height: 150px;
                    }
                  }
                  .terminals-data {
                    width: 100px;
                    margin: auto;
                    color: #ffffff;
                  }
                  .terminals-data1 {
                    width: 75px;
                    margin: auto;
                    color: #ffffff;
                  }
                  .terminals-title {
                    font-size: 20px;
                    color: #ffffff;
                    text-align: center;
                  }
                }
                .count-right {
                  width: 30px;
                  position: relative;
                  .wan-add {
                    position: absolute;
                    left: -13px;
                    bottom: 70px;
                    font-size: 16px;
                    color: #fff;
                  }
                }
              }
              .second-screen-count-right {
                position: relative;
                width: 16%;
                .second-screen-count-right-border {
                  position: absolute;
                  left: 50%;
                  bottom: 0;
                  width: 1px;
                  height: 120px;
                  background: linear-gradient(153deg,rgba(255,255,255,0.00) 17%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.00));
                }
              }
            }
          }
        }
      }
      .slide-three-screen {
        position: relative;
        height: 100%;
        background: url('../../assets/home/firstScreenBgThree.png') no-repeat 100% 100%;
        background-size: cover;
        .bg1-three-screen {
          position: absolute;
          top: 30%;
          width: 100%;
          .three-main {
            text-align: left;
            .text-box {
              width: 605px;
              height: 442px;
              background: rgb(255, 255, 255, .4);
              .bg1-three-screen-text {
                font-size: 60px;
                font-weight: 500;
                color: #000000;
                padding: 32px 0 27px 50px;
              }
              .bg1-three-screen-text1 {
                font-size: 24px;
                color: #000000;
                margin-left: 50px;
                height: 42px;
                line-height: 42px;
              }
              .first-screen-btn {
                cursor: pointer;
                margin: 30px 0 0 50px;
                width: 146px;
                height: 50px;
                background: #c30d23;
                display: table;
                .first-screen-btn-text {
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-size: 16px;
                  color: #ffffff;
                }
              }
            }
          }
        }
      }
      .slide-four-screen {
        position: relative;
        height: 100%;
        background: url('../../assets/home/firstScreenBgFour.png') no-repeat 100% 100%;
        background-size: cover;
        .bg1-four-screen {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          display: table;
          .four-screen-child-box {
            width: 25%;
            height: 100%;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            .noMouse {
              .child-box {
                font-family: Impact;
                font-size: 60px;
                color: #020202;
              }
              .child-box1 {
                font-size: 26px;
                font-family: PingFangSC, PingFangSC-Regular;
                color: #020202;
                margin-top: 30px;
              }
              .child-box2 {
                font-size: 24px;
                color: #020202;
                margin-top: 16px;
              }
            }
            .enterMouse {
              width: 100%;
              height: 100%;
              background: rgba(195,13,35,.85);
              position: relative;
              .child-box {
                font-size: 60px;
                font-weight: 600;
                color: #ffffff;
                padding: 13% 0 30px;
              }
              .child-box1 {
                font-size: 26px;
                font-family: PingFangSC, PingFangSC-Regular;
                color: #ffffff;
                margin-bottom: 9%;
              }
              .child-box2 {
                font-size: 32px;
                font-weight: 500;
                color: #ffffff;
                margin-top: 9%;
              }
              .child-box3 {
                font-size: 20px;
                color: #ffffff;
                margin-top: 12px;
              }
              .child-box4 {
                position: absolute;
                bottom: 9%;
                left: 50%;
                margin-left: -20px;
                width: 40px;
                height: 40px;
                cursor: pointer;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .child-box5 {
                font-size: 32px;
                color: #ffffff;
                margin-top: 13%;
              }
              .child-box6 {
                font-size: 32px;
                color: #ffffff;
                margin-top: 9%;
              }
            }
          }
          .four-screen-child-box:nth-child(1) {
            background: rgb(255, 255, 255, .8);
          }
          .four-screen-child-box:nth-child(2) {
            background: rgb(255, 255, 255, .6);
          }
          .four-screen-child-box:nth-child(3) {
            background: rgb(255, 255, 255, .4);
          }
          .four-screen-child-box:nth-child(4) {
            background: rgb(255, 255, 255, .2);
          }
        }
      }
      .slide-five-screen {
        position: relative;
        height: 100%;
        background: url('../../assets/home/firstScreenBgFive.png') no-repeat 100% 100%;
        background-size: cover;
        .bg1-five-screen {
          position: absolute;
          top: 279px;
          width: 100%;
          .five-main {
            .bg1-five-screen-box {
              width: 605px;
              height: 362px;
              background: rgb(0, 0, 0, .4);
              float: right;
              padding-right: 50px;
              text-align: right;
              .bg1-three-screen-text {
                font-size: 60px;
                font-weight: 500;
                color: #fff;
                padding: 32px 0 27px 0;
              }
              .bg1-three-screen-text1 {
                font-size: 24px;
                color: #fff;
                height: 44px;
                line-height: 44px;
              }
                .first-screen-btn {
                cursor: pointer;
                margin-top: 30px;
                width: 146px;
                height: 50px;
                background: #c30d23;
                float: right;
                display: table;
                .first-screen-btn-text {
                  display: table-cell;
                  vertical-align: middle;
                  text-align: center;
                  font-size: 16px;
                  color: #ffffff;
                }
              }
            }
          }

        }
      }
    }
  }
}
::v-deep .fp-slidesNav {
  ul {
    text-align: center;
      li {
      width: 30px !important;
      height: 4px !important;
      .fp-sr-only {
        width: 30px !important;
        height: 4px !important;
        border-radius: 0 !important;
        margin: 0 !important;
        top: 0 !important;
        background:#737373 !important;
        opacity: 0.8 !important;
      }
      span {
        width: 30px !important;
        height: 4px !important;
        border-radius: 0 !important;
        margin: 0 !important;
        top: 0 !important;
        background:#737373 !important;
        opacity: 0.8 !important;
      }
    }
  }

}
::v-deep .fp-slidesNav ul li a.active span,
.fp-slidesNav ul li:hover a.active span{
    width: 30px !important;
    height: 4px !important;
    margin: 0 !important;
    border-radius: 0 !important;
    background:#fff !important;
    opacity: 0.8 !important;
 }
</style>
<style>
  #fp-nav ul li a span {
  background:#737373 !important;
  opacity: 0.8 !important;
}
  #fp-nav ul li a.active span,
  #fp-nav ul li:hover a.active span {
    background:#fff !important;
    opacity: 0.8 !important;
  }
</style>
