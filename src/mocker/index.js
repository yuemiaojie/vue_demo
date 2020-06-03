const Qs = require('qs')

const proxy = {
  'GET user': (req, res) => {
    const userInfo = Qs.parse(req._parsedUrl.query)
    const { userName, password } = userInfo
    if (userName === 18835953044 + '' && password === '666666') {
      res.json({
        code: 200,
        data: {
          token: '123456',
          username: 'bz',
          roles: [1, 2, 3],
          id: 123456,
          headImg: 'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/0/20200603165719/1/dog.jpg'
        },
        message: '登陆成功'
      })
    } else {
      res.json({
        code: 500,
        data: {},
        message: '账号密码错误'
      })
    }
  }
}

for (const key in proxy) {
  if (proxy.hasOwnProperty(key)) {
    if (key.startsWith('GET')) {
      proxy[key.replace('GET ', 'GET /my_api/')] = proxy[key]
      delete proxy[key]
    }
  }
}

module.exports = proxy