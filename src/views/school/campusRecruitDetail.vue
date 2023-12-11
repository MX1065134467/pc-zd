<template>
  <div class="all">
    <job-header></job-header>
    <div class="breadcrumb">
      <div class="main-width">
        <Breadcrumb :levelList="list"></Breadcrumb>
      </div>
    </div>
    <div class="detail">
      <div class="bgcontent">
        <div class="societytitle-wrap">
          <p class="title-wrap">
            {{ resData.name }}<span>{{ resData.typeName }}</span>
          </p>
          <p>工作地点：{{ resData.workCity }}</p>
          <p class="kong">
            在岗要求：<span class="border" v-if="type === 2">{{ resData.workExperienceName }}</span><span class="border" v-if="type === 3">{{ resData.leastTimes }}天 / 周</span
            ><span class="border" v-if="type === 3"
              >{{ resData.leastReqire }}个月</span
            ><span>{{ resData.educationName }}</span>
          </p>
          <p class="kong btn-wrap">
            所属部门：{{ resData.positionName }}
            <button class="btn" @click="jump">投递简历</button>
          </p>
        </div>
      </div>
      <div class="content-wrap">
        <div class="soft-title">
          <span class="bgtext">JOBDESCRIPTION</span>
          <span class="softtext">职位描述</span>
        </div>
        <p class="line"></p>
        <div class="description">
          <el-input
            type="textarea"
            v-model="resData.positionDesc"
            :autosize="true"
            readonly=""
          ></el-input>
        </div>
        <div class="soft-title">
          <span class="bgtext">WORKPLACE</span>
          <span class="softtext">工作地点</span>
        </div>
        <p class="line"></p>
        <div v-if="resData !== ''">
        <baidu-map
          class="bm-view"
          :center="location"
          :zoom="18"
          :scroll-wheel-zoom="true"
        >
          <bm-marker
            :position="location"
            :dragging="true"
            animation="BMAP_ANIMATION_BOUNCE"
          />
        </baidu-map>
        </div>
        <div class="location">
          <div class="img"><img src="../../assets/join/location.png" alt="" /></div>
          <div class="address">办公地址：{{ resData.workAddress }}</div>
        </div>
      </div>
    </div>
    <job-footer></job-footer>
  </div>
</template>

<script>
import jobHeader from '../../components/jobHeader'
import jobFooter from '../../components/jobFooter'
import Breadcrumb from '../../components/Breadcrumb.vue'
import serve from '@/api/society.js'

export default {
  name: 'campusRecruitDetail',
  components: { jobHeader, Breadcrumb, jobFooter },
  data () {
    return {
      // list: ['招聘岗位', '招聘详情'],
      list: [
        {
          path: '/campusRecruitment',
          name: '招聘岗位'
        },
        {
          path: '/campusRecruitDetail',
          name: '招聘详情'
        }
      ],
      resData: '',
      type: '',
      location: {
        lat: 40.06492,
        lng: 116.181732
      }
    }
  },
  created () {},
  mounted () {
    // this.id = +this.$route.query.id
    // this.type = +this.$route.query.type
    // this.getData()
    if (sessionStorage.getItem('detailType') && sessionStorage.getItem('detailID')) {
      this.id = sessionStorage.getItem('detailID') * 1
      this.type = sessionStorage.getItem('detailType') * 1
      console.log(this.id, this.type, 'ff')
    } else {
      this.id = +this.$route.query.id
      this.type = +this.$route.query.type
    }
    this.getData()
    document.documentElement.scrollTop = 0
    window.pageYOffset = 0
    document.body.scrollTop = 0
  },
  methods: {
    getData () {
      serve.getDetail(this.id, this.type).then((res) => {
        if (res.data.code === 200) {
          this.resData = res.data.data
          this.location.lng = this.resData.workLongitude
          this.location.lat = this.resData.workLatitude
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    jump () {
      this.$router.push({
        path: '/recruitmentDetails',
        query: {
          id: this.id,
          type: this.type,
          name: this.resData.name
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .BMap_Marker {
  div {
    width: 40px !important;
    height: 25px !important;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
::v-deep .el-button {
  width: 130px;
}

::v-deep .el-textarea__inner {
  // outline: none;
  border: none;
  resize: none;
  overflow-y: hidden;
  cursor: default;
  width: 60%;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
  padding-left: 0;
}
.all {
  font-family: msyh;
  .detail {
    width: 100%;
    height: 100%;
    .bgcontent {
      width: 100%;
      height: 260px;
      background-image: url("../../assets/school/bg.png");
      background-size: contain;
      color: #285584;
      font-size: 14px;
      .societytitle-wrap {
        width: 1200px;
        height: 100%;
        margin: auto;
        border: 1px solid transparent;
        .title-wrap {
          color: #1f2532;
          font-size: 34px;
          font-weight: bold;
          margin: 40px 0 24px 0;
          span {
            margin-left: 22px;
            color: #e6382e;
            font-size: 40px;
          }
        }
        .btn-wrap {
          position: relative;
          .btn {
            padding: 12px 64px;
            background-color: #4281ff;
            color: #ffffff;
            font-size: 18px;
            border: none;
            cursor: pointer;
            position: absolute;
            right: 0;
            bottom: 10px;
            border-radius: 30px;
          }
        }
        .kong {
          margin-top: 11px;
        }
        .border {
          border-right: 1px solid #cccccc;
          padding-right: 15px;
          margin-right: 15px;
        }
      }
    }
    .content-wrap {
      width: 1200px;
      margin: 60px auto 128px auto;
      .soft-title {
        position: relative;
        .bgtext {
          font-family: Impact;
          opacity: 0.05;
          font-size: 20px;
        }
        .softtext {
          font-size: 16px;
          position: absolute;
          left: 0px;
          top: 9px;
          font-weight: bold;
        }
      }
      .line {
        margin-top: 15px;
        width: 20px;
        height: 3px;
        background-color: #4281ff;
        margin-bottom: 22px;
      }
      .description {
        color: #000000;
        font-size: 14px;
        line-height: 30px;
        margin-bottom: 20px;
      }
      .bm-view {
        width: 100%;
        height: 300px;
      }
      .location {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 1px;
        .img {
          width: 12px;
          height: 14px;
          margin-right: 8px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .address {
          font-size: 14px;
        }
      }
    }
  }
  .diatitle {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
  }
}
</style>
