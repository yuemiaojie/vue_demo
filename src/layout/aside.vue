<template>
  <el-aside style="border-right: 1px solid #efefef;width: auto;">
    <el-scrollbar style="height:100%">
      <el-menu :default-active="$route.name" :collapse="$store.getters.sidebarStatus === '1'" class="el-menu-vertical-demo" unique-opened>
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
}
.el-menu--collapse {
  width: 33px;
}
</style>
