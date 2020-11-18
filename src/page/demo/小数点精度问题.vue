<template>
  <div>
    1
  </div>
</template>

<script type="text/javascript">
import NP from 'number-precision'
export default {
  name: '',
  props: '',
  data() {
    return {
      a: 2
    }
  },
  created() {
    console.log('reload')
    console.log(NP.strip(0.09999999999999998))
    console.log(NP.plus(0.1, 0.2))
    console.log(NP.minus(0.1, 0.2))
    console.log(NP.times(0.1, 0.2))
    console.log(NP.divide(0.1, 0.2))
    console.log(NP.round(0.1, 2))
    console.table([{ uuid: this.$utils.uuid() }])
  },
  mounted() { },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
