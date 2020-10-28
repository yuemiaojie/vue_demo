<template>
  <div id="demo-wrap">
    <h2>Demo页</h2>
    {{ arr[0] || '' }}
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {
      arr: ['a']
    }
  },
  created() {
  },
  mounted() {
    this.arr[0] = 'c'
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
