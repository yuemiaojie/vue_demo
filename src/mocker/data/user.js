// http://mockjs.com/examples.html
const Mock = require('mockjs')

const data = {
  userData: {
    suc: Mock.mock(
      Mock.mock(
        {
          code: 200,
          data: {
            'token': Mock.Random.word(30),
            username: Mock.Random.cname(),
            roles: [1, 2, 3],
            id: Mock.Random.id(),
            headImg: 'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/0/20200605150310/1/20180429111927_4i2Ks.jpeg'
          },
          message: '登陆成功'
        }
      )
    ),
    err: {
      code: 500,
      data: {},
      message: '账号密码错误'
    }
  }
}

module.exports = data
