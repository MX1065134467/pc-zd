<template>
  <div>
   <Header></Header>
   <div class="newsDetailBanner">
     <img class="img" src="../../assets/news/banner@2x.png" alt="">
   </div>
   <div class="content">
     <div class="newsTitles">新闻中心</div>
   </div>
   <div class="noNews" v-if="newsList.length === 0">
     <div class="img"><img src="../../assets/home/empty.png" alt=""></div>
     <div class="noNewsText">暂无新闻</div>
   </div>
   <div class="newsDetailsBox" @click="newsDetails(item.id)" v-for="(item, index) in newsList" :key="index">
       <div class="newsContent">
        <div class="newsImg">
          <img :src="item.coverImage" alt="">
        </div>
        <div class="newsRight">
          <div class="newsRightTitle">{{item.title}}</div>
          <div class="newsRightContent" v-clampy="3" v-html="item.article">{{item.article}}</div>
          <!-- <div class="newsRightContent" v-html="item.article">{{item.article}}</div> -->
          <div class="newsRightTime">发表时间：{{item.createTime}}</div>
        </div>
      </div>
     </div>
     <div class="loadMore" v-show="isshow === 1 && newsList.length !== 0" @click="lodeMore">加载更多资讯</div>
     <div class="loadMore" v-show="isshow === 2 && newsList.length !== 0">正在加载...</div>
     <div class="loadMore" v-show="isshow === 3 && newsList.length !== 0">已无更多</div>
  </div>
</template>

<script>
import Header from '@/components/header'
import serve from '@/api/news.js'
import moment from 'moment'
import clampy from '@clampy-js/vue-clampy'
export default {
  name: '',
  components: { Header },
  directives: {
    clampy
  },
  data () {
    return {
      isshow: 1,
      pageNo: 1,
      pageSize: 10,
      newsList: []
    }
  },
  created () {
    this.getNewsList()
  },
  mounted () {},
  methods: {
    newsDetails (id) {
      this.$router.push({
        path: '/journalismDetail', query: { id: id }
      })
    },
    lodeMore () {
      this.isshow = 2
      this.pageNo += 1
      this.getNewsList()
    },
    getNewsList () {
      const params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      serve.getNews(params).then(res => {
        if (res.data.code === 200) {
          this.isshow = 1
          res.data.data.rows.forEach(item => {
            item.createTime = moment(item.createTime).format('YYYY-MM-DD')
          })
          if (res.data.data.currentPage >= res.data.data.totalPage) {
            this.isshow = 3
            this.newsList = this.newsList.concat(res.data.data.rows)
          } else {
            if (res.data.data.rows && res.data.data.rows.length <= this.pageSize) {
              this.newsList = this.newsList.concat(res.data.data.rows)
              this.isshow = 1
            } else {
              this.isshow = 3
            }
          }
        } else {
          this.isshow = 1
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  ::v-deep .newsRightContent {
    img {
      display: none;
    }
  }
</style>
<style lang='scss' scoped>
.newsDetailBanner {
  width: 100%;
  height: 430px;
  margin-top: 60px;
  .img {
    width: 100%;
    height: 100%;
  }
}
.content {
  width: 1200px;
  margin: 60px auto 30px auto;
  .newsTitles {
    font-family: msyh;
    padding-bottom: 24px;
    border-bottom: 1px solid #d8d8d8;
    font-size: 30px;
    font-weight: bold;
  }
}
.noNews {
  width: 1200px;
  margin: auto auto 40px auto;
  .img {
    width: 528px;
    height: 424px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .noNewsText {
    text-align: center;
    opacity: 0.6;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
}
  .newsDetailsBox {
    width: 1236px;
    margin: auto;
    .newsContent {
      display: flex;
      justify-content: start;
      padding: 18px;
      cursor: pointer;
      .newsImg {
        width: 282px;
        height: 180px;
        background-color: #eee;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .newsRight {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin-left: 24px;
        .newsRightTitle {
          font-size: 24px;
          color: #000000;
          font-weight: 700;
        }
        .newsRightContent {
          width: 788px;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          text-align: justify;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // display: -webkit-box;
          // word-wrap:break-word; // 数字以及字母处理
          // word-break: break-all; // 纯数字或纯字母不会自动换行
          // -webkit-box-orient: vertical;
          // -moz-box-orient:vertical;
          // -webkit-line-clamp: 2;   //  显示6行
        }
        .newsRightTime {
          opacity: 0.6;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
        }
      }
    }
    .newsContent:nth-child(n + 2) {
      margin-top: 30px;
    }
    .newsContent:hover {
      background: #f7f7f7;
        .newsRightTitle {
          color: #c1141b;
        }
    }
  }
  .loadMore {
    font-size: 14px;
    color: #999999;
    width: 240px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #cbcbcb;
    border-radius: 2px;
    text-align: center;
    margin: 60px auto 100px;
    cursor: pointer;
  }
</style>
