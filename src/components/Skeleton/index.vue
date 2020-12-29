<template>
  <div class="skeleton_wrap">
    <skeletonCir class-name="cir_01" />
    <skeletonLine
      v-for="v in skeletonLineList"
      :key="v.id"
      :class-name="v.className"
    />
  </div>
</template>

<script type="text/javascript">
import skeletonLine from '@C/skeleton/line'
import skeletonCir from '@C/skeleton/cir'

const skeletonLineList = [
  { className: 'line_01', id: 1 },
  { className: 'line_02', id: 2 },
  { className: 'line_03', id: 3 }
]
export default {
  name: '',
  components: {
    skeletonLine,
    skeletonCir
  },
  props: '',
  data() {
    return {
      skeletonLineList
    }
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style scoped lang="scss">
.skeleton_wrap {
  overflow: hidden;

  .line_01 {
    width: 45%;
  }

  .line_02 {
    width: 65%;
  }

  .line_03 {
    width: 85%;
  }
}
</style>
