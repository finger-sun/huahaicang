<template>
	<div id="login">
		<header id="loginHeader">
	        <span>用户登录</span>
	        <a href="/register">注册</a>
	   </header>	    
		<div id="loginMain">
			<h3>可使用唯品会账号直接登录</h3>
			<form  method="post" :action="address">
				<ul>
					<li :class="userIdliClass">
						<input type="text" name="userId" placeholder="手机号" v-model="userId" @input="userIdInput()" @focus="userFocus()" @blur="userIdBlur()"/>
					</li>
					<p :class="userIdClass">{{userIdPoint}}</p>
					<li :class="passwordLiClass">
						<input type="password" name="password" placeholder="密码" v-model="password" @input="passwordInput()" @focus="passwordFocus()" @blur="passwordBlur()"/>
					</li>
					<p :class="passwordClass">{{passwordPoint}}</p>
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
				userId:"",
				userIdPoint:"",
				userIdClass:"default",
				userIdliClass:"",
				userIdIsOk:false,
				password:"",
				passwordPoint:"",
				passwordClass:"",
				passwordLiClass:"",
				passwordIsOk:false,
            }
        },
        methods:{
        	userFocus(){
        		//手机号验证后给出提示信息,双重三目运算+正则表达式验证
        		this.userIdIsOk = false;
        		this.userIdPoint = this.userId==""?"请输入手机号":/^\d{1,4}$/.test(this.userId)?"请输入正确的手机号":"";  
        		this.userIdClass = "default";
        		this.userIdliClass = "lidefault";
        	},
			userIdInput(){
				this.userIdPoint = /^\d{1,5}$/.test(this.userId)?"请输入正确的手机号":"";
				this.userIdClass = "default";
				this.userIdliClass = "lidefault";
			},
			userIdBlur(){
				this.userIdPoint = this.userId==""?"请输入手机号":/^\d{1,4}$/.test(this.userId)?"手机号码有误，请重新输入":"";
				this.userIdClass = "warning";
				this.userIdliClass = /^\d{0,4}$/.test(this.userId)?"liwarning":"lidefault";
				this.userIdIsOk = /^\d{0,4}$/.test(this.userId)?false:true;
				axios.post("/api/findUser",{
					userId:this.userId,
				}).then(res=>{
					this.userIdPoint = res.data?"":"账号未注册,请先注册";
				});
			},
			passwordFocus(){
				this.passwordIsOk = false;
        		this.passwordPoint = this.password==""?"请输入6-20位密码":/^[0-9a-zA-Z]{6,20}$/.test(this.password)?"":"6-20位字母或数字组成";
        		this.passwordClass = "default"
        		this.passwordLiClass = "lidefault";
        	},
			passwordInput(){
				this.passwordPoint = /^[0-9a-zA-Z]{6,20}$/.test(this.password)?"":"6-20位字母或数字组成";
				this.passwordClass = "default"
				this.passwordLiClass = "lidefault";
			},
			passwordBlur(){
				this.passwordClass = "warning"
				this.passwordLiClass = /^[0-9a-zA-Z]{6,20}$/.test(this.password)?"lidefault":"liwarning";
				this.passwordIsOk = /^[0-9a-zA-Z]{6,20}$/.test(this.password)?true:false;
			},
        },

        computed:{
			address(){
				return this.userIdIsOk && this.passwordIsOk ? "/api/loginvalidate" : "/";
			}
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
	    		height: 0.8rem;
	    		line-height: 0.8rem;
	    		input{
	    			border: none;
	    			color: #666666;
	    			width: 100%;
	    			font-size: 0.28rem;
	    			height: 0.3rem;
	    			outline: none;
	    			vertical-align: middle;
	    			background: rgba(0,0,0,0);
	    		}	    			    	
	    	}
	    	.lidefault{
	    		background: none;
	    	}
	    	.liwarning{
	    		background: #F7F3F0;
	    	}
	    	p{
	    		display: none;
	    	}
	    	.default{
	    		display: block;
	    		font-size: 0.28rem;
	    		color: #404040;
	    		text-indent: 0.2rem;
	    		padding: 0.1rem;
	    	}
	    	.warning{
	    		display: block;
	    		color: #DD2628;
	    		text-indent: 0.2rem;
	    		padding: 0.1rem;
	    		font-size: 0.28rem;
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