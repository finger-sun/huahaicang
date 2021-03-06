import Vue from 'vue'
import VueRouter from "vue-router"

import Mintui from "mint-ui"
Vue.use(Mintui);
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




var routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },

    //当路径为/brand  /product时 重定向到home页面
    {
        path:"/brand",
        component:Brand,
        redirect:"/home"
    },
    {
        path:"/product",
        component:Product,
        redirect:"/home"
    },

    {
        path:"/brand/*",
        component:Brand
    },
    {
        path:"/product/*",
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


]

//实例化
const router = new VueRouter({
    mode: 'hash', // url 看起来美观了 。，支持两个值hash,histroy
    routes  //es6  对象简写
    });

//导出路由
export default router;
