<template>
  <div>
    <div id="demoCanvas" />
  </div>
</template>

<script type="text/javascript">
import SVGA from 'svgaplayerweb'
export default {
  name: '',
  components: {
  },
  props: '',
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
    var player = new SVGA.Player('#demoCanvas')
    var parser = new SVGA.Parser('#demoCanvas')
    parser.load('/svga/angel.svga', function (videoItem) {
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
