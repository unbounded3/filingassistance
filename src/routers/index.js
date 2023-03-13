import Login from "@/views/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
// import Index from "@/views/Index.vue";
import User from "@/views/User.vue";

const Index = () => import('../views/Index.vue')//懒加载

/*
创建路由表
 */
const routes = [
    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/index',
        name:'index',
        component:Index,
        redirect: '/index/user',//只要显示index就会跳到user
        children:[
            {
                path:'user',
                name:'User',
                component:User
            }
        ]
    },

]

/*
创建路由实例
 */
const router = createRouter({
    history:createWebHistory(),
    routes
})

export {router}