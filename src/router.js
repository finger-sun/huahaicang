import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter);//初始化

//加载路由地址

import Home from "./components/home.vue"  // 首页
import Brand from "./components/brand.vue"  //商品列表
import Product from "./components/product.vue"  // 商品详情
import Cart from "./components/cart.vue"  // 购物车

import User from "./components/user.vue"  // 个人中心
import Register from "./components/register.vue"  // 注册
import Login from "./components/login.vue"  // 登录
import Address from "./components/address.vue"  // 地区



// import Customer from "./components/customer.vue"  //数据传递axios 模板
// import Spouse from "./components/spouse.vue"

const routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/brand",
        component:Brand
    },
    {
        path:"/product",
        component:Product
    },
    {
        path:"/cart",
        component:Cart
    },
    {
        path:"/user",
        component:User
    },
    {
        path:"/register",
        component:Register
    },
    {
        path:"/login",
        component:Login
    },
	{
        path:"/address",
        component:Address
    },


    // {
    //     path:"/customer",
    //     component:Customer
    // },
    // {
    //     path:"/spouse",
    //     component:Spouse
    // }
]

//实例化
const router = new VueRouter({
	mode:'history',
    routes,
})

//导出路由
export default router;