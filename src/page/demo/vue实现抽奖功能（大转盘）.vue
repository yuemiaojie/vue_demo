<template>
  <div class="prize-wrapper">
    <!-- 转盘 -->
    <img ref="prizeTurntable" :style="{ transform: 'rotate(' + (rotateAngle) + 'deg)' }" class="prize-turntable" src="http://kzsource.oss-cn-shanghai.aliyuncs.com/hq_2020_yqhw/001.png" alt="">
    <!-- 指针 -->
    <img class="prize-pointer" src="http://kzsource.oss-cn-shanghai.aliyuncs.com/hq_2020_yqhw/002.png" alt="" @click="rotate()">
  </div>
</template>

<script type="text/javascript">
/**
 * @param {Number} n -最小度数
 * @param {Number} m  -最大度数
 * @returns -最小度数与最大度数的中间值
 * @description 求两个数之前的中间值
 *
 */
function rnd(n, m) {
  var number = parseInt(Math.random() * (m - n) + n)
  if (number < n + 5) {
    return n + 5
  } else if (number > m - 5) {
    return m - 5
  } else {
    return number
  }
}

/**
 * 奖品信息
 * key：奖品类型
 * val：转到该奖品所需的度数
 *
 */
const prizeRotateAngles = {
  0: rnd(-30, 30), // 口罩五个
  1: rnd(30, 90), // 谢谢参与
  2: rnd(90, 150), // 口罩五个
  3: rnd(150, 210), // 防护帽
  4: rnd(210, 270), // 谢谢参与
  5: rnd(270, 330) // 消毒酒精
}

export default {
  name: '',
  props: '',
  data() {
    return {
      rotateAngle: 0,
      flag: false,
      prizeRotateAngles
    }
  },
  created() { },
  mounted() {
    const prizeTurntable = this.$refs['prizeTurntable']
    prizeTurntable.addEventListener('transitionEnd', this.prizeTurntableTransitionend)
    prizeTurntable.addEventListener('webkitTransitionEnd', this.prizeTurntableTransitionend)
  },
  beforeDestroyed() {
    const prizeTurntable = this.$refs['prizeTurntable']
    prizeTurntable.removeEventListener('transitionEnd', this.prizeTurntableTransitionend)
    prizeTurntable.removeEventListener('webkitTransitionEnd', this.prizeTurntableTransitionend)
  },
  methods: {
    // 结束转圈的回调
    prizeTurntableTransitionend() {
      this.flag = false
    },
    rotate() {
      // 正在转ing，返回
      if (this.flag) {
        this.$log('正在转圈圈中，请勿重复点击！')
        return false
      }
      this.flag = true
      var arr = [0, 1, 2, 3, 4, 5]
      // 通过调用接口，获取后端返回的奖励（模拟后端）
      const data = arr[Math.floor((Math.random() * arr.length))]
      console.log(data)
      // 多转十圈
      const extraRotateAngle = 10 * 360
      // 将剩余的补上
      const surplusRotateAngle = 360 - (this.rotateAngle % 360)
      // 奖励对应的转盘角度
      const rotate = extraRotateAngle + this.prizeRotateAngles[data]
      // 转盘最终需要转的角度
      this.rotateAngle += surplusRotateAngle + rotate
    }
  }
}
</script>

<style lang="scss" scoped>
.prize-wrapper {
  width: 500px;
  height: 500px;
  position: relative;
  .prize-turntable {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 4s ease-in-out;
  }

  .prize-pointer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -65%);
    width: 100px;
    cursor: pointer;
  }
}
</style>
