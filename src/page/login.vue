<template>
  <div id="login-wrap">
    <h2 class="l-t">
      <i>{{ $t('login.tit') }}</i>
    </h2>
    <div class="content">
      <div class="loginform-wrap">
        <el-form
          ref="form"
          :rules="rules"
          :model="form"
          label-width="120px"
        >
          <el-form-item
            :label="$t('login.userNameInpLabel')"
            prop="userName"
          >
            <el-input
              v-model="form.userName"
              :placeholder="$t('login.userNameInpPlaceholder')"
            >
              <i
                slot="prefix"
                class="el-input__icon el-icon-user"
              />
            </el-input>
          </el-form-item>
          <el-form-item
            :label="$t('login.passwordInpLabel')"
            prop="password"
          >
            <el-input
              v-model="form.password"
              :placeholder="$t('login.passwordInpPlaceholder')"
              show-password
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
                {{ $t('login.saveLogin') }}
              </el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="login('form')"
              >
                {{ $t('login.login') }}
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
export default {
  name: 'Login',
  components: {},
  props: '',
  data() {
    return {
      form: {
        savePassword: false,
        userName: '',
        password: ''
      }
    }
  },
  computed: {
    rules() {
      return {
        userName: [
          { required: true, message: this.$t('login.userNameMsg1'), trigger: ['blur', 'change'] },
          { pattern: /^\d+$|^\d+[.]?\d+$/, message: this.$t('login.userNameMsg2') }
        ],
        password: [
          { required: true, message: this.$t('login.passwordMsg'), trigger: ['blur', 'change'] }
        ]
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
          this.$loading()
          const { savePassword, userName, password } = this.form
          const para = { userName, password }
          this.$store.dispatch('user/HandleUserinfo', para).then(userInfo => {
            if (savePassword) {
              cookie.set('loginInfo', JSON.stringify({ ...para, password: Base64.encode(password) }), { expires: 3 })
            } else {
              if (cookie.get('loginInfo')) {
                cookie.remove('loginInfo')
              }
            }
            cookie.set('userInfo', JSON.stringify(userInfo), { expires: 7 })
            this.$store.commit('permission/GENERATE_ROUTES', userInfo.roles)
            const addRoutes = this.$store.getters.addRoutes
            this.$router.addRoutes(addRoutes)
            this.$router.push('/')
            this.$loading().close()
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
  padding: 70px 0 120px;
  border-radius: 10px;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
}
.loginform-wrap {
  width: 500px;
}
</style>
