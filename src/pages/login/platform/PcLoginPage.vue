<template>
  <div class="container">
    <div class="bgImageContainer">
      <div class="content wrapper_01">
        <img class="tip" src="@/assets/pc_register_tip.png" alt="tip">
        <div class="registerContent">
          <div class="logo"></div>
          <div class="title">Log on</div>
          <el-input v-model="account" class="email-input input-view" placeholder="Please enter an account">
            <template #prefix>
              <el-icon size="20" class="el-input__icon">
                <message />
              </el-icon>
            </template>
          </el-input>
          <el-input v-model="password" class="password-input input-view" placeholder="Please enter the password">
            <template #prefix>
              <el-icon size="20" class="el-input__icon">
                <lock />
              </el-icon>
            </template>
          </el-input>
          <button class="confirm" @click="login">Log on</button>
          <div class="bottomContent">
            <button class="forget-password">forgot password？</button>
            <button class="turn-register">Register</button>
          </div>
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
      account: "98903@163.com",
      password: "123456",
    }
  },
  name: 'PcLoginPage',
  props: {
    title: String,
    desc: String
  },
  methods: {
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
  height: 456px;
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

.el-input__icon {
  color: #000000;
  vertical-align: middle;
}

.confirm {
  margin-top: 30px;
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

.bottomContent {
  margin-top: 18px;
  display: flex;
  justify-content: space-around;
}

.forget-password {
  /* display: inline; */
  /* margin-left: 95px; */
  /* margin-top: 12px; */
  text-align: right;
  font-size: 14px;
  color: #999999;
  font-weight: normal;
  border: none;
  outline: none;
  background-color: transparent;
}

.turn-register {
  /* display: inline; */
  /* margin-left: 295px; */
  /* margin-top: 12px; */
  text-align: right;
  font-size: 14px;
  font-weight: normal;
  color: #121212;
  border: none;
  outline: none;
  background-color: transparent;
}
</style>
    