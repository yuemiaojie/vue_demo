<template>
  <div :class="'cir ' + className">
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
.cir {
  width: 100px;
  margin: 10px;
  height: 100px;
  border-radius: 50%;
  animation: loading 0.6s infinite;
  background-image: linear-gradient(
    120deg,
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
