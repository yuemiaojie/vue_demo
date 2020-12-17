<template>
  <div>
    <h2>JS自定义事件</h2>
    <button ref="btn" @click="handleCustomEvent">点击触发自定义事件</button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {
      event: null
    }
  },
  created() { },
  mounted() {
    // 注册事件
    this.event = new CustomEvent('build', {
      detail: {
        // 将需要传递的数据写在detail中，以便在EventListener中获取
        // 数据将会在event.detail中得到
        msg: '哈哈哈哈'
      }
    })
    // 监听事件
    window.addEventListener('build', event => { alert(event.detail.msg) })
  },
  methods: {
    handleCustomEvent() {
      // 触发事件
      if (window.dispatchEvent) {
        window.dispatchEvent(this.event)
      } else {
        window.fireEvent(this.event)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
