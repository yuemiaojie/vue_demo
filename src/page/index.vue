<template>
  <div id="home-wrap">
    <el-container :style="containerWrapStyle">
      <layout-aside />
      <el-container direction="vertical">
        <layoutHeader />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script type="text/javascript">
// [自动生成表格](https://www.tablesgenerator.com/html_tables)
import layoutHeader from '@layout/header'
import layoutAside from '@layout/aside'
export default {
  name: 'Layout',
  components: { layoutHeader, layoutAside },
  mixins: [],
  props: '',
  data() {
    return {
      containerWrapStyle: '',
      timer: false
    }
  },
  created() { },
  mounted() {
    this.setWinH()
    window.addEventListener('resize', this.listenResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.listenResize)
  },
  methods: {
    listenResize() {
      if (!this.timer) {
        this.timer = true
        setTimeout(() => {
          this.timer = false
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
    }
  }
}
</script>

<style lang="scss">
</style>
