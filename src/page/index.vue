<template>
  <main class="home-wrapper">
    <el-container :style="containerWrapStyle">
      <layout-aside />
      <el-container direction="vertical">
        <layoutHeader />
        <el-scrollbar style="height:100%">
          <el-main>
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive && isRouterAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive && isRouterAlive" />
          </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>
  </main>

</template>

<script type="text/javascript">
// [自动生成表格](https://www.tablesgenerator.com/html_tables)
import layoutHeader from '@layout/header'
import layoutAside from '@layout/aside'
let timer = null
export default {
  name: 'Layout',
  components: { layoutHeader, layoutAside },
  mixins: [],
  props: '',
  data() {
    return {
      containerWrapStyle: '',
      isRouterAlive: true
    }
  },
  // 这里注册后就可以通过子组件刷新页面了
  provide() {
    return {
      reload: this.reload
    }
  },
  created() { },
  mounted() {
    this.setWinH()
    window.addEventListener('resize', this.listenResize)
    this.$once('hook:beforeDestroy', _ => window.removeEventListener('resize', this.listenResize))
  },
  methods: {
    listenResize() {
      if (!timer) {
        timer = true
        setTimeout(_ => {
          timer = false
          this.setWinH()
        }, 200)
      }
    },
    setWinH() {
      const winHeight = this.getWinHeight()
      this.containerWrapStyle = `height: ${winHeight}px`
    },
    getWinHeight() {
      var winHeight = 0
      if (window.innerHeight) {
        winHeight = window.innerHeight
      } else if (document.body && document.body.clientHeight) {
        winHeight = document.body.clientHeight
      }
      return winHeight
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="scss">
.el-container {
  overflow: hidden;
}
</style>
