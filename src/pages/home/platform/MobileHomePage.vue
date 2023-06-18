<template>
    <div class="container">
        <div class="header">
            <div class="nav">
                <img class="nav_logo" src="@/assets/icon_mobile_logo.png" alt="">
                <div class="buttonContent">
                    <template v-if="isLogin === false">
                        <router-link to="/register" key="register">
                            <button class="register">Register</button>
                        </router-link>
                        <router-link to="/login" key="login">
                            <button class="login">Login</button>
                        </router-link>
                    </template>
                </div>
            </div>
            <img class="title" src="@/assets/icon_title.png" alt="">
            <span class="desc">Founder</span>
            <div class="buy_desc">Buy NFT to participate in the first test</div>
        </div>

        <div class="buy_number">Win 10,000</div>
        <img class="buy_unit" src="@/assets/mobile_home_unit.png" alt="">
        <button class="buy">BUT NFT</button>
        <div class="instruction">
            <span class="title">First test instructions</span>
            <span class="desc">By purchasing the first NFT, you can participate in the first test of Genesis Monopoly. The first round reduction adopts a qualifying mode, and players ranked in the top ten after the first round of 15 can receive a reward of 10000 USDT! There are a total of 2000 initial NFTs priced at $29.99. Each NFT can generate 800 coins per day for gameplay consumption!</span>
        </div>
        <div class="game">
            <span class="desc">A Web3.0 Metaverse Blockchain Game</span>
        </div>
        <div class="game_instruction">In the world of Genesis Monopoly, you will use unique NFT characters to earn coins and use your strategies to win in board games to obtain our virtual token F. You can use F coins to purchase houses in a virtual city to generate more gold coin income, and you can also use F coins to obtain the jurisdiction pricing power of the city through voting. Having more gold coins to participate in higher level chess and card games to obtain more virtual tokens, creating a blockchain metaverse world where players can earn profits through the game</div>
        <MobileStepItem class="first" number="1" title="第一步" desc="Publish NFTs on the Founder platform, and each NFT can receive a daily salary (in gold coins) based on their profession. Gold coins can be used for playing board and card games, as well as games developed on the Founder platform."></MobileStepItem>
        <MobileStepItem class="second" number="2" title="第二步" desc="Players win battles and actively obtain virtual tokens through games on the Founder platform."></MobileStepItem>
        <MobileStepItem class="third" number="3" title="第三步" desc="By using token F, one can purchase land and build their own house in the virtual world to generate gold income, or vote and represent in the virtual world through token F, thus achieving a player made metaverse world."></MobileStepItem>
    </div>
    <div class="bottomContent"></div>
</template>
  
<script>

import MobileStepItem from '@/components/MobileStepItem.vue'

export default {
    name: 'MobileHomePage',
    props: {
        
    },
    data() {
        return {
            isLogin: false,
            nickname: ''
        }
    },
    created() {
        const hasLogin = this.auth.hasLogin()
        const userInfo = this.auth.user()
        if (hasLogin && userInfo) {
            const nickname = userInfo.nickname
            this.isLogin = hasLogin
            this.nickname = nickname
        } else {
            this.isLogin = false
            this.nickname = 'Login'
        }
    },
    components: {
        MobileStepItem,
    },
    methods: {
        
    }
}
</script>
  
<style scoped>
    .container {
        background-color: #05000F;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        left: 0;
        top: 0;
        height: 50px;
        line-height: 50px;
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;  
        background-color: rgb(0, 0, 0, 0.4);
    }
    .nav_logo {
        margin-top: 16px;
        width: 35px;
        height: 28px; 
    }
    .buttonContent {
        margin-right: 20px;
    }
    .buttonContent .register {
        margin-top: 10px;
        margin-right: 8px;
        width: 80px;
        height: 30px;
        font-size: 14px;
        color: white;
        text-align: center;
        background-image: url("../../../assets/icon_register.png");
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        background-color: transparent;
    }
    .buttonContent .login {
        margin-top: 10px;
        width: 79px;
        height: 28px;
        font-size: 14px;
        color: white;
        background-image: url("../../../assets/icon_login.png");
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        background-color: transparent;
    }
    .header {
        position: relative;
        width: 100%;
        height: 286px;
        background-image: url("../../../assets/mobile_icon_header_title.png");
        background-repeat: no-repeat;
        background-position: center;
    }
    .header .title {
        position: absolute;
        left: 16px;
        top: 66px;
    }
    .header .desc {
        position: absolute;
        left: 16px;
        top: 115px;
        font-size: 20px;
        font-weight: normal;
        color: #3C6CFB;
    }
    .header .buy_desc {
        margin-top: 210px;
        margin-left: 12px;
        margin-right: 12px;
        font-size: 24px;
        font-weight: normal;
        text-align: left;
        color: white;
    }
    .buy_number {
        margin-top: 40px;
        margin-left: 12px;    
        font-size: 48px;
        font-weight: bold;
        text-align: left;
        color: white;
    }
    .buy_unit {
        display: block;
        margin-top: 2px;
        margin-left: 12px;    
        font-size: 48px;
        font-weight: bold;
        text-align: left;
    }
    .buy {
        display: block;
        margin-top: 40px;
        margin-left: 12px; 
        width: 249px;
        height: 60px;
        font-size: 24px;
        font-weight: bold;
        color: white;
        text-align: center;
        background-image: url("../../../assets/icon_buy.png");
        background-repeat: no-repeat;
        background-position: center;
        border: none;
        background-color: transparent;
        border-radius: 30px;
    }
    /* .buy:hover {
        background-image: url("../../../assets/icon_buy_ani.gif");
    } */

    .instruction {
        display: block;
        position: relative;
        background-image: url("../../../assets/mobile_instruction_bg.png");
        background-repeat: no-repeat;
        background-position: center;
        width: 343px;
        height: 258px;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;
        /* padding-top: 50px; */
    }
    .instruction .title {
        display: block;
        position: absolute;
        font-size: 24px;
        left: 12px;
        top: 12px;
        font-weight: 900;
        text-align: left;
        color: white;
    }
    .instruction .desc {
        display: block;
        position: absolute;
        left: 12px;
        top: 46px;
        right: 12px;
        font-size: 16px;
        text-align: left;
        color: white;
    }

    .game {
        display: block;
        position: relative;
        background-image: url("../../../assets/mobile_game.png");
        background-repeat: no-repeat;
        background-position: center;
        width: 375px;
        height: 484px;
    }
    .game .desc {
        display: block;
        position: absolute;
        left: 12px;
        right: 100px;
        bottom: 8px;
        font-size: 24px;
        font-weight: 900;
        color: white;
        text-align: left;
    }
    .game_instruction {
        font-size: 14px;
        font-weight: 500;
        color: white;
        margin: 12px 12px 0px 12px;
        text-align: left;
    }
    .bottomContent {
        height: 60px;
        background-color: #05000F;
    }
</style>

  