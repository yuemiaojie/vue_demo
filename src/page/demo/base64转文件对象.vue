<template>
  <div>
    <input id="file" type="file" @change="fileChange">
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {

    }
  },
  created() { },
  mounted() {

  },
  methods: {
    fileChange(e) {
      var upImage = document.getElementById('file') // 页面上input框标签对应的id
      var objImage = upImage.files[0] // 获取第一个文件的对象
      console.log(objImage)
      var reader = new FileReader() // 实例化File对象
      reader.readAsDataURL(objImage)
      reader.onload = _ => {
        // 监听load后返回的数据
        // reader.result即为获取到的base64字符串，注意，有前缀文件类型，图片对应的base64需要自行截取一下
        var imgurl = reader.result
        console.log(imgurl)
        var newFile = this.dataURLtoFile(imgurl, objImage.name)
        console.log('newFile', newFile)
      }
    },
    // 将base64转换为文件
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
