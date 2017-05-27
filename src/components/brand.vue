<template>
	<div>
	    <div class="tou">
		    	<div class="fanhui">
                    <router-link to="/home" tag="span" >
		    		    <i class="hea iconfont icon-fanhui"></i>
                    </router-link>
		    	</div>
	    	<div class="name" >
	    		{{name}}
	    	</div>
	    	<div class="gouwu">
	    		<span @click="tocart()"><i class="hea iconfont icon-gouwuche"></i></span>
	    		<span @click="touser()"><i class="hea iconfont icon-ren-copy"></i></span>
	    	</div>
	    </div>
        <div class="price">
            <span class="sp1">价格<i id="price-p" class="price-p" @click="price()"></i></span>
            <span class="sp2">折扣<i id="zhe-p" class="zhe-p" @click="zhe()"></i></span>
            <span class="sp3">显示有货<i id="have" class="have" @click="have()"></i></span>
        </div>
        <div id="yuan" class="u-backtop-contain" v-show="hei>=3969">
            <a  href="javascript:scroll(0,0)" id="wu" class="u-backtop e-backtop-fixed e-backtop-tobottom" style="right:2px;
                bottom:68px">
                <span id="nn">14</span>
                <i id="n1"></i>
                <span id="n2">{{tnum}}</span>
            </a>
        </div>

        <div class="box"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">

		    <div class="main" v-for="(data,index) in playinglist" @click="handleSkip(data.brandId,index)">
		    	<router-link tag="div" to="/product">
			    	<img :src="data.image" />

                    <div class="ul1" v-show="data.goodsSize[0]!= null">
                        <ul>
                            <li v-html="data.goodsSize.join('')"></li>
                        </ul>
                    </div>

                    <p class="n" v-html="data.productName"></p>
			    	<p class="p">

                        <b class="p-b">￥</b><b class="p-b" v-html="data.priceSummary.minVipshopPrice"></b>
                        ￥<span class="p-sp1" v-html="data.marketPrice"></span>
                        <span class="p-sp2" v-html="data.agio"></span>
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
    import api from "../api";

    var hav =true;
    var s1 = "";
    var s2 = "";
    var s3 = "";
    var s4 = 1;
    export default{
        mounted(){
                var jilu = 0;
            window.onscroll = function(){
                this.hei = window.scrollY;
                var dd = document.getElementById("yuan");
                var nn = document.getElementById("nn");
                var n1 = document.getElementById("n1");
                var n2 = document.getElementById("n2");
                var wu = document.getElementById("wu");
                if(hei>=3969){
                    dd.style.display="block";
                }else{
                    dd.style.display="none";
                    jilu=3969;
                }
                nn.innerHTML=Math.ceil((hei)/521)*2;
                if(hei<jilu){
                    nn.style.display="none";
                    n1.style.display="none";
                    n2.style.display="none";
                    wu.className = "wuname u-backtop e-backtop-fixed";
                    jilu=hei+1;
                }else{
                    jilu = hei;
                    nn.style.display="block";
                    n1.style.display="block";
                    n2.style.display="block";
                    wu.className = "u-backtop e-backtop-fixed e-backtop-tobottom";
                }
            }
     },

       beforeDestroy(){
            window.onscroll=null;
        },


        data(){
            return{
                // num:[],
                // playinglist:[],
                name:"",
                // playinglist:[],
                loading:false,
                num:1,
                tnum:"",
                hei:""
            }
        },
        methods:{
            price(){
                var p =document.getElementById('price-p');
                var z = document.getElementById('zhe-p');
                hav=!hav;
                z.className ="zhe-p";
                if(!hav){
                    p.className="price-up";
                    this.num =1;
                    s1="merchandise_vipshop_price";
                    s2="j_004";
                    s3="%257B%2522merchandise_vipshop_price%2522%253A%2522asc%2522%257D";
                    s4=0;
                    axios.get(api.interface+"/api/brand?id="+this.$route.params[0],{
                    params:{
                        page:this.num++,
                        sort1:s1,
                        sort2:s2,
                        sort3:s3,
                        sort4:s4
                    }
                }).then(res=>{
                    console.log(res);
                    // this.playinglist=res.data.data.goodsDtoList;
                    this.$store.dispatch("BRAND",res.data.data.goodsDtoList);

            })
                }else{
                    p.className="price-down";
                    this.num =1;
                    s1="merchandise_vipshop_price";
                    s2="j_004";
                    s3="%257B%2522merchandise_vipshop_price%2522%253A%2522desc%2522%257D";
                    s4=0;
                    axios.get(api.interface+"/api/brand?id="+this.$route.params[0],{
                    params:{
                        page:this.num++,
                        sort1:s1,
                        sort2:s2,
                        sort3:s3,
                        sort4:s4
                    }
                }).then(res=>{
                    console.log(res);
                    // this.playinglist=res.data.data.goodsDtoList;
                    this.$store.dispatch("BRAND",res.data.data.goodsDtoList);

                })
                }
            },

            zhe(){
                var p =document.getElementById('price-p');
                var z = document.getElementById('zhe-p');
                hav=!hav;
                p.className ="price-p";
                if(!hav){
                    z.className="zhe-up";
                    this.num =1;
                    s1="merchandise_agio";
                    s2="j_004";
                    s3="%257B%2522merchandise_agio%2522%253A%2522asc%2522%257D";
                    s4=0;
                    axios.get(api.interface+"/api/brand?id="+this.$route.params[0],{
                    params:{
                        page:this.num++,
                        sort1:s1,
                        sort2:s2,
                        sort3:s3,
                        sort4:s4
                    }
                }).then(res=>{
                    console.log(res);
                    // this.playinglist=res.data.data.goodsDtoList;
                    this.$store.dispatch("BRAND",res.data.data.goodsDtoList);

                })
                }else{
                    z.className="zhe-down";
                    this.num =1;
                    s1="merchandise_agio";
                    s2="j_004";
                    s3="%257B%2522merchandise_agio%2522%253A%2522desc%2522%257D";
                    s4=0;
                    axios.get(api.interface+"/api/brand?id="+this.$route.params[0],{
                    params:{
                        page:this.num++,
                        sort1:s1,
                        sort2:s2,
                        sort3:s3,
                        sort4:s4
                    }
                }).then(res=>{
                    console.log(res);
                    // this.playinglist=res.data.data.goodsDtoList;
                    this.$store.dispatch("BRAND",res.data.data.goodsDtoList);

                })
                }
            },

            have(){
                var h = document.getElementById('have');
                hav=!hav;
                if(!hav){
                    h.className = "nohave";
                }else{
                    h.className = "have";
                }

            },
            loadMore(){
                this.loading = true;
                if(this.num>this.total){
                    return;
                }
                console.log(1111);
                axios.get(api.interface+"/api/brand?id="+this.$route.params[0],{
                    params:{
                        page:this.num++,
                        sort1:s1,
                        sort2:s2,
                        sort3:s3,
                        sort4:s4,
                    }
                }).then(res=>{
                    console.log(5678);
                    console.log(res);
                    // this.playinglist=[...this.playinglist,...res.data.data.goodsDtoList];

                    this.loading = false;
                    this.tnum = res.data.data.total;
                    this.total = Math.ceil((res.data.data.total)/20);
                    this.name = res.data.data.goodsDtoList[0].brandName;
                    this.$store.dispatch("BRAND",[...this.playinglist,...res.data.data.goodsDtoList]);

                })
            },


			tocart(){
         		axios.get(api.interface+"/api/logined").then(res=>{
         			router.push(res.data?"/cart":"/login");
         		})
         	},
         	touser(){
         		axios.get(api.interface+"/api/logined").then(res=>{
         			router.push(res.data?"/user":"/login");
         		})
			},
            handleSkip(id,index){
                // console.log(id);
                // console.log(index);
                router.push(`product/${id}`);
                // console.log(id+"商品id2");
                //给product发送的下标 发送到store
                this.$store.dispatch("BRAND_INDEX",index);
            },

        },


        computed:{
            //获取的商品列表
            playinglist(){
                    return this.$store.state.brand; //拿到状态数据
            },

        }
    }
</script>

<style lang="scss" scoped>
a{
    text-decoration:none;
}
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
    line-height:.88rem;
    position:relative;
    background: #f3f3f1;
 }
 .price i{
    display: inline-block;

    width:0.36rem;
    height:.31rem;
 }
 .price .price-p{
    background: url(../assets/icon_arrow_top2.png) no-repeat 5px 5px;
 }
 .price .price-up{
    background:url(../assets/icon_arrow_top1.png) no-repeat 5px 5px;
 }
 .price .price-down{
    background: url(../assets/icon_arrow_down1.png) no-repeat 5px 5px;
 }
 .price .zhe-p{
    background: url(../assets/icon_arrow_top2.png) no-repeat 5px 5px;
 }
 .price .zhe-up{
    background:url(../assets/icon_arrow_top1.png) no-repeat 5px 5px;
 }
 .price .zhe-down{
    background: url(../assets/icon_arrow_down1.png) no-repeat 5px 5px;
 }
 .price .have{
    background:url(../assets/icon_noselect.png) no-repeat 5px 5px;
 }
 .price .nohave{
    background:url(../assets/icon_select.png) no-repeat 5px 5px;
 }
 .sp1{
    margin-left:.36rem;
 }
 .sp3{
    position:absolute;
    right:.18rem;
 }
.u-backtop-contain{
    position:fixed;
    bottom:130px;
    right:20px;
    width:100%;
    max-width:640px;
    z-index:999;
}
.wuname{
    background-image:url(../assets/top.png);
    background-size:cover;
    background-color:rgba(0,0,0,0.7);
}
.u-backtop{
    display:none;
    position:absolute;
    width:.84rem;
    height:.84rem;
    border-radius:.44rem;
    background-image:url(../assets/top.png);
    background-size:cover;
    color:#fff;
    text-align:center;
    font-size:0.2rem;
    line-height:0.38rem;
}
.e-backtop-fixed{
    display:block;
}
.e-backtop-tobottom{
    background:rgba(0,0,0,0.7);
}
.u-backtop i{
    display:block;
    width:80%;
    height:1px;
    margin-left:10%;
    background-color: #fff;
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
    margin-left:-18px;
 }
 .main .ul1{
    width:90px;
    height:42px;
    overflow:hidden;
    position:absolute;
    left:5px;
    top:0;
    z-index:99;
    text-align:center;
 }
 .main .ul1 li{
    color:#fff;
    background: #000;
    height:40px;
    line-height:40px;
    opacity:0.8;
    border-top:1px solid #666;
    font-size:22px;
    width:100%;
    text-indent:-5px;
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