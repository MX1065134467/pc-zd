<template>
  <div class="tabs noselect">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div
        class="item-title"
        :class="[item.name, className(item.level)]"
        @click="handleListClick(item.level, item.title)"
      >
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list
          :list="item.children"
          v-if="isLevelActive(item.level)"
        ></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: { list: Array },
  data () {
    return {
      levelActive: 'one-1',
      parentLev: []
    }
  },
  computed: {
    currentLevel () {
      return this.$store.state.tabsLevel
    }
  },
  watch: {
    currentLevel: {
      handler: function (currentLevel, oldValue) {
        if (currentLevel) {
          console.log(232323232)
          this.parentLev = sessionStorage.getItem('parentLev') ? sessionStorage.getItem('parentLev').split(',') : []
          this.levelActive = sessionStorage.getItem('level') ? sessionStorage.getItem('level') : 'one-1'
          const name = sessionStorage.getItem('name')
          this.$store.commit('tabsCompontentsIndex', name)
          this.className(this.levelActive)
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.handleList()
    })
  },
  methods: {
    isLevelActive (level) {
      return this.parentLev.includes(level)
    },
    className (level) {
      return this.parentLev.includes(level) && level.startsWith('one') ? 'active1' : this.parentLev.includes(level) ? 'active2' : ''
    },
    handleListClick (lev, title) {
      if (!lev && !title) return false
      console.log(lev, title, 'click')
      console.log(this.list, '00000')
      this.list.map((item, index) => {
        if (title === item.title) {
          sessionStorage.setItem('level', item.level)
          sessionStorage.setItem('parentLev', item.level)
          sessionStorage.setItem('name', item.title)
          if (item.children) {
            console.log(1111)
            // this.$store.commit('tabsCompontentsIndex', item.name)
            // this.$store.commit('tabsCompontentsLevel', item.level)
            sessionStorage.setItem('level', item.level)
            sessionStorage.setItem('parentLev', this.list[index].level + ',' + item.children[0].level)
            sessionStorage.setItem('name', item.children[0].title)
            if (item.children[0].children) {
              sessionStorage.setItem('level', item.level)
              sessionStorage.setItem('parentLev', this.list[index].level + ',' + item.children[0].level + ',' + item.children[0].children[0].level)
              sessionStorage.setItem('name', item.children[0].children[0].title)
            }
          }
        }
      })
      this.parentLev = []
      this.parentLev.push(lev)
      this.$store.commit('tabsCompontentsIndex', title)
    },
    handleList () {
      const level = sessionStorage.getItem('level')
      const name = sessionStorage.getItem('name')
      this.$store.commit('tabsCompontentsIndex', name)
      // this.$store.commit('tabsCompontentsLevel', level)
      this.parentLev = sessionStorage.getItem('parentLev') ? sessionStorage.getItem('parentLev').split(',') : []
      console.log(level, name, '0022', this.levelActive, this.parentLev)
      this.levelActive = level
      this.className(this.levelActive)
    }
  }
}
</script>

<style lang="scss" scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
  not supported by any browser */
}
.tabs {
  .item {
    color: #333333;
    text-align: left;
    cursor: pointer;
    font-weight: bold;
    box-sizing: border-box;
    margin-bottom: 20px;
    &:first-child {
      padding-top: 26px;
    }
    .item-title {
      font-size: 20px;
      padding-left: 10px;
    }
    .item-children {
      margin-left: 17px;
      font-size: 14px;
    }
    .two {
      line-height: 21px;
      line-height: 20px;
    }
    .three {
      font-size: 18px;
      line-height: 18px;
      font-weight: 500;
    }
    .four {
      font-size: 14px;
      line-height: 15px;
      font-weight: 500;
    }
    .active1 {
      border-left: 3px solid #c1141b;
      color: #c1141b;
    }
    .active2 {
      color: #c1141b;
      font-weight: bold;
    }
  }
}
</style>
