<template>
  <div id="login-wrap">
    <h2 class="l-t"><i>vue-demo</i></h2>
    <div class="content">
      <div class="loginform-wrap">
        <el-form
          ref="form"
          :rules="rules"
          :model="form"
          label-width="100px"
        >
          <el-form-item
            label="账号："
            prop="userName"
          >
            <el-input
              v-model="form.userName"
              placeholder="请输入账号"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-user"
              />
            </el-input>
          </el-form-item>
          <el-form-item
            label="密码："
            prop="password"
          >
            <el-input
              v-model="form.password"
              show-password
              placeholder="请输入密码"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-lock"
              />
            </el-input>
          </el-form-item>
          <el-row type="flex">
            <el-form-item>
              <el-checkbox
                v-model="form.savePassword"
                size="mini"
              >
                记住密码
              </el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="login('form')"
              >
                登陆
              </el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import cookie from 'js-cookie'
import { Base64 } from 'js-base64'
const rules = {
  userName: [
    { required: true, message: '请输入账号', trigger: ['blur', 'change'] },
    { pattern: /^\d+$|^\d+[.]?\d+$/, message: '请输入正确的账号，只允许输入数字' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
  ]
}
export default {
  name: 'Login',
  components: {},
  props: '',
  data() {
    return {
      rules,
      form: {
        savePassword: false,
        userName: '',
        password: ''
      }
    }
  },
  created() {
    if (cookie.get('loginInfo')) {
      const { userName, password } = JSON.parse(cookie.get('loginInfo'))
      this.form.userName = userName
      this.form.password = Base64.decode(password)
      this.form.savePassword = true
    }
  },
  mounted() { },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const { savePassword, userName, password } = this.form
          const para = { userName, password }
          this.$store.dispatch('user/HandleUserinfo', para).then(userInfo => {
            if (savePassword) {
              cookie.set('loginInfo', JSON.stringify({ ...para, password: Base64.encode(password) }), { expires: 3 })
            } else {
              cookie.remove('loginInfo')
            }
            cookie.set('userInfo', JSON.stringify(userInfo), { expires: 7 })
            this.$store.commit('permission/GENERATE_ROUTES', [1, 2, 3])
            const addRoutes = this.$store.getters.addRoutes
            this.$router.addRoutes(addRoutes)
            this.$router.push('/')
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login-wrap {
  padding: 0 50px;
}
.l-t {
  font-size: 60px;
  margin: 30px 0;
  text-decoration: underline;
}
.content {
  background-color: #409eff;
  padding: 70px 0 120px;
  border-radius: 10px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
}
.loginform-wrap {
  width: 500px;
}
</style>
