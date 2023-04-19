import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router';
import { usePermissStore } from '@/store/permiss';
import Home from "@/views/home.vue"


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            title: '首页'
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta:{
            title: '登录'
        },
        component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

export default router;