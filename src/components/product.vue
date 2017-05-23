<template>
    <div id="product">
        <header>
                <span class="left" @click="handerclick()">
                    <i class="iconfont icon-fanhui"></i>
                </span>
            <span>VERSAC红色印花</span>
            
            <router-link to="/home">
	            <span class="right">
	                <i class="iconfont icon-zhuye"></i>   
	            </span>
            </router-link>
            
        </header>
        <div class="main">
            <div class="banner">
                <mt-swipe :auto="0" :show-indicators="false">
                  <mt-swipe-item v-for="data in datalist">
                      <img :src="data">
                      <!-- data -->
                  </mt-swipe-item>

                </mt-swipe>
           </div>



            <div class="prd-sale">
                海涛魏霞拍下件5折
            </div>

            <div class="good_info">
                <h1>
                    VERSACE哪款红色logo印花t
                    <span>
                        <img src="http://a.vpimg3.com/upload/brandcool/0/2016/04/05/171/bc3a7b8e-d73e-4f8c-8fc3-0ea66990c64f.png">
                    </span>
                </h1>

                <div class="ht-price">
                    <span class=left>
                       一价全包
                    </span>
                    <span class="right">
                        价格表示人民币一口价，已包含税费和国际国内运费
                    </span>
                </div>
                <div class="ht-zp">
                    <img src="https://m.huahaicang.cn/view-src/default/images/ht_zp.png" alt="">
                </div>
                <div class="u-detail-line"></div>
                <div class="good_salesize clearfix">
                    <span>尺码</span>
                    <ul class="good_size">
                        <li>s</li>
                    </ul>
                </div>
                <div class="u-detail-line"></div>
                <div class="ht-time">
                    <span class="left">
                        预计到达时间：
                    </span class="right">
                    <span>2017-05-29（5个工作日）</span>
                </div>
                <div class="u-detail-line"></div>
            </div>
            <!-- 商品信息 -->
            <div class="product_detail">
                <h3 class="prd-title">
                    商品信息
                </h3>
                <div class="dc-info pro-detail-info">
                    <table>
                        <tr>
                            <td class="td-title">品牌名称</td>
                            <td>Versace/范思泽</td>
                        </tr>
                        <tr>
                            <td class="td-title">商品名称</td>
                            <td>Versace/男款红色log印花t</td>
                        </tr>
                        <tr>
                            <td class="td-title">材质</td>
                            <td>100% 棉</td>
                        </tr>
                        <tr>
                            <td class="td-title">洗涤说明</td>
                            <td>柔和手洗 不可漂洗 不可干洗 低温熨烫 不可翻转 干燥</td>
                        </tr>
                        <tr>
                            <td class="td-title">产地</td>
                            <td>意大利</td>
                        </tr>
                    </table>
                </div>
                <div class="u-detail-line"></div>
                <h3 class="prd-title">
                    购物须知
                </h3>
                <div class="prd-tips pro-detail-info">
                    <p>1.花海仓海淘商品提供人民币一口价，为您承担税费和国际国内邮费，全球精选，一价全包;</p>
                    <p>2.海外直发商品暂时不支持开具发票；</p>
                    <p>3.除彩妆工具类商品外，其他商品不支持七天无条件退货；</p>
                    <p>4.购买前如有任何疑问，欢迎致电：400-6493-368；</p>
                </div>
                <div>
                    <img src="https://m.huahaicang.cn/view-src/default/images/ht_pk.png">
                </div>
            </div>
        </div>

       <!-- 固定在底部的购买按钮 -->
       <div class="footer">
            <div class="left">
                <router-link to="/cart">
                    <i class="iconfont icon-gouwuche"></i>
                </router-link>
            </div>
            <div class="right">
                <span>加入购物车</span>
            </div>
       </div>
    </div>
</template>

<script>
import router from "../router";
//import "../assets/iconfont01/iconfont.css";
import 'mint-ui/lib/style.css';
// import router from "vue-router";

//http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-1.jpg


    export default{
        mounted(){

        },
        data(){
            return{
                datalist:["http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-1.jpg",
                 "http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-2.jpg",
                 "http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-3.jpg",
                 "http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-4.jpg"]
                // datalist:["已婚","未婚","离异","丧偶"],

            }
        },
        methods:{

            handerclick(){
                router.go(-1);
            }
        },
        computed:{
        }
    }
</script>

<style lang="scss" scoped>
    *{
        list-style:none;

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
        width:100%;
        height:100%;
        padding-bottom: 30px;
        .banner{
            // border: 1px solid red;
            width:600px;
            height:600px;
            margin:0 auto;
            overflow:hidden;
            // background:#ccc;
            text-align:center;
            img{
                width:480px;
            }
        }
        .prd-sale {
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            background-color: #f1940f;
            color: #fff;
            font-size: 0.24rem;
        }
        .good_info{
            position: relative;
            h1{
                padding: .3rem 1.9rem .3rem .2rem;
                font-size: .3rem;
                font-weight: normal;
                line-height: .4rem;
                color: #000;
                background-color: #fff;
                position: relative;
                img{
                    width:150px;
                    position: absolute;
                    top:10px;
                    right:20px;
                }
            }
            .ht-price{
                height:70px;
                // background-color: #fff;
                border: 1px solid red;
                padding:.3rem .2rem;
                border-top:1px solid #eee;
                border-bottom:1px solid #eee;
                .left{
                    width:1.09rem;
                    float:left;
                    background:red;
                    color: #fff;
                    line-height:.42rem;
                    font-size:.24rem;
                    margin-right: .1rem;

                }
                .right{
                    height:70px;
                    width:580px;
                    float:right;
                    font-size:.28rem;
                    display: block;
                }
            }
            .ht-zp{
                padding:.2rem .4rem;
                img{
                    vertical-align:middle;
                    border:0;
                    width:100%;
                }
            }
            .good_salesize{
                padding:.9rem .2rem 0 .2rem;
                margin-bottom:.3rem;
                background:#fff;
                position:relative;
                span{
                    position:absolute;
                    left:0rem;
                    top:.3rem;
                    font-size:.3rem;
                    line-height:.3rem;
                    color:#444;
                    padding-left: .7rem;
                    background:url(https://m.huahaicang.cn/view-src/default/images/huahaicang/xiangqing-qiepian_23.png) no-repeat 0.3rem/0.2rem 0.3rem;


                }
                .good_size{
                    text-align:center;
                    overflow: hidden;
                    li{
                        float:left;
                        border:0;
                        color:#fff;
                        cursor:text;
                        background:#dd2628;
                        margin:0 1.66666% 8px;
                        width:30%;
                        height:.9rem;
                        font-size:0.3rem;
                        border:1px solid #d2d2d2;;
                        line-height:.9rem;
                    }
                }
            }
            .ht-time{
                padding:.2rem;
                background:url(https://m.huahaicang.cn/view-src/default/images/ht_time.png) no-repeat center ;
                text-align:center;
                margin:0 .2rem;
                font-size:.26rem;
            }
        }

        // 商品信息
        .product_detail{
            .prd-title{
                height:.88rem;
                line-height:.88rem;
                border-bottom:2px solid #f1f1f1;
                font-size:0.3rem;
                padding-left:.7rem;
                background:url(https://m.huahaicang.cn/view-src/default/images/huahaicang/xiangqing-qiepian_23.png) no-repeat 0.3rem/0.2rem 0.3rem;

            }
            .dc-info{
                margin-bottom:.3rem;
                color:#585c64;
                table{
                    width:100%;
                    font-size:.26rem;
                    line-height:.32rem;
                    color:#333;
                    td{
                        padding:.1rem .08rem;
                    }
                    .td-title{
                        text-align:right;
                        color:#888!important;
                        width:1.1rem!important;
                    }
                }
            }
            .pro-detail-info{
                padding:.2rem .2rem .3rem .2rem;
            }
            .prd-tips{
                margin:0 .2rem;
                padding-bottom:1.3rem;
                p{
                    font-size:.26rem;
                    line-height:160%;
                }
            }
        }

    }


    .footer{
        position:fixed;
        background: #ccc;
        bottom:1px;
        left: 1px;
        width:100%;
        height:110px;

        .left{
            float:left;
            background:#fff;
            width:20%;
            height:100%;
            i{
                font-size:.5em;
                position:absolute;
                left:.7em;
                top:.7em;
            }
        }
        .right{
            background:#dd2628;
            text-align: center;
            float:right;
            font-size:.32rem;
            line-height: 110px;
            font-weight: 400;
            width:80%;
            height:100%;
            span{
                color:#fff;
            }
        }
    }

    .clearfix{
        zoom:1;
        clear:both;
    }
    .u-detail-line{
        height:.3rem;
        background:#f3f3f1;
        clear: both;
    }
</style>