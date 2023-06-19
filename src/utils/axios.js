import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.104.246:3000'
axios.defaults.timeout = 10000

axios.interceptors.request.use(
    config => {
        const localValue = localStorage.getItem("authInfo")
        if (localValue) {
            const authInfo = JSON.parse(localValue)
            if (authInfo) {
                const token = authInfo.accessToken
                token && (config.headers.Authorization = `Bearer ${token}`)
            }
        }
        return config
    },
    error => {
        return Promise.error(error)
    }
)

export default axios