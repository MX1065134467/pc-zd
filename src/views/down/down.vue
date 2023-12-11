<template>
  <div class="container">
    <Header></Header>
   <div class="box">
     <div class="downList" v-for="(item, index) in downList" :key="index">
       <div class="productName">{{item.productName}}</div>
       <div class="productDesc">{{item.productDesc}}</div>
       <div class="filesList">
         <div :class="flagIndex == index && showIndex == index1? 'active' : 'fileItem'" v-for="(items, index1) in item.productFileList" :key="index1" @click="handleTab(index,items, index1)">
           {{items.fileName}}
         </div>
       </div>
     </div>
     <div class="loadMore" v-show="isshow === 1 && downList.length !== 0" @click="lodeMore">加载更多产品</div>
     <div class="loadMore" v-show="isshow === 2 && downList.length !== 0">正在加载...</div>
     <div class="loadMore" v-show="isshow === 3 && downList.length !== 0">已无更多</div>
   </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import serve from '@/api/news.js'
export default {
  name: 'down',
  components: { Header },
  data () {
    return {
      flagIndex: null,
      showIndex: null,
      isshow: 1,
      pageNo: 1,
      pageSize: 10,
      downList: []
    }
  },
  created () {},
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      const params = {
        keyword: '',
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      serve.getProduct(params).then(res => {
        if (res.data.code === 200) {
          if (res.data.data.currentPage >= res.data.data.totalPage) {
            this.isshow = 3
            this.downList = this.downList.concat(res.data.data.rows)
          } else {
            if (res.data.data.rows && res.data.data.rows.length <= this.pageSize) {
              this.downList = this.downList.concat(res.data.data.rows)
              this.isshow = 1
            } else {
              this.isshow = 3
            }
          }
        } else {
          this.isshow = 1
        }
      })
    },
    handleTab (index, item, index1) {
      this.flagIndex = index
      this.showIndex = index1
      var link = document.createElement('a')
      link.href = item.filePath
      link.download = item.fileSourceName
      link.click()
    },
    lodeMore () {
      this.isshow = 2
      this.pageNo += 1
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  .box {
    width: 100%;
    height: 100%;
    background: #F7F9FC;
    padding: 100px 0 45px 0;
    .downList {
      margin: auto;
      width: 1200px;
      border-radius: 8px;
      background: #fff;
      box-shadow: 0px 4px 30px rgba(0,0,0,0.10);
      padding: 32px 30px 34px 30px;
      .productName {
        font-size: 20px;
        font-weight: 700;
        color: #000000;
        line-height: 20px;
      }
      .productDesc {
        font-size: 16px;
        font-weight: 400;
        text-align: justify;
        color: #999999;
        line-height: 30px;
        margin-top: 19px;
      }
      .filesList {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        align-content: start;
        margin-top: 8px;
        // width: 470px;
        .fileItem {
          box-sizing: border-box;
          height: 40px;
          background: #f0f0f0;
          border-radius: 4px;
          font-size: 16px;
          text-align: center;
          color: #666666;
          // line-height: 40px;
          padding: 9px 17px;
          margin: 16px 40px 0 0;
          cursor: pointer;
        }
        .fileItem:hover {
          color: #c1141b;
          background: rgba(193,20,27,.1);
        }
        .active {
          box-sizing: border-box;
          height: 40px;
          border-radius: 4px;
          font-size: 16px;
          text-align: center;
          // line-height: 40px;
          padding: 9px 17px;
          margin: 16px 40px 0 0;
          cursor: pointer;
          color: #c1141b;
          background: rgba(193,20,27,.1);
        }
      }
    }
    .downList:nth-child(n+2) {
      margin-top: 40px;
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
