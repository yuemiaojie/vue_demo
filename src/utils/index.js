import moment from 'moment'

const utilsJs = {
  // 异步加载图片
  loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
      var image = new Image()
      image.src = url
      // 图片加载成功
      image.onload = function () {
        resolve(image)
      }
      // 图片加载失败
      image.onerror = function () {
        reject(new Error('Could not load image at ' + url))
      }
    })
  },
  // 获取URL参数方法
  getUrlParam(name, url) {
    if (url) {
      var num = url.indexOf('?')
      var newUrl = url.substr(num)
    }
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var result = newUrl.substr(1).match(reg)
    return result ? decodeURIComponent(result[2]) : null
  },
  // 数字转为汉字
  SectionToChinese(section) {
    if (section === 0) {
      return '零'
    }
    var chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    var chnUnitChar = ['', '十', '百', '千']
    var strIns = ''
    var chnStr = ''
    var unitPos = 0
    var zero = true
    while (section > 0) {
      var v = section % 10
      if (v === 0) {
        if (!zero) {
          zero = true
          chnStr = chnNumChar[v] + chnStr
        }
      } else {
        zero = false
        strIns = chnNumChar[v]
        strIns += chnUnitChar[unitPos]
        chnStr = strIns + chnStr
      }
      unitPos++
      section = Math.floor(section / 10)
    }
    return chnStr
  },
  /**
   *
   * @param {Sring} name
   * @param {Number} Id长度
   * 获取随机字符串 | Id
   */
  randomString(name = 'randomId', len) {
    len = len || 28
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    var maxPos = $chars.length
    var pwd = ''
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return name + pwd
  },
  /**
   * 离开页面提示
   * 一个原始参数，一个改变后的参数
   */
  unloadMessage(initData, changeData) {
    if (JSON.stringify(initData) === JSON.stringify(changeData)) {
      return true
    } else {
      return false
    }
  },
  // 效验手机号
  valiPhone(val) {
    var reg = /^[1][0-9][0-9]{9}$/
    if (reg.test(val)) return true
  },
  // 文件名截取
  fileNameSub(fileName) {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length)
  },
  /**
   * 效验文件格式
   * param {String} - fileType:获取当前上传文件的格式 - format:当前要效验的文件格式
   */
  valiFileFormat(fileType, format = ['jpg', 'jpeg', 'png', 'gif']) {
    return format.some(v => fileType === v)
  },
  // 效验文件大小
  valiFileSize(fileSize, size = 2) {
    return fileSize / 1024 / 1024 <= size
  },
  // 判断属性是否在这个对象中
  hasOwn(obj, key) {
    return obj.hasOwnProperty(key)
  },
  // 验证图片链接是否有效
  async checkImgExists(imgurl) {
    var img = await this.loadImageAsync(imgurl)
    if (img.fileSize > 0 || (img.width > 1 && img.height > 1)) {
      return true
    } else {
      return false
    }
  },
  // 类型判断
  getType(val) {
    if (val + '' === 'NaN') return 'nan'

    var dataType = Object.prototype.toString.call(val)
    switch (dataType) {
      case '[object Object]':
        return 'obj'
      case '[object String]':
        return 'str'
      case '[object Array]':
        return 'arr'
      case '[object Boolean]':
        return 'bool'
      case '[object Number]':
        return 'num'
      default:
        return 'err'
    }
  },
  // OSS
  OSSCli() {
    const client = {
      region: 'oss-cn-shanghai',
      accessKeyId: '',
      accessKeySecret: '',
      bucket: 'file--upload',
      stsToken: ''
    }

    return client
  },
  // 获取随机的文件名称
  getFileName(name) {
    return (
      moment().format('YYYYMMDDHHmmss') + this.randomString('', 10) + '_' + name
    )
  },
  getCurTime(timeStamp) {
    return moment(timeStamp).format('YYYY-MM-DD HH:mm:ss')
  },
  // 防抖
  debounce(fn, space) {
    let task = null
    return function () {
      if (task) {
        clearTimeout(task)
      }
      task = setTimeout(_ => { fn.call(this) }, space)
    }
  },
  // 节流
  throttle(fn, space) {
    let task = null
    return function () {
      if (!task) {
        task = setTimeout(function () {
          task = null
          fn.call(this)
        }, space)
      }
    }
  }
}

export default utilsJs
