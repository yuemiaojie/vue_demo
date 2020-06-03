<template>
  <div class="file_wrap">
    <div class="file_items" v-for="(v, i) in fileList" :key="v.id" :style="'backgroundImage: url(' + v.src + ')'" @click="opFiles(i)">
    </div>

    <div class="fileBox">
      <input type="file" ref="file" id="file" @change="fileChange" multiple>
    </div>
  </div>
</template>

<script type="text/javascript">
import OSS from 'ali-oss'
import utils from '@/utils'

export default {
  name: '',
  props: {
    fileSize: {
      type: Number,
      default: 5
    },
    fileFormat: {
      type: Array,
      default: _ => {
        return ['jpg']
      }
    }
  },
  components: {},
  data() {
    return {
      fileFormatReg: /^(\s|\S)+(jpg|png|JPG|PNG|jpeg|gif|wbmp|JPEG)+$/,
      fileList: []
    }
  },
  created() { },
  mounted() { },
  methods: {
    async fileChange() {
      let fileList = this.$refs['file'].files
      for (let index = 0; index < fileList.length; index++) {
        var fileInput = fileList[index]

        // 效验
        if (!navigator.onLine) {
          alert('网络错误')
          return false
        } else if (
          !utils.valiFileFormat(
            fileInput.name.split('.').pop(),
            this.fileFormat
          )
        ) {
          alert('图片格式错误')
          return false
        } else if (!utils.valiFileSize(fileInput.size, this.fileSize)) {
          alert('图片过大')
          return false
        }

        // 配置
        let client = new OSS(utils.OSSCli())
        let fileStorageName = utils.getFileName(fileInput.name)
        let relativePath = 'img/'
        let fileStorageSrc = relativePath + fileStorageName
        let data = await client.put(fileStorageSrc, fileInput)

        // 返回
        let { res } = data
        console.log(data)

        console.log(res.requestUrls[0])
        if (res.status === 200) {
          var imgData = {
            src: res.requestUrls[0],
            alt: fileInput.name,
            id: utils.randomString('id:', 12),
            detailsBtnShowStatus: false
          }
          this.fileList.push(imgData)

          console.log(this.fileList)
        } else {
          alert(fileInput.name + '文件上传失败')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.file_wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  position: relative;
  overflow: hidden;
}

.fileBox {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px dashed #999999;
  border-radius: 6px;
  #file {
    opacity: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &::after,
  &::before {
    content: ' ';
    position: absolute;
    width: 5px;
    height: 35%;
    background-color: #999999;
    border-radius: 6px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}

.file_items {
  width: calc(100px + 1px);
  height: calc(100px + 1px);
  margin-right: 10px;
  border-radius: 6px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0px 2px #cccccc;
  margin-bottom: 10px;

  .detailsBtn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    color: #ffffff;

    .viewBtn,
    .deleteBtn {
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      border-radius: 50%;
    }
  }
}
</style>
