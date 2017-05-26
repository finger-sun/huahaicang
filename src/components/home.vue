<template>
    <div>
	    <header class="appheader">
	    	<div class="left">
	    		<i class="logo iconfont icon-hua"></i>
	    		<i class="logo iconfont icon-hai"></i>
	    		<i class="logo iconfont icon-cang"></i>
	    	</div>
	    	<div class="right">
	    		<span @click="tocart()"><i class="hea iconfont icon-gouwuche"></i></span>
	    		<span @click="touser()"><i class="hea iconfont icon-ren-copy"></i></span>
	    	</div>
	    </header>

	    <div class="swiper-container" >

            <!-- //swiper-wrapper 就包裹所有轮播的页面 -->
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(data,index) in datalist" v-kerwinswiper="{index:index,callback:swiperload}" @click="handleSkip(data.link)">
                	<img :src="data.pic" />
                </div>
            </div>
            <!-- //加上下面这个div 就是加上分页器 -->
            <div class="swiper-pagination"></div>
        </div>


        <div class="cc">
	        <div class="aleft" v-for="(data,index) in cclist" @click="handleSkip(data.link)">
	        		<img :src="data.pic" />
	        </div>
        	<div class="aright">
	        	<div class="arightin" v-for="(data,index) in cclist2" @click="handleSkip(data.link)">
	        		<img :src="data.pic" />
	        	</div>
        	</div>

        </div>
        <div class="morning" v-for="(data,index) in cclist3" @click="handleSkip(data.link)">
        	<img :src="data.pic" />
        </div>
        <div class="main" v-for="(data,index) in main" @click="handleSkip(data.link)">
        	<img :src="data.pic" />
        </div>
    </div>
</template>


<script >
    import router from "../router"; //引入路由对象 ， router.push 就可调用了
	import "../assets/iconfont/iconfont.css";
    import axios from "axios";
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.css"; //单独引入swiper css文件

    export default{

        mounted(){
            //请求后台数据
            axios.get("/api/category").then(res=>{
                // console.log(res);
                this.datalist = res.data[575];
                this.cclist = res.data[893];
                this.cclist2 = res.data[894];
                this.cclist3 = res.data[580];
                this.main = res.data[582];
            })
            this.userId = window.sessionStorage.getItem('userid');

        },

         data(){
             return {
              datalist :[],
              cclist:[],
              cclist2:[],
              cclist3:[],
              main :[],
              userId:"",
             }
         },
		computed:{
			
		},
         methods:{
         	tocart(){
         		axios.get("/api/logined").then(res=>{
         			router.push(res.data?"/cart":"/login");
         		})
         	},
         	touser(){
         		axios.get("/api/logined").then(res=>{
         			router.push(res.data?"/user":"/login");
         		})
         	},
             swiperload(index){
                 if(index==this.datalist.length-1){
                     //初始化swiper对象
                         new Swiper('.swiper-container',{
                             pagination: '.swiper-pagination', //初始化 分页器
                             paginationClickable: true, //分页器可以点击
                             autoplay: 1000,
                             loop:true,
                             speed:2000
                         });
                 }

            },

             //动态添加路由
             handleSkip(id){
                var num = id.substring(6,15);
                router.push(`/brand/${num}`);     //向子页发送的数据
                // console.log(id);


            axios.get("/api/brand?id="+ num ).then(res=>{
            console.log(res);

             //向vuex中储存的
             this.$store.dispatch("BRAND",res.data.data.goodsDtoList);

            })


            }
        },
         directives:{
             "kerwinswiper":{
                 inserted(el,binding,vnode){
                     binding.value.callback(binding.value.index);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
	header.appheader .logo{
		color:white;
		font-size:.60rem;
		}
	i{
		height:.67rem;
	}
	.hea{
		color:white;
		font-size:0.60rem;
		line-height:0.6rem;
	}
    header.appheader{
    	z-index:1;
		height:.96rem;
		line-height:.96rem;
    	background: #dd2628;

		overflow: hidden;
    }
	.right{
		float:right;
		height:.76rem;
	}
	.left{
		float:left;
		height:.76rem;
		vertical-align: middle;
		letter-spacing:0rem;
	}
	.cc{
		display: flex;
		height:3rem;
		overflow: hidden;
		justify-content: space-around;
	}
	.cc img{
		width:100%;height:100%;
	}
	.cc .aleft{
		width:49%;

	}
	.cc .aright{
		height:3rem;
		display: flex;
		flex-direction: column;
		width:49%;
		justify-content: space-around;
	}
	.arightin{
		height:1.5rem;
	}
	.morning{
		width:100%;height:100%;
		overflow:hidden;
		font-size:0rem;
	}
	.morning img{
		width:100%;height:100%;
	}
	.main{
		font-size:0rem;
		width:100%;height:100%;
	}
	.main img{
		width:100%;height:100%;
	}
	.swiper-container{
		width:100%;
		height:3rem;
			img{
				width: 100%;
				height:100%;
			}
		}
</style>