<template>
  <div id="demo-wrap">
    <h2>Demo页</h2>
    {{ arr[0] || '' }}
    <div ref="move-box">我是会移动的物体</div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {
      arr: ['a'],
      offsetTop: 0
    }
  },
  created() {
  },
  mounted() {
    this.arr[0] = 'c'
    // 在浏览器重绘之前调用run函数
    window.requestAnimationFrame(this.run)
    // 浏览器帧数空闲时调用函数，第二个参数为如果超过这个时间还没有执行，则强制执行
    window.requestIdleCallback(function (didTimeout) {
      // deadline.didTimeout：是否超时
      // deadline.timeRemainling：表示当前没超时所剩余的时间
      console.log('浏览器当前帧数空闲了，执行了')
    }, { timeout: 2000 })
  },
  methods: {
    run() {
      var moveBox = this.$refs['move-box']
      moveBox.style.transform = `translate(0, ${this.offsetTop += 10}px)`
      if (this.offsetTop <= 1000) {
        window.requestAnimationFrame(this.run)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
