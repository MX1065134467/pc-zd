<template>
  <div>
    <job-header></job-header>
    <div class="growth-wrap">
      <div class="notice-img">
        <img src="../../assets/school/growth.png" alt="" />
      </div>
      <div class="growth-content">
        <div class="tab">
          <span
            v-for="(item, index) in tabList"
            :key="index"
            @click="handleTab(index)"
            :class="flagIndex == index ? 'active' : ''"
            >{{ item.name }}</span
          >
        </div>
        <div class="content-first" v-if="flagIndex == 0">
            <img src="../../assets/about/introduce.jpg" alt="加载失败" />
            <div class="text-wrap">
              <p class="paragraph indent">
                中电兴发始创于1997年，是在原国家电子工业部中国电子器材总公司下属公司的基础上改制设立，“中电兴发”寓意“中国的电子信息产业兴旺发达”。公司注册资本13.35亿元，目前拥有4200余名员工。
              </p>
              <p class="paragraph indent">
                中电兴发是智慧中国核心技术、产品与全面解决方案供应商、运营服务商；是中国A股主板市场人工智能AI 50指数样本股企业，富时罗素全球股票指数标的股，股票代码002298。
              </p>
              <p class="paragraph indent">
                中电兴发始终坚持“自主可控，国产代替”的技术研发路线，在北京、芜湖、西安、成都、长沙设立了五大研发中心，拥有人工智能与物联网、云计算与云存储、大数据技术及应用三大产品线。基于自主产品与核心技术，公司形成了数据应用DA(Data Application)和数字基础设施DI(Data Infrastructure)两级架构下的，以DI-Edge（智能边缘）、DI-Cloud（数字云底座）、DA数据应用(数字政府DAg、数字经济DAe)为核心的“边、云、用”俱备的自主智慧能力系统。并通过跨领域的业务互补协同，与中国联通、中国有线的网络传输能力深度结合，构建了中电兴发“边、网、云、用”四位一体的强大数字化赋能平台，让公司可以更好地为现代国防、政府治理、民生服务和数字经济等行业的客户，提供涵盖数字基础设施、智慧行业应用、数据综合运营等的全方位数字化技术服务。
              </p>
              <p class="paragraph indent">
                中电兴发坚持技术创新驱动，是国家认定的技术创新示范企业、国家高新技术企业、国家知识产权示范企业，拥有国家认定企业技术中心、国家博士后科研工作站、两个省级重点实验室以及北京市级企业技术中心；作为国家信创工委会核心成员单位，中电兴发自主产品连续多年入选中国自主品牌国货新品推广名录，并与包括华为、龙芯、统信在内的众多信创生态伙伴进行了技术与产品互认证，共同促进信创产业繁荣。
              </p>
              <p class="paragraph indent">
                中电兴发承担了“物联网与智慧城市关键技术及示范”、“国家公共安全应急平台”、“国家南水北调安全传感器网络技术研发”等多项国家重点科技攻关课题。公司及公司领军人物多次获得省级科技进步二等奖、公安部科学技术一等奖、国家科技进步二等奖、国家技术发明二等奖等重大科研奖项。
              </p>
              <p class="paragraph indent">
                中电兴发是一家拥有软件开发甲级、信息系统集成甲级、安全防范技术甲级、电子与智能化壹级等“九甲”资质的高科技企业，公司还通过了国军标质量管理、信息安全管理、信息技术服务管理等全方位管理体系认证，以及信息系统建设和服务能力四级认证、全球软件能力成熟度CMMI5认证。公司两次荣登《福布斯》“中国潜力100”排行榜；多次入选全球智慧城市解决方案供应商百强榜和世界物联网500强榜单；还多次荣获全国软件和信息技术服务综合竞争力百强、全国政法智能化建设十大解决方案和十大创新产品等荣誉。
              </p>
              <p class="paragraph indent">
                中电兴发建立了遍布全国的营销与服务网络，公司的人工智能与物联网、云计算与云存储、大数据等产品和方案已服务全国2亿多人口，拥有数百项成功实践。
              </p>
              <p class="paragraph indent">
                在智慧国防领域，中电兴发完成了以“中央军委某智能化项目”为代表的近百个涉密信息化项目，为国防现代化建设贡献特色化科技力量。
              </p>
              <p class="paragraph indent">
                在智慧安保领域，中电兴发为历届两会、2014北京APEC峰会、2016杭州G20峰会、2019武汉世界军运会等重大会议及赛事活动提供可靠产品和技术服务。
              </p>
              <p class="paragraph indent">
                中电兴发交付了北京站、北京南站、京哈线沿途多个重要高铁站点的人脸识别项目，以及北京市海淀区“科技创安”、安徽芜湖雪亮工程、云南保山立体化边境防控体系项目、河北枣强雪亮工程、安徽省淮南市平安淮南、某市综治视联网等近百个涉及公共安全、反恐维稳、智慧治理的大型项目。
              </p>
              <p class="paragraph indent">
                中电兴发新赛道DA+DI全局全域智慧城市项目拥有三大典型案例：
              </p>
              <p class="paragraph indent">
                合同额13亿元的贵州省六盘水市天网工程总集成项目，建成了总容量超18PB的五大主题“数据仓库”以及22个大数据子系统，并联网接入13000余路智能高清摄像机。
              </p>
              <p class="paragraph indent">
                贵州省赫章智慧城市项目，建设规模为6.67亿元，围绕一中心（智慧赫章应用中心）、一基础（信息基础设施建设）、三平台（智慧治理、政务服务、应急管理）、N个主题应用分类融合进三平台的核心理念进行建设。
              </p>
              <p class="paragraph indent">
                湖南省凤凰智慧城市项目，已累计建设投资逾3亿元。建设云数据中心、大数据平台、地理信息共享平台、智慧政务、智慧社会治理、智慧旅游等子项目。
              </p>
              <p class="paragraph indent">
                在大数据中心建设、智慧园区、智慧应急、智慧旅游、智慧交通、国家战略设施安全、智慧法院、智慧司法、智慧教育、智慧社区、智慧国土、智慧用能等传统智慧城市的垂直应用领域，中电兴发皆有着丰富的项目交付和运营服务经验。
              </p>
              <p class="paragraph indent">
                中电兴发秉持“乾乾君子，泱泱华夏；忠信贞固，信息报国”的经营理念，君子、奋斗、开放、感恩是我们的共同价值观。中电兴发以推进国家治理体系和治理能力现代化为己任，持续为智慧中国建设贡献数字化中坚力量，立志成为中国乃至世界智慧科技领域的龙头企业！
              </p>
            </div>
          </div>
        <div class="content-seconed" v-if="flagIndex == 1">
          <div class="seconed-top">
            <div class="soft-title">
              <span class="bgtext">Salary system</span>
              <span class="softtext">有竞争力的薪酬体系</span>
            </div>
            <div class="salaray-wrap">
              <div class="salaray salary1">
                <p class="name">月度固薪</p>
                <p class="text">以岗定薪，以绩定薪，对标市场有竞争力的水平</p>
              </div>
              <div class="plus">
                <img src="../../assets/school/plus.png" alt="" />
              </div>
              <div class="salaray salary2">
                <!-- <div class="img">
                  <img src="../../assets/school/icon-year.png" alt="" />
                </div> -->
                <p class="name">年度浮薪</p>
                <p class="text">业绩导向，与公司和个人的年度绩效达成挂钩</p>
              </div>
              <div class="plus plus1">
                <img src="../../assets/school/plus.png" alt="" />
              </div>
              <div class="salaray salary3">
                <p class="name">奖金</p>
                <p class="text">
                  包含项目奖金、专利奖金等，价值贡献越大，奖金占比越高
                </p>
              </div>
            </div>
          </div>
          <div class="seconed-bottom">
            <div class="seconed-title">
              <div class="soft-title">
                <span class="bgtext">Salary system</span>
                <span class="softtext title1">有温度的福利体系</span>
              </div>
              <div class="bottom-img">
                <img src="../../assets/school/salary.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="content-third" v-if="flagIndex == 2">
          <div class="third-top">
            <div class="soft-title">
              <span class="bgtext">PROMOTION PLAN</span>
              <span class="softtext title2">晋升计划</span>
            </div>
            <div class="third-img">
              <img src="../../assets/school/upsystem.png" alt="" />
            </div>
          </div>
          <div class="third-bottom">
            <div class="third-content">
              <div class="soft-title">
                <span class="bgtext">MANAGEMENT TRAINING</span>
                <span class="softtext">i未来——管培生专项</span>
              </div>
              <div class="content">
                <div class="img">
                  <img src="../../assets/school/project.png" alt="" />
                </div>
                <div class="text">
                  <p class="title1">项目简介</p>
                  <p>
                    i未来作为公司战略级人才项目，旨在从内部培养深刻认同公司文化、真正熟悉公司业务、推动并实现战略落地的中高层管理者。成为i未来管培生，你将在职业生涯的起点，获得专业的课程培养及来自组织的全流程培养关注。
                  </p>
                  <p>
                    加入中电兴发，我们期待与你携手，共创精彩未来！（搭建管理人才成长的“快通道”，通过定制化的培养着眼于未来，培养一批中高层管理者）
                  </p>
                </div>
              </div>
              <div class="project">
                <p class="title1">项目亮点</p>
                <span class="line"></span>
              </div>
              <div class="liangdian">
                <div class="first">
                  <p>专业课程、思维课程</p>
                  <p>体验式学习、行动学习</p>
                  <p>沙龙分享、定期述职</p>
                  <img
                    class="icon-peiyang"
                    src="../../assets/school/icon-peiyang.png"
                    alt=""
                  />
                  <p class="item-title">专项培养</p>
                </div>
                <div class="seconed">
                  <p>根据岗位配置专业导师</p>
                  <p>及时反馈指导意见</p>
                  <img
                    class="icon-daoshi"
                    src="../../assets/school/icon-daoshi.png"
                    alt=""
                  />
                  <p class="item-title">导师带教</p>
                </div>
                <div class="seconed">
                  <p>深度理解业务</p>
                  <p>找到真正适合的方向</p>
                  <img
                    class="icon-peiyang"
                    src="../../assets/school/icon-lungang.png"
                    alt=""
                  />
                  <p class="item-title">灵活轮岗</p>
                </div>
                <div class="first fourth">
                  <p>未来专项专属快速发展晋升通道</p>
                  <p>期望实现“1-2年快速成长</p>
                  <p>3-6年独挡一面</p>
                  <p>7年+领域专家”的培养目标</p>
                  <img
                    class="icon-peiyang"
                    src="../../assets/school/icon-zhiye.png"
                    alt=""
                  />
                  <p class="item-title">职业通道</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-fourth" v-if="flagIndex == 3">
          <div class="show-wrap">
            <div class="show">
              <div class="soft-title">
                <span class="bgtext">SCHOOL RECRUITMENT</span>
                <span class="softtext title1">往期校招</span>
              </div>
              <img src="../../assets/school/pic-one.png" alt="" />
            </div>
          </div>
          <div class="show-wrap">
            <div class="show1">
              <div class="show">
                <div class="soft-title">
                  <span class="bgtext">COMPANY</span>
                  <span class="softtext title1">公司环境</span>
                </div>
                <img src="../../assets/school/pic- two.png" alt="" />
              </div>
            </div>
          </div>
          <div class="show-wrap">
            <div class="show">
              <div class="soft-title">
                <span class="bgtext">DORMITORY</span>
                <span class="softtext title1">宿舍环境</span>
              </div>
              <img src="../../assets/school/pic-three.png" alt="" />
            </div>
          </div>
          <div class="show-wrap">
            <div class="show1">
              <div class="show">
                <div class="soft-title">
                  <span class="bgtext">LEAGUE BUILDING</span>
                  <span class="softtext title1">团建活动</span>
                </div>
                <img src="../../assets/school/pic-four.png" alt="" />
              </div>
            </div>
          </div>
          <div class="video">
            <div class="soft-title">
              <span class="bgtext">VIDEO DISPLAY</span>
              <span class="softtext title1">视频展示</span>
            </div>
            <el-row class="showvideo" :gutter="40">
              <el-col :span="12" class="video1">
                <img src="../../assets/school/video1.png" alt="" />
                <div class="paly" @click="handleVideo(1)">
                  <img src="../../assets/school/play.png" alt="" />
                </div>
                <p class="text">中电兴发视频介绍</p>
              </el-col>
              <el-col :span="12" class="video1">
                <img src="../../assets/school/video2.png" alt="" />
                <div class="paly" @click="handleVideo(2)">
                  <img src="../../assets/school/play.png" alt="" />
                </div>
                <p class="text">直面掌门人-瞿总采访</p>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :title="diatitle"
      :visible.sync="dialogVisible"
      @close="closed"
      width="50%"
    >
      <div class="demo">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
          @play="onPlayerPlay($event)"
          @pause="onPlayerPause($event)"
          @ended="onPlayerEnded($event)"
          @waiting="onPlayerWaiting($event)"
          @playing="onPlayerPlaying($event)"
          @loadeddata="onPlayerLoadeddata($event)"
          @timeupdate="onPlayerTimeupdate($event)"
          @canplay="onPlayerCanplay($event)"
          @canplaythrough="onPlayerCanplaythrough($event)"
          @statechanged="playerStateChanged($event)"
          @ready="playerReadied"
        ></video-player>
      </div>
    </el-dialog>
    <job-footer></job-footer>
  </div>
</template>

<script>
import jobHeader from '../../components/jobHeader'
import jobFooter from '../../components/jobFooter'
import 'video.js/dist/video-js.css'
import serve from '@/api/grow.js'
export default {
  name: 'growthAndDev',
  components: { jobHeader, jobFooter },
  data () {
    return {
      flagIndex: 0,
      tabList: [
        {
          name: '公司概况'
        },
        {
          name: '薪酬福利'
        },
        {
          name: '培训发展'
        },
        {
          name: '风采展示'
        }
      ],
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如'16:9'或'4:3'）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 类型
            src: '' // url地址
          }
        ],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: false // 是否显示全屏按钮
        },
        playtimes: '' // 视频观看起点
      },
      diatitle: '中电兴发视频介绍',
      dialogVisible: false,
      firstVideoUrl: '',
      secondVideoUrl: ''
    }
  },
  created () {
    this.videoList()
    if (this.$route.query.type) {
      if (this.$route.query.type === '公司概况') {
        this.flagIndex = 0
      } else if (this.$route.query.type === '薪酬福利') {
        this.flagIndex = 1
      } else if (this.$route.query.type === '培训发展') {
        this.flagIndex = 2
      } else if (this.$route.query.type === '风采展示') {
        this.flagIndex = 3
      }
    }
  },
  watch: {
    playtimes (val, oldVal) {
      // 普通的watch监听
      console.log('playtimes: ' + val)
      this.playerReadied(this.$refs.videoPlayer.player, val)
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // 视频接口
    videoList () {
      serve.video().then(res => {
        if (res.data.code === 200) {
          this.firstVideoUrl = res.data.data.firstVideoUrl
          this.secondVideoUrl = res.data.data.secondVideoUrl
          console.log(this.firstVideoUrl, this.secondVideoUrl)
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    handleTab (index) {
      console.log(index)
      this.flagIndex = index
    },
    // 视频播放
    handleVideo (type) {
      this.dialogVisible = true
      if (type === 1) {
        this.diatitle = '中电兴发视频介绍'
        this.playerOptions.sources[0].src = this.firstVideoUrl
      } else {
        this.diatitle = '直击掌门人—瞿总采访'
        this.playerOptions.sources[0].src = this.secondVideoUrl
      }
    },
    closed () {
      this.$refs.videoPlayer.player.pause()
    },
    // 播放回调
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },

    // 暂停回调
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },

    // 视频播完回调
    onPlayerEnded (player) {
      // console.log(player)
    },

    // DOM元素上的readyState更改导致播放停止
    onPlayerWaiting (player) {
      // console.log(player)
    },

    // 已开始播放回调
    onPlayerPlaying (player) {
      // console.log(player)
    },

    // 当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata (player) {
      // console.log(player)
    },

    // 当前播放位置发生变化时触发。
    onPlayerTimeupdate (player) {
      // console.log('98989797')
    },

    // 媒体的readyState为HAVE_FUTURE_DATA或更高
    onPlayerCanplay (player) {
      // console.log('player Canplay!', player)
    },

    // 媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    onPlayerCanplaythrough (player) {
      // console.log('player Canplaythrough!', player)
    },

    // 播放状态改变回调
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // 将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied (player, playtimes) {
      player.currentTime(playtimes)
      console.log('example player 1 readied', player)
    }
  }
}
</script>

<style lang="scss" scoped>
.soft-title {
  margin: auto;
  position: relative;
  .bgtext {
    font-family: Impact;
    opacity: 0.05;
    font-size: 40px;
  }
  .softtext {
    font-size: 24px;
    position: absolute;
    left: 492px;
    top: 13px;
    font-weight: bold;
  }
}
.growth-wrap {
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #000000;
  font-family: msyh;
  .notice-img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .growth-content {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/school/growth-bg.png");
    background-size: contain;
    margin-top: -65px;
    z-index: 22;
    .tab {
      width: 100%;
      height: 60px;
      display: inline-block;
      text-align: center;
      background: rgba(255, 255, 255, 0.8);
      margin-bottom: 70px;
      span {
        display: inline-block;
        height: 57px;
        line-height: 60px;
        margin-left: 70px;
        font-size: 16px;
        cursor: pointer;
      }
      .active {
        border-bottom: 3px solid #4281ff;
        color: #4281ff;
        font-weight: bold;
      }
    }
    .content-first {
      width: 1200px;
      height: 100%;
      margin: auto;
      // display: flex;
      margin-bottom: 64px;
      .indent {
        text-indent: 2em;
      }
      img {
        width: 100%;
        height: 100%;
      }
      // .content-left {
      //   flex: 1.5;
      //   width: 413px;
      //   height: 475px;
      //   img {
      //     width: 100%;
      //     height: 100%;
      //   }
      // }
      // .content-right {
      //   flex: 3;
      //   margin-top: 30px;
      //   height: 475px;
      //   background-color: #fafbfc;
      //   p {
      //     line-height: 28px;
      //     margin-top: 20px;
      //     margin: 20px 30px 0 30px;
      //     &:first-child {
      //       margin-top: 30px;
      //     }
      //   }
      // }
    }
    .content-seconed {
      width: 100%;
      .seconed-top {
        width: 1200px;
        text-align: center;
        margin: auto;
        position: relative;
        margin-bottom: 30px;
        .salaray-wrap {
          width: 100%;
          display: flex;
          margin-top: 40px;
          .salaray {
            width: 400px;
            height: 400px;
            background-size: contain;
            background-repeat: no-repeat;
            .name {
              font-size: 18px;
              margin: 160px 0 20px 0;
            }
            .text {
              width: 210px;
              text-align: center;
              margin: auto;
              font-size: 14px;
            }
          }
          .salary1 {
            background-image: url("../../assets/school/card1.png");
          }
          .salary2 {
            background-image: url("../../assets/school/card2.png");
          }
          .salary3 {
            background-image: url("../../assets/school/card3.png");
          }
          .plus {
            width: 57px;
            height: 52px;
            position: absolute;
            top: 245px;
            left: 370px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .plus1 {
            position: absolute;
            top: 245px;
            left: 770px;
          }
        }
      }
      .seconed-bottom {
        width: 100%;
        background-color: #f8f9fa;
        .seconed-title {
          width: 1200px;
          //   border: 1px solid red;
          text-align: center;
          margin: auto;
          padding-top: 70px;
          .title1 {
            position: absolute;
            left: 505px;
            top: 12px;
          }
          .bottom-img {
            width: 100%;
            height: 100%;
            margin-top: 70px;
            padding-bottom: 93px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .content-third {
      .third-top {
        text-align: center;
        .title2 {
          position: absolute;
          left: 47.3%;
        }
        .third-img {
          width: 1350px;
          height: 450px;
          margin: auto;
          margin: 70px auto 50px auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .third-bottom {
        width: 100%;
        text-align: center;
        padding-top: 70px;
        background-color: #f8f9fa;
        .third-content {
          width: 1200px;
          margin: auto;
          .content {
            display: flex;
            margin: 80px 0 90px 0;
            .img {
              flex: 2;
              img {
                width: 100%;
                height: 1005;
              }
            }
            .text {
              flex: 2.7;
              text-align: left;
              line-height: 36px;
              padding-left: 70px;
              .title1 {
                font-size: 20px;
                font-weight: bold;
              }
            }
          }
          .project {
            .title1 {
              font-size: 20px;
              font-weight: bold;
            }
            .line {
              display: block;
              margin: auto;
              width: 20px;
              height: 3px;
              background-color: #4281ff;
              margin-top: 5px;
            }
          }
          .liangdian {
            display: flex;
            margin-top: 60px;
            div {
              width: 380px;
              height: 360px;
              background-size: contain;
              background-repeat: no-repeat;
              position: relative;
            }
            p {
              line-height: 26px;
            }
            .first {
              background-position-y: 100px;
              background-image: url("../../assets/school/circle-one.png");
            }
            .seconed {
              margin-left: -105px;
              background-position-y: 70px;
              background-image: url("../../assets/school/circle-two.png");
            }
            .fourth {
              margin-left: -105px;
              background-position-y: 122px;
              background-image: url("../../assets/school/circle-four.png");
            }
            .icon-peiyang {
              width: 60px;
              height: 60px;
              margin: 0 auto;
              position: absolute;
              top: 60%;
              left: 42%;
            }
            .icon-daoshi {
              width: 55px;
              height: 38px;
              margin: 0 auto;
              position: absolute;
              top: 65%;
              left: 42%;
            }
            .item-title {
              font-size: 20px;
              font-weight: bold;
              color: #fff;
              position: absolute;
              top: 83%;
              left: 39%;
            }
          }
        }
      }
    }
    .content-fourth {
      width: 100%;
      text-align: center;
      .show-wrap {
        width: 100%;
        height: 600px;
        background-image: url("../../assets/school/bj-one.png");
        background-size: contain;
        &:first-child {
          height: 530px;
        }
        &:nth-child(3) {
          height: 530px;
          margin-top: 70px;
        }
        .show {
          width: 1200px;
          margin: auto;
          img {
            margin-top: 75px;
            width: 100%;
            height: 100%;
          }
          .title1 {
            position: absolute;
            left: 550px;
          }
        }
        .show1 {
          width: 100%;
          padding: 70px 0 90px 0;
          background: rgba(207, 205, 205, 0.1);
        }
      }
      .video {
        width: 1200px;
        margin: auto;
        padding-top: 86px;
        padding-bottom: 107px;
        .title1 {
          position: absolute;
          left: 550px;
        }
        .showvideo {
          margin-top: 60px;
          .video1 {
            position: relative;
            img {
              width: 100%;
              height: 325px;
              border-radius: 20px 20px 0 0;
            }
            .paly {
              position: absolute;
              top: 150px;
              left: 45%;
              cursor: pointer;
              img {
                width: 50px;
                height: 50px;
              }
              &:last-child {
                position: absolute;
                top: 150px;
                left: 20%;
              }
            }
            .text {
              text-align: center;
              padding: 20px 0;
              background-color: rgba(247, 242, 242, 0.616);
              font-size: 18px;
              margin-top: -8px;
              border-radius: 0 0 20px 20px;
            }
          }
        }
      }
    }
  }
}
</style>
