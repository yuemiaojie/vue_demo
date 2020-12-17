<template>
  <el-aside width="200px" style="border-right: 1px solid #efefef;">
    <layout-menu :routers="$store.getters.addRoutes.length > 0 ? $store.getters.addRoutes[0].children : []" :base-path="'/'" />
  </el-aside>
</template>

<script type="text/javascript">
import layoutMenu from '@layout/menu'
export default {
  name: 'Aside',
  components: {
    layoutMenu
  },
  props: '',
  data() {
    return {

    }
  },
  created() {
  },
  mounted() { },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
