<template>
  <div class="layout-submenu">
    <div v-for="(item, index) in routers" :key="index">
      <el-submenu v-if="!item.hidden && item.meta.submenu && $utils.hasOwn(item, 'children') && $utils.getType(item.children) === 'arr' && item.children.length" :index="item.name">
        <template slot="title">
          <i :class="'iconfont ' + item.meta.icon" />
          <span slot="title">
            {{ $store.getters.language === 'zh' ? item.meta.title : item.meta.enTitle }}
          </span>
        </template>
        <div v-for="(childItem, childIndex) in item.children" :key="childIndex">
          <el-menu-item v-if="!childItem.hidden && !childItem.meta.submenu" :index="childItem.name" style="padding-left: 10px;" @click="toLink(resolvePath(item.path + '/' + childItem.path), childItem.name)">
            <p>
              <i :class="'iconfont ' + childItem.meta.icon" />
              <span>{{ $store.getters.language === 'zh' ? childItem.meta.title : childItem.meta.enTitle }}</span>
            </p>
          </el-menu-item>
          <AsideMenus v-if="!childItem.hidden && childItem.meta.submenu && $utils.hasOwn(childItem, 'children') && $utils.getType(childItem.children) === 'arr' && childItem.children.length" :routers="[childItem]" :base-path="resolvePath(item.path)" />
        </div>
      </el-submenu>
      <el-menu-item v-else-if="!item.hidden && !item.meta.submenu" :index="item.name" @click="toLink(resolvePath(item.path), item.name)">
        <i :class="'iconfont ' + item.meta.icon" />
        <span slot="title">{{ $store.getters.language === 'zh' ? item.meta.title : item.meta.enTitle }}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script type="text/javascript">
import path from 'path'

export default {
  name: 'AsideMenus',
  props: {
    routers: {
      type: Array,
      required: true,
      default: _ => []
    },
    basePath: {
      type: String,
      required: true,
      default: '/'
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
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
.el-aside {
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
    .el-submenu > .el-submenu__title span[slot='title'],
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

.el-menu--vertical {
  .el-submenu__title,
  .el-tooltip {
    padding: 0 10px !important;
  }
}

.el-menu--collapse {
  width: 100%;
}
</style>
