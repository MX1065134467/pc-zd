<template>
  <div>
    <job-header></job-header>
    <div class="notice-img">
      <img src="../../assets/school/problem.png" alt="" />
    </div>
    <div class="content">
      <div class="search-containner">
        <input
          placeholder="关键字搜索"
          @keyup.enter="questionList"
          v-model="search"
          class="search-content"
        />
        <el-dropdown class="list" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link drop">
            {{ dropValue }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu
            slot="dropdown"
            style="text-align:center;z-index:99;margin-right:25px"
          >
            <el-dropdown-item
              :command="item.name"
              v-for="item in dropList"
              :key="item.name"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <div class="search-class" @click.stop="questionList">搜索</div>
      </div>
      <div class="search-content">
        <p class="breadcrumb">
          <span
            :class="dropValue1 === item.name ? 'active' : ''"
            v-for="item in dropList"
            :key="item.name"
            @click="handleCommand1(item.name)"
            >{{ item.name }}<span class="circle"></span
          ></span>
        </p>
        <div class="searchList">
          <div v-if="searchList.length > 0">
            <div v-for="(item, index) in searchList" :key="index">
              <p class="questionbg">
                <img
                  class="question"
                  src="../../assets/school/Q.png"
                  alt=""
                />{{ item.question }}
              </p>
              <p>
                <img class="answer" src="../../assets/school/A.png" alt="" />{{
                  item.answer
                }}
              </p>
            </div>
          </div>
          <div class="nodata" v-else>
            <img src="../../assets/images/nodata.png" alt="" />
            <p class="nodatatext">暂无数据</p>
          </div>
        </div>
      </div>
    </div>
    <job-footer></job-footer>
  </div>
</template>

<script>
import serve from '@/api/grow.js'
import jobHeader from '../../components/jobHeader'
import jobFooter from '../../components/jobFooter'
export default {
  components: { jobHeader, jobFooter },
  data () {
    return {
      search: '',
      dropValue: '全部问题',
      dropValue1: '全部问题',
      id: null,
      dropList: [],
      searchList: []
    }
  },
  created () {
    if (this.$route.query.type) {
      if (this.$route.query.type === '热门问题') {
        this.dropValue = '热门问题'
      } else if (this.$route.query.type === '投递简历') {
        this.dropValue = '投递简历'
      } else if (this.$route.query.type === '福利待遇') {
        this.dropValue = '福利待遇'
      }
    }
    this.questionTypeList()
    this.questionList()
  },
  methods: {
    handleCommand (value) {
      this.dropValue = value
      const obj = this.dropList.find(v => {
        return value === v.name
      })
      this.id = obj.id
    },
    handleCommand1 (value) {
      this.handleCommand(value)
      this.questionList()
    },
    questionTypeList () {
      serve.questionType().then(res => {
        if (res.data.code === 200) {
          const arr = res.data.data
          arr.forEach(item => {
            item.value = item.id
          })
          this.dropList = arr
        }
      })
    },
    questionList () {
      this.dropValue1 = this.dropValue
      const params = {
        keyWord: this.search,
        type: this.id ? this.id : null
      }
      serve.question(params).then(res => {
        if (res.data.code === 200) {
          this.searchList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.el-icon-arrow-down:before {
  margin-left: 20px;
}
.notice-img {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  width: 1200px;
  height: 100%;
  margin: auto;
  font-family: msyh;
  .search-containner {
    margin: 30px 0 40px 0;
    position: relative;
    border: 1px solid #cccccc;
    .drop {
      cursor: pointer;
    }
    .search-content {
      width: 97.9%;
      height: 54px;
      padding-left: 24px;
      border: none;
      border-radius: 0 5px;
      outline: none;
    }
    .search-class {
      position: absolute;
      top: 0;
      right: -1px;
      width: 141px;
      height: 53px;
      line-height: 54px;
      padding: 1px 0;
      text-align: center;
      color: #fff;
      font-size: 16px;
      background-color: #4281ff;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
    }
    .list {
      width: 135px;
      height: 31px;
      padding: 10px;
      text-align: center;
      position: absolute;
      top: 1px;
      right: 140px;
      line-height: 30px;
      background-color: #fff;
    }
  }
  .search-content {
    .breadcrumb {
      width: 100%;
      padding-bottom: 12px;
      border-bottom: 1px solid #d8d8d8;
      font-size: 16px;
      margin-bottom: 30px;
      span {
        display: inline-block;
        cursor: pointer;
        .circle {
          width: 4px;
          height: 4px;
          background: #d8d8d8;
          border-radius: 50%;
          margin: 0 20px 5px 20px;
        }
        &:last-child {
          .circle {
            display: none;
          }
        }
      }
      .active {
        color: #4281ff;
        font-weight: bold;
      }
    }
    .searchList {
      margin-bottom: 58px;
      .nodata {
        padding: 50px;
        width: 60%;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
        }
        .nodatatext {
          text-align: center;
          color: #b2b2b2;
          font-family: msyh;
          font-size: 14px;
          margin-top: 20px;
        }
      }
      p {
        padding: 10px 30px;
        margin-bottom: 25px;
        font-size: 14px;
      }
      .questionbg {
        background-color: #f5f6f7;
        font-size: 16px;
        margin: 10px 0;
      }
      .question {
        width: 17px;
        height: 21px;
        vertical-align: middle;
        margin-right: 16px;
      }
      .answer {
        width: 15px;
        height: 18px;
        vertical-align: middle;
        margin-right: 16px;
      }
    }
  }
}
</style>
