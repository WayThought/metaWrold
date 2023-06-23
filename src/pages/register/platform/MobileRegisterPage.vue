
<template>
  <div class="container">
    <div class="bgImageContainer">
      <div class="content">
          <div class="logo"></div>
          <div class="titleContent">
            <div class="title">{{ registerDesc }}</div>
            <div class="errorTip">{{ errorMsg }}</div>
          </div>

          <el-input 
          v-model="nickName" 
          class="email-input input-view"
          :placeholder="nickNameDesc">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><User /></el-icon>
            </template>
          </el-input>

          <el-input 
          v-model="account" 
          class="email-input input-view"
          :placeholder="accountDesc">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><message /></el-icon>
            </template>
          </el-input>

          <el-input 
          v-model="password" 
          class="password-input input-view"
          type="password"
          show-password
          :placeholder="passwordDesc">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>

          <el-input 
          v-model="confirmpassword" 
          class="password-confirm-input input-view"
          type="password"
          show-password
          :placeholder="confirmPasswordDesc">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>

          <div class="invitation-code">{{ invitationCodeDesc }}</div>

          <el-input 
          v-model="invitationcode" 
          class="invitation-code-input input-view"
          :placeholder="invitationCodeDesc">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><Present /></el-icon>
            </template>
          </el-input>
          <button class="confirm" @click="register">{{ registerDesc }}</button>
          <button class="turn-login" @click="turnLogin">{{ loginDesc }}</button>
      </div>
    </div>
  </div>
    
</template>
  
<script>
import router from '@/router/router'

export default {
    name: 'MobileRegisterPage',
    props: {

    },
    data() {
        return {
            nickName: "",
            account: "",
            password: "",
            confirmpassword: "",
            invitationcode: "",
            errorMsg: "",

            nickNameDesc: "请输入昵称",
            accountDesc: "请输入邮箱",
            passwordDesc: "请输入密码",
            confirmPasswordDesc: "确认您的密码",
            loginDesc: "登录",
            invitationCodeTip: "邀请码",
            invitationCodeDesc: "请输入邀请码",
            registerDesc: "注册",
            isEnglish: false,
        }
    },
    created() {
      this.resetStatus()
        
    },
    components: {
        
    },
    methods: {
        register() {
          if (this.nickName == '') {
            this.errorMsg = '请输入昵称'
            return

          } else if (this.account == '') {
            this.errorMsg = '请输入邮箱'
            return

          } else if (this.password == '') {
            this.errorMsg = '请输入密码'
            return

          } else if (this.confirmpassword == '') {
            this.errorMsg = '请再次输入密码'
            return

          }

          if (this.password != this.confirmpassword) {
            this.errorMsg = '两次密码不一致，请重新输入'
            return
          }

          this.errorMsg = ''
          this.axios.post('/api/user/register', {
              email: this.account,
              password: this.password,
              username: this.nickName
          })
          .then(() => {
              this.login()
          })
          .catch((error) => {
            this.errorMsg = error.message
          })
        },

        login() {
            this.axios.post('/api/auth/login', {
                email: this.account,
                password: this.password
            })
            .then((response) => {
                this.auth.saveAuthInfo(response.data.data)
                this.getUserInfo()
            })
            .catch((error) => {
                console.log(error)
            })
        },

        getUserInfo() {
            this.axios.get('/api/user/userInfo')
            .then((response) => {
                this.auth.saveUserInfo(response.data.data)
                router.replace({ path: '/' })
            })
            .catch((error) => {
                console.log(error)
            })
        },
        turnLogin() {
            router.replace({ path: '/login' })
        },

        resetStatus() {
          this.isEnglish= localStorage.getItem('isEnglish') == "1";
          this.nickNameDesc = this.isEnglish ? "Please enter an nickname" : "请输入昵称"
          this.accountDesc = this.isEnglish ? "Please enter an account" : "请输入邮箱"
          this.passwordDesc = this.isEnglish ? "Please enter the password" : "请输入密码"
          this.confirmPasswordDesc = this.isEnglish ? "Confirm Password" : "确认您的密码"
          this.loginDesc = this.isEnglish ? "Log on" : "登录"
          this.invitationCodeTip = this.isEnglish ? "Invitation code (optional)" :"邀请码(可选)"
          this.invitationCodeDesc = this.isEnglish ? "Enter invitation code" :"请输入邀请码"
          this.registerDesc = this.isEnglish ? "Register" : "注册"
        }
    }
}
</script>
  
<style scoped>
.container {
  width: 100%;
  height: 844px;
  background-color: #05000F;
}

.bgImageContainer {
    margin-top: 0px;
    width: 100%;
    height: 818px;
    background-image: URL("../../../assets/mobile_login_bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.content {
    display: inline-block;
    width: 343px;
    background-color: white;
    margin: 0 auto;
    margin-top: 212px;
    border-radius: 8px;
}

.content .logo {
    background-image: url(../../../assets/icon_register_logo.png);
    width: 58px;
    height: 47px;
    margin-top: 26px;
    margin-left: 16px;
}
.titleContent {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-left: 16px;
    margin-right: 16px;
}

.content .titleContent .title {
    display: inline;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
}
.content .titleContent .errorTip {
  margin-top: 8px;
  display: inline;
  font-size: 14px;
  text-align: right;
  color: red;
}
.email-input {
  margin-top: 20px;
}
.input-view {
  height: 48px;
  font-size: 14px;
  width: 307px;
}

.password-input {
  margin-top: 20px;
}

.password-confirm-input {
  margin-top: 20px;
}
.invitation-code {
  margin-top: 23px;
  font-size: 18px;
  font-weight: 900;
  text-align: left;
  margin-left: 16px;
}
.invitation-code-input {
  margin-top: 8px;
}

.el-input__icon {
  color: #000000;
  vertical-align: middle;
}

.confirm {
  margin-top: 12px;
  width: 307px;
  height: 48px;
  background-image: url(../../../assets/icon_register_button.png);
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  outline: none;
  background-color: transparent;
}
.turn-login {
  margin-left: 280px;
  margin-top: 8px;
  margin-bottom: 20px;
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: normal;
  border: none;
  outline: none;
  background-color: transparent;
}

</style>
  