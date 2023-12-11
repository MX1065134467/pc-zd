<template>
  <div class="footer">
    <div class="main">
      <div class="top">
        <div class="top-left">
          <div class="link">
            <div class="link-top">
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
            <div class="link-bottom">
              <div>友情链接</div>
              <div class="friendlink">
                <a href="http://www.ah-xinlong.com/" target="_blank"
                  >安徽鑫龙电器股份有限公司</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="top-right">
          <div class="code">
            <img class="logo" src="../assets/images/logo1.png" alt="" />
            <img class="code-img" src="../assets/images/code.png" alt="" />
            <p class="code-text">扫一扫二维码关注</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
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
  data () {
    return {
      navList: [
        {
          title: '技术&产品',
          child: [
            {
              name: '研发机构',
              path: '',
              level: 'one-1'
            },
            {
              name: '智能边缘端',
              path: '',
              level: 'one-2'
            },
            {
              name: '网络传输端',
              path: '',
              level: 'one-3'
            },
            {
              name: '数字云底座',
              path: '',
              level: 'one-4'
            },
            {
              name: '大数据应用',
              path: '',
              level: 'one-5'
            }
          ]
        },
        {
          title: '典型案例',
          child: [
            {
              name: '智慧城市典型案例',
              path: '',
              level: 'one-1'
            },
            {
              name: '智慧行业典型案例',
              path: '',
              level: 'one-2'
            },
            {
              name: '应用软件典型案例',
              path: '',
              level: 'one-3'
            }
          ]
        },
        {
          title: '关于我们',
          child: [
            {
              name: '公司介绍',
              path: '',
              level: 'one-1'
            },
            {
              name: '视频中心',
              path: '',
              level: 'one-4'
            },
            {
              name: '资质荣誉',
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
          title: '加入我们',
          child: [
            {
              name: '社会招聘',
              path: ''
            },
            {
              name: '校园招聘',
              path: ''
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleitem (name, index) {
      sessionStorage.clear()
      const url = window.location.href.split('#')[1]
      if (index === 0) {
        if (url !== '/product') {
          this.$router.push('/product')
        } else if (url === '/product') {
          this.$router.push({ path: '/product', query: { type: 888 } }) // 解决当前页跳转当前页，页脚跳转研发机构问题，属于偏方，勿删
        }
      } else if (index === 1) {
        if (url !== '/case') {
          this.$router.push('/case')
        }
      } else if (index === 2) {
        if (url !== '/about') {
          this.$router.push('/about')
        }
      } else if (index === 3) {
        if (url !== '/join') {
          this.$router.push('/join')
        }
      }
      if (name === '研发机构') {
        sessionStorage.setItem('level', 'one-1')
        sessionStorage.setItem('parentLev', ['one-1'])
        this.$store.commit('tabsCompontentsLevel', 'one-1')
        sessionStorage.setItem('name', name)
      } else if (name === '智能边缘端') {
        sessionStorage.setItem('level', 'one-2')
        sessionStorage.setItem('parentLev', ['one-2', 'two-1'])
        this.$store.commit('tabsCompontentsLevel', 'one-2')
        sessionStorage.setItem('name', name)
      } else if (name === '网络传输端') {
        sessionStorage.setItem('level', 'one-3')
        sessionStorage.setItem('parentLev', ['one-3'])
        this.$store.commit('tabsCompontentsLevel', 'one-3')
        sessionStorage.setItem('name', name)
      } else if (name === '数字云底座') {
        sessionStorage.setItem('level', 'one-4')
        sessionStorage.setItem('parentLev', ['one-4', 'two-1', 'three-1'])
        this.$store.commit('tabsCompontentsLevel', 'one-4')
        sessionStorage.setItem('name', name)
      } else if (name === '大数据应用') {
        sessionStorage.setItem('level', 'one-5')
        sessionStorage.setItem('parentLev', ['one-5'])
        this.$store.commit('tabsCompontentsLevel', 'one-5')
        sessionStorage.setItem('name', name)
      } else if (name === '智慧城市典型案例') {
        sessionStorage.setItem('level', 'one-1')
        sessionStorage.setItem('parentLev', ['one-1', 'two-1'])
        this.$store.commit('tabsCompontentsLevel', 'one-1')
        sessionStorage.setItem('name', name)
      } else if (name === '智慧行业典型案例') {
        sessionStorage.setItem('level', 'one-2')
        sessionStorage.setItem('parentLev', ['one-2'])
        this.$store.commit('tabsCompontentsLevel', 'one-2')
        sessionStorage.setItem('name', name)
      } else if (name === '应用软件典型案例') {
        sessionStorage.setItem('level', 'one-3')
        sessionStorage.setItem('parentLev', ['one-3'])
        this.$store.commit('tabsCompontentsLevel', 'one-3')
        sessionStorage.setItem('name', name)
      } else if (name === '公司介绍') {
        sessionStorage.setItem('level', 'one-1')
        sessionStorage.setItem('parentLev', ['one-1'])
        this.$store.commit('tabsCompontentsLevel', 'one-1')
        sessionStorage.setItem('name', name)
      } else if (name === '视频中心') {
        sessionStorage.setItem('level', 'one-4')
        sessionStorage.setItem('parentLev', ['one-4'])
        this.$store.commit('tabsCompontentsLevel', 'one-4')
        sessionStorage.setItem('name', name)
      } else if (name === '资质荣誉') {
        sessionStorage.setItem('level', 'one-2')
        sessionStorage.setItem('parentLev', ['one-2'])
        this.$store.commit('tabsCompontentsLevel', 'one-2')
        sessionStorage.setItem('name', name)
      } else if (name === '联系我们') {
        sessionStorage.setItem('level', 'one-3')
        sessionStorage.setItem('parentLev', ['one-3'])
        this.$store.commit('tabsCompontentsLevel', 'one-3')
        sessionStorage.setItem('name', name)
      } else if (name === '社会招聘') {
        this.$router.push('/society')
      } else if (name === '校园招聘') {
        this.$router.push('/campusRecruitment')
      }
      document.documentElement.scrollTop = 0
      window.pageYOffset = 0
      document.body.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  // height: 465px;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  background-color: #272727;
  border-top: 5px solid #fc1f3a;
  .main {
    width: 100%;
    height: 360px;
    // border-bottom: 1px solid #4f4f4f;
    .top {
      width: 1200px;
      height: 338px;
      display: flex;
      margin: auto;
      .top-left {
        flex: 5.8;
        height: 100%;
        border: 1px solid #272727;
        .link {
          border-right: 1px solid #4f4f4f;
          // height: 237px;
          color: #fff;
          margin-top: 50px;
          text-align: left;
          display: flex;
          flex-direction: column;
          .link-top {
            // flex: 3;
            display: flex;
            .link-item {
              flex: 1;
              p {
                font-size: 16px;
                font-weight: 600;
                margin-bottom: 40px;
              }
              .item {
                font-size: 16px;
                list-style: none;
                opacity: 0.6;
                margin-bottom: 26px;
                cursor: pointer;
              }
            }
          }
          .link-bottom {
            font-size: 16px;
            display: flex;
            justify-content: start;
            .friendlink {
              opacity: 0.6;
              padding-left: 20px;
              cursor: pointer;
              a {
                text-decoration: none;
                color: #ffffff;
              }
            }
          }
        }
      }
      .top-right {
        flex: 1.58;
        flex-shrink: 1;
        .code {
          width: 134px;
          height: 240px;
          margin: 50px 0 0 104px;
          color: #fff;
          .logo {
            width: 133px;
            height: 43px;
          }
          .code-img {
            width: 134px;
            height: 134px;
            margin-top: 30px;
          }
          .code-text {
            font-size: 16px;
            opacity: 0.6;
          }
        }
      }
    }
  }
  .bottom {
    opacity: 0.6;
    border-top: 1px solid #4f4f4f;
    margin-top: 60px;
    font-size: 16px;
    color: #ffffff;
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
