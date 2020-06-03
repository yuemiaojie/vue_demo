<template>
  <div v-if="isShowToTopEle" class="go_top" @click="backTop" />
</template>

<script type="text/javascript">
export default {
  name: 'MyackToTop',
  components: {},
  props: {
    scroll: {
      type: Number,
      default: 1000
    },
    scrollTime: {
      type: Number,
      default: 0.5
    }
  },
  data() {
    return {
      isShowToTopEle: false,
      intervalTime: 0
    }
  },
  created() { },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 计算在规定时间内，定时器每秒执行一次才会完成
    getIntervalTime(scrollTime) {
      scrollTime = scrollTime * 1000
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      let step = 0

      while (scrollTop > 0) {
        var ispeed = Math.floor(-scrollTop / 5)
        scrollTop = scrollTop + ispeed
        step++
      }
      scrollTime = scrollTime / step

      return scrollTime
    },
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      this.intervalTime = this.getIntervalTime(this.scrollTime)
      const that = this
      var timer = setInterval(() => {
        var ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, this.intervalTime)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop

      if (that.scrollTop > this.scroll) {
        that.isShowToTopEle = true
      } else {
        that.isShowToTopEle = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.go_top {
  position: fixed;
  bottom: 50px;
  right: 20px;
  background-color: #efefef;
  border-radius: 50%;
  padding: 30px;
  box-shadow: 0 2px 5px #cccccc;
  cursor: pointer;
}
</style>
