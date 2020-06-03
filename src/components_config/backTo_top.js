import toTopComponent from '@components/backTo_top'

// 添加install方法
toTopComponent.install = function (Vue) {
  Vue.component(toTopComponent.name, toTopComponent)
}

export default toTopComponent
