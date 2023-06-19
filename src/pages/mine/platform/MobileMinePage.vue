
<template>
    <div class="container">

        <div class="logo"></div>
        <div class="userName">昵称: {{ nickname }}</div>
        <div class="email">邮箱: {{ email }}</div>
        <div class="nft">USDT: 0</div>
        <div class="nft">拥有的NFT: 0个</div>
        <div class="usdt-link">USDT地址(用于提取奖励): 0xbe4e3699cb870bc95365fe04a187dd279a651a58</div>
         
        <div class="invitationcode">邀请码: {{ invitationcode }}</div>
        <router-link to="/" key="home">
            <button class="logout" @click="logout">退出登录</button>
        </router-link>
    </div>
</template>
  
<script>
export default {
    name: 'MobileMinePage',
    props: {
        
    },
    data() {
        return {
            isLogin: false,
            nickname: '',
            email: '',
            invitationcode: '',
            isMobine: this.utils.isMobine()
        }
    },
    created() {
        const hasLogin = this.auth.hasLogin()
        const userInfo = this.auth.user()
        if (hasLogin && userInfo) {
            const nickname = userInfo.nickname
            this.isLogin = hasLogin
            this.nickname = nickname
            this.email = userInfo.email
            this.invitationcode = userInfo.invitationCode
        } else {
            this.isLogin = false
            this.nickname = ''
            this.email = ''
            this.invitationcode = ''
        }
    },
    components: {
    },
    methods: {
        logout() {
            this.auth.logout()
            this.isLogin = false
            this.nickname = ''
        }
    }
}
</script>
<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background-color: #05000F;
}
.container .logo {
    display: inline-block;
    background-image: url(../../../assets/icon_register_logo.png);
    width: 58px;
    height: 47px;
    margin-top: 32px;
    margin-left: 16px;
}
.userName {
    margin-top: 20px;
    color: white;
}
.email {
    margin-top: 20px;
    color: white;
}
.nft {
    margin-top: 20px;
    color: white;
}
.usdt-link {
    margin-top: 20px;
    color: white;
}
.invitationcode {
    margin-top: 20px;
    color: white;
}
.logout {
    margin-top: 20px;
}
</style>
  