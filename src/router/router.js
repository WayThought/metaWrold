import { createRouter, createWebHashHistory } from 'vue-router'
import PcHomePage from '../pages/home/PcHomePage'
import PcRegisterPage from '../pages/register/PcRegisterPage'
import PcLoginPage from '../pages/login/PcLoginPage'

const routes = [
    { 
        path: '/', 
        name: 'pchome',
        component: PcHomePage
    },
    { 
        path: '/pcregister', 
        name: 'pcregister',
        component: PcRegisterPage
    },
    { 
        path: '/pclogin', 
        name: 'pclogin',
        component: PcLoginPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router