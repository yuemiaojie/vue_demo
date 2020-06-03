<template>
  <layout-menu
    :routers="$store.getters.addRoutes.length > 0 ? $store.getters.addRoutes[1].children : []"
    :base-path="'/home'"
  />
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
  created() { },
  mounted() { },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
