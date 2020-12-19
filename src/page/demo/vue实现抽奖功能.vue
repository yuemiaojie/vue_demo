<template>
  <div class="prize-wrapper">
    <img :style="{ transform: rotateAngle, transition: 'transform 4s ease-in-out' }" class="img01" src="http://kzsource.oss-cn-shanghai.aliyuncs.com/hq_2020_yqhw/001.png" alt="">
    <img class="img02" src="http://kzsource.oss-cn-shanghai.aliyuncs.com/hq_2020_yqhw/002.png" alt="" @click="luckflag ? pointer() : ''">
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {
      luckflag: true,
      rotateAngle: 0, // 将要旋转的角度
      startRotatingDegree: 0, // 初始旋转角度
      rotateTransition: '', // 控制过渡效果
      click_flag: true // 是否可以旋转抽奖
    }
  },
  created() { },
  mounted() { },
  methods: {
    // 点击指针
    pointer() {
      // 调用接口
      // ----
      var data = '1'
      switch (data) {
        case '0':
          rotateAngle = randCircle * 360 + 330;
          break;
        case '1':
          rotateAngle = randCircle * 360 + 270; break;
        case '2':
          rotateAngle = randCircle * 360 + 210; break;
        case '3':
          rotateAngle = randCircle * 360 + 150; break;
        case '4':
          rotateAngle = randCircle * 360 + 90; break;
        case '5':
          rotateAngle = randCircle * 360 + 30; break;
      }
      this.rotateAngle = "rotate(" + 3600 + "deg)";
      // 抽奖函数
      // this.getlotteryPrizeFun()
    },
    // 转动
    rotate(prize) {//目前是只转动转盘
      if (!this.click_flag) return;
      var type = 0; // 默认为 0  转盘转动
      var randCircle = 10; // 附加多转几圈，2-3
      var duringTime = 5; // 默认为 5s
      var rotateAngle = '';
      switch (prize.name) {
        case '奖品1': rotateAngle = randCircle * 360 + 330; break;
        case '奖品2': rotateAngle = randCircle * 360 + 270; break;
        case '奖品3': rotateAngle = randCircle * 360 + 210; break;
        case '奖品4': rotateAngle = randCircle * 360 + 150; break;
        case '奖品5': rotateAngle = randCircle * 360 + 90; break;
        case '奖品6': rotateAngle = randCircle * 360 + 30; break;
      }
      this.click_flag = false; // 旋转结束前，不允许再次触发
      if (type == 0) {
        // 转动盘子
        var rotateAngle = this.startRotatingDegree + rotateAngle - this.startRotatingDegree % 360;//将要旋转的角度
        this.startRotatingDegree = rotateAngle;//改变初始旋转的角度
        this.rotateAngle = "rotate(" + rotateAngle + "deg)";//真正控制转动角度
        // 旋转结束后允许再次触发
        setTimeout(() => {
          this.click_flag = true;
          this.gameOver(prize)
        }, duringTime * 1000 + 200)
      }
    },
    // 游戏结束
    gameOver() {
      // 游戏结束,重置旋转初始位置
      this.rotateAngle = "rotate(" + 0 + "deg)";//真正控制转动角度的,为0,回到初始位置
      this.rotateTransition = 'transform 0.05s ease-in-out' //控制转动过渡效果的
      setTimeout(() => {
        this.rotateTransition = ''
      }, 100)
      // 中奖弹窗提示
      this.isShowMask = true
      this.winAward = true
      // 更新抽奖次数
      this.getActcivityFancy()
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
