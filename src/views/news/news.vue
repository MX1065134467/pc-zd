<template>
  <div>
    <Header></Header>
    <div class="search-containner">
      <input
        placeholder="请输入搜索内容"
        @keyup.enter="handleSearch"
        v-model="search"
        class="search-content"
      />
      <div class="search-class" @click.stop="handleSearch">搜索</div>
    </div>
    <div class="main-width-wrap">
      <div class="main-left-wrap left-content">
        <div class="result">
          <p>搜索结果：</p>
          <p @click="handleAcTive1" :class="showStyle1 ? 'active' : ''">
            技术&产品<span>（{{ num }}）</span>
          </p>
          <p @click="handleAcTive2" :class="showStyle2 ? 'active' : ''">
            典型案例<span>（{{ num1 }}）</span>
          </p>
        </div>
      </div>
      <div class="main-right-wrap right-content">
        <div v-if="showStyle1">
          <div v-if="list1.length > 0">
            <p
              class="resultitem"
              v-for="(item, index) in list1"
              :key="index"
              @click="
                handleLink(item.pid, item.title, item.level, item.parentLev, 1)
              "
            >
              {{ item.title }}
            </p>
          </div>
          <div class="nodata" v-else>
            <img src="../../assets/images/nodata.png" alt="" />
            <p class="nodatatext">无搜索结果</p>
          </div>
        </div>
        <div v-if="showStyle2">
          <div v-if="list2.length > 0">
            <p
              class="resultitem"
              v-for="(item, index) in list2"
              :key="index"
              @click.stop="handleLink(item.pid, item.title, item.level, item.parentLev, 2)"
            >
              {{ item.title }}
            </p>
          </div>
          <div class="nodata" v-else>
            <img src="../../assets/images/nodata.png" alt="" />
            <p class="nodatatext">无搜索结果</p>
          </div>
        </div>
        <div class="nodata" v-if="list1.length === 0 && list2.length === 0">
          <img src="../../assets/images/nodata.png" alt="" />
          <p class="nodatatext">无搜索结果</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'news',
  components: { Header },
  data () {
    return {
      search: '',
      num: 0,
      num1: 0,
      showStyle1: false,
      showStyle2: false,
      list1: [],
      list2: [],
      list: [
        {
          level: 'one-1',
          title: '研发机构',
          name: 'one',
          pid: 1
        },
        {
          level: 'one-2',
          name: 'one',
          title: '智能边缘端',
          children: [
            {
              level: 'two-1',
              title: '高清监控摄像机',
              name: 'two',
              pid: 1
            },
            {
              level: 'two-2',
              title: 'AI摄像机（人脸+结构化）',
              name: 'two',
              pid: 1
            },
            {
              level: 'two-3',
              title: '特种设备',
              name: 'two',
              pid: 1
            },
            {
              level: 'two-4',
              title: '智能交通卡口抓拍单元1',
              name: 'two',
              pid: 1
            },
            {
              level: 'two-5',
              title: '智能交通卡口抓拍单元2',
              name: 'two',
              pid: 1
            },
            {
              level: 'two-6',
              title: '智能交通电警抓拍单元',
              name: 'two',
              pid: 1
            },
            {
              level: 'two-7',
              title: '高清视频解码拼接控制器',
              name: 'two',
              pid: 1
            }
          ]
        },
        {
          level: 'one-3',
          title: '网络传输端',
          name: 'one',
          pid: 1
        },
        {
          level: 'one-4',
          title: '数字云底座',
          name: 'one',
          children: [
            {
              level: 'two-1',
              name: 'two',
              title: '云计算产品',
              children: [
                {
                  level: 'three-1',
                  name: 'three',
                  title: '兴发容器云',
                  pid: 1
                },
                {
                  level: 'three-2',
                  name: 'three',
                  title: '兴发智云',
                  pid: 1
                }
              ]
            },
            {
              level: 'two-2',
              name: 'two',
              title: '云存储产品',
              children: [
                {
                  level: 'three-1',
                  name: 'three',
                  title: '视频云存储系统',
                  pid: 1
                },
                {
                  level: 'three-2',
                  name: 'three',
                  title: '融合云存储系统',
                  pid: 1
                }
              ]
            },
            {
              level: 'two-3',
              name: 'two',
              title: '大数据产品',
              children: [
                {
                  level: 'three-1',
                  name: 'three',
                  title: '城市大数据平台',
                  pid: 1
                },
                {
                  level: 'three-2',
                  title: '数据共享交换系统',
                  name: 'three',
                  pid: 1
                },
                {
                  level: 'three-3',
                  title: '一体化运维平台',
                  name: 'three',
                  pid: 1
                },
                {
                  level: 'three-4',
                  title: '物联网数据管理平台TMS',
                  name: 'three',
                  pid: 1
                },
                {
                  level: 'three-5',
                  title: '视频综合管理平台VMS',
                  name: 'three',
                  pid: 1
                },
                {
                  level: 'three-6',
                  title: '视图智能分析平台IMS',
                  name: 'three',
                  pid: 1
                }
              ]
            }
            // {
            //   level: 'three-4',
            //   title: 'AI产品',
            //   name: 'three'
            // }
          ]
        },
        {
          level: 'one-5',
          title: '大数据应用',
          name: 'one',
          pid: 1
        },
        {
          level: 'one-1',
          title: '智慧城市典型案例',
          name: 'one',
          children: [
            {
              level: 'two-1',
              title: '赫章智慧城市',
              name: 'two',
              pid: 2
            },
            {
              level: 'two-2',
              title: '凤凰智慧城市',
              name: 'two',
              pid: 2
            }
          ]
        },
        {
          level: 'one-2',
          title: '智慧行业典型案例',
          name: 'one',
          pid: 2
        },
        {
          level: 'one-3',
          title: '应用软件典型案例',
          name: 'one',
          pid: 2
        }
      ],
      navlist: [],
      resultList: []
    }
  },
  methods: {
    // 搜索
    handleSearch () {
      if (this.search === '') {
        this.resultList = []
        this.list1 = []
        this.list2 = []
        this.num = 0
        this.num1 = 0
        this.showStyle1 = false
        this.showStyle2 = false
      } else {
        this.resultList = []
        this.list1 = []
        this.list2 = []
        this.num = 0
        this.num1 = 0
        this.list.map((item, index) => {
          // 第一层
          if (!item.children && item.title.includes(this.search)) {
            this.resultList.push({
              title: item.title,
              pid: item.pid,
              level: item.level,
              parentLev: item.parentLev ? item.parentLev : null
            })
          } else if (item.children) {
            // 第二层
            item.children.map((item1, index1) => {
              if (item1.title.includes(this.search) && !item1.children) {
                this.resultList.push({
                  title: item.children[index1].title,
                  pid: item.children[index1].pid,
                  level: item.children[index1].level,
                  parentLev: [item.level, item.children[index1].level]
                })
              } else if (item1.children) {
                // 第三层
                item1.children.map((item2, index2) => {
                  if (item2.title.includes(this.search) && !item2.children) {
                    this.resultList.push({
                      title: item1.children[index2].title,
                      pid: item1.children[index2].pid,
                      level: item1.children[index2].level,
                      parentLev: [
                        item.level,
                        item.children[index1].level,
                        item1.children[index2].level
                      ]
                    })
                  } else if (item2.children) {
                    item2.children.map((item3, index3) => {
                      if (item3.title.includes(this.search)) {
                        // 第四层
                        this.resultList.push({
                          title: item2.children[index3].title,
                          pid: item2.children[index3].pid,
                          level: item2.children[index3].level,
                          parentLev: [
                            item.level,
                            item.children[index1].level,
                            item1.children[index2].level,
                            item2.children[index3].level
                          ]
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
        console.log(this.resultList, 'this.resultList')
        if (this.resultList.length > 0) {
          // this.showStyle1 = true
          // this.showStyle2 = false
          this.resultList.map((item) => {
            if (item.pid === 1) {
              this.showStyle1 = true
              this.showStyle2 = false
              this.num++
              this.list1.push(item)
            } else if (item.pid === 2) {
              this.showStyle1 = false
              this.showStyle2 = true
              this.num1++
              this.list2.push(item)
              console.log(this.list2, 'this.list2')
            }
          })
        }
      }
    },
    // 选中样式
    handleAcTive1 () {
      this.showStyle1 = true
      this.showStyle2 = false
    },
    handleAcTive2 () {
      this.showStyle2 = true
      this.showStyle1 = false
    },
    // 跳转
    handleLink (pid, name, level, parentLev, type) {
      console.log(pid, name, level, parentLev, type)
      sessionStorage.setItem('level', level)
      sessionStorage.setItem('name', name)
      if (parentLev) {
        sessionStorage.setItem('parentLev', parentLev)
      } else {
        sessionStorage.setItem('parentLev', [level])
      }
      if (type === 1) {
        this.showStyle1 = true
        this.showStyle2 = false
      } else if (type === 2) {
        this.showStyle2 = true
        this.showStyle1 = false
      }
      if (pid === 1) {
        this.$router.push({
          path: '/product'
        })
      } else if (pid === 2) {
        this.$router.push({
          path: '/case'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-containner {
  width: 1200px;
  margin: 100px auto 60px auto;
  position: relative;
  .search-content {
    width: 97.9%;
    height: 54px;
    padding-left: 24px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    outline: transparent;
  }
  .search-class {
    position: absolute;
    top: 0;
    right: -1px;
    width: 141px;
    height: 54px;
    line-height: 54px;
    padding: 1px 0;
    text-align: center;
    color: #fff;
    font-family: msyh;
    font-size: 16px;
    background-color: #c30d23;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
}
.main-width-wrap {
  display: flex;
  width: 1200px;
  margin: auto;
  background-color: #fff;
  color: #333333;
  .main-left-wrap {
    width: 266px;
    padding-top: 34px;
    .result {
      font-family: msyh;
      font-size: 20px;
      p {
        margin-bottom: 30px;
        cursor: pointer;
        padding-left: 10px;
        font-weight: bold;
      }
      .active {
        color: #c1141b;
        border-left: 3px solid #c1141b;
      }
    }
  }
  .left-content {
    padding-top: 0;
  }
  .main-right-wrap {
    padding: 60px 0 110px 100px;
    width: 834px;
    border-left: 1px solid #d8d8d8;
    text-align: left;
    .resultitem {
      font-family: msyh;
      font-size: 24px;
      padding-bottom: 14px;
      border-bottom: 1px solid #d8d8d8;
      margin-bottom: 20px;
      cursor: pointer;
      // font-weight: bold;
    }
    .nodata {
      width: 364px;
      margin: 115px auto 0 182px;
      img {
        width: 100%;
      }
      .nodatatext {
        text-align: center;
        color: #b2b2b2;
        font-family: msyh;
        font-size: 14px;
        margin-top: 20px;
      }
    }
  }
  .right-content {
    padding-top: 0;
    height: 750px;
  }
}
</style>
