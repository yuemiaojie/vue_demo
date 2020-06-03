import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
import appConfig from '../../config/app-config'

export let curColor = appConfig.themeColor

// 动态切换主题色
export function changeThemeColor(newColor) {
  var options = {
    newColors: [...forElementUI.getElementUISeries(newColor)]
  }
  return client.changer.changeColor(options, Promise)
    .then(() => {
      curColor = newColor
      localStorage.setItem('themeColor', curColor)
    })
}

export function initThemeColor() {
  const savedColor = localStorage.getItem('themeColor')
  if (savedColor) {
    curColor = savedColor
    changeThemeColor(savedColor)
  }
}
