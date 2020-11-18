<template>
  <div>
    <button @click="sendDataToParent">发送信息给父元素</button>
  </div>
</template>

<script type="text/javascript">
import Postmate from 'postmate'
export default {
  name: '',
  props: '',
  data() {
    return {
      model: null,
      childAPI: null
    }
  },
  created() {
  },
  mounted() {
    this.childAPI = new Postmate.Model()
  },
  methods: {
    sendDataToParent() {
      this.childAPI.then(parent => {
        parent.emit('some-event', 'Hello, World!')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
