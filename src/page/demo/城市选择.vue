<template>
  <div>
    <a href="https://www.npmjs.com/package/element-china-area-data">插件地址</a>
    <br>
    <el-cascader v-model="selectedOptions" :options="options" size="mini" @change="handleChange" />
  </div>
</template>

<script type="text/javascript">
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  name: '',
  props: '',
  data() {
    return {
      options: regionData,
      selectedOptions: []
    }
  },
  created() { },
  mounted() { },
  methods: {
    handleChange() {
      var loc = ''
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]]
      }
      console.log(loc)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
