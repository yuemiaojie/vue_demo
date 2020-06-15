<template>
  <div id="svga-wrap">
    <div
      id="demoCanvas"
      style="width: 300px;height: 300px;"
    />
  </div>
</template>

<script type="text/javascript">
import SVGA from 'svgaplayerweb'
import upload from '@components/Upload'
export default {
  name: '',
  components: {
    upload
  },
  props: '',
  data() {
    return {
      menuList: []
    }
  },
  created() {
  },
  mounted() {
    var player = new SVGA.Player('#demoCanvas')
    var parser = new SVGA.Parser('#demoCanvas')
    parser.load('http://file--upload.oss-cn-shanghai.aliyuncs.com/img/20200611094939K5eAZieBWE_angel.svga', function (videoItem) {
      player.setVideoItem(videoItem)
      player.startAnimation()
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#demoCanvas {
  width: 500px;
  height: 500px;
}
</style>
