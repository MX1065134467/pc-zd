<template>
  <div>
    <Header></Header>
    <div class="banner-wrap">
      <img src="../../assets/join/banner.png" alt="" />
    </div>
    <div class="society-warp">
      <div class="search-containner">
        <input
          placeholder="请输入岗位名称"
          @keyup.enter="handleSearch"
          v-model="search"
          class="search-content"
        />
        <el-dropdown class="list" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link drop">
            <span class="text1">{{ job }}</span
            ><i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="text-align: center">
            <el-dropdown-item
              v-for="item in jobTypeList"
              :key="item.id"
              :command="item.id"
              style="
                max-width: 130px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
              ><a :title="item.name">{{ item.name }}</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown
          class="list list1"
          trigger="click"
          @command="handleCommand1"
        >
          <span class="el-dropdown-link drop">
            <span class="text1">{{ city }}</span
            ><i class="el-icon-arrow-down el-icon--right icon"></i>
          </span>
          <el-dropdown-menu
            slot="dropdown"
            style="text-align: center; padding: 0 5px;"
          >
            <el-dropdown-item
              v-for="item in cityList"
              :key="item.id"
              :command="item.id"
              style="
                max-width: 130px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              "
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
                    >在岗要求：<span class="border">{{
                      item.workExperienceName
                    }}</span
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
</template>

<script>
import Header from '@/components/header'
import serve from '@/api/society.js'
export default {
  name: 'Society',
  components: { Header },
  data () {
    return {
      search: '',
      jobTypeList: [],
      cityList: [],
      jobList: [],
      job: '全部岗位',
      city: '全部',
      page: 1,
      totalCount: 0,
      id: '',
      intention: ''
    }
  },
  mounted () {
    this.getList()
    this.getCityList()
    this.getJobtypeList()
  },
  methods: {
    // 获取列表
    getList () {
      serve
        .list(this.search, this.page, 1, this.intention, this.id)
        .then((res) => {
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
      serve.cityList().then((res) => {
        if (res.data.code === 200) {
          this.cityList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    // 获取岗位
    getJobtypeList () {
      serve.jobNameList(1).then((res) => {
        if (res.data.code === 200) {
          this.jobTypeList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    handleSearch () {
      this.getList()
    },
    handleCommand (value) {
      this.jobTypeList.map((item, index) => {
        if (value === item.id) {
          this.job = this.jobTypeList[index].name
        }
      })
      if (value == null) {
        this.id = ''
      } else {
        this.id = value
      }
    },
    handleCommand1 (value) {
      this.cityList.map((item, index) => {
        if (value === item.id) {
          this.city = this.cityList[index].name
        }
      })
      if (value == null) {
        this.intention = ''
      } else {
        this.intention = value
      }
    },
    handleItem (id) {
      this.$router.push({
        path: '/societyDetail',
        query: {
          id: id
        }
      })
    },
    handlePage (page) {
      this.page = page
      this.getList()
    },
    handleLink () {
      return false
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
  background-color: #c30d23;
}
.el-dropdown-link {
  cursor: pointer;
}
.drop {
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
.society-warp {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border: 1px solid transparent;
  font-family: msyh;
  .search-containner {
    width: 1200px;
    margin: 30px auto;
    display: flex;
    // position: relative;
    .search-content {
      flex: 6;
      width: 97.9%;
      height: 54px;
      padding-left: 24px;
      border: 1px solid #cccccc;
      border-right: none;
      outline: transparent;
    }
    .search-class {
      width: 141px;
      height: 54px;
      line-height: 54px;
      padding: 1px 0;
      text-align: center;
      color: #fff;
      font-size: 16px;
      background-color: #c30d23;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
    }
    .choose {
      display: flex;
      width: 115px;
      font-size: 14px;
      color: #000000;
      position: absolute;
      top: 15px;
      right: 299px;
      .text {
        display: inline-block;
        width: 100px;
      }
      img {
        width: 10px;
        height: 10px;
        padding-top: 8px;
        vertical-align: middle;
      }
    }
    .choose1 {
      position: absolute;
      top: 15px;
      right: 150px;
    }
    .list {
      height: 31px;
      padding: 11.5px 10px;
      line-height: 30px;
      background-color: #fff;
      border: 1px solid #cccccc;
      border-left: none;
      border-right: none;
    }
    .list1 {
      padding-right: 20px;
    }
  }
  .society-content {
    width: 1200px;
    height: 100%;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    margin: auto;
    margin-bottom: 50px;
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
    margin: 40px auto 40px auto;
  }
  .drap_name {
    text-decoration: none;
  }
}
</style>
