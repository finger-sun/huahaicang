<template>
    <div id="cart">
        <header>
            <span class="left" @click="handerclick()">
                <i class="iconfont icon-fanhui"></i>
            </span>
            <span>购物车</span>
        </header>

        <div class="main">

                <div class="cartlist clearfix" v-for="(data,index) in goodslist">
                    <input id="inp"  type="checkbox" :value="data" v-model="checkedValue"/>

                    <span class="cart_image">
                        <img :src="data.image">
                    </span>
                    <div class="cart_info">
                        <span href="" class="cart_a">
                            <p class="cart_g_name">{{data.productName}}</p>
                            <p class="cart_b_name">花海仓APP-vi(第72批)</p>
                            <p class="fontgrey">尺码:{{data.sizes[0].name}}</p>
                        </span>

                        <!-- 商品数量加减 -->

                        <div class="amount-confirm-box" @click="sumbut(data)">
                            <a @click="data.buyPeople = data.buyPeople-1">-</a>
                            <span>{{data.buyPeople + 1}}</span>
                            <a @click="data.buyPeople = data.buyPeople+1">+</a>
                        </div>
                        <span class="cart_price">
                            ￥{{data.vipshopPrice}}
                        </span>
                        <span class="delete" @click="handleDelClick(data)">
                            <img src="https://m.huahaicang.cn/view-src/default/images/common/scan_layer-33.png">
                        </span>
                    </div>

                </div>





                <!-- {{cartlist[0].goodsData.agio}} -->
        </div>
        <!-- {{goodslist}} -->
       <!-- 固定在底部的结算按钮 -->
       <div class="footer">
            <div class="left">
                总金额
                <span>￥{{sum}}</span>
            </div>
            <div class="right">
                <span>马上结算</span>
            </div>
       </div>
    </div>
</template>
<script>
    import router from "../router";
    import { MessageBox } from 'mint-ui';
    import api from "../api";

    export default{
        mounted(){

            axios.post(api.interface+'/api/getshopcar', {
                userId:this.$store.state.userId,
            }).then(res=>{
            	console.log(res);
            	console.log("123res");

             // this.$store.dispatch("CART",res.data);  ADD_SHOPCAR_MUTATION


                console.log("这是res.data");
                for (var i =0;i < res.data.length - 1;i++){
                        this.$store.dispatch("ADD_SHOPCAR_ACTION",res.data[i].goodsData);
                        console.log(res.data[i].goodsData);

                }

                // this.$store.dispatch("CART",res.data);
            }).then(res=>{
                console.log("11111cart");
                console.log(this.$store.state.cart);
                console.log("22222shoplist");
                console.log(this.$store.state.shoplist);
            })

//          setTimeout("console.log(11111);",5000);

            //console.log(this.$store.state.shoplist);

        },

        data(){
                return{
                    num:"",
                    checkedValue:[],
                    // data:{
                    //     vipshopPrice:0,
                    //     buyPeople:1,
                    // }
                }
        },
        methods:{
            handerclick(){
                    router.go(-1)
            },
            handleDelClick(data){
                    console.log(data);
                    this.$store.dispatch("DEL_SHOPCAR_ACTION",data);
                    // data =[];
                    this.checkedValue=[];
                    axios.post(api.interface+"/api/removeshopcar",{
						userId:this.$store.state.userId,
					    listId:data.brandId,
					    goodsindex:data.spuId,
					}).then(res=>{
						console.log(res)
					})

            },
            sumbut(data){
            	console.log(data);
            	axios.post(api.interface+"/api/updatashopcar",{
					userId:this.$store.state.userId,
				    listId:data.brandId,
				    goodsindex:data.spuId,
				    goodsNum:data.buyPeople,
				    goodsData:data
				}).then(res=>{
					console.log(res)
				})
            }
        },
        computed:{
        	cartlist(){

        		return this.$store.state.cart;//从vuex拿到购物车数据
        	},
            goodslist(){
                    return this.$store.state.shoplist; //拿到状态数据
            },
            sum(){
                var sum =0;

                this.checkedValue.forEach(item=>{
                    sum+= item.vipshopPrice*(item.buyPeople + 1);
                })
                return sum;
            },

        },
    }

</script>

<style lang="scss" scoped>
    #inp{
        width:40px;
        height:80px;
        position:absolute;
        right:30px;
    }
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
        margin-bottom:200px;
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