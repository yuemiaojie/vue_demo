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
    // var str = "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"
    // // console.log(this.isBase64(str))
    // var blob = this.dataURLtoFile(str, 'file')
    // console.log(blob)
  },
  methods: {
    isBase64(str) {
      if (str === '' || str.trim() === '') { return false }
      try {
        return btoa(atob(str)) === str
      } catch (err) {
        return false
      }
    },
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
      var mime = 'image/jpeg'
      var bstr = atob(dataurl)
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
