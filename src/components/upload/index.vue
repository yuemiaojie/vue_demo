<template>
  <div id="file-wrap">
    <el-upload :http-request="upload" :show-file-list="false" multiple action="">
      <el-button size="mini" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script type="text/javascript">
import OSS from 'ali-oss'
import utils from '@/utils'

export default {
  name: '',
  components: {},
  props: {
    fileSize: {
      type: Number,
      default: 6
    },
    fileFormat: {
      type: Array,
      default: _ => {
        return ['jpg', 'png', 'jpeg', 'JPG', 'PNG', 'JPEG']
      }
    }
  },
  data() {
    return {
    }
  },
  created() { },
  mounted() { },
  methods: {
    async upload(e) {
      const file = e.file

      // 效验
      if (!navigator.onLine) {
        alert('网络错误')
        return false
      } else if (
        !utils.valiFileFormat(
          file.name.split('.').pop(),
          this.fileFormat
        )
      ) {
        alert('图片格式错误')
        return false
      } else if (!utils.valiFileSize(file.size, this.fileSize)) {
        alert('图片过大')
        return false
      }

      // 配置
      const client = new OSS(utils.OSSCli())
      const fileStorageName = utils.getFileName(file.name)
      const relativePath = 'img/'
      const fileStorageSrc = relativePath + fileStorageName
      const data = await client.put(fileStorageSrc, file)

      // 返回
      if (data.res.status === 200) {
        var imgData = {
          src: data.res.requestUrls[0],
          alt: file.name,
          id: utils.randomString('id:', 12),
          detailsBtnShowStatus: false
        }

        console.log('上传成功 //----// ', imgData)
      } else {
        alert(file.name + '文件上传失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
