<template>
  <div class="box">
    哈哈哈哈哈
    <h2>aspect-ratio：可视区的宽高比</h2>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {

    }
  },
  created() { },
  mounted() {
    console.log(document.documentElement.clientWidth)
    console.log(document.documentElement.clientHeight)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@media (min-aspect-ratio: 1/1) {
  .box {
    background-color: red;
  }
}
</style>
