import utils from '@utils'

const logs = {}
const types = {
  default: function (text) {
    logs.colorful([{ text }])
  },

  primary: function (text) {
    logs.colorful([{ text, type: 'primary' }])
  },

  success: function (text) {
    logs.colorful([{ text, type: 'success' }])
  },

  warning: function (text) {
    logs.colorful([{ text, type: 'warning' }])
  },

  danger: function (text) {
    logs.colorful([{ text, type: 'danger' }])
  }
}

const log = (logInfo) => {
  if (utils.getType(logInfo) === 'obj') {
    if ((utils.hasOwn(logInfo, 'message') && logInfo.message && utils.getType(logInfo['message']) === 'str') && (utils.hasOwn(logInfo, 'type') && utils.hasOwn(types, logInfo['type']))) {
      const { message, type } = logInfo
      types[type](message)
    }
  } else if (utils.getType(logInfo) === 'str') {
    types['default'](logInfo)
  }
}

/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = 'default') {
  let color = ''
  switch (type) {
    case 'default':
      color = '#303133'
      break
    case 'primary':
      color = '#409EFF'
      break
    case 'success':
      color = '#67C23A'
      break
    case 'warning':
      color = '#E6A23C'
      break
    case 'danger':
      color = '#F56C6C'
      break
    default:
      break
  }
  return color
}

/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {String} title title text
 * @param {String} info info text
 * @param {String} type style
 */
logs.capsule = function (title, info, type = 'primary') {
  console.log(
    `%c ${title} %c ${info} %c`,
    'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
    `background:${typeColor(
      type
    )}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
    'background:transparent'
  )
}

/**
 * @description 打印彩色文字
 */
logs.colorful = function (textArr) {
  console.log(
    `%c${textArr.map(t => t.text || '').join('%c')}`,
    ...textArr.map(t => `color: ${typeColor(t.type)};`)
  )
}

export default log
