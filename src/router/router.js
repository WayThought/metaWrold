import { createRouter, createWebHashHistory } from 'vue-router'
import PcHomePage from '../pages/home/PcHomePage'
import PcRegisterPage from '../pages/register/PcRegisterPage'

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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router