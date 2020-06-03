'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS
      ? [cssLoader, postcssLoader]
      : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        publicPath: '../../',
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

exports.cdnBaseHttp = 'https://cdnjs.cloudflare.com/ajax/libs'

exports.externalConfig = [
  {
    name: 'vue',
    scope: 'Vue',
    js:
      process.env.NODE_ENV === 'production'
        ? 'vue/2.6.10/vue.min.js'
        : 'vue/2.6.10/vue.js'
  },
  {
    name: 'vuex',
    scope: 'Vuex',
    js:
      process.env.NODE_ENV === 'production'
        ? 'vuex/3.1.1/vuex.min.js'
        : 'vuex/3.1.1/vuex.js'
  },
  {
    name: 'vue-router',
    scope: 'vueRouter',
    js:
      process.env.NODE_ENV === 'production'
        ? 'vue-router/3.1.3/vue-router.min.js'
        : 'vue-router/3.1.3/vue-router.js'
  },
  {
    name: 'axios',
    scope: 'axios',
    js:
      process.env.NODE_ENV === 'production'
        ? 'axios/0.19.0/axios.min.js'
        : 'axios/0.19.0/axios.js'
  },
  {
    name: 'qs',
    scope: 'Qs',
    js:
      process.env.NODE_ENV === 'production'
        ? 'qs/6.9.0/qs.min.js'
        : 'qs/6.9.0/qs.js'
  },
  {
    name: 'element-ui',
    scope: 'ELEMENT',
    js:
      process.env.mode === 'production'
        ? 'element-ui/2.13.2/index.js'
        : 'element-ui/2.13.2/index.js'
  }
]
