import { reactive } from "vue"

const auth = {
    user() {
        const localValue = localStorage.getItem("userInfo")
        if (localValue) {
            const userInfo = JSON.parse(localValue)
            return userInfo
        } else {
            return null
        }
    },
    hasLogin() {
        const userInfo = this.user
        if (userInfo) {
            return true
        } else {
            return false
        }
    },
    accessToken() {
        const localValue = localStorage.getItem("authInfo")
        if (localValue) {
            const authInfo = JSON.parse(localValue)
            return authInfo.accessToken
        } else {
            return null
        }
    },
    refreshToken() {
        const localValue = localStorage.getItem("authInfo")
        if (localValue) {
            const authInfo = JSON.parse(localValue)
            return authInfo.refreshToken
        } else {
            return null
        }
    },
    saveAuthInfo(info) {
        let authInfo = reactive({})
        Object.assign(authInfo, info)
        localStorage.setItem('authInfo', JSON.stringify(authInfo))
    },
    saveUserInfo(info) {
        let userInfo = reactive({})
        Object.assign(userInfo, info)
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    logout() {
        localStorage.removeItem("authInfo")
        localStorage.removeItem("userInfo")
    }
}

let install = function (app) {
    app.config.globalProperties.auth = auth
}

export default install