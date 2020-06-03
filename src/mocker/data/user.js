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
            headImg: 'http://pic1.zhimg.com/50/v2-fbe356c74816b9b3cfcf80ff1758fbd4_hd.jpg'
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
