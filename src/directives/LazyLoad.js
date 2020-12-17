const LazyLoad = {
  // install方法
  bind(el, binding) {
    console.log(1111)
    LazyLoad.init(el, binding.value, '')
  },
  inserted(el) {
    console.log(2222)
    if (IntersectionObserver) {
      console.log('支持IntersectionObserver构造函数')
      LazyLoad.observe(el)
    } else {
      LazyLoad.listenerScroll(el)
    }
  },
  // 初始化
  init(el, val, def) {
    el.setAttribute('data-src', val)
    el.setAttribute('src', def)
  },
  // 利用IntersectionObserver监听el
  observe(el) {
    var io = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src
      if (entries[0].isIntersecting) {
        console.log('该图片在可视区域内了')
        if (realSrc) {
          el.src = realSrc
          el.removeAttribute('data-src')
        }
      }
    })
    io.observe(el)
  },
  // 监听scroll事件
  listenerScroll(el) {
    const handler = LazyLoad.throttle(LazyLoad.load, 300)
    LazyLoad.load(el)
    window.addEventListener('scroll', () => {
      handler(el)
    })
  },
  // 加载真实图片
  load(el) {
    const windowHeight = document.documentElement.clientHeight
    /**
     * el.getBoundingClientRect() 返回元素大小与相对视口的距离
     *
     */
    // 获取元素的上边距离窗口的顶部距离
    const elTop = el.getBoundingClientRect().top
    // 获取元素的下边距离窗口的底部距离
    const elBtm = el.getBoundingClientRect().bottom
    const realSrc = el.dataset.src
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc
        el.removeAttribute('data-src')
      }
    }
  },
  // 节流
  throttle(fn, delay) {
    let timer
    let prevTime
    return function (...args) {
      const currTime = Date.now()
      const context = this
      if (!prevTime) prevTime = currTime
      clearTimeout(timer)

      if (currTime - prevTime > delay) {
        prevTime = currTime
        fn.apply(context, args)
        clearTimeout(timer)
        return
      }

      timer = setTimeout(function () {
        prevTime = Date.now()
        timer = null
        fn.apply(context, args)
      }, delay)
    }
  }
}

export default LazyLoad
