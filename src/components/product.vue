<template>
    <div id="product">
        <header>
            <span class="left" @click="handerclick()">
                <i class="iconfont icon-fanhui"></i>
            </span>
            <span class="center">{{goodslist.productName}}</span>
            <router-link to="/home" tag="span" class="right">
	             <i class="iconfont icon-zhuye"></i>
            </router-link>

        </header>
        <div class="main">
            <div class="banner">
                <mt-swipe :auto="0" :show-indicators="false">
                  <mt-swipe-item v-for="data in datalist">
                      <img :src="goodslist.imagePrefixURL">
                      <!-- data -->
                  </mt-swipe-item>

                </mt-swipe>
           </div>

            <div class="prd-sale">
                海涛魏霞拍下件5折
            </div>

            <div class="good_info">
                <h1>
                    {{goodslist.productName}}
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
                <div class="pro-price">
                    <span class="left">￥{{goodslist.vipshopPrice}}</span>
                    <span class="center">国内参考价</span>
                    <span class="right">￥{{goodslist.priceSummary.maxMarketPrice}}</span>

                </div>
                <div class="ht-zp">
                    <img src="https://m.huahaicang.cn/view-src/default/images/ht_zp.png" alt="">
                </div>
                <div class="u-detail-line"></div>
                <div class="good_salesize clearfix">
                    <span>尺码</span>
                    <ul class="good_size">
                        <li>{{goodslist.salePlatform}}</li>
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
                            <td>{{goodslist.brandStoreEngName}}{{goodslist.brandStoreName}}</td>
                        </tr>
                        <tr>
                            <td class="td-title">商品名称</td>
                            <td>{{goodslist.productName}}</td>
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
import 'mint-ui/lib/style.css';

//http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-1.jpg


    export default{
        mounted(){
            //请求后台数据
            axios.get("/api/brand").then(res=>{
                this.goodslist = res.data.data.goodsDtoList[0];
                console.log(this.goodslist);
                // this.num = (this.goodslist).sustr(-5,1);
                // console.log(num)
                this.num = res.data.data.goodsDtoList[0].image;
                console.log(this.num);

            })


        },

        data(){
            return{
                num:[],
                goodslist:[],
                datalist:["http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-1.jpg",
                 "http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-2.jpg",
                 "http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-3.jpg",
                 "http://a.vpimg2.com/upload/merchandise/2168/FOX-2472806800-4.jpg"],
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
        text-align:center;
        color:#fff;
        width:100%;
        .center{
            width:60%;
            display:inline-block;
            overflow:hidden;
        }
        .left{
            float:left;
            display:block;
            width:15%;
            i{
                font-size:.5rem;
            }
        }
        .right{
            display:block;
            width:15%;
            float:right;
            i{
                font-size:.5rem;
                color:#fff;

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
            .pro-price{
                margin-bottom:.2rem;
                line-height:.4rem;
                background:#ffff;
                .left{
                    margin-left:.2rem;
                    font-size:.36rem;
                    font-weight: bold;
                    line-height:.5rem;
                    color: rgba(225,104,117,1)
                }
                .center{
                        margin: .14rem 0 0 .16rem;
                        font-size: .26rem;
                        line-height: .26rem;
                        color: #999;
                }
                .right{
                        margin: .14rem 0 0 .16rem;
                        font-size: .26rem;
                        line-height: .26rem;
                        color: #999;
                        text-decoration: line-through;
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