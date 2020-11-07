<template>
  <div>
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="62" cy="62" r="50" stroke="red" stroke-width="2" fill="green" />
    </svg>
    <h4>
      svg标签： width（宽度）height（高度） version（版本） xmlns（命名）
      <br>
      circle标签：cx（x坐标）cy（y坐标）r（半径）stroke（边框颜色）stroke-width（边框宽度）fill（圆填充色）
    </h4>
    <hr style="margin-top: 8px;background-color: #000000;">
    <svg width="100%" height="100%">
      <rect ry="10" x="10" y="10" width="100" height="100" stroke="black" stroke-width="2" fill="cyan" fill-opacity="1" opacity="1" />
    </svg>
    <h4>
      rect标签：ry（圆角）width（宽）height（高）fill-opacity（背景色透明度）opacity（整体的透明度）
    </h4>
    <hr style="margin-top: 8px;background-color: #000000;">
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="112" cy="62" rx="100" ry="50" style="fill:#ff3c3c;stroke:blue;stroke-width:2" />
    </svg>
    <h4>
      ellipse标签：不同于circle的是他有不同的x与y的宽度
    </h4>
    <hr style="margin-top: 8px;background-color: #000000;">
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="2" />
    </svg>
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
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
