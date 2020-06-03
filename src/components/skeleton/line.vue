<template>
  <div :class="'line ' + className">
  </div>
</template>

<script type="text/javascript">
export default {
  name: '',
  props: {
    className: {
      type: String
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  margin: 10px;
  height: 20px;
  animation: loading 0.6s infinite;
  background-image: linear-gradient(
    90deg,
    #efefef 25%,
    #ffffff 37%,
    #efefef 63%
  );
  background-size: 400% 100%;
}

@keyframes loading {
  0% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}
</style>
