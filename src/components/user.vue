<template>
    <div id="user">
    	<div class="head">
    		<header>
                <router-link to="/home" >
	    		     <i class="left"></i>
                </router-link>
	    		<span>
	    			个人中心
	    		</span>
	    		<router-link to="/home"><i class="home"></i></router-link>
	    	</header>
	    	<div class="userInfo">
	    		<div class="photo" @click="opencamera">
	    			<img src="http://m.huahaicang.cn/view-src/default/images/user/defaultHeadImage.png"/>
	    		</div>
	    		<p>{{user}}</p>
	    	</div>
    	</div>
    	<div class="userOrder">
    		<ul>
    			<li>
    				<i class="oi1"></i>
    				<p>全部订单</p>
    			</li>
    			<li>
    				<i class="oi2"></i>
    				<p>待支付</p>
    			</li>
    			<li>
    				<i class="oi3"></i>
    				<p>待收货</p>
    			</li>
    		</ul>
    	</div>
    	<div class="box">
    		<a class="divTop" href="#/address">
    			<i class="oi4"></i>
    			收货地区
    			<span class="right">{{address}}<i class="oi"></i></span>
    		</a>
    		<div class="divBottom">
    			<i class="oi5"></i>
    			地址管理
    			<span class="right"><i class="oi"></i></span>
    		</div>
    	</div>
    	<div class="box">
    		<div class="divTop">
    			<i class="oi6"></i>
    			关于花海仓
    			<span class="righr"><i class="oi"></i></span>
    		</div>
    		<div class="divBottom">
    			<i class="oi7"></i>
    			爱心客服
    			<span class="phone right">
    				400-649-3368
    			</span>
    			<span class="red right">9:00-24:00</span>
    			<span><i class="oi right"></i></span>
    		</div>
    	</div>
    	<a class="quit" @click="quitclick()">
    		退出登录
    	</a>
    </div>
</template>
<script>
	import router from "../router";
    import api from "../api";
    export default{
        mounted(){
        	this.userId = location.search.substring(8);
        	if(this.userId !=""){
        		this.$store.dispatch("ADD_USERID",this.userId);
        	}
        },
        data(){
            return{
				userId:"",

            }
        },
        methods:{
            opencamera(){
                var cmr = plus.camera.getCamera();
                    var res = cmr.supportedImageResolutions[0];
                    var fmt = cmr.supportedImageFormats[0];
                    console.log("Resolution: "+res+", Format: "+fmt);
                    cmr.captureImage( function( path ){
                            alert( "Capture image success: " + path );
                        },
                        function( error ) {
                            alert( "Capture image failed: " + error.message );
                        },
                        {resolution:res,format:fmt}
                    );
            },
			quitclick(){
				this.$store.dispatch("DEL_USERID","");
				axios.post(api.interface+"/api/quit").then(res=>{
					console.log(res.data);
					if(res.data == "success"){
						router.push("#/home");
					}
				})
			},
			handleclick(){
				//router.go(-2);
			}
        },

        computed:{
			user(){
				return this.$store.state.userId;
			},
			address(){
				return this.$store.state.address;
			}
        }

    }
</script>

<style lang="scss" scoped>
    #user{
    	background: rgb(243, 243, 241);
    	height: 100%;
    	.head{
    		background: url(http://m.huahaicang.cn/view-src/default/images/user/bguser.jpg) no-repeat;
    		background-size: 100% 100%;
    		header{
	    		height: 0.96rem;
				line-height: 0.96rem;
				color: white;
				position: relative;
				text-align: center;
				font-size: 0.4rem;
				.left{
					position: absolute;
					display: block;
					width: 0.36rem;
					height: 0.3rem;
					background: url(http://m.huahaicang.cn/view-src/default/images/user/back.png) no-repeat;
					top: 0.2rem;
					left: 0.2rem;
				}
				span{
					font-size: 0.4rem;
					font-weight: 700;
				}
				.home{
					position: absolute;
					display: block;
					width: 0.46rem;
					height: 0.43rem;
					background: url(http://m.huahaicang.cn/view-src/default/images/common/icon_sprite.png) no-repeat -2.5rem 0;
					top: 0.2rem;
					right: 0.2rem;
				}
	    	}
	    	.userInfo{
	    		padding: 0.3rem 0 0.26rem 0;
	    		.photo{
	    			margin: 0 auto;
	    			width: 1.4rem;
	    			height: 1.4rem;
	    			border-radius: 50%;
	    		}
	    		p{
	    			font-size: 0.26rem;
	    			color: white;
	    			text-align: center;
	    			margin-top: 0.1rem;
	    		}
	    	}
    	}
    	.userOrder{
    		margin-bottom: 0.2rem;
    		background-color: white;
    		overflow: hidden;
    		li{
    			width: 33%;
    			float: left;
    			list-style: none;
    			font-size: 0.34rem;
    			height: 1.4rem;
    			color: #333333;
    			text-align: center;
    			p{
    				text-align: center;
    			}
    			i{
    				display: inline-block;
    				background-position: center;
    				background-repeat: no-repeat;
    				background-size: cover;
    				height: 0.6rem;
    				width: 0.6rem;
    				margin-top: 0.2rem;
    			}
    			.oi1{
    				background-image: url(../assets/image/wait_pay.png);
    			}
    			.oi2{
    				background-image: url(../assets/image/all_orders.png);
    			}
    			.oi3{
    				background-image: url(../assets/image/wait_receipt.png);
    			}
    		}
    	}
    	.box{
    		background: white;
    		font-size: 0.28rem;
    		padding: 0 0.4rem;
    		margin-bottom: 0.2rem;
    		.divTop{
    			display: block;
    			color: #000000;
    			text-decoration: none;
    			height: 0.8rem;
    			line-height: 0.8rem;
    			border-bottom: 0.02rem solid #CCCCCC;
    			position:relative;
    			padding-left:0.7rem;
    			padding-right:0.5rem;
    			.oi4{
    				display: inline-block;
    				height: 0.4rem;
    				width: 0.4rem;
    				position: absolute;
    				top: 0.2rem;
    				left: 0.1rem;
    				background-size:cover ;
    				background: url(../assets/image/icon_1.png) no-repeat;
    			}
    			.oi6{
    				display: inline-block;
    				height: 0.4rem;
    				width: 0.4rem;
    				position: absolute;
    				top: 0.2rem;
    				left: 0.1rem;
    				background-size:cover ;
    				background: url(../assets/image/icon_5.png) no-repeat;
    			}
    		}
    		.divBottom{
    			height: 0.8rem;
    			line-height: 0.8rem;
    			position: relative;
    			padding-left:0.7rem;
    			padding-right: 0.5rem;
    			.oi5{
    				display: inline-block;
    				height: 0.4rem;
    				width: 0.4rem;
    				position: absolute;
    				top: 0.2rem;
    				left: 0.1rem;
    				background-size:cover ;
    				background: url(../assets/image/icon_2.png) no-repeat;
    			}
    			.oi7{
    				display: inline-block;
    				height: 0.4rem;
    				width: 0.4rem;
    				background-size:cover ;
    				background: url(../assets/image/icon_6.png) no-repeat;
    				position: absolute;
    				top: 0.2rem;
    				left: 0.1rem;
    			}
    		}
    		.oi{
    			float: right;
    			display: inline-block;
    			height: 0.2rem;
    			width: 0.2rem;
    			position: absolute;
    			top: 0.3rem;
    			right: 0.1rem;
    			background: url(../assets/image/indexicon.png) no-repeat -170px -130px;
    		}
    		.right{
    			float: right;
    		}
    		.phone{
    			position: absolute;
    			top: -0.2rem;
    			right: 0.8rem;
    		}
    		.red{
    			position: absolute;
    			color: #ff5b5d;
    			top: 0.2rem;
    			right: 0.8rem;
    		}
    	}
    	.quit{
    		display: block;
    		background: white;
    		font-size: 0.3rem;
    		height: 0.8rem;
    		line-height: 0.8rem;
    		text-align: center;
    		text-decoration: none;
    		color: #333333;
    	}
    }

</style>