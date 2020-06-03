let base = ''
// 没有直接将实际公共接口写到webpack配置中，而是通过获取webpack的环境来判断接口，这样后期修改接口方便调试
switch (process.env.ENV) {
  case 'dev':
    base = 'http://apis.hstar.org/any-mock/HJEhZqEnI'
    break
  case 'test':
    base = 'http://apis.hstar.org/any-mock/HJEhZqEnI'
    break
  case 'pro':
    base = 'http://apis.hstar.org/any-mock/HJEhZqEnI'
    break
  default:
    base = 'http://apis.hstar.org/any-mock/HJEhZqEnI'
    break
}

export default base
