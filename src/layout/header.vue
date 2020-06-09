<template>
  <el-header id="header-wrap">
    <el-breadcrumb
      class="my-breadcrumb"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item
        v-for="(v, i) in $route.matched"
        :key="i"
        :to="{path: v.path + '?' + +new Date()}"
      >
        {{ v.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown
      trigger="click"
      @command="pageCommand"
    >
      <span class="setting-btn">
        设置
        <i class="el-icon-arrow-down" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="setTheme">
          更换主题色
        </el-dropdown-item>
        <el-dropdown-item
          divided
          command="screenfull"
        >
          全屏模式
        </el-dropdown-item>
        <el-dropdown-item
          divided
          command="handleSidebar"
        >
          切换侧边栏
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-drawer
      :visible.sync="drawer"
      :with-header="false"
    >
      <el-color-picker
        v-model="themeColor"
        :predefine="predefineColors"
        class="theme-color-picker"
        size="medium"
        @change="changeColor"
      />
      <div class="theme-color-panel theme-bgc" />
    </el-drawer>

    <el-dropdown
      trigger="click"
      @command="userCommand"
    >
      <el-avatar
        :src="$store.getters.userInfo.headImg"
        class="head-portrait"
      >
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png">
      </el-avatar>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          disabled
          command="handlePersonalData"
        >
          编辑个人资料
        </el-dropdown-item>
        <el-dropdown-item
          disabled
          divided
          command="changePassword"
        >
          修改密码
        </el-dropdown-item>
        <el-dropdown-item
          command="loginOut"
          divided
          @click="loginOut"
        >
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script type="text/javascript">
import cookie from 'js-cookie'
import { changeThemeColor } from '@/utils/themeColorClient'
import screenfull from 'screenfull'
import { resetRouter } from '@router'
import theme from '@assets/css/theme'
export default {
  name: '',
  components: {
  },
  props: '',
  data() {
    return {
      timer: null,
      drawer: false,
      themeColor: '',
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585'
      ]
    }
  },
  created() {
    this.themeColor = localStorage.getItem('themeColor') || theme.themeColor
  },
  mounted() {
    screenfull.on('change', _ => {
      if (screenfull.isEnabled) {
        if (screenfull.isFullscreen) {
          this.$msg({ message: '进入全屏模式', type: 'info' })
        } else {
          this.$msg({ message: '退出全屏模式', type: 'info' })
        }
      } else {
        this.$msg({ message: '您的浏览器不支持全屏模式，请切换浏览器重试', type: 'error' })
      }
    })
  },
  destroyed() { },
  methods: {
    userCommand(val) {
      var evs = {
        handlePersonalData: _ => { },
        changePassword: _ => { },
        loginOut: _ => this.loginOut()
      }
      evs[val]()
    },
    pageCommand(val) {
      var evs = {
        setTheme: _ => {
          this.drawer = true
        },
        screenfull: _ => {
          if (screenfull.isEnabled) {
            screenfull.toggle()
          } else {
            this.$msg({ message: '您的浏览器不支持全屏模式，请切换浏览器重试', type: 'error' })
          }
        },
        handleSidebar: _ => {
          var sidebarStatus = cookie.get('sidebarStatus') === '1' ? '0' : '1'
          this.$store.commit('settings/SET_SETTINGS', { key: 'sidebarStatus', val: sidebarStatus })
          cookie.set('sidebarStatus', this.$store.getters.sidebarStatus)
        }
      }
      evs[val]()
    },
    loginOut() {
      var confirm = window.confirm('您确定要退出登录吗？')
      if (confirm === true) {
        this.$router.push('/login')
        cookie.remove('userInfo')
        this.$store.commit('permission/DESTROY_ROUTES')
        this.$store.commit('settings/SET_SETTINGS', { sidebarStatus: '0' })
        this.$store.commit('user/SET_USERINFO', {})
        resetRouter()
      }
    },
    changeColor(newColor) {
      changeThemeColor(newColor).then(() => {
        this.$msg({
          message: '切换主题色成功',
          type: 'success',
          onClose: _ => {
            this.drawer = false
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#header-wrap {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .head-portrait {
    cursor: pointer;
  }
  .my-breadcrumb {
    flex: 1;
  }
  .date,
  .setting-btn {
    color: #333;
  }
  .setting-btn {
    font-size: 12px;
    cursor: pointer;
    margin: 0 30px;
    text-decoration: underline;
  }
}
</style>
<style lang="scss">
#header-wrap {
  .theme-color-picker {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    .el-color-picker__trigger {
      width: 40px;
      height: 40px;
    }
  }
  .theme-color-panel {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
  }
}
</style>
