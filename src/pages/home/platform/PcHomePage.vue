<template>
    <div class="pcAppContainer">
        <div class="nav">
            <div class="navBar wrapper_01">
                <div class="leftNavBar">
                    <img class="leftNavBarMtIcon" src="@/assets/mtIcon.png" alt="logo">
                </div>
                <div class="rightNavBar">
                    <img class="twitter" src="@/assets/icon_twitter.png" alt="logo">
                    <img class="discord" src="@/assets/icon_discord.png" alt="logo">
                    <img class="facebook" src="@/assets/icon_facebook.png" alt="logo">
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
                    <template v-if="isLogin === true">
                        <router-link to="/mine" key="mine">
                            <button class="login">{{ nickname }}</button>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
        <div class="header">
            <div class="headerContainer wrapper_01">
                <img class="titleImage" src="@/assets/icon_title.png" alt="title">
                <div class="titleDesc">Founder</div>
                <div class="ntfDesc">{{ text1 }}</div>
                <img class="nftTitleWin" :src="text2" alt="win">
                <img class="nftTitleUsdt" src="@/assets/icon_usdt.png" alt="usdt">
                <button class="buy" @click="buyBtnClick">BUT NFT</button>
                <div class="bottomDesc">
                    <span class="title">{{ text3 }}</span>
                    <span class="subTitle">{{ text4 }}</span>
                </div>

                <div class="ufoContainer">
                    <img class="headerUfo" src="@/assets/icon_ufo.png" alt="headerUfo">
                    <img class="headerStar first" src="@/assets/icon_star.png" alt="headerStar">
                    <img class="headerStar second" src="@/assets/icon_star.png" alt="headerStar">
                    <img class="headerStar third" src="@/assets/icon_star.png" alt="headerStar">
                </div>
            </div>
        </div>

        <div class="middle">
            <div class="middleContainer wrapper_01">
                <div class="textContainer">
                    <img class="airplane" src="@/assets/icon_airplane.png" alt="">
                    <img class="ufo" src="@/assets/right_ufo.gif" alt="">
                    <span class="title">{{ text5 }}</span>
                    <span class="subTitle">{{ text6 }}</span>
                </div>
                <div class="stepContainer">
                    <PcStepItem class="step1" number="1" title="第一步" :desc="text7" />
                    <PcStepItem class="step2" number="2" title="第二步" :desc="text8" />
                    <PcStepItem class="step3" number="3" title="第三步" :desc="text9" />
                </div>
            </div>
        </div>
        <div class="bottom"></div>
    </div>
    <a class="download_android download" href="http://62.234.164.238/file/wallet.apk"></a>
    <a class="download_ios download" href="#"></a>
</template>
  
<script>
import PcStepItem from '@/components/PcStepItem.vue';
import router from '@/router/router'
import icon_win from '../../../assets/icon_win.png'
import icon_win_chinese from '../../../assets/icon_win_chinese.png'

export default {
    name: 'PcHomePage',
    props: {
        msg: String,
    },
    data() {
        return {
            isLogin: false,
            nickname: '',
            loginDesc: '登录',
            registerDesc: '注册',
            text1: '购买NFT参加第一次测试',
            text2: icon_win_chinese,
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
        PcStepItem
    },
    methods: {
        logout() {
            this.auth.logout()
            this.isLogin = false
            this.nickname = ''
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
            this.text2 = this.isEnglish ? icon_win : icon_win_chinese
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
.nav {
    width: 100%;
    height: 50px;
    background-color: #05000F;
}

.navBar {
    display: flex;
    justify-content: space-between;
    height: 50px;
}

.navBar .leftNavBar {
    display: flex;
    flex-direction: column;
    height: 50px;
    line-height: 50px;
    justify-content: center;
}

.navBar .leftNavBar .leftNavBarMtIcon {
    width: 34px;
    height: 28px;
}

.navBar .rightNavBar {
    display: flex;
    justify-content: space-between;
    width: 417px;
}

.navBar .rightNavBar .twitter {
    margin-top: 12px;
    width: 24px;
    height: 20px;
}

.navBar .rightNavBar .discord {
    margin-top: 13px;
    width: 24px;
    height: 18px;
}

.navBar .rightNavBar .facebook {
    margin-top: 10px;
    width: 24px;
    height: 24px;
}

.navBar .rightNavBar .language {
    display: inline;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: white;
}
.navBar .rightNavBar .language:hover {
    cursor: pointer;
}

.navBar .rightNavBar .register {
    margin-top: 10px;
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

.navBar .rightNavBar .login {
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

.wrapper_01 {
    width: 1200px;
    margin: 0 auto;
}

.pcAppContainer {
    background-color: #05000F;
}

.header {
    width: 100%;
    height: 804px;
    background-image: URL("../../../assets/pcheaderbg.png");
    background-repeat: no-repeat;
    background-position: center;
}

.header .headerContainer {
    color: #3C6CFB;
    display: block;
    background-position: left;
    text-align: left;
}

.header .headerContainer .titleImage {
    margin-top: 35px;
}

.header .headerContainer .titleDesc {
    margin-top: 5px;
    font-size: 20px;
}

.header .headerContainer .ntfDesc {
    margin-top: 56px;
    font-size: 24px;
    color: white;
    font-weight: bold;
}

.header .headerContainer .nftTitleWin {
    margin-top: 15px;
}

.header .headerContainer .nftTitleUsdt {
    position: relative;
    left: 20px;
    top: -5px;
}

.header .headerContainer .buy {
    display: block;
    margin-top: 40px;
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
.header .headerContainer .buy:hover {
    background-image: url("../../../assets/icon_buy_ani.gif");
}

.header .headerContainer .bottomDesc {
    display: block;
    margin-top: 230px;
    background-image: url("../../../assets/bg_header_desc.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 1200px;
    height: 192px;
    padding-top: 50px;
}

.header .headerContainer .bottomDesc .title {
    display: block;
    text-align: left;
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-left: 50px;
}

.header .headerContainer .bottomDesc .subTitle {
    display: block;
    text-align: left;
    color: white;
    font-size: 14px;
    font-weight: normal;
    margin-top: 15px;
    margin-left: 50px;
    margin-right: 50px;
}

.header .headerContainer .ufoContainer {
    position: relative;
    margin-top: -750px;
    margin-left: 650px;
}

.header .headerContainer .ufoContainer .headerUfo {
    position: absolute;
    top: 0;
    left: 0;
}

.header .headerContainer .ufoContainer .first {
    position: absolute;
    top: 0px;
    left: 260px;
    opacity: 0;
    animation-name: zoomInOut;
    animation-delay: 0s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transform-origin: center;
}

.header .headerContainer .ufoContainer .second {
    position: absolute;
    top: 455px;
    left: 160px;
    opacity: 0;
    animation-name: zoomInOut;
    animation-delay: 1s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transform-origin: center;

}

.header .headerContainer .ufoContainer .third {
    position: absolute;
    top: 280px;
    left: 425px;
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

@keyframes fadeInOut {
    50% {
        opacity: 1;
    }
}

.middle {
    width: 100%;
    height: 804px;
    background-image: URL("../../../assets/pcmidbg.png");
    background-repeat: no-repeat;
    background-position: center;
}

.middle .middleContainer {
    position: relative;
}

.middle .middleContainer .textContainer {
    position: relative;
    margin-left: 557px;
}

.middle .middleContainer .textContainer .airplane {
    position: absolute;
    left: -150px;
    top: 100px
}
.middle .middleContainer .textContainer .ufo {
    position: absolute;
    left: 450px;
    top: 80px;
}

.middle .middleContainer .textContainer .title {
    position: absolute;
    display: block;
    text-align: left;
    color: white;
    font-size: 24px;
    font-weight: bold;
    top: 150px;
}

.middle .middleContainer .textContainer .subTitle {
    position: absolute;
    display: block;
    text-align: left;
    color: white;
    font-size: 14px;
    font-weight: normal;
    margin-top: 24px;
    top: 180px;
}

.middle .middleContainer .stepContainer {
    position: absolute;
    left: 0;
    top: 540px;
    right: 0;

}

.step1 {
    margin-top: 20px;
}

.step2 {
    margin-top: 45px;
}

.step3 {
    margin-top: 45px;
}

.bottom {
    width: 100%;
    height: 1600px;
    background-color: #05000F;
}

.download {
    position: fixed;
    right: 10px;
    width: 57px;
    height: 57px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
}

.download_ios {
    top: 45%;
    background-image: url(../../../assets/icon_download_ios.png);
}

.download_android {
    top: 52%;
    background-image: url(../../../assets/icon_download_android.png);
}
</style>
  