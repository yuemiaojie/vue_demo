<template>
  <div>
    <div v-if="!isStart">
      活动倒计时：
      {{ activityCountDown.h }}：{{ activityCountDown.m }}：{{ activityCountDown.s }}
    </div>
    <div v-else>
      活动开始啦！！！
    </div>
    <!-- <div v-html="getDiffTime02()" /> -->
  </div>
</template>

<script type="text/javascript">
import dayjs from 'dayjs'
export default {
  name: '',
  props: '',
  data() {
    return {
      now: '',
      timer: null,
      timer02: null,
      activityCountDown: {
        h: '00',
        m: '00',
        s: '00'
      },
      isStart: false
    }
  },
  watch: {
    activityCountDown: {
      handler(newName, oldName) {
        const { h, m, s } = newName
        if (h === 0 && m === 0 && s === 0) {
          this.isStart = true
        } else if (h < 0 || m < 0 || s < 0) {
          this.isStart = true
        }
      },
      deep: true
    },
    isStart: {
      handler(newName, oldName) {
        if (newName) {
          clearInterval(this.timer)
        }
      }
    }
  },
  created() {
    // 时间戳转为日期格式
    console.log('时间戳转日期格式：', dayjs(1607430870181).format('YYYY-MM-DD HH:mm:ss'))
    // 将日期格式转为时间戳
    console.log('日期格式转为时间戳：', dayjs('2020/12/08 20:34:30').valueOf())
    // // 解析ISO 8601字符串
    // var date01 = dayjs('2020-01-01T08:00:00.000Z')
    // console.log('解析ISO 8601字符串', date01)
    // // 字符串与格式
    // console.log('字符串与格式', dayjs('12-25-1995', 'MM-DD-YYYY'))
    // // 解析时间戳（毫秒）
    // console.log('解析时间戳', dayjs(new Date().getTime()))
    // // 解析时间戳（秒）
    // console.log('解析时间戳（秒）', dayjs().unix(new Date().getTime()))
    // const diffTime = this.getDiffTime()
    // // this.getDiffTime02()
    // this.activityCountDown = diffTime
    // this.timer = setInterval(() => {
    //   const diffTime = this.getDiffTime()
    //   this.activityCountDown = diffTime
    // }, 1000)
    // // this.timer02 = setInterval(() => {
    // //   this.getDiffTime02()
    // // }, 1000)
    // this.showtime((1606702860000 - new Date().getTime()) / 1000)
  },
  mounted() { },
  methods: {
    getDiffTime() {
      const date1 = dayjs()
      const date2 = dayjs('2020-11-30 10:18:00')
      var diffHourTime = date2.diff(date1, 'hour')
      console.log('差值的时间 小时：', diffHourTime)
      var diffMinuteTime = date2.diff(date1, 'minute')
      console.log('差值的时间 分钟：', diffMinuteTime - diffHourTime * 60)
      var diffSecondTime = date2.diff(date1, 'second')
      console.log('差值的时间 秒数：', diffSecondTime - diffMinuteTime * 60)
      return {
        h: diffHourTime,
        m: diffMinuteTime - diffHourTime * 60,
        s: diffSecondTime - diffMinuteTime * 60
      }
    },
    showtime(ts) {
      var timerun = false // 是否启用
      var Temp // 输出字符串
      var tempts = ts - 1 // 剩余秒数-1
      var dateLeft = 0 // 剩余天数
      var hourLeft = 0 // 剩余小时
      var minuteLeft = 0 // 剩余分钟
      var secondLeft = 0 // 剩余秒钟

      var dateLeftStr = ''// 剩余天数字符
      var hourLeftStr = ''// 剩余小时字符
      var minuteLeftStr = ''// 剩余分钟字符
      var secondLeftStr = ''// 剩余秒钟字符
      if (ts < 0) { // 剩余秒数为负则全部清0
        ts = 0
        dateLeft = 0
        hourLeft = 0
        minuteLeft = 0
        secondLeft = 0
      } else {
        dateLeft = parseInt(ts / 86400) // 折合天数
        ts = ts - dateLeft * 86400 // 剩余秒数
        hourLeft = parseInt(ts / 3600) // 折合小时
        ts = ts - hourLeft * 3600 // 剩余秒数
        minuteLeft = parseInt(ts / 60) // 折合分钟
        secondLeft = ts - minuteLeft * 60 // 剩余秒数

        dateLeftStr = dateLeft
        hourLeftStr = hourLeft
        minuteLeftStr = minuteLeft
        secondLeftStr = secondLeft
      }
      if (hourLeft < 10) {
        hourLeftStr = '0' + hourLeft // 小时左补0
      }
      if (minuteLeft < 10) {
        minuteLeftStr = '0' + minuteLeft // 分钟左补0
      }
      if (secondLeft < 10) {
        secondLeftStr = '0' + secondLeft // 秒钟左补0
      }
      if (dateLeft > 0) {
        // 天数> 0，显示天数
        dateLeftStr = dateLeftStr + '天 '
      } else {
        // 否则不显示天数
        dateLeftStr = ' '
      }
      if (hourLeft > 0) {
        // 小时> 0，显示小时数
        hourLeftStr = hourLeftStr + '小时 '
      } else {
        // 否则判断天数是否也为0
        if (dateLeft !== ' ') {
          // 天数不为0
          hourLeftStr = '00' + '小时 ' // 显示小时数为00
        } else {
          hourLeftStr = ' ' // 否则不显示小时数
        }
      }
      if (minuteLeft > 0) {
        // 分钟是否为0
        minuteLeftStr = minuteLeftStr + '分钟 ' // 显示分钟
      } else {
        if (dateLeft !== ' ' || hourLeft !== ' ') {
          minuteLeftStr = '00' + '分钟 ' // 天数和小时有一个不为0则显示00分钟
        } else {
          minuteLeftStr = ' ' // 否则不显示分钟
        }
      }
      if (secondLeft > 0) {
        // 秒钟是否为0
        secondLeftStr = secondLeftStr + '秒 ' // 不为0显示秒
      } else {
        if (dateLeftStr !== ' ' || hourLeftStr !== ' ' || minuteLeftStr !== ' ') {
          secondLeftStr = '00' + '秒 ' // 天数、小时、分钟有一个不为0则显示00秒
        } else {
          secondLeftStr = ' ' // 否则不显示秒
        }
      }
      Temp = dateLeftStr + hourLeftStr + minuteLeftStr + secondLeftStr // 合并字符串
      if (Temp === ' ') {
        Temp = ' <B>结束</B> ' // 时间到停止倒计时
      } else {
        Temp = '' + Temp
        timerun = true
      }
      console.log('剩余时间', Temp)
      if (timerun) {
        setTimeout(_ => { this.showtime(tempts) }, 1000)
      }
    }
    // getDiffTime02() {
    //   var time = new Date().getTime()
    //   var text = ''
    //   var totalSecs = (1606701240000 - time) / 1000
    //   var days = Math.floor(totalSecs / 3600 / 24)
    //   var hours = Math.floor((totalSecs - days * 24 * 3600) / 3600)
    //   var mins = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600) / 60)
    //   var secs = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600 - mins * 60))
    //   console.log(hours, mins, secs)
    //   if (days !== 0) {
    //     text = '距离活动开始还剩：' + days + '天' + hours + '小时' + mins + '分钟' +
    //       secs + '秒'
    //   } else if (hours === 0 && mins === 0 && secs === 0) {
    //     clearInterval(this.timer02)
    //     return 0
    //   } else if (hours === 0 && mins === 0) {
    //     text = '距离活动开始还剩：' + secs + '秒'
    //   } else if (hours === 0 && mins !== 0) {
    //     text = '距离活动开始还剩：' + mins + '分钟' + secs + '秒'
    //   } else if (hours !== 0) {
    //     text = '距离活动开始还剩：' + hours + '小时' + mins + '分钟' + secs + '秒'
    //   }
    //   return text
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
