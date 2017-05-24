<template>
	<div id="login">
		<header id="loginHeader">
	        <span>用户登录</span>
	        <a href="/register">注册</a>
	   </header>	    
		<div id="loginMain">
			<h3>可使用唯品会账号直接登录</h3>
			<form  method="post">
				<ul>
					<li>
						<input type="text" name="userid" placeholder="邮箱/手机号" />
						<i></i>
					</li>
					<p class="userIdPoint">{{userIdPoint}}</p>
					<li>
						<input type="password" name="password" placeholder="密码" />
						<i></i>
					</li>
					<p class="passwordPoint">{{passwordPoint}}</p>
				</ul>
				
				<input type="submit" value="登录" />
			</form>
			<a href="/" class="forgetPassword">忘记密码？</a>
		</div>
	</div>
    
</template>
<script>
    export default{
        mounted(){

        },
        data(){
            return{
				address:"/",
				userIdPoint:"",
				passwordPoint:"",
            }
        },
        methods:{

            },

        computed:{
			
        }

    }
</script>

<style lang="scss" scoped>
	#login{
		padding: 0 0.2rem;
		overflow: hidden;
		header{
	        color: #333333;
	        height: 0.96rem;
	        width: 100%;
	        text-align: center;
	        line-height: 0.96rem;
	        font-size: 0.36rem; 
	        position: relative;
	        span{
	        	 
	        	width: 100%;
	        }
	        a{
	        	color: #333333;
	        	font-size: 0.3rem;
	        	text-decoration: none;
	        	position: absolute;
	        	top: 0;
	        	right: 0;       		
	        }
	    }
	    #loginMain{
	    	h3{
	    		height: 0.88rem;
	    		line-height: 0.88rem;
	    		font-weight: normal;
	    		font-size: 0.28rem;
	    		color: #404040;
	    	}
	    	li{
	    		padding: 0.16rem 0.3rem;
	    		border-bottom: 0.02rem solid black;
	    		list-style: none;
	    		input{
	    			border: none;
	    			color: #666666;
	    			width: 100%;
	    			font-size: 0.28rem;
	    			height: 0.3rem;
	    			outline: none;
	    		}
	    		.place{
	    			background: #f7f3f0;
	    		}
	    		
	    	}
	    	p{
	    		display: none;
	    	}
	    	.wrong{
	    		display: block;color: #DD2628;
	    	}
	    	.active{
	    		display: block;color: #404040;
	    	}
	    	input[type="submit"]{
	    		padding: 0.16rem 0;
	    		border: none;
	    		width: 100%;
	    		background: #dd2628;
	    		font-size: 0.32rem;
	    		border-radius: 5px;
	    		color: #FFFFFF;
	    		outline: none;
	    	}
	    	.forgetPassword{
	    		color: #333333;
	    		font-size: 0.28rem;
	    		text-decoration: none;
	    		float: right;
	    		margin-top: 20px;
	    	}
	    }
	}
    
</style>