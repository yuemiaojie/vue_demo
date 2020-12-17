<template>
  <div>
    <h4>base64特性</h4>
    <hr>
    <ol>
      <li>是4的倍数</li>
      <li>至多两个=号</li>
    </ol>
    <br>
    <br>
    <h4>编码方式</h4>
    <hr>
    <ol>
      <li>ASCLL（127个字母，但是会出现乱码，因为每个国家语言不同）</li>
      <li>Unicode（解决了乱码的问题，每个符号都不同，语言编码统一，但是存储空间会变大，因为规定每个符号三个字节或四个表示）</li>
      <li>UTF-8（解决了大小的问题，可变长编码，中文用几个字节，英文用几个字节）</li>
    </ol>
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: '',
  data() {
    return {

    }
  },
  created() { },
  mounted() {
    var str = 'abc'
    // 转为base64编码
    var base64Str = window.btoa(str)
    console.log('base64Str', base64Str)
    // 将base64编码转为字符串
    var base64ToStr = window.atob(base64Str)
    console.log('base64ToStr', base64ToStr)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
