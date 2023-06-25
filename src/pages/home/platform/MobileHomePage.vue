<template>
    <div class="container">
        <div class="header">
            <div class="nav">
                <img class="nav_logo" src="@/assets/icon_mobile_logo.png" alt="">
                <div class="buttonContent">
                    <el-dropdown trigger="click">
                        <span class="language">language/语言</span>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="languageChangeToEnglish">English</el-dropdown-item>
                            <el-dropdown-item @click="languageChangeToChinese">中文</el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>

                    <template v-if="isLogin === false">
                        <router-link to="/register" key="register">
                            <button class="register">{{ registerDesc }}</button>
                        </router-link>
                        <router-link to="/login" key="login">
                            <button class="login">{{ loginDesc }}</button>
                        </router-link>
                    </template>
                    <template v-else>
                        <router-link to="/mine" key="login">
                            <button class="login">{{ nickname }}</button>
                        </router-link>
                    </template>
                </div>
            </div>
            <img class="title" src="@/assets/icon_title.png" alt="">
            <span class="desc">Founder</span>
            <img class="headerStar first" src="@/assets/icon_star.png" alt="headerStar">
            <img class="headerStar second" src="@/assets/icon_star.png" alt="headerStar">
            <img class="headerStar third" src="@/assets/icon_star.png" alt="headerStar">

        </div>
        <div class="buy_desc">{{ text1 }}</div>

        <div class="buy_number">{{ text2 }}</div>
        <img class="buy_unit" src="@/assets/mobile_home_unit.png" alt="">
        <button class="buy" @click="buyBtnClick">BUT NFT</button>
        <div class="instruction">
            <span class="title">{{ text3 }}</span>
            <span class="desc">{{ text4 }}</span>
        </div>
        <div class="game">
            <span class="desc">{{ text5 }}</span>
        </div>
        <div class="game_instruction">{{ text6 }}</div>
        <MobileStepItem class="first" number="1" title="第一步" :desc="text7"></MobileStepItem>
        <MobileStepItem class="second" number="2" title="第二步" :desc="text8"></MobileStepItem>
        <MobileStepItem class="third" number="3" title="第三步" :desc="text9"></MobileStepItem>
    </div>
    <div class="bottomContent"></div>
    <div class="downloadContent">
        <a class="download_android download" href="http://62.234.164.238/file/wallet.apk"></a>
        <a class="download_ios download" href="#"></a>
    </div>
</template>
  
<script>

import MobileStepItem from '@/components/MobileStepItem.vue'
import router from '@/router/router'

export default {
    name: 'MobileHomePage',
    props: {
        
    },
    data() {
        return {
            isLogin: false,
            nickname: '',
            loginDesc: '登录',
            registerDesc: '注册',
            text1: '购买NFT参加第一次测试',
            text2: "赢得 10,000",
            text3: "首测说明：",
            text4: "购买首发NFT既可 以参与创世大富翁的首次测试。首減采用排位赛模式，为其15的首测结束后排名前十的玩家既可以瓜分10000USDT的奖励！首发NFT 一共2000个，定价29.99美金。每个NFT每天可以产生800金币用于游戏对战消耗！",
            text5: "一个Web3.0元宇宙区块链游戏",
            text6: "在创世大富翁的世界里，您將利用独一无二的NFT角色来获得金币，并在棋牌游戏中利用您的策略取胜从而获得我们的 虛拟代币F。 您可以利用F币在虛拟城市中购买房屋以产生更多的金币收入，还可以利用 F通过投票获得城市的管辖权定价权。拥有更多的金币參与到更高层测的 棋牌对局从而获得更多的虛拟代币，创建一个玩家可以通过游戏赚取利润的区块链元宇宙世界！",
            text7: "发布Founder平台上的NFT，每个NFT根据职业的不同可以获得每日的薪资（金币），金币可以用来进行棋牌类游戏，以及Founder平台后续开发的游戏。",
            text8: "玩家通过Founder平台上游戏的对决获胜和活跃的获得虛拟代币F",
            text9: "通过代币F可以在庭拟世界中购买土地搭建自己的房子产生金币收入，也可以通过 代币F在虚拟世界中进行投票和代理，从而达到一个玩家自制的元宇宙世界。",
            isEnglish: false,
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
        this.resetStatus()
    },
    components: {
        MobileStepItem,
    },
    methods: {
        languageChage() {
            const status = localStorage.getItem('isEnglish');
            if (status == "1") {
                localStorage.setItem('isEnglish', "0");
            } else {
                localStorage.setItem('isEnglish', "1");
            }
            this.resetStatus()
        },
        languageChangeToEnglish() {
            localStorage.setItem('isEnglish', "1")
            this.resetStatus()
        },
        languageChangeToChinese() {
            localStorage.setItem('isEnglish', "0")
            this.resetStatus()
        },
        resetStatus() {
            this.isEnglish = localStorage.getItem('isEnglish') == "1";
            this.loginDesc = this.isEnglish ? "Login" : "登录"
            this.registerDesc = this.isEnglish ? "Register" : "注册"
            this.text1 = this.isEnglish ? "Buy NFT to participate in the first test" : "购买NFT参加第一次测试"
            this.text2 = this.isEnglish ? "Win 10,000" : "赢得 10,000"
            this.text3 = this.isEnglish ? "First test instructions" : "首测说明："
            this.text4 = this.isEnglish ? "By purchasing the first NFT, you can participate in the first test of Genesis  Monopoly. The first round reduction adopts a qualifying mode, and players ranked in the top ten after the first round of 15 can receive a reward of 10000 USDT! There are a total of 2000 initial  NFTs priced at $29.99. Each NFT can generate 800 coins per day for gameplay consumption!" : "购买首发NFT既可 以参与创世大富翁的首次测试。首減采用排位赛模式，为其15的首测结束后排名前十的玩家既可以瓜分10000USDT的奖励！首发NFT 一共2000个，定价29.99美金。每个NFT每天可以产生800金币用于游戏对战消耗！"
            this.text5 = this.isEnglish ? "A Web3.0 Metaverse Blockchain Game" : "一个Web3.0元宇宙区块链游戏"
            this.text6 = this.isEnglish ? "In the world of Genesis Monopoly, you will use unique NFT characters to earn coins and use your strategies to win in board games to obtain our virtual token F. You can use F coins to purchase houses in a virtual city to generate more gold coin income, and you can also use F coins to obtain the jurisdiction pricing power of the city through voting. Having more gold coins to participate in higher level chess and card games to obtain more virtual tokens, creating a blockchain metaverse world where players can earn profits through the game" : "在创世大富翁的世界里，您將利用独一无二的NFT角色来获得金币，并在棋牌游戏中利用您的策略取胜从而获得我们的 虛拟代币F。 您可以利用F币在虛拟城市中购买房屋以产生更多的金币收入，还可以利用 F通过投票获得城市的管辖权定价权。拥有更多的金币參与到更高层测的 棋牌对局从而获得更多的虛拟代币，创建一个玩家可以通过游戏赚取利润的区块链元宇宙世界！"
            this.text7 = this.isEnglish ? "Publish NFTs on the Founder platform, and each NFT can receive a daily salary (in gold coins) based on their profession. Gold coins can be used for playing board and card games, as well as games developed on the Founder platform." : "发布Founder平台上的NFT，每个NFT根据职业的不同可以获得每日的薪资（金币），金币可以用来进行棋牌类游戏，以及Founder平台后续开发的游戏。"
            this.text8 = this.isEnglish ? "Players win battles and actively obtain virtual tokens through games on the Founder platform" : "玩家通过Founder平台上游戏的对决获胜和活跃的获得虛拟代币F"
            this.text9 = this.isEnglish ? "By using token F, one can purchase land and build their own house in the virtual world to generate gold income, or vote and represent in the virtual world through token F, thus achieving a player made metaverse world." : "通过代币F可以在庭拟世界中购买土地搭建自己的房子产生金币收入，也可以通过 代币F在虚拟世界中进行投票和代理，从而达到一个玩家自制的元宇宙世界。"
        },
        buyBtnClick() {
            if (this.isLogin) {
                console.log('已登录')
            } else {
                router.replace({ path: '/login' })
            }
        }
    }
}
</script>
  
<style scoped>
    .container {
        width: 100%;
        background-color: #05000F;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        left: 0;
        top: 0;
        height: 50px;
        line-height: 50px;
        margin-left: 10px;
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
    .buttonContent .language {
        display: inline;
        line-height: 50px;
        margin-right: 8px;
        height: 50px;
        font-size: 14px;
        color: white;
    }
    .buttonContent .language:hover {
        cursor: pointer;
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


    .header .headerStar {
        width: 20px;
        height: 20px;
    }

    .header .first {
        position: absolute;
        top: 52px;
        left: 287px;
        opacity: 0;
        animation-name: zoomInOut;
        animation-delay: 0s;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: center;
    }

    .header .second {
        position: absolute;
        top: 234px;
        left: 240px;
        opacity: 0;
        animation-name: zoomInOut;
        animation-delay: 1s;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: center;

    }

    .header .third {
        position: absolute;
        top: 160px;
        left: 360px;
        opacity: 0;
        animation-name: zoomInOut;
        animation-delay: 2s;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: center;
    }

    @keyframes zoomInOut {
        0% {
            transform: scale(0);
            opacity: 0;
        }

        20% {
            transform: scale(1);
            opacity: 1;
        }

        40% {
            transform: scale(0);
            opacity: 0;
        }

        60%,
        80%,
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }



     .buy_desc {
        position: relative;
        margin-top: -30px;
        margin-left: 12px;
        margin-right: 12px;
        font-size: 24px;
        font-weight: normal;
        text-align: left;
        color: white;
        z-index: 1;
    }
    .buy_number {
        margin-top: 6px;
        margin-left: 12px;    
        font-size: 46px;
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
        top: 52px;
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
    .downloadContent {
        position: fixed;
        display: inline-block;
        top: 45%;
        right: 10px;
        width: 30px;
        height: 50px;
    }
    .download {
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: white;
        background-size: cover;
        border-radius: 4px;
    }

    .download_ios {
        margin-top: 0px;
        display: inline-block;
        background-image: url(../../../assets/mobile_icon_download_ios.png);
    }

    .download_android {
        margin-top: 10px;
        display: inline-block;
        background-image: url(../../../assets/mobile_icon_download_android.png);
    }
</style>

  