<template>
  <div />
</template>

<script type="text/javascript">
export default {
  name: '',
  components: {
  },
  props: '',
  data() {
    return {

    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$router.replace(from.path)
    })
  },
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
