<template>
  <div>
    <job-header></job-header>
    <div class="job-content-wrap">
      <div class="job-bg">
        <img src="../../assets/school/banner.png" alt="" />
      </div>
      <div class="job-content">
        <p class="job-title">
          <span class="line"></span>
          <span class="title-text">中电兴发2021校园招聘</span>
          <span class="line"></span>
        </p>
        <div class="job-info">
          <p>校招时间：2020年11月01日-2021年11月28日</p>
          <p>职位类别：行政类、研发类、管理类</p>
          <p>岗位名称：应用软件前端开发工程师、JAVA开发工程师、C++、Python</p>
          <p>工作地点：西安、成都、芜湖、北京</p>
        </div>
        <div class="tabs">
          <p>
            <span
              :class="['btn', active ? '' : 'active']"
              @click="handleFullTime"
              >找全职</span
            >
            <span
              :class="['btn', active1 ? '' : 'active']"
              @click="handlePartTime"
              >找实习</span
            >
          </p>
          <div class="search-containner">
            <input
              placeholder="关键字搜索"
              @keyup.enter="handleSearch"
              v-model="search"
              class="search-content"
            />
            <el-dropdown class="list" trigger="click" @command="handleCommand">
              <span class="el-dropdown-link drop drop1">
                <span class="text1">{{ job }}</span><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                style="text-align:center;"
              >
                <el-dropdown-item
                  :command="item.id"
                  v-for="(item, index) in post"
                  :key="index"
                  style="max-width:130px; overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
                  ><a :title="item.name">{{ item.name }}</a></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown
              class="list list1"
              trigger="click"
              @command="handleCommand1"
            >
              <span class="el-dropdown-link drop drop1">
                <span class="text1">{{ address }}</span
                ><i class="el-icon-arrow-down el-icon--right icon"></i>
              </span>
              <el-dropdown-menu
                slot="dropdown"
                style="text-align:center;padding: 0 5px;"
              >
                <el-dropdown-item
                  :command="item.id"
                  v-for="(item, index) in addressList"
                  :key="index"
                  style="max-width:130px; overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
                  ><a :title="item.name">{{ item.name }}</a></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
            <div class="search-class" @click.stop="handleSearch">搜索</div>
          </div>
          <div class="society-content">
            <div class="joblist">
              <div v-if="jobList.length > 0">
                <div
                  class="jod-item"
                  v-for="(item, index) in jobList"
                  :key="index"
                  @click="handleItem(item.id)"
                >
                  <div class="left">
                    <p class="name">
                      {{ item.name }}
                      <img
                        v-if="item.hotFlag"
                        src="../../assets/join/hot.png"
                        alt=""
                      />
                    </p>
                    <p class="address">
                      工作地点：{{ item.workCity }}
                      <span class="ask"
                        >在岗要求：<span class="border" v-if="type === 2">{{ item.workExperienceName }}</span><span  v-if="type === 3" class="border"
                          >{{ item.leastTimes }}天 / 周</span
                        ><span class="border" v-if="type === 3"
                          >{{ item.leastReqire }}个月</span
                        ><span>{{ item.educationName }}</span></span
                      >
                    </p>
                    <p class="part">所属部门：{{ item.positionName }}</p>
                  </div>
                  <div class="right">
                    <p>{{ item.publishTimeStr }}</p>
                    <p class="money">{{ item.typeName }}</p>
                  </div>
                </div>
              </div>
              <div class="nodata" v-else>
                <img src="../../assets/images/nodata.png" alt="" />
                <p class="nodatatext">暂无数据</p>
              </div>
            </div>
          </div>
          <div class="page" v-if="jobList.length > 0">
            <el-pagination
              :current-page="page"
              @current-change="handlePage"
              background
              layout="prev, pager, next"
              :total="totalCount"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
    <job-footer></job-footer>
  </div>
</template>

<script>
import jobHeader from '../../components/jobHeader'
import jobFooter from '../../components/jobFooter'
import serve from '@/api/society.js'
export default {
  name: '',
  components: { jobHeader, jobFooter },
  data () {
    return {
      search: '',
      job: '全部岗位',
      address: '全部',
      active: true,
      active1: false,
      post: [],
      addressList: [],
      jobList: [],
      page: 1,
      totalCount: 0,
      type: 2,
      id: '',
      intention: ''
    }
  },
  created () {
    if (this.$route.query.type) {
      if (this.$route.query.type === '找全职') {
        this.type = 2
        this.active = true
        this.active1 = false
        this.getList()
      } else if (this.$route.query.type === '找实习') {
        console.log(222)
        this.type = 3
        this.active = false
        this.active1 = true
        this.getList()
      }
    }
  },
  mounted () {
    this.getList()
    this.getCityList()
    this.getJobtypeList()
  },
  beforeDestroy () {
    if (sessionStorage.getItem('detailType') && sessionStorage.getItem('detailID')) {
      sessionStorage.clear('detailID')
      sessionStorage.clear('detailType')
    }
  },
  methods: {
    // 获取列表
    getList () {
      serve
        .list(this.search, this.page, this.type, this.intention, this.id)
        .then(res => {
          if (res.data.code === 200) {
            this.jobList = res.data.data.rows
            this.totalCount = res.data.data.totalCount
          } else {
            this.$message.error(res.data.msg)
          }
        })
    },
    // 获取城市
    getCityList () {
      serve.cityList().then(res => {
        if (res.data.code === 200) {
          this.addressList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    // 获取岗位
    getJobtypeList () {
      serve.jobNameList(this.type).then(res => {
        if (res.data.code === 200) {
          this.post = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    // 全职
    handleFullTime () {
      this.type = 2
      this.active = true
      this.active1 = false
      this.search = ''
      this.getJobtypeList()
      this.getList()
    },
    // 兼职
    handlePartTime () {
      this.type = 3
      this.active1 = true
      this.active = false
      this.search = ''
      this.getJobtypeList()
      this.getList()
    },
    // 搜索
    handleSearch () {
      this.getList()
    },
    // 岗位
    handleCommand (value) {
      this.post.map((item, index) => {
        if (value === item.id) {
          this.job = this.post[index].name
        }
      })
      if (value == null) {
        this.id = ''
      } else {
        this.id = value
      }
    },
    // 地址
    handleCommand1 (value) {
      this.addressList.map((item, index) => {
        if (value === item.id) {
          this.address = this.addressList[index].name
        }
      })
      if (value == null) {
        this.intention = ''
      } else {
        this.intention = value
      }
    },
    // 分页
    handlePage (page) {
      this.page = page
      this.getList()
    },
    // 查看详情
    handleItem (id) {
      this.$router.push({
        path: '/campusRecruitDetail',
        query: {
          id: id,
          type: this.type
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
::v-deep .el-pagination.is-background .el-pager li {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
}
::v-deep .el-pagination.is-background .btn-prev {
  margin-top: 5px;
}
::v-deep .el-pagination.is-background .btn-next {
  margin-top: 5px;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #4281ff;
}
.job-content-wrap {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-family: msyh;
  color: #ffffff;
  background-color: #f5f5f5;
  .job-bg {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .job-content {
    width: 1200px;
    margin: auto;
    margin-top: -530px;
    padding-bottom: 30px;
    .job-title {
      .line {
        display: inline-block;
        width: 57px;
        border: 2px solid #ffffff;
        margin-bottom: 5px;
      }
      .title-text {
        font-size: 23px;
        margin: 0 15px;
      }
    }
    .job-info {
      margin: 38px 0 0 40px;
      font-size: 18px;
      line-height: 30px;
      text-overflow: ellipsis;
    }
    .tabs {
      margin-top: 90px;
      .btn {
        display: inline-block;
        width: 104px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #4281ff;
        text-align: center;
        background-color: #fff;
        cursor: pointer;
        &:first-child {
          border-radius: 5px 0 0 0;
        }
        &:last-child {
          border-radius: 0 5px 0 0;
        }
      }
      .active {
        background-color: #4281ff;
        color: #fff;
      }
      .search-containner {
        display: flex;
        .drop {
          cursor: pointer;
        }
        .drop1 {
          display: inline-block;
          overflow: hidden;
          .text1 {
            display: inline-block;
            max-width: 130px;
            vertical-align: middle;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .search-content {
          width: 100%;
          flex: 6;
          height: 54px;
          padding-left: 24px;
          border: none;
          // border-radius: 0 5px;
          outline: none;
        }
        .search-class {
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
          overflow: hidden;
          height: 31px;
          padding: 11.5px 10px;
          line-height: 30px;
          background-color: #fff;
        }
        .list1 {
          padding-right: 20px;
        }
      }
    }
    .society-content {
      width: 100%;
      height: 100%;
      display: inline-block;
      background-color: #fff;
      border: 1px solid #dcdcdc;
      margin-top: 30px;
      .joblist {
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
        .jod-item {
          padding: 30px 40px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #f2f2f2;
          font-size: 14px;
          color: #666666;
          cursor: pointer;
          &:last-child {
            border-bottom: none;
          }
          .left {
            .name {
              color: #000000;
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 14px;
              img {
                width: 50px;
                height: 24px;
                margin-left: 15px;
                vertical-align: middle;
              }
            }
            .address {
              margin-bottom: 8px;
              .ask {
                margin-left: 50px;
              }
              .border {
                border-right: 1px solid #cccccc;
                padding-right: 15px;
                margin-right: 10px;
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: right;
            .money {
              font-size: 22px;
              color: #f2332e;
              font-weight: bold;
              text-align: right;
            }
          }
        }
      }
    }
    .page {
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }
  }
}
.job-content-wrap::-webkit-scrollbar {
  display: none;
}
</style>
