
<template>
    <div class="container">
        <div class="bgImageContainer">
            <div class="content">
                <div class="logo"></div>
                <div class="title">{{ loginDesc }}</div>
                <el-input v-model="account" class="email-input input-view" :placeholder="accountDesc">
                    <template #prefix>
                    <el-icon size="20" class="el-input__icon">
                        <message />
                    </el-icon>
                    </template>
                </el-input>
                <el-input v-model="password" class="password-input input-view" :placeholder="passwordDesc">
                    <template #prefix>
                    <el-icon size="20" class="el-input__icon">
                        <lock />
                    </el-icon>
                    </template>
                </el-input>
                <button class="confirm" @click="login">{{ loginDesc }}</button>
                <div class="bottomContent">
                    <button class="forget-password">{{ forgotDesc }}</button>
                    <button class="turn-register" @click="turnRegister">{{ registerDesc }}</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
  
<script>
import router from '@/router/router'

export default {
    name: 'MobileLoginPage',
    props: {
        
    },
    data() {
        return {
            account: "",
            password: "",
            accountDesc: "请输入邮箱",
            passwordDesc: "请输入密码",
            loginDesc: "登录",
            forgotDesc: "忘记密码",
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
        turnRegister() {
            router.replace({ path: '/register' })
        },
        resetStatus() {
            this.isEnglish= localStorage.getItem('isEnglish') == "1";
            this.accountDesc = this.isEnglish ? "Please enter an account" : "请输入邮箱"
            this.passwordDesc = this.isEnglish ? "Please enter the password" : "请输入密码"
            this.loginDesc = this.isEnglish ? "Log on" : "登录"
            this.forgotDesc = this.isEnglish ? "forgot password?" :"忘记密码"
            this.registerDesc = this.isEnglish ? "Register" : "注册"
        }
    }
}
</script>
  
<style scoped>
    .container {
        width: 100vw;
        background-color: #05000F;
        height: 100vh;
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
        margin-bottom: 35px;
        display: flex;
        justify-content: space-around;
    }

    .forget-password {
        text-align: right;
        font-size: 14px;
        color: #999999;
        font-weight: normal;
        border: none;
        outline: none;
        background-color: transparent;
    }

    .turn-register {
        text-align: right;
        font-size: 14px;
        font-weight: normal;
        color: #121212;
        border: none;
        outline: none;
        background-color: transparent;
    }

</style>
  