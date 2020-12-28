<template>
  <div id="summarys-wrap">
    <h2>
      每天知道一点点
    </h2>
    <ol class="summarys">
      <li>
        <router-link to="/summary/event-loop">什么是 Event Loop？</router-link>
        <router-link to="/summary/aaa/123">aaa</router-link>
      </li>
    </ol>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Summarys',
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
#summarys-wrap {
  .summarys {
    margin-top: 5px;
  }
}
</style>
