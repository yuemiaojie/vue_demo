<template>
  <div id="vue-demo">
    <router-view />
    <div v-if="!onLine" class="network-msg-wrap">
      <div class="close-wrap" @click="hideNetworkMsgBox">
        <i class="el-icon-close" />
      </div>
      <h2>网络异常</h2>
      <p>请检查网络是否正常连接，如操作无效，请
        <a class="to-feedback-btn" href="1">
          联系客服
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onLine: navigator.onLine
    }
  },
  mounted() {
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)
  },
  methods: {
    updateOnlineStatus(e) {
      const { type } = e
      this.onLine = type === 'online'
    }
  }
}
</script>
<style lang="scss">
@import './style/index.scss';
@import 'nprogress/nprogress.css';
@import url('//at.alicdn.com/t/font_1873990_blu248f9is8.css');
</style>
<style lang="scss" scoped>
#vue-demo {
  min-width: 1024px;
  .network-msg-wrap {
    position: fixed;
    bottom: 35px;
    right: 35px;
    padding: 30px 35px;
    line-height: 30px;
    color: #e33;
    background-color: #f6e3e3;
    border: 1px solid #e99;
    z-index: 10000;
  }
  .to-feedback-btn {
    text-decoration: underline;
  }
  .close-wrap {
    position: absolute;
    top: 5px;
    right: 12px;
    cursor: pointer;
  }
  .close-wrap:hover {
    i {
      font-weight: bold;
    }
  }
}
</style>
