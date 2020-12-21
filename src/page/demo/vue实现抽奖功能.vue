<template>
  <div class="prize-wrapper">
    <!-- <img :style="{ transform: rotateAngle, transition: 'transform 4s ease-in-out' }" class="img01" src="http://kzsource.oss-cn-shanghai.aliyuncs.com/hq_2020_yqhw/001.png" alt="">
    <img class="img02" src="http://kzsource.oss-cn-shanghai.aliyuncs.com/hq_2020_yqhw/002.png" alt="" @click="pointer()"> -->
    <Upload />
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {
      rotateAngle: 0 // 将要旋转的角度
    }
  },
  created() { },
  mounted() { },
  methods: {
    pointer() {
      var data = '0'
      var rotateAngle = 0
      switch (data) {
        case '0':
          rotateAngle = 10 * 360 + 360
          break
        case '1':
          rotateAngle = 10 * 360 + 420
          break
        case '2':
          rotateAngle = 10 * 360 + 480
          break
        case '3':
          rotateAngle = 10 * 360 + 540
          break
        case '4':
          rotateAngle = 10 * 360 + 600
          break
        case '5':
          rotateAngle = 10 * 360 + 660
          break
      }
      this.rotateAngle = 'rotate(' + (rotateAngle - 10) + 'deg)'
    }
  }
}
</script>

<style lang="scss" scoped>
.prize-wrapper {
  width: 500px;
  height: 500px;
  position: relative;
}

.img01 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.img02 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -65%);
  width: 100px;
  cursor: pointer;
}
</style>
