<template>
  <div class="container">
   <div class="main main-width">
    <div class="footer-top">
      <!-- <div class="img">
        <img src="../assets/about/pic-code.png" alt="">
        <div>扫一扫二维码关注</div>
      </div>
      <div class="border"></div> -->
      <div class="link">
        <ul
          class="link-item"
          v-for="(item, index) in navList"
          :key="item.title"
        >
          <p>{{ item.title }}</p>
          <li
            class="item"
            v-for="item1 in item.child"
            :key="item1.name"
            @click="handleitem(item1.name, index)"
          >
            {{ item1.name }}
          </li>
        </ul>
      </div>
    </div>
   </div>
   <div class="footer-bottom">
     <div class="address">
        地址：北京市海淀区中关村环保科技示范园地锦路7号院5号楼
      </div>
      <div class="copy">
        <span
          >Copyright © {{ new Date().getFullYear() }} 北京中电兴发科技有限公司
          版权所有</span
        ><span
          ><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
            >京ICP备07503702号-1</a
          ></span
        ><span
          ><a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802023047"
            target="_blank"
            >京公网安备 11010802023047号</a
          ><span style="margin-left:15px;">《增值电信业务经营许可证》编号：B2-20220904</span></span
        >
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      navList: [
        {
          title: '招聘岗位',
          child: [
            {
              name: '找全职',
              path: '',
              level: 'one-1'
            },
            {
              name: '找实习',
              path: '',
              level: 'one-2'
            }
          ]
        },
        {
          title: '招聘须知',
          child: [
            {
              name: '招聘流程',
              path: '',
              level: 'one-1'
            },
            {
              name: '招聘行程',
              path: '',
              level: 'one-2'
            },
            {
              name: '联系我们',
              path: '',
              level: 'one-3'
            }
          ]
        },
        {
          title: '成长与发展',
          child: [
            {
              name: '公司概况',
              path: '',
              level: 'one-1'
            },
            {
              name: '薪酬福利',
              path: '',
              level: 'one-2'
            },
            {
              name: '培训发展',
              path: '',
              level: 'one-3'
            },
            {
              name: '风采展示',
              path: '',
              level: 'one-4'
            }
          ]
        },
        {
          title: '常见问题',
          child: [
            {
              name: '热门问题',
              path: '',
              level: 'one-1'
            },
            {
              name: '投递简历',
              path: '',
              level: 'one-2'
            },
            {
              name: '福利待遇',
              path: '',
              level: 'one-3'
            }
          ]
        }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleitem (name, index) {
      console.log(name, index)
      switch (name) {
        case '找全职':
          this.$router.push({ path: '/campusRecruitment', query: { type: '找全职' } })
          break
        case '找实习':
          this.$router.push({ path: '/campusRecruitment', query: { type: '找实习' } })
          break
        case '招聘流程':
          this.$router.push({ path: '/recruitmentNotice' })
          break
        case '招聘行程':
          this.$router.push({ path: '/recruitmentNotice' })
          break
        case '联系我们':
          this.$router.push({ path: '/recruitmentNotice' })
          break
        case '公司概况':
          this.$router.push({ path: '/growthAndDev', query: { type: '公司概况' } })
          break
        case '薪酬福利':
          this.$router.push({ path: '/growthAndDev', query: { type: '薪酬福利' } })
          break
        case '培训发展':
          this.$router.push({ path: '/growthAndDev', query: { type: '培训发展' } })
          break
        case '风采展示':
          this.$router.push({ path: '/growthAndDev', query: { type: '风采展示' } })
          break
        case '热门问题':
          this.$router.push({ path: '/problem', query: { type: '热门问题' } })
          break
        case '投递简历':
          this.$router.push({ path: '/problem', query: { type: '投递简历' } })
          break
        case '福利待遇':
          this.$router.push({ path: '/problem', query: { type: '福利待遇' } })
          break
      }
      document.documentElement.scrollTop = 0
      window.pageYOffset = 0
      document.body.scrollTop = 0
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  box-sizing: border-box;
  width: 100%;
  background: #1f2532;
  .main {
    height: 268px;
    .footer-top {
      display: flex;
      justify-content: start;
      height: 100%;
      .img {
        margin: auto 0;
        width: 134px;
        img {
          width: 134px;
          height: 134px;
        }
        div {
          font-size: 16px;
          color: #ffffff;
          line-height: 22px;
          margin-top: 12px;
        }
      }
      .border {
        width: 1px;
        height: 157px;
        opacity: 0.2;
        background: linear-gradient(180deg,rgba(255,255,255,0.00), #ffffff 48%, rgba(255,255,255,0.00));
        margin: auto 194px auto 150px;
      }
      .link {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .link-item {
          margin-top: 6%;
          p {
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
            margin-bottom: 15px;
          }
          .item {
            font-size: 14px;
            color: #ffffff;
            line-height: 40px;
            text-align: right;
            list-style: none;
            opacity: 0.85;
            cursor: pointer;
          }
        }
      }
    }
  }
  .footer-bottom {
    opacity: 0.6;
    border-top: 1px solid #4f4f4f;
    margin-top: 60px;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    .address {
      line-height: 16px;
      margin: 30px 0 24px 0;
    }
    .copy {
      font-size: 16px;
      color: #ffffff;
      line-height: 14px;
      padding-bottom: 45px;
      span {
        margin-right: 21px;
        cursor: pointer;
        color: #ffffff;
        a {
          text-decoration: none;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
