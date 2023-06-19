<template>
  <div class="container">
    <div class="bgImageContainer">
      <div class="content wrapper_01">
        <img class="tip" src="@/assets/pc_register_tip.png" alt="tip">
        <div class="registerContent">
          <div class="logo"></div>
          <div class="title">Register</div>
          <el-input 
          v-model="nickName" 
          class="email-input input-view"
          placeholder="NickName">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><User /></el-icon>
            </template>
          </el-input>

          <el-input 
          v-model="account" 
          class="email-input input-view"
          placeholder="Email Address">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><message /></el-icon>
            </template>
          </el-input>

          <el-input 
          v-model="password" 
          class="password-input input-view"
          type="password"
          show-password
          placeholder="Please enter the password">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>

          <el-input 
          v-model="confirmpassword" 
          class="password-confirm-input input-view"
          type="password"
          show-password
          placeholder="Confirm Password">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>

          <div class="invitation-code">Invitation code (optional)</div>
          <el-input 
          v-model="invitationcode" 
          class="invitation-code-input input-view"
          placeholder="Enter invitation code">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><Present /></el-icon>
            </template>
          </el-input>
          <button class="confirm" @click="register">Register</button>
          <button class="turn-login">Log on</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

import router from '@/router/router'

export default {
  data() {
    return {
        nickName: "",
        account: "",
        password: "",
        confirmpassword: "",
        invitationcode: ""
    }
  },
  name: 'PcRegisterPage',
  props: {
    title: String,
    desc: String
  },
  methods: {
        register() {
            this.axios.post('/api/user/register', {
                email: this.account,
                password: this.password,
                username: this.nickName
            })
            .then(() => {
                this.login()
            })
            .catch((error) => {
                console.log(error)
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
        }
  },
  components: {

  }
}
</script>
  
<style scoped>
.container {
  width: 100%;
  height: 1211px;
  background-color: #05000F;
}

.bgImageContainer {
  width: 100%;
  height: 1080px;
  background-image: URL("../../../assets/pc_login_bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.wrapper_01 {
  width: 1200px;
  margin: 0 auto;
}

.content {
  position: relative;
}

.tip {
  position: absolute;
  left: -50px;
  top: 178px;
}

.registerContent {
  position: absolute;
  width: 403px;
  height: 556px;
  padding: 50px;
  background-color: white;
  right: -50px;
  top: 255px;
  border-radius: 8px;
}
.registerContent .logo {
  background-image: url(../../../assets/icon_register_logo.png);
  width: 58px;
  height: 47px;
  margin: 0 auto;
}
.registerContent .title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 32px;
  text-align: left;
  margin-left: 48px;
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
  margin-left: 48px;
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
  margin-left: 295px;
  margin-top: 12px;
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: normal;
  border: none;
  outline: none;
  background-color: transparent;
}
</style>
  