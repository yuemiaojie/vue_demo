<template>
  <div>
    <button v-copy="'aaaaa'" class="copy-btn">点击一键copy</button>
    <br>
    <br>
    <hr>
    <br>
    <button v-longpress="longpress">长按生效</button>
    <br>
    <br>
    <hr>
    <br>
    <button v-debounce="debounceClick">防抖</button>
    <br>
    <br>
    <hr>
    <br>
    <input v-emoji type="text" placeholder="请输入内容（不能输入表情和特殊字符）" style="width: 300px">
    <br>
    <br>
    <hr>
    <br>
    <img v-LazyLoad="'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/hq/20201215/3/4dfd09dbafe144d1a4f1a6bc3e5b55a3.png'">
    <!-- <img v-LazyLoad="'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/hq/20201211/1/8765773d26a54e77b984cbc71f2d0556.png'" style="margin-bottom: 500px">
    <img v-LazyLoad="'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/hq/20201210/3/9b4bc30342ea4600b05ef403bc4c5a03.png'" style="margin-bottom: 500px"> -->
    <br>
    <br>
    <hr>
    <br>
    <button v-permission="'1'">权限按钮1</button>
    <br>
    <br>
    <hr>
    <br>
    <div v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}" style="width: 300px;height: 300px;background-color: #efefef;" />
    <br>
    <br>
    <hr>
    <br>
    <div class="el-dialog_box">
      <div v-draggable class="el-dialog" />
    </div>
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
  mounted() { },
  methods: {
    longpress() {
      console.log('长按生效啦')
    },
    handleBtn(e) {
      console.log(e)
      console.log(e.type)
    },
    handleBtn2(e) {
      console.log(e)
      console.log(e.type)
    },
    debounceClick() {
      console.log('debounce：发送请求啦！！！')
    },
    handleInput(e) {
      console.log('e', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dialog {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000000;
  position: absolute;
  left: 0;
  top: 0;
}
.el-dialog_box {
  position: relative;
  width: 800px;
  height: 800px;
  border: 1px solid red;
}
</style>
