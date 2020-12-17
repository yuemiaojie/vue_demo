<template>
  <div>
    1
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
  created() {
    var num0 = 0
    var num1 = 0
    for (let index = 0; index < 100000; index++) {
      var v = this.getRandomNumberByRange(1, 10)
      if (v === 0) {
        num0++
      }
      if (v === 9) {
        num1++
      }
    }
    console.log('num0', num0)
    console.log('num1', num1)
  },
  mounted() {
  },
  methods: {
    getRandomNumberByRange(start, end) {
      return Math.floor(Math.random() * (end - start) + start)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
