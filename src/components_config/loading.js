import Vue from 'vue'
import loadingComponent from '@components/loading'

/**
 * 使用Vue构造器，创建一个子类
 */
const LoadingConstructor = Vue.extend(loadingComponent)

// 实列化Loading组件
const instance = new LoadingConstructor({
  el: document.createElement('div'),
  propsData: {
    show: false
  }
})

const loading = {
  show(text = '') {
    // 显示方法
    instance.show = true
    instance.text = text
    document.body.appendChild(instance.$el)
  },
  hide() {
    // 隐藏方法
    instance.show = false
  }
}

export default {
  install() {
    if (!Vue.$loading) {
      // 添加全局方法或属性
      Vue.$loading = loading
    }
    // 注入
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
      }
    })
  }
}
