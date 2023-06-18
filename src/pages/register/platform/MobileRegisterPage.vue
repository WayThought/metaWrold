
<template>
  <div class="container">
    <div class="bgImageContainer">
      <div class="content">
          <div class="logo"></div>
          <div class="title">Register</div>
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
          v-bind="password"
          placeholder="Please enter the password">
            <template #prefix>
              <el-icon size="20" class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
          <el-input 
          v-model="confirmpassword" 
          class="password-confirm-input input-view"
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
          <button class="confirm" @click="login">Register</button>
          <button class="turn-login">Log on</button>
      </div>
    </div>
  </div>
    
</template>
  
<script>


export default {
    name: 'MobileRegisterPage',
    props: {
      account: "",
      password: "",
      confirmpassword: "",
      invitationcode: ""
        
    },
    data() {
        return {
            
        }
    },
    created() {
        
    },
    components: {
        
    },
    methods: {
        
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
    background-attachment: fixed;
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
    margin-top: 32px;
    margin-left: 16px;
}
.content .title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 28px;
    text-align: left;
    margin-left: 16px;
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
  margin-left: 280px;
  margin-top: 8px;
  margin-bottom: 35px;
  display: block;
  text-align: right;
  font-size: 14px;
  font-weight: normal;
  border: none;
  outline: none;
  background-color: transparent;
}

</style>
  