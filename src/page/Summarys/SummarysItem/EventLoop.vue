<template>
  <div id="summarys_item-wrap">
    <h1 style="text-align: center;">什么是Event Loop？</h1>
    <h1 style="text-align: center;"><a href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html" target="_blank" rel="noopener">http://www.ruanyifeng.com/blog/2014/10/event-loop.html</a></h1>
    <h2>1.JS为什么是单线程？</h2>
    <p><span style="font-size: 14pt;">答：为了更好的操作DOM，动画等，避免JS复杂化。</span></p>
    <h2><span style="font-size: 14pt;">2.JS如何执行的？</span></h2>
    <ol>
      <li>js分为同步跟异步，同步走主线程，形成一个执行栈</li>
      <li>异步任务当有了结果回将事件放至任务队列中</li>
      <li>当所有的同步操作执行完会跑到任务队列中查找有哪些事件完成了。这时异步操作结束等待状态，进入执行栈，开始执行。</li>
      <li>主线程一直轮询第三步操作</li>
    </ol>
    <h2>3.事件与回调函数</h2>
    <p>答：所有的异步事件都会进入任务队列，并秉持先进先出原则，当然，包括点击、页面滚动都会进入任务队列中</p>
    <h2>4.Event Loop</h2>
    <p>答：主线程运行的时候，会产生堆（引用类型）和栈（基本类型），栈会给任务队列注册各种事件，当主线程执行完毕之后，执行异步操作，异步操作成功后会将事件存储到循环任务队列，查找任务队列里面的事件有木有与栈的回调函数对应的。这就是JS的运行机制。😎</p>
    <h2>5.定时器</h2>
    <p>答：任务队列也会放定时事件，当定时结束后会执行回调函数，定时器的延迟时间最小为4ms，如果低于自动增加，定时器的事件必须在栈清空后在执行，定时器的事件会放在任务队列的尾部，所以不能保证在规定的定时时间内执行回调函数。</p>
    <p style="text-align: center;">&nbsp;</p>
    <p>&nbsp;</p>
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
