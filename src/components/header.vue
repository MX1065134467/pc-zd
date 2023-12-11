<template>
  <div class="header">
    <div class="main main-width">
      <div class="logo">
        <div class="logo-img" @click="$router.push('/')">
          <img
            src="../assets/images/logo2.png"
            alt="北京中电兴发科技有限公司"
          />
        </div>
      </div>
      <div class="link">
        <ul class="category-list noselect">
          <li
            class="list-item"
            v-for="(item, index) in navList"
            :key="item.name"
          >
            <span
              @click="handleNav(index)"
              :class="flagIndex == index ? 'active' : ''"
              >{{ item.name }}</span
            >
            <div
              class="drop-menu"
              :class="flagIndex == index ? 'activemenu' : ''"
            >
              <p
                v-for="item1 in item.child"
                :key="item1.name"
                @click="handleitem(item1.name, index, item.level)"
              >
                {{ item1.name }}
              </p>
            </div>
          </li>
        </ul>
        <div class="num">
          <!-- <span v-show="$store.state.showSearch" class="num-wrap">
            <span
              :class="{
                'stock-red': num.status === 2,
                'stock-white': num.status === 1,
                'stock-green': num.status === 0
              }"
              >{{ num.current ? num.current : '--' }}&nbsp;&nbsp;</span
            >
            <span
              :class="{
                'stock-red': num.status === 2,
                'stock-white': num.status === 1,
                'stock-green': num.status === 0
              }"
              >{{ num.upAndDown ? num.upAndDown : '--' }}</span
            >
            <span
              :class="{
                'stock-red': num.status === 2,
                'stock-white': num.status === 1,
                'stock-green': num.status === 0
              }"
              >（{{ num.upAndDownRate ? num.upAndDownRate : '--' }}）</span
            >
          </span> -->
          <span @click="handleSearchShow">
            <img class="img" src="../assets/images/search.png"
          /></span>
          <span class="linktext_wrap">
            <img class="img1" src="../../src/assets/images/oa.png" alt="" />
            <a href="https://172.16.205.15/#/login" target="_blank" class="linktext">OA登录</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import serve from '@/api/home.js'
export default {
  data () {
    return {
      flagIndex: 0,
      // num: {
      //   current: '',
      //   upAndDown: '',
      //   upAndDownRate: '',
      //   status: null
      // },
      navList: [
        {
          name: '首页',
          path: '/',
          show: false
        },
        {
          name: '技术&产品',
          path: '/product',
          child: [
            {
              name: '研发机构',
              path: ''
            },
            {
              name: '智能边缘端',
              path: ''
            },
            {
              name: '网络传输端',
              path: ''
            },
            {
              name: '数字云底座',
              path: ''
            },
            {
              name: '大数据应用',
              path: ''
            }
          ],
          show: false
        },
        {
          name: '典型案例',
          path: '/case',
          child: [
            {
              name: '智慧城市典型案例',
              path: ''
            },
            {
              name: '智慧行业典型案例',
              path: ''
            },
            {
              name: '应用软件典型案例',
              path: ''
            }
          ],
          show: false
        },
        {
          name: '关于我们',
          path: '/about',
          child: [
            {
              name: '公司介绍',
              path: ''
            },
            {
              name: '视频中心',
              path: ''
            },
            {
              name: '资质荣誉',
              path: ''
            },
            {
              name: '联系我们',
              path: ''
            }
          ],
          show: false
        },
        {
          name: '加入我们',
          path: '/join',
          show: false
        },
        {
          name: '新闻中心',
          path: '/journalism',
          show: false
        },
        {
          name: '下载',
          path: '/down',
          show: false
        }
      ]
    }
  },
  created () {
    // this.stockData()
  },
  mounted () {
    this.url = window.location.href.split('#')[1]
    const dataurl = window.location.href.split('#')[1].split('?')[0]
    if (this.url === '/') {
      this.flagIndex = 0
    } else if (this.url === '/product') {
      this.flagIndex = 1
    } else if (this.url === '/case') {
      this.flagIndex = 2
    } else if (this.url === '/about') {
      this.flagIndex = 3
    } else if (this.url === '/join') {
      this.flagIndex = 4
    } else if (this.url === '/news') {
      this.flagIndex = null
    } else if (this.url === '/society') {
      this.flagIndex = 4
    } else if (dataurl === '/societyDetail') {
      this.flagIndex = 4
    } else if (dataurl === '/journalism') {
      this.flagIndex = 5
    } else if (dataurl === '/journalismDetail') {
      this.flagIndex = 5
    } else if (dataurl === '/down') {
      this.flagIndex = 6
    }
  },
  methods: {
    handleNav (index) {
      sessionStorage.clear()
      this.flagIndex = index
      const url = window.location.href.split('#')[1]
      if (this.navList[index].path === url) {
        return false
      } else {
        this.$router.push({
          path: this.navList[index].path
        })
      }
      const currentUrl = this.navList[index].path
      console.log(currentUrl, 'currentUrl')
      if (currentUrl === '/') {
        this.$store.commit('tabsCompontentsIndex', null)
      } else if (currentUrl === '/product') {
        sessionStorage.setItem('name', '研发机构')
        sessionStorage.setItem('parentLev', ['one-1'])
      } else if (currentUrl === '/case') {
        sessionStorage.setItem('name', '赫章智慧城市')
        sessionStorage.setItem('parentLev', ['one-1', 'two-1'])
      } else if (currentUrl === '/about') {
        sessionStorage.setItem('name', '公司介绍')
        sessionStorage.setItem('parentLev', ['one-1'])
      } else if (currentUrl === '/') {
        this.$store.commit('tabsCompontentsIndex', null)
      }
      this.$store.commit('tabsCompontentsLevel', 'one-1')
    },
    handleitem (name, index) {
      console.log(name, 'name')
      sessionStorage.clear()
      this.flagIndex = index
      const url = window.location.href.split('#')[1]
      if (index === 0) {
        if (url !== '/') {
          this.$router.push('/product')
        }
      } else if (index === 1) {
        if (url !== '/product') {
          this.$router.push('/product')
        }
      } else if (index === 2) {
        if (url !== '/case') {
          this.$router.push('/case')
        }
      } else if (index === 3) {
        if (url !== '/about') {
          this.$router.push('/about')
        }
      } else if (index === 4) {
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
      } else if (name === '视频中心') {
        sessionStorage.setItem('level', 'one-4')
        sessionStorage.setItem('parentLev', ['one-4'])
        this.$store.commit('tabsCompontentsLevel', 'one-4')
        sessionStorage.setItem('name', name)
      }
    },
    handleSearchShow () {
      const url = window.location.href.split('#')[1]
      if (url === '/news') {
        return false
      } else {
        this.$router.push({ path: '/news' })
      }
    }
    // stockData () {
    //   serve.stock().then((res) => {
    //     if (res.data.code === 200) {
    //       this.num.current = res.data.data.current
    //       this.num.upAndDown = res.data.data.upAndDown
    //       this.num.upAndDownRate = res.data.data.upAndDownRate
    //       this.num.status = Number(res.data.data.status)
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  flex-direction: row;
  box-sizing: border-box;
  background-color: #000000;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .main {
    display: flex;
    justify-content: space-between;
    .logo {
      display: flex;
      justify-content: start;
      .logo-img {
        img {
          width: 210px;
          height: 47px;
          margin-top: 7px;
        }
      }
    }
    .link {
      font-size: 18px;
      display: flex;
      // justify-content: start;
      padding-top: 1px;
      .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Chrome/Safari/Opera */
        -khtml-user-select: none; /* Konqueror */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
        not supported by any browser */
      }
      .category-list {
        margin-right: 40px;
        .list-item {
          list-style: none;
          display: inline-block;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          margin-right: 29px;
          &:last-child {
            margin-right: 0;
          }
          .active {
            border-top: 5px solid #eb232b;
            line-height: 50px;
            color: #eb232b;
            background: -webkit-gradient(
              linear,
              0% 0%,
              0% 100%,
              from(#721013),
              to(#000000)
            );
          }
          span {
            display: inline-block;
            color: #fff;
            padding: 0 7px;
            cursor: pointer;
          }
          span:hover {
            color: #eb232b;
          }
          .drop-menu {
            position: absolute;
            top: 55px;
            left: -30px;
            font-size: 14px;
            line-height: 35px;
            background-color: #201f20;
            color: #ffffff;
            text-align: center;
            background: rgba(0, 0, 0, 0.6);
            display: none;
            p {
              width: 130px;
              padding: 0 5px;
              cursor: pointer;
            }
            p:hover {
              color: #eb232b;
            }
          }
          .activemenu {
            position: absolute;
            top: 59px;
            left: -12px;
          }
        }
        .list-item:hover {
          .drop-menu {
            display: block;
            padding: 10px 0;
            position: absolute;
            top: 55px;
            left: -30px;
          }
        }
      }
      .num {
        color: #fff;
        text-align: left;
        color: #eb232b;
        font-size: 14px;
        font-weight: 600;
        .linktext_wrap {
          border-left: 1px solid lightgray;
          margin-left: 40px;
          .linktext {
            font-size: 16px;
            color: #ffffff;
            font-weight: normal;
            text-decoration: none;
            margin-left: 5px;
          }
        }
        .img {
          width: 18px;
          height: 18px;
          margin-left: 28px;
          vertical-align: middle;
          padding-bottom: 5px;
        }
        .img1 {
          width: 24px;
          height: 24px;
          margin-left: 26px;
          vertical-align: middle;
          padding-bottom: 5px;
        }
        .num-wrap {
          min-width: 160px;
          display: inline-block;
          .stock-green {
            color: green;
          }
          .stock-red {
            color: red;
          }
          .stock-white {
            color: white;
          }
        }
      }
    }
  }
}
</style>
