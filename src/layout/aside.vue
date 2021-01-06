<template>
  <el-aside :width="$store.getters.sidebarStatus === '0' ? '180px' : '40px'" style="border-right: 1px solid #efefef;">
    <el-scrollbar style="height:100%">
      <el-menu :default-active="$route.name" :collapse="$store.getters.sidebarStatus === '1'" :collapse-transition="false" :unique-opened="true">
        <asideMenus :routers="$store.getters.addRoutes.length > 0 ? $store.getters.addRoutes[0].children : []" :base-path="'/'" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script type="text/javascript">
import asideMenus from '@layout/asideMenus'

export default {
  name: 'Aside',
  components: {
    asideMenus
  },
  props: '',
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
