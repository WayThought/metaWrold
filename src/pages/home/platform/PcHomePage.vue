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
                    <span class="language">language/语言</span>
                    <template v-if="isLogin === false">
                        <router-link to="/register" key="register">
                            <button class="register">Register</button>
                        </router-link>
                        <router-link to="/login" key="login">
                            <button class="login">Login</button>
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
                <div class="ntfDesc">Buy NFT to participate in the first test</div>
                <img class="nftTitleWin" src="@/assets/icon_win.png" alt="win">
                <img class="nftTitleUsdt" src="@/assets/icon_usdt.png" alt="usdt">
                <button class="buy">BUT NFT</button>
                <div class="bottomDesc">
                    <span class="title">First test instructions</span>
                    <span class="subTitle">By purchasing the first NFT, you can participate in the first test of Genesis
                        Monopoly. The first round reduction adopts a qualifying mode, and players ranked in the top ten
                        after the first round of 15 can receive a reward of 10000 USDT! There are a total of 2000 initial
                        NFTs priced at $29.99. Each NFT can generate 800 coins per day for gameplay consumption!</span>
                </div>

                <div class="ufoContainer">
                    <img class="headerUfo" src="@/assets/icon_ufo.png" alt="headerUfo">
                    <img class="headerStar first show" src="@/assets/icon_star.png" alt="headerStar">
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
                    <span class="title">A Web3.0 Metaverse Blockchain Game</span>
                    <span class="subTitle">In the world of Genesis Monopoly, you will use unique NFT characters to earn
                        coins and use your strategies to win in board games to obtain our virtual token F. You can use F
                        coins to purchase houses in a virtual city to generate more gold coin income, and you can also use F
                        coins to obtain the jurisdiction pricing power of the city through voting. Having more gold coins to
                        participate in higher level chess and card games to obtain more virtual tokens, creating a
                        blockchain metaverse world where players can earn profits through the game</span>
                </div>
                <div class="stepContainer">
                    <img class="line" src="@/assets/bg_line.png" alt="线">
                    <div class="stepRadioItem">1</div>
                    <div class="stepRadioItem second">2</div>
                    <div class="stepRadioItem third">3</div>
                    <PcStepItem class="step1" title="第一步"
                        desc="Publish NFTs on the Founder platform, and each NFT can receive a daily salary (in gold coins) based on their profession. Gold coins can be used for playing board and card games, as well as games developed on the Founder platform." />
                    <PcStepItem class="step2" title="第二步"
                        desc="Players win battles and actively obtain virtual tokens through games on the Founder platform" />
                    <PcStepItem class="step3" title="第三步"
                        desc="By using token F, one can purchase land and build their own house in the virtual world to generate gold income, or vote and represent in the virtual world through token F, thus achieving a player made metaverse world." />
                </div>
            </div>
        </div>
        <div class="bottom"></div>
    </div>
    <a class="download_android download" href="#"></a>
    <a class="download_ios download" href="#"></a>
</template>
  
<script>
import PcStepItem from '@/components/PcStepItem.vue';

export default {
    name: 'PcHomePage',
    props: {
        msg: String
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
        PcStepItem
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
    margin-top: 10px;
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
    margin-top: 14px;
    height: 28px;
    font-size: 14px;
    color: white;
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
    top: 80px
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

.middle .middleContainer .stepContainer .line {
    position: absolute;
    left: 0;
    top: 0;
}

.middle .middleContainer .stepContainer .stepRadioItem {
    position: absolute;
    background-color: #4C62FB;
    color: white;
    font-size: 14px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 50%;
    left: -12px;
}

.middle .middleContainer .stepContainer .second {
    top: 140px;
}

.middle .middleContainer .stepContainer .third {
    top: 280px;
}

.step1 {
    top: 2px;
}

.step2 {
    top: 55px;
}

.step3 {
    top: 125px;
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
    top: 500px;
    background-image: url(../../../assets/icon_download_ios.png);
}

.download_android {
    top: 580px;
    background-image: url(../../../assets/icon_download_android.png);
}
</style>
  