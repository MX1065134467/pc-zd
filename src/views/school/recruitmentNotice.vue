<template>
  <div>
      <job-header></job-header>
      <div class="notice-img">
        <img src="../../assets/school/notice.png" alt="" />
      </div>
      <div class="notice-content">
        <div class="soft-title">
           <span class="bgtext">RECRUITMENT PROCESS</span>
           <span class="softtext">招聘流程</span>
        </div>
        <div class="process">
          <div class="process-item">
              <div class="item">
                <div class="first"><img src="../../assets/school/icon-net.png" alt=""></div>
                <div class="seconed"><img src="../../assets/school/icon-arrow.png" alt=""></div>
              </div>
              <p class="notice-text">网络投递</p>
          </div>
          <div class="process-item">
              <div class="item">
                <div class="seconed1"><img src="../../assets/school/icon-text.png" alt=""></div>
                <div class="seconed"><img src="../../assets/school/icon-arrow.png" alt=""></div>
              </div>
              <p class="notice-text textleft">笔试</p>
          </div>
          <div class="process-item">
              <div class="item">
                <div class="third"><img src="../../assets/school/icon-face.png" alt=""></div>
                <div class="seconed"><img src="../../assets/school/icon-arrow.png" alt=""></div>
              </div>
              <p class="notice-text textleft">面试</p>
          </div>
          <div class="process-item">
              <div class="item">
                <div class="fourth"><img src="../../assets/school/icon-use.png" alt=""></div>
                <div class="seconed"><img src="../../assets/school/icon-arrow.png" alt=""></div>
              </div>
              <p class="notice-text textleft">录用</p>
          </div>
          <div class="process-item">
              <div class="item">
                <div class="five"><img src="../../assets/school/icon-teach.png" alt=""></div>
                <div class="seconed"><img src="../../assets/school/icon-arrow.png" alt=""></div>
              </div>
              <p class="notice-text textleft">培训</p>
          </div>
          <div class="process-item">
              <div class="item">
                <div class="five"><img src="../../assets/school/icon-work.png" alt=""></div>
              </div>
              <p class="notice-text textleft">入职</p>
          </div>
        </div>
        <div class="soft-title">
           <span class="bgtext">RECRUITMENT TRIP</span>
           <span class="softtext">招聘行程</span>
        </div>
        <div class="tabledata">
             <el-table :data="tableData" stripe style="width: 100%;" :header-cell-style="{background:'#F5F7F9',color:'#333333'}">
                <el-table-column
                prop="lineDateStr"
                label="日期"
                align="center"
                width="180">
                </el-table-column>
                <el-table-column
                prop="time"
                label="时间"
                align="center"
                width="180">
                </el-table-column>
                <el-table-column
                prop="school"
                align="center"
                label="学校">
                </el-table-column>
                <el-table-column
                prop="address"
                align="center"
                label="地点">
                </el-table-column>
                <el-table-column
                prop="question"
                align="center"
                label="形式">
                </el-table-column>
            </el-table>
        </div>
      </div>
      <div class="notice-link">
          <div class="link-wrap">
            <div class="soft-title">
                <span class="bgtext">CONTACT US</span>
                <span class="softtext">联系我们</span>
            </div>
            <div class="info">
              <p class="phone-wrap">
                <img src="../../assets/school/phone.png" alt="" class="phone">
                <span>联系方式：{{linkman}}</span>
              </p>
              <p>
                <img src="../../assets/school/email.png" alt="" class="email">
                <span>邮箱：{{address}}</span>
              </p>
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
  name: 'recruitmentNotice',
  components: { jobHeader, jobFooter },
  data () {
    return {
      tableData: [],
      linkman: '',
      address: ''
    }
  },
  created () {
    this.recruitmentProcessList()
    this.contactUsList()
  },
  mounted () {},
  methods: {
    recruitmentProcessList () {
      serve.recruitmentProcess().then(res => {
        if (res.data.code === 200) {
          this.tableData = res.data.data
        }
      })
    },
    contactUsList () {
      serve.contactUs().then(res => {
        if (res.data.code === 200) {
          this.address = res.data.data.address
          this.linkman = res.data.data.linkman
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
    background-color: #F5F7F9;
}
.soft-title {
    position: relative;
    text-align: center;
    .bgtext {
    font-family: Impact;
    opacity: 0.05;
    font-size: 40px;
    }
    .softtext {
    font-size: 24px;
    position: absolute;
    left: 450px;
    bottom: 0px;
    font-weight: bold;
    width: 300px;
    }
}
.notice-img {
  width: 100%;
  height: 100%;
  img {
      width: 100%;
      height: 100%;
  }
}
.notice-content {
    width: 1200px;
    height: 100%;
    padding-top: 70px;
    // border: 1px solid red;
    margin: auto;
    font-family: msyh;
    font-size: 14px;
    .process {
        display: flex;
        margin-bottom: 190px;
        margin-top: 83px;
        .process-item {
            .item {
              display: flex;
              .first {
                  width: 55px;
                  height: 51px;
              }
              .seconed1 {
                  width: 60px;
                  height: 51px;
              }
              .third {
                  width: 63px;
                  height: 51px;
              }
              .fourth {
                  width: 55px;
                  height: 51px;
              }
              .five {
                   width: 55px;
                   height: 51px;
              }
              .seconed {
                  width: 50px;
                  height: 18px;
                  margin: 20px 60px 0 60px;
              }
              img {
                  width: 100%;
                  height: 100%;
              }
            }
            .notice-text {
                margin-top: 21px;
                font-size: 16px;
            }
            .textleft {
                margin-left: 10px;
            }
        }
    }
    .tabledata {
        margin-bottom: 80px;
        margin-top: 55px;
    }
}
.notice-link {
    width: 100%;
    height: 100%;
    background-color: #F5F7F9;
    .link-wrap {
        width: 1200px;
        height: 100%;
        margin: auto;
        padding-top: 70px;
        text-align: center;
        .info {
            margin-top: 70px;
            padding-bottom: 108px;
            font-size: 16px;
            span {
                margin-left: 8px;
            }
            .phone-wrap {
                margin-bottom: 18px;
              .phone {
                  width: 20px;
                  height: 21px;
                }
            }
          .email {
            width: 20px;
            height: 20px;
          }
          img {
              vertical-align: middle;
          }
        }
    }
}
</style>
