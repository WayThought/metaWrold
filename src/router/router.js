import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/home/HomePage'
import RegisterPage from '../pages/register/RegisterPage'
import LoginPage from '../pages/login/LoginPage'
import MinePage from '../pages/mine/MinePage'

const routes = [
    { 
        path: '/', 
        name: 'home',
        component: HomePage
    },
    { 
        path: '/register', 
        name: 'register',
        component: RegisterPage
    },
    { 
        path: '/login', 
        name: 'login',
        component: LoginPage
    },
    { 
        path: '/mine', 
        name: 'mine',
        component: MinePage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router