<template>
  <div class="skeleton_wrap">
    <skeletonCir className="cir_01" />
    <skeletonLine v-for="v in skeletonLineList" :key="v.id" :className="v.className" />
  </div>
</template>

<script type="text/javascript">
import skeletonLine from '@C/skeleton/line'
import skeletonCir from '@C/skeleton/cir'

let skeletonLineList = [
  { className: 'line_01', id: 1 },
  { className: 'line_02', id: 2 },
  { className: 'line_03', id: 3 }
]
export default {
  name: '',
  props: '',
  components: {
    skeletonLine,
    skeletonCir
  },
  computed: {},
  data() {
    return {
      skeletonLineList
    }
  },
  created() {},
  mounted() {},
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
