<template>
  <div class="my-layout-menu">
    <el-menu
      :default-active="$route.path"
      :collapse="$store.getters.sidebarStatus === '1' ? true : false"
      mode="vertical"
      class="el-menu-vertical-demo"
    >
      <div
        v-for="(item, index) in routers"
        :key="index"
      >
        <el-submenu
          v-if="item.meta.submenu"
          :index="item.name"
        >
          <template slot="title">
            <i :class="item.meta.icon" />
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <div
              v-for="(childItem, childIndex) in item.children"
              :key="childIndex"
            >
              <el-menu-item
                v-if="!item.hidden"
                :index="resolvePath(item.path + '/' + childItem.path)"
                @click="toLink(resolvePath(item.path + '/' + childItem.path))"
              >
                <p>
                  <i :class="childItem.meta.icon" />
                  {{ childItem.name }}
                </p>
              </el-menu-item>
              <AsideMenus
                v-if="childItem.children && childItem.children.length > 0"
                :routers="childItem.children"
                :base-path="resolvePath(childItem.path)"
              />
            </div>
          </el-menu-item-group>
        </el-submenu>
        <div v-else>
          <el-menu-item
            v-if="!item.hidden"
            :index="resolvePath(item.path)"
            @click="toLink(resolvePath(item.path))"
          >
            <p>{{ item.name }}</p>
          </el-menu-item>
          <AsideMenus
            v-if="item.children && item.children.length > 0"
            :routers="item.children"
            :base-path="resolvePath(item.path)"
          />
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script type="text/javascript">
import path from 'path'
export default {
  name: 'AsideMenus',
  components: {
  },
  props: {
    routers: {
      type: Array,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() { },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    },
    toLink(path) {
      this.$router.push({
        path,
        query: {
          t: +new Date()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.my-layout-menu {
  border-right: 1px solid #efefef;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    border: none;
  }
  .el-menu-item {
    width: 200px;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .el-menu--collapse .el-menu-item span,
  .el-menu--collapse .el-submenu > .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
  }
  .el-menu--collapse .el-menu-item .el-submenu__icon-arrow,
  .el-menu--collapse .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}
</style>
