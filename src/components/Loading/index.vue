<template>
  <div v-show="show" class="lds-spinner">
    <div class="spinner">
      <div class="double-bounce1" />
      <div class="double-bounce2" />
      <p class="text" v-text="text" />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  watch: {}
}
</script>

<style scoped>
.lds-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.spinner {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  z-index: 999;
}

.double-bounce1,
.double-bounce2 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blue;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }

  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }

  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

.text {
  width: 50px;
  text-align: center;
  position: absolute;
  top: calc(40% + 45px);
  left: 50%;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
}
</style>
