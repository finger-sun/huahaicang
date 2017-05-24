<template>
	<div>
	    <div class="tou">
		    	<div class="fanhui" @click="handclick()">
		    		<i class="hea iconfont icon-fanhui"></i>
		    	</div>
	    	<div class="name" >
	    		海涛男装微瑕专场
	    	</div>
	    	<div class="gouwu">
	    		<router-link tag="span" to="/cart"><i class="hea iconfont icon-gouwuche"></i></router-link>
	    		<router-link tag="span" to="/user"><i class="hea iconfont icon-ren-copy"></i></router-link>
	    	</div>
	    </div>
	    <div class="price">
	    	<span class="sp1">价格<i class="hea iconfont icon-paixu"></i></span>
	    	<span class="sp2">折扣<i class="hea iconfont icon-paixu"></i></span>
	    	<span class="sp3">显示有货<input type="radio" name="ral"></span>
	    </div>
	    <div class="box">
		    <div class="main" v-for="(data,index) in playinglist">
		    	<router-link tag="div" to="/product">
			    	<img :src="data.image" />
			    	<p class="n">{{data.productName}}</p>
			    	<p class="p">
			    		<b class="p-b">￥{{data.vipshopPrice}}</b>
			    		<span class="p-sp1">￥{{data.marketPrice}}</span>
			    		<span class="p-sp2" >{{data.agio}}</span>
			    	</p>
		    	</router-link>
		    </div>
	    </div>
    </div>
</template>
<script>
	import router from "../router";
	import "../assets/iconfont/iconfont.css";
    import axios from "axios";
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css";

    export default{
        mounted(){
        	axios.get("/api/brand").then(res=>{
                // console.log(res);
                this.playinglist=res.data.data.goodsDtoList;
            })
            //获取从上一页传送的id
            console.log(this.$route.params[0]);


        },
        data(){
            return{

                playinglist:[]
            }
        },
        methods:{

				handclick(){
					router.go(-1);
				}

            },

        computed:{

        }

    }
</script>

<style lang="scss" scoped>

.tou{
	width:100%;
	height:.96rem;
	display: flex;
	background: #dd2628;
	color:white;
	font-size:.36rem;
	line-height:.96rem;
	justify-content: space-between;
	text-indent:0.2rem;
}
 .tou .iconfont{
 	font-size:.50rem;

 }
 .iconfont{
 	font-size:0.36rem;
 }
 .price{
	height:.96rem;
 	font-size:.28rem;
 	line-height:.96rem;
	position:relative;
	background: #f3f3f1;
 }
 .sp1{
 	margin-left:.36rem;

 }
 .sp3{
 	position:absolute;
 	right:.18rem;
 }

 .box{
 	display: flex;
 	flex-wrap:wrap;
 	justify-content: space-around;
 	background: #f3f3f1;
 }
 .main{
 	width:47%;
 	margin-bottom:3%;
 	font-size:.26rem;
 	background: white;
 	text-align: left;
 	overflow: hidden;
 	text-indent:0.17rem;
 	position:relative;

 }
 .main img{
 	width:100%;
 }
 .main .n{
 	height:44px;
 	line-height:44px;
 	width:100%;
 	white-space: nowrap;
 	text-overflow: ellipsis;
 	overflow: hidden;
 }
 .main .p b{
 	color:#dd2628;
 	font-size:0.4rem;
 	height:44px;
 	line-height:44px;

 }
 .main .p .p-sp1{
 	text-decoration:line-through;
 }
 .main .p .p-sp2{
 	font-size:0.24rem;
 	color:#333;
 	height:44px;
 	position:absolute;
 	right:0.2rem;
 	line-height:44px;
 	background: url(../assets/xiangqing-qiepian_19.png) no-repeat scroll center center /100%;
 }
</style>