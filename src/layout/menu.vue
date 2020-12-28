<template>
  <div id="layout-menu">
    <el-menu :default-active="$route.name" :collapse="$store.getters.sidebarStatus === '1' ? true : false" :collapse-transition="false" mode="vertical">
      <div v-for="(item, index) in routers" :key="index">
        <el-submenu v-if="item.meta.submenu" :index="item.name">
          <template slot="title">
            <i :class="'iconfont ' + item.meta.icon" />
            <span slot="title">{{ $store.getters.language === 'zh' ? item.meta.title : item.meta.enTitle }}</span>
          </template>
          <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
            <el-menu-item v-if="!item.hidden" :index="childItem.name" style="padding-left: 10px;" @click="toLink(resolvePath(item.path + '/' + childItem.path), childItem.name)">
              <p>
                <i :class="'iconfont ' + childItem.meta.icon" />
                <span>{{ $store.getters.language === 'zh' ? childItem.meta.title : childItem.meta.enTitle }}</span>
              </p>
            </el-menu-item>
            <AsideMenus v-if="childItem.children && childItem.children.length > 0" :routers="childItem.children" :base-path="resolvePath(childItem.path)" />
          </div>
        </el-submenu>
        <div v-else>
          <el-menu-item :index="item.name" @click="toLink(resolvePath(item.path), item.name)">
            <i :class="'iconfont ' + item.meta.icon" />
            <span slot="title">{{ $store.getters.language === 'zh' ? item.meta.title : item.meta.enTitle }}</span>
          </el-menu-item>
          <AsideMenus v-if="item.children && item.children.length > 0" :routers="item.children" :base-path="resolvePath(item.path)" />
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script type="text/javascript">
import path from 'path'
import cookie from 'js-cookie'
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
    return {
      cookie
    }
  },
  created() {
  },
  mounted() { },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    },
    toLink(path, pathName) {
      if (this.$route.name === pathName) {
        this.$router.push('/empty')
      } else {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss">
#layout-menu {
  .el-menu {
    border: none;

    .el-menu-item,
    .el-submenu__title {
      padding: 0 10px !important;
      min-width: auto;
      font-size: 13px;
      text-align: left;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      i.iconfont {
        font-size: 13px;
      }
    }

    .el-menu-item.is-active {
      font-weight: bold;
    }

    .el-submenu__title + ul.el-menu {
      padding-left: 10px;
    }
  }

  .el-menu.el-menu--collapse {
    width: 40px;
    .el-menu-item span,
    .el-submenu > .el-submenu__title span,
    .el-menu-item .el-submenu__icon-arrow,
    .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
      display: none;
    }
    .el-submenu__title,
    .el-tooltip {
      padding: 0 10px !important;
      text-align: center;
    }
  }
}
</style>
