import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueAxios from 'vue-axios'
import axios from './utils/axios'
import store from './store/store'
import auth from './auth/index'
import utils from './utils/utils'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.use(store)
app.use(auth)
app.use(utils)
app.config.globalProperties.$isEnglish = false

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
