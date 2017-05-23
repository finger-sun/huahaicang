<template>
    <div id="user">
    	<div class="head">
    		<header>
	    		<i class="iconfont left"></i>
	    		<span>
	    			个人中心
	    		</span>
	    		<i class="iconfont home"></i>	    		
	    	</header>
	    	<div class="userInfo">
	    		<div class="photo">
	    			<img src="http://m.huahaicang.cn/view-src/default/images/user/defaultHeadImage.png"/>
	    		</div>
	    		<p>15005421707</p>
	    	</div>	    	
    	</div>
    	<div class="userOrder">
    		<ul>
    			<li>
    				<i class="iconfont"></i>
    				<p>全部订单</p>
    			</li>
    			<li>
    				<i class="iconfont"></i>
    				<p>待支付</p>
    			</li>
    			<li>
    				<i class="iconfont"></i>
    				<p>待收货</p>
    			</li>
    		</ul>
    	</div>
    	<div class="box">
    		<a class="divTop" href="/address">
    			<i class="iconfont"></i>
    			收货地区
    			<span class="right">浙江<i class="iconfont"></i></span>
    		</a>
    		<div class="divBottom">
    			<i class="iconfont"></i>
    			地址管理
    			<span class="right"><i class="iconfont"></i></span>
    		</div>
    	</div>
    	<div class="box">
    		<div class="divTop">
    			<i class="iconfont"></i>
    			关于花海仓
    			<span class="righr"><i class="iconfont"></i></span>
    		</div>
    		<div class="divBottom">
    			<i class="iconfont"></i>
    			爱心客服
    			<span class="phone right">
    				400-649-3368
    			</span>
    			<span class="red right">9:00-24:00</span>
    			<span><i class="iconfont right"></i></span>
    		</div>
    	</div>
    	<a class="quit" href="/login">
    		退出登录
    	</a>
    </div>
</template>
<script>
    export default{
        mounted(){

        },
        data(){
            return{

            }
        },
        methods:{

            },

        computed:{

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
					top: auto;
					left: 0.2rem;
				}
				span{
					font-size: 0.4rem;
					font-weight: 700;		
				}
				.home{
					position: absolute;
					top: auto;
					left: 0.2rem;
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
    			p{
    				text-align: center;
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
    		}
    		.divBottom{
    			height: 0.8rem;
    			line-height: 0.8rem;
    			position: relative;
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