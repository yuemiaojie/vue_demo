<template>
  <div>
    <el-select
      v-model="value1"
      placeholder="请选择"
      size="mini"
      @change="buildingidChange"
    >
      <el-option
        v-for="item in buildinglist"
        :key="item.buildingid"
        :label="item.buildingname"
        :value="item.buildingid"
      />
    </el-select>

    <el-select
      v-model="value2"
      placeholder="请选择"
      size="mini"
    >
      <el-option
        v-for="item in buildinglist1"
        :key="item.layerid"
        :label="item.layername"
        :value="item.layerid"
      />
    </el-select>
    <div v-html="html" />
    <!--外部使用方式 confirm cancel 是自定义的事件 opened是包装el-dialog的事件，通过$listeners传入到el-dialog里面-->
    <custom-dialog
      :visible.sync="visibleDialog"
      @opened="$_handleOpened"
      @confirm="$_handleConfirm"
      @cancel="$_handleCancel"
    >
      这是一段内容
    </custom-dialog>
  </div>
</template>

<script type="text/javascript">
import customDialog from './demo01'
export default {
  name: 'Demo',
  components: {
    customDialog
  },
  props: '',
  data() {
    return {
      visibleDialog: false,
      value1: '',
      value2: '',
      list: [],
      html: '',
      buildinglist: [
        {
          'buildingid': '4028818c5fd89017015fdc7d2d5102da',
          'buildingname': '教学楼',
          'layerlist': [
            {
              'layerid': '4028818123',
              'layername': '第三层左'
            },
            {
              'layerid': '4028818c5fd89017015fdc7d2d5102da',
              'layername': '第三层右'
            }
          ]
        },
        {
          'buildingid': '123',
          'buildingname': '实验室',
          'layerlist': [
            {
              'layerid': '123',
              'layername': '第二层左'
            },
            {
              'layerid': '456',
              'layername': '第二层右'
            }
          ]
        },
        {
          'buildingid': '77',
          'buildingname': '阶梯楼层',
          'layerlist': [
            {
              'layerid': '77',
              'layername': '第一层'
            }
          ]
        }
      ],
      buildinglist1: []
    }
  },
  created() {
    this.list = [
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_304_Org.txt  匹配度:2.2277837',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_107_Org.txt  匹配度:2.1381123',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_231_Org.txt  匹配度:2.1381123',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_106_Org.txt  匹配度:2.0668051',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_444_Org.txt  匹配度:2.0001006',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_203_Org.txt  匹配度:1.8788258',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_233_Org.txt  匹配度:1.8058287',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_443_Org.txt  匹配度:1.6173184',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_332_Org.txt  匹配度:1.4197134',
      '文档:D:\Python\homework2\Lucene\英文分词\News_FenCi_379_Org.txt  匹配度:1.4197134'
    ]
    this.list.forEach(v => {
      this.html += v + '<br>'
    })
  },
  mounted() { },
  methods: {
    $_handleOpened() { },
    $_handleConfirm() { },
    $_handleCancel() { },
    buildingidChange(val) {
      const sameVal = this.buildinglist.find(v => v.buildingid === val)
      if (sameVal && 'layerlist' in sameVal && sameVal.layerlist instanceof Array && sameVal.layerlist.length) {
        this.buildinglist1 = sameVal.layerlist.filter(v => val === v.layerid)
        if (this.buildinglist1.length > 0) {
          this.value2 = val
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
