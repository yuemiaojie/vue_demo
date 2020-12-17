<template>
  <div>
    <div ref="wrapper" class="wrapper">
      <div ref="content" class="content">
        <div class="top_tip tc">{{ pullDownMsg }}</div>
        <ul>
          <li v-for="(v, i) in Array(100)" :key="i">列表01</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import BetterScroll from 'better-scroll'
export default {
  name: '',
  props: '',
  data() {
    return {
      scroll: null,
      options: {},
      pullDownMsg: '下拉刷新，发现更多'
    }
  },
  created() { },
  mounted() {
    this.$nextTick(_ => {
      this.options.pullDownRefresh = {
        threshold: 40, // 当下拉到超过顶部 40px 时，触发 pullingDown 事件
        stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
      }
      this.options.pullUpLoad = {
        threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
      }
      this.scroll = new BetterScroll(this.$refs['wrapper'], this.options)
      this.scroll.on('pullingDown', () => {
        console.log('下拉刷新')
        this.pullDownMsg = '下拉刷新，发现更多'
        // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
        // // 在刷新数据完成之后，调用 finishPullDown 方法，回弹到顶部
        this.scroll.finishPullDown()
      })
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载')
        this.scroll.finishPullUp()
      })
      this.scroll.on('scroll', pos => {
        console.log(pos)
        if (pos.y > 0 && pos.y <= 40) {
          this.pullDownMsg = '下拉刷新，发现更多'
        } else if (pos.y > 40) {
          this.pullDownMsg = '释放更新，发现更多'
        }
      })
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: scroll;
  position: relative;
}
.top_tip {
  position: absolute;
  top: -35px;
  left: 0;
  width: 100%;
}
</style>
