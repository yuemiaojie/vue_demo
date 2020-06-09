'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const appConfig = require('../config/app-config.js')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  plugins: [
    // 生成仅包含颜色的替换样式（主题色等）
    new ThemeColorReplacer({
      fileName: 'style/theme-colors.[contenthash:8].css',
      matchColors: [
        ...forElementUI.getElementUISeries(appConfig.themeColor)
      ],
      changeSelector: forElementUI.changeSelector,
      isJsUgly: process.env.NODE_ENV === 'production' ? true : undefined
    })
  ],
  context: path.resolve(__dirname, '../'),
  entry: ['babel-polyfill', './src/main.js'],
  externals: {},
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : process.env.NODE_ENV === 'test'
          ? config.build_test.assetsPublicPath
          : config.build_dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.css'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@api': resolve('src/api'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@filters': resolve('src/filters'),
      '@icons': resolve('src/icons'),
      '@lang': resolve('src/lang'),
      '@layout': resolve('src/layout'),
      '@mock': resolve('src/mock'),
      '@page': resolve('src/page'),
      '@router': resolve('src/router'),
      '@store': resolve('src/store'),
      '@styles': resolve('src/styles'),
      '@utils': resolve('src/utils')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
