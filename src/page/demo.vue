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
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Demo',
  components: {
  },
  props: '',
  data() {
    return {
      value1: '',
      value2: '',
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
  created() { },
  mounted() { },
  methods: {
    buildingidChange(val) {
      console.log(this.buildinglist.find(v => v.buildingid === val).layerlist)
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
