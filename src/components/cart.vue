<template>
    <div id="cart">
        <header>
            <span class="left" @click="handerclick()">
                <i class="iconfont icon-fanhui"></i>
            </span>
            <span>购物车</span>
        </header>

        <div class="main">
                <div class="cartlist clearfix">
                    <a href="" class="cart_image">
                        <img src="http://a2.vimage1.com/upload/merchandise//4808/FOX-2472806800-5.jpg">
                    </a>
                    <div class="cart_info">
                        <a href="" class="cart_a">
                            <p class="cart_g_name">女款白、黄色条纹休闲背心</p>
                            <p class="cart_b_name">花海仓APP-vi(第72批)</p>
                            <p class="fontgrey">尺码:40</p>
                        </a>

                        <!-- 商品数量加减 -->
                        <div class="amount-confirm-box">
                            <a>-</a>
                            <span>2</span>
                            <a>+</a>
                        </div>
                        <a href="" class="cart_price">
                            ￥14
                        </a>
                        <span class="delete">
                            <img src="https://m.huahaicang.cn/view-src/default/images/common/scan_layer-33.png">
                        </span>

                    </div>
                </div>
                <div class="cartlist clearfix">
                    <a href="" class="cart_image">
                        <img src="http://a2.vimage1.com/upload/merchandise//4808/FOX-2472806800-5.jpg">
                    </a>
                    <div class="cart_info">
                        <a href="" class="cart_a">
                            <p class="cart_g_name">女款白、黄色条纹休闲背心</p>
                            <p class="cart_b_name">花海仓APP-vi(第72批)</p>
                            <p class="fontgrey">尺码:40</p>
                        </a>

                        <!-- 商品数量加减 -->
                        <div class="amount-confirm-box">
                            <a>-</a>
                            <span>2</span>
                            <a>+</a>
                        </div>
                        <a href="" class="cart_price">
                            ￥14
                        </a>
                        <span class="delete">
                            <img src="https://m.huahaicang.cn/view-src/default/images/common/scan_layer-33.png">
                        </span>

                    </div>
                </div>

        </div>

       <!-- 固定在底部的结算按钮 -->
       <div class="footer">
            <div class="left">
                总金额
                <span>￥28</span>
            </div>
            <div class="right">
                <span>马上结算</span>
            </div>
       </div>
    </div>
</template>
<script>
    import router from "../router";
    export default{
        mounted(){

        },
        data(){
                return{

                }
        },
        methods:{
            handerclick(){
                    console.log(12345);
                    router.go(-1)
            }
        },
        computed:{

        }
    }

</script>

<style lang="scss" scoped>
    *{
        list-style:none;
        text-decoration:none;

    }
    #cart{
        height:100%;
        background:#ccc;
    }
    header{
        background: rgb(221,38,40);
        width:100%;
        height:0.96rem;
        font-size: .4rem;
        line-height: .96rem;
        color:#fff;
        text-align:center;

        .left{
            float:left;
            i{
                font-size:.5rem;
            }
        }
        .right{
            float:right;
            i{
                font-size:.5rem;
            }
        }
    }
    .main{
        background:#ccc;
        width:100%;
        // padding-bottom:800px;
        overflow:hidden;
        .cartlist{
            background:#fff;
            display: flex;
            padding:10px;
            position:relative;
            margin:5px 0;
            .cart_image{
                display:block;
                img{
                    width:176px;
                    height:202px;
                }
            }
            .cart_info{
                font-size:.24rem;
                .cart_a{
                    overflow: hidden;
                    display:block;
                }
                .cart_g_name{
                    font-size:26px;
                    color:#000;
                    line-height:32px;
                }
                .cart_b_name{
                    color:#999;
                    padding:10px 0;
                }
                .fontgrey{
                    color:#999;
                    padding-bottom:5px;
                }
                .amount-confirm-box{
                    position: absolute;
                    bottom:40px;
                    display:flex;

                    a{
                        color: #d2d2d2;
                        border: 1px solid;
                        display:block;
                        width: 50px;
                        height:50px;
                        display:block;
                        line-height: 150px;
                        text-align:center;
                        vertical-align: middle;
                        line-height: 32px;
                        font-size:40px;
                        font-weight:600;

                    }
                    span{
                        width: 50px;
                        height:50px;
                        line-height: 50px;
                        border: 1px solid #ccc;
                        text-align:center;
                        vertical-align: middle;
                    }
                }
            }
            .cart_price{
                position:absolute;
                right:30px;
                top:80px;
                font-size:.4rem;
                color:red;
            }
            .delete{
                position:absolute;
                right:45px;
                bottom:45px;
            }
        }
    }


    .footer{
        position:fixed;
        background: #fff;
        bottom:1px;
        left: 1px;
        width:100%;
        height:110px;
        z-index:10;

        .left{
            float:left;
            background:#fff;
            font-size:.4rem;
            line-height: 110px;
            text-indent:.4rem;
            span{
                color:red;
            }
        }
        .right{
            background:#dd2628;
            float:right;
            font-size:.32rem;
            line-height: 110px;
            font-weight: 400;
            width:35%;
            height:100%;
            text-align:left;
            padding-left:.3rem;
            span{
                color:#fff;
            }
        }
    }

    .clearfix{
        zoom:1;
        clear:both;
    }
</style>