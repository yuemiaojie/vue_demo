const validates = {
  /**
 * 邮箱
 * @param {*} s
 */
  isEmail(s) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
  },

  /**
   * 手机号码
   * @param {*} s
   */
  isMobile(s) {
    return /^1[0-9]{10}$/.test(s)
  },

  /**
   * 电话号码
   * @param {*} s
   */
  isPhone(s) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
  },

  /**
   * URL地址
   * @param {*} s
   */
  isURL(s) {
    return /^http[s]?:\/\/.*/.test(s)
  }
}

export default validates
