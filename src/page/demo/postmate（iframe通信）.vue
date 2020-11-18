<template>
  <div>
    <iframe ref="some-div" src="http://192.168.0.120:3000" />
  </div>
</template>

<script type="text/javascript">
import Postmate from 'postmate'
export default {
  name: '',
  props: '',
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
    const postmate = new Postmate({
      container: this.$refs['some-div'], // iframe的容器
      url: 'http://192.168.0.120:3000', // 包含postmate.js的iframe子页面地址
      name: 'my-iframe-name' // 用于设置iframe元素的name属性
    })

    postmate.then(child => {
      child.on('some-event', data => console.log(data))
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>
