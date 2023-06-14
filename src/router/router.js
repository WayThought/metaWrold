// import Vue from 'vue'
// import VueRouter from 'vue-router'
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
    // { 
    //     path: '/pclogin', 
    //     name: 'pclogin',
    //     component: PcLoginPage
    // }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
export default router