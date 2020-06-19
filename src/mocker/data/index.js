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
            roles: [1],
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
  },
  homeBanner: {
    suc: Mock.mock(
      Mock.mock(
        {
          code: 200,
          data: [
            {
              id: Mock.Random.id(),
              pic: 'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/0/20200609154516/1/vanst_04.jpg',
              tit: '没有什么理由放弃',
              desc: '每天迎着清晨的第一缕阳光，乘坐最早的一班公交，每个奋斗的人都在使出浑身解数，沿途只见早起的上班族，等着校车的小学生，骑着电动车上班的农民工，和他们捡起掉落在地上沉沉的矿泉水，好像没有什么理由不努力，因为每个人都在和生活做博弈。'
            },
            {
              id: Mock.Random.id(),
              pic: 'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/0/20200609154516/1/vanst_04.jpg',
              tit: '世界的每一处角落都是那么的美好',
              desc: '我们在地球上，扮演着不同的角色，但保护地球，是我们共同肩负的责任，可口可乐相信，当我们一起坚持在乎的态度，在乎地球的美，地球上的每一个角落，都将成为更好的存在。'
            },
            {
              id: Mock.Random.id(),
              pic: 'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/0/20200609154516/1/vanst_04.jpg',
              tit: '发现美',
              desc: '生活中打动我们的，往往是那些细小而美好的事物：一朵灿烂的小花，一片洁白的云朵，一个会心的微笑，一句暖心的话语，一张天真的笑脸，一个深情的拥抱.......这些美好的瞬间，决定了我们人生的幸福感。正是这些心有所感的瞬间，闪耀着温暖的光芒，穿透每个平凡琐碎的日常，让我们在柴米油盐酱醋茶中发现了生活中的美。'
            },
            {
              id: Mock.Random.id(),
              pic: 'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/0/20200609154516/1/vanst_04.jpg',
              tit: '你永远独一无二',
              desc: '你在我心中永远是独一无二的存在，我爱的也只是这世上唯一的你。也许以后，你还是会把我丢在家里，一个人面对着空荡的客厅发呆。可是，我知道，无论你走多远，都会记得回家的路。因为，这一生，我们注定要一起走下去。'
            },
            {
              id: Mock.Random.id(),
              pic: 'https://public-resource-oss.oss-cn-shanghai.aliyuncs.com/0/20200609154516/1/vanst_04.jpg',
              tit: '时常感恩',
              desc: '愉快的事情会充满你的内心，你的全身；为什么还要去在乎那些不愉快的事情呢？人的精力是有限的，生命也很宝贵，一定要关注真正值得关注的东西呢！把注意力放在值得感恩的事情上，会让你看到很多很多生活的美好之处。'
            }
          ],
          message: '成功'
        }
      )
    ),
    err: {
      code: 500,
      data: {},
      message: '首页轮播图数据获取失败！'
    }
  }
}

module.exports = data
