<template>
  <div id="demo-wrap">
    代码测试
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {
      msg: '我是打印的信息'
    }
  },
  created() {
    console.log(this.msg)
    console.info(this.msg)
    console.warn(this.msg)
    console.error(this.msg)
    console.time('计时器1')
    console.timeEnd('计时器1')
    Array(5).fill(1).forEach(v => {
      console.count('遍历次数')
    })
    console.table({ a: 1, b: 2 })
    console.table([{ a: 1, b: 2 }, { a: 1, b: 2 }])
    console.group('第一层')
    console.log(1)
    console.group('第二层')
    console.log(2)
    console.groupEnd()
    console.groupEnd()
    console.trace()
    console.assert(true === false, '不相同')
    console.clear()
    console.log('%c看我胖虎锤你！', 'color: cyan;font-size: 30px;font-weight: blod;font-style: italic;')
    var debounce = this.$utils.debounce(_ => {
      console.table({
        'b': '执行了'
      })
    }, 1000)
    debounce()
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
