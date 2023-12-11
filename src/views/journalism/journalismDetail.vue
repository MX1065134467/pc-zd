<template>
  <div>
   <Header></Header>
   <div class="newsDetailBanner">
     <img class="img" src="../../assets/news/banner@2x.png" alt="">
   </div>
   <div class="content">
     <div class="newsDetailIcon" @click="goBack"><i class="el-icon-arrow-left"></i> 返回</div>
     <div class="newsDetailTitle">{{newsDetail.title}}</div>
     <div class="newsDetailTime">发表时间：{{newsDetail.createTime}}</div>
     <div class="newsDetailLine"></div>
     <div class="ql-container ql-snow">
      <div class="newsDetailContent ql-editor" v-html="newsDetail.article">{{newsDetail.article}}</div>
     </div>
   </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import serve from '@/api/news.js'
import moment from 'moment'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
export default {
  name: '',
  components: { Header },
  data () {
    return {
      newsDetail: {}
    }
  },
  created () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    this.newsDetailList()
  },
  mounted () {},
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    newsDetailList () {
      const params = {
        id: this.$route.query.id
      }
      serve.getDetail(params).then(res => {
        if (res.data.code === 200) {
          this.newsDetail = res.data.data
          this.newsDetail.createTime = moment(this.newsDetail.createTime).format('YYYY-MM-DD')
        }
      })
    }
  }
}
</script>

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
  margin: 58px auto 0px auto;
  .newsDetailIcon {
    font-size: 14px;
    font-weight: 400;
    color: #c1141b;
    cursor: pointer;
  }
  .newsDetailTitle {
    font-size: 30px;
    font-weight: 700;
    color: #333333;
    margin: 12px 0 28px 0;
  }
  .newsDetailTime {
    opacity: 0.6;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  .newsDetailLine {
    width: 100%;
    height: 1px;
    background: #d8d8d8;
    margin: 12px 0 30px 0;
  }
  .newsDetailContent {
    margin-bottom: 100px;
  }
}
::v-deep .ql-container.ql-snow {
  border: none !important;
}
::v-deep .ql-editor {
  padding: 0 !important;
}
</style>
