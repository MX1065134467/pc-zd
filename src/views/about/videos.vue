<template>
  <div class="all">
    <div class="carousel">
      <p class="title">推荐视频</p>
      <div class="content">
        <el-carousel
          height="400px"
          class="carousel_wrap"
          indicator-position="outside"
          :autoplay="play"
          @change="handleChange"
        >
          <el-carousel-item
            v-for="(item, index) in dataList"
            :key="index"
            :interval="2000"
          >
            <img class="img" :src="item.coverImgUrl" alt="" />
            <img
              @click="handlePlay(index, 1)"
              src="../../assets/images/play.png"
              alt=""
              class="play"
            />
          </el-carousel-item>
        </el-carousel>
        <p class="title1">{{ title }}</p>
        <p class="time">{{ time }}</p>
      </div>
    </div>
    <div class="list_wrap">
      <p class="title">全部视频</p>
      <div class="list">
        <div class="list_item" v-for="(item, index) in dataList1" :key="index">
          <div class="img_wrap">
            <img class="img" :src="item.coverImgUrl" alt="" />
            <img
              class="play"
              @click="handlePlay(index, 2)"
              src="../../assets/images/play.png"
              alt=""
            />
          </div>
          <p class="title1">{{ item.titleName }}</p>
          <p class="time">{{ item.releaseTime }}</p>
        </div>
      </div>
    </div>
    <p class="data" v-if="show" @click="handleMoreData">加载更多视频</p>
    <p class="data" v-if="!show && dataList1.length > 4">已无更多</p>
    <el-dialog :visible.sync="dialogVisible" @close="closed" width="50%">
      <div slot="title" class="header-title">
        <span class="diatitle">{{ diatitle }}</span>
        <img
          class="down"
          @click="handleDownLoad"
          src="../../assets/images/downLoad.png"
          alt=""
        />
      </div>
      <div class="demo">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          id="videoPlay"
          :playsinline="true"
          :options="playerOptions"
          @ready="playerReadied"
        ></video-player>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import serve from '../../api/video'
import base from '../../api/base'
export default {
  data () {
    return {
      title: '',
      time: '',
      show: false,
      play: true,
      dataList: [],
      dataList1: [],
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
          fullscreenToggle: true // 是否显示全屏按钮
        },
        playtimes: '' // 视频观看起点
      },
      diatitle: '',
      dialogVisible: false,
      pageNo: 1,
      pageSize: 4
    }
  },
  mounted () {
    this.getData()
    this.getListData()
  },
  methods: {
    // 推荐视频
    getData () {
      serve.getRecommendList().then((res) => {
        if (res.data.code === 200) {
          this.dataList = res.data.data
          this.time = this.dataList[0].releaseTime
          this.title = this.dataList[0].titleName
          this.diatitle = this.dataList[0].titleName
        }
      })
    },
    // 视频列表
    getListData () {
      const params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      serve.getList(params).then((res) => {
        if (res.data.code === 200) {
          this.dataList1 = this.dataList1.concat(res.data.data.rows)
          if (this.dataList1.length === res.data.data.totalCount) {
            console.log(1111)
            this.show = false
          } else {
            this.show -= true
          }
        }
      })
    },
    // 点击播放
    handlePlay (index, type) {
      const list = type === 1 ? this.dataList : this.dataList1
      if (type === 1) {
        this.play = false
      }
      this.dialogVisible = true
      this.id = list[index].id
      this.diatitle = list[index].titleName
      this.play = false
      this.playerOptions.sources[0].src =
        base.baseVideo +
        base.baseUrl +
        '/video/gradualPlay?id=' +
        list[index].id +
        '&videoName=' +
        list[index].videoName
    },
    // 关闭视频
    closed () {
      this.play = true
      this.$refs.videoPlayer.player.pause()
    },
    // 将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied (player, playtimes) {
      player.currentTime(playtimes)
      console.log('example player 1 readied', player)
    },
    // 轮播图切换
    handleChange (index) {
      this.time = this.dataList[index].releaseTime
      this.title = this.dataList[index].titleName
      this.diatitle = this.dataList[index].titleName
    },
    handleMoreData () {
      this.pageNo++
      this.getListData()
    },
    handleDownLoad () {
      var downloadA = document.createElement('a')
      downloadA.href =
        base.baseVideo + base.baseUrl + '/video/download?id=' + this.id
      downloadA.download = this.diatitle
      document.body.appendChild(downloadA)
      downloadA.click()
      document.body.removeChild(downloadA)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__button {
  // border: 1px solid #FF0000;
  width: 8px;
  height: 8px;
  background: #ff0000;
  border-radius: 50%;
}
.all {
  .carousel {
    margin-bottom: 76px;
    background: #ffffff;
    .content {
      border-radius: 8px;
      box-shadow: 0px 2px 36px -8px rgba(0, 0, 0, 0.2);
      .carousel_wrap {
        position: relative;
        .play {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 45%;
          left: 47.5%;
          cursor: pointer;
        }
      }
      .img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        width: 100%;
        height: 100%;
      }
      .title1 {
        font-size: 20px;
        color: #0e0e0e;
        margin-bottom: 14px;
        font-weight: bold;
        margin-left: 20px;
      }
      .time {
        color: #999999;
        font-size: 16px;
        margin-left: 20px;
        padding-bottom: 30px;
      }
    }
  }
  .list_wrap {
    .list {
      display: flex;
      flex-wrap: wrap;
      .list_item {
        margin-bottom: 50px;
        background: #ffffff;
        border-radius: 7px;
        box-shadow: 0px 0px 27px -3px rgba(0, 0, 0, 0.2);
        &:nth-child(even) {
          margin-left: 30px;
        }
        width: 48%;
        .img_wrap {
          position: relative;
          .img {
            width: 100%;
            height: 225px;
          }
          .play {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 45%;
            left: 48%;
            cursor: pointer;
          }
        }
        .title1 {
          font-size: 18px;
          color: #0e0e0e;
          font-weight: bold;
          margin: 25px auto 12px auto;
          width: 90%;
        }
        .time {
          font-size: 14px;
          color: #999999;
          width: 90%;
          margin: auto;
          margin-bottom: 20px;
        }
      }
    }
  }
  .data {
    width: 30%;
    margin: auto;
    padding: 5px 0;
    border: 1px solid #cbcbcb;
    font-size: 14px;
    color: #999999;
    margin-top: 40px;
    text-align: center;
    cursor: pointer;
  }
  .down {
    cursor: pointer;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    padding-bottom: 7px;
    margin-left: 10px;
  }
  .diatitle {
    font-size: 20px;
    color: #333333;
  }
}
</style>
