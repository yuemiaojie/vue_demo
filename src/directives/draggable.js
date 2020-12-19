const draggable = {
  inserted: function (el, binding) {
    el.style.cursor = 'move'
    el.onmousedown = function (e) {
      /**
       * pageX：在页面中的x坐标
       * pageY：在页面中的y坐标
       * offsetLeft：相对于最近的父元素定位元素的left位置
       * offsetTop：相对于最近的父元素定位元素的top位置
       */
      const disx = e.pageX - el.offsetLeft
      const disy = e.pageY - el.offsetTop
      // 使用document会解决快速滑动鼠标离开target会出现停止的问题
      document.onmousemove = function (e) {
        console.log('e', e)
        // 获取到移动的x距离
        let x = e.pageX - disx
        // 获取到移动的y轴距离
        let y = e.pageY - disy

        // 最大的X、Y距离
        let maxX = 0
        let maxY = 0

        /**
         * document.body.clientWidth：页面可见区域的宽度
         * document.body.clientHeight：页面可见区域的高度
         * window.getComputedStyle(el)：返回该对象的css属性
         */
        if (binding.value === 'window') {
          maxX = +document.body.clientWidth - +el.offsetWidth
          maxY = +document.body.clientHeight - +el.offsetHeight
        } else {
          maxX = +el.parentElement.offsetWidth - +el.offsetWidth
          maxY = +el.parentElement.offsetHeight - +el.offsetHeight
        }

        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}
export default draggable
