<template>
  <div id="excel-wrap">
    <el-button
      class="export-excel-btn"
      type="primary"
      size="mini"
      @click="exportExcel"
    >
      导出excel
    </el-button>

    <el-upload
      :show-file-list="false"
      :before-upload="beforeUpload"
      class="upload-excel-box"
      action=""
    >
      <el-button
        type="primary"
        size="mini"
      >
        {{ (file && file.name) || '请上传excel' }}
      </el-button>
    </el-upload>

    <el-button
      type="primary"
      size="mini"
      @click="readExcel"
    >
      读取excel
    </el-button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  components: {
  },
  props: '',
  data() {
    return {
      file: null,
      list: [
        {
          id: 1,
          title: '我是标题',
          author: '我是作者',
          pageviews: '我是阅读数',
          display_time: '我是发布时间'
        }
      ]
    }
  },
  created() {
    /**
     * script-loader：加载js的！  -->  require("script-loader!./file.js")
     */
  },
  mounted() { },
  methods: {
    // 格式化
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    exportExcel() {
      /**
       * require.ensure
       * 第一个参数：模块依赖
       * 第二个参数：回调函数
       * 第三个参数：error函数
       * 第四个参数：chunk名称
       * @description 生成独立的chunk，动态加载
       */
      require.ensure([], _ => { // 用 webpack Code Splitting xlsl还是很大的
        const { export_json_to_excel } = require('../../static/Export2Excel.js')
        const tHeader = ['序号', '文章标题', '作者', '阅读数', '发布时间'] // excel 表格头
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        const list = this.list
        const data = this.formatJson(filterVal, list) // 自行洗数据 按序排序的一个array数组
        export_json_to_excel(tHeader, data, '列表excel')
      })
    },
    /**
     * 上传之前的函数
     * @param {Object} 上传的文件
     */
    beforeUpload(file) {
      this.file = file
    },
    readExcel() {
      if (!this.file) {
        this.$msg({
          type: 'warning',
          message: '请上传excel'
        })
        return false
      }
      var f = this.file
      var reader = new FileReader()
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = ''
        var wb // 读取完成的数据
        var reader = new FileReader()
        reader.onload = function (e) {
          var bytes = new Uint8Array(reader.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          // 此处引入，用于解析excel
          var XLSX = require('xlsx')
          wb = XLSX.read(binary, {
            type: 'binary'
          })
          const outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
          const outdata1 = []
          outdata.forEach(v => {
            const obj = {}
            obj.id = v['序号']
            obj.title = v['文章标题']
            obj.author = v['作者']
            obj.pageviews = v['阅读数']
            obj.display_time = v['发布时间']
            outdata1.push(obj)
          })
          console.log(outdata1)
        }
        reader.readAsArrayBuffer(f)
      }
      reader.readAsBinaryString(f)
    }
  }
}
</script>

<style lang="scss" scoped>
#excel-wrap {
  display: flex;
  .export-excel-btn,
  .upload-excel-box {
    margin-right: 10px;
  }
}
</style>
