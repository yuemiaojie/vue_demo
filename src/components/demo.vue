<template>
  <div>
    <h2>文件上传</h2>
    <slot :data="data"></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  components: {

  },
  data() {
    return {
      data: [1, 2, 3]
    }
  },
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
