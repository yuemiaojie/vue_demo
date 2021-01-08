import uploadComponent from '@components/Upload'

// 添加install方法
uploadComponent.install = function (Vue) {
  Vue.component(uploadComponent.name, uploadComponent)
}

export default uploadComponent
