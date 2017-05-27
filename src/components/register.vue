<template>
    <div id="register">
    	<header>
    		<i></i>
    		<span>注册</span>
    		<a href="#/login">登录</a>
    	</header>
    	<div id="registerMain">
    		<form action="/api/registervalidate" method="post">
    			<ul>
	    			<li>
	    				<label for="userId">手机号：</label>
	    				<input type="text" name="userId" id="userId" placeholder="请输入手机号" @blur="userIdBlur()" v-model="userId"/>
	    				<button >获取验证码</button>
	    			</li>
	    			<p class="warning">{{userIdPoint}}</p>
	    			<p>短信验证码将发送至该手机号，请认真填写</p>
	    			<li>
	    				<label for="code">验证码：</label>
	    				<input type="text" name="code" id="code" placeholder="请输入验证码" />
	    			</li>
	    			<li>
	    				<label for="password">密码：</label>
	    				<input type="password" name="password" id="password" placeholder="6-20位字母或数字组成" />
	    			</li>
	    		</ul>
    			<input type="submit" value="注册"/>
    		</form>
    		<a href="/login">已有账号，去登录>></a>
    		<img src="https://h5rsc-ssl.vipstatic.com/hhcstatic/static/img/promise.6678896.png"/>
    	</div>
    </div>
</template>
<script>
	import api from "../api";

    export default{
        mounted(){

        },
        data(){
            return{
				userId:"",
				userIdPoint:"",
				userIdClass:"",
            }
        },
        methods:{
			userIdBlur(){
				axios.post(api.interface+"/api/findUser",{
					userId:this.userId,
				}).then(res=>{
					this.userIdPoint = res.data?"该手机号已注册，请登录":"";
				});
			}
        },

        computed:{

        }

    }
</script>

<style lang="scss" scoped>
	#register{
		header{
			height: 0.96rem;
			line-height: 0.58rem;
			background: #DD2628;
			color: white;
			position: relative;
			text-align: center;
			i{
				position: absolute;
				top: auto;
				left: 0.2rem;
			}
			span{
				font-size: 0.4rem;
				font-weight: 700;
			}
			a{
				text-decoration: none;
				color: white;
				font-size: 0.3rem;
				position: absolute;
				top: 0.2rem;
				right: 0.2rem;
			}
		}
		#registerMain{
			padding: 0 0.2rem;
			font-size: 0.3rem;
			li{
				margin-top: 0.13rem;
				padding: 0.2rem 0.4rem;
				border-bottom: 0.02rem solid black;
				list-style: none;
				position: relative;
				input{
					font-size: 0.28rem;
					border: none;
					margin-left: 0.2rem;
					outline: none;
				}
				button{
					font-size: 0.28rem;
					position: absolute;
					top: 0.1rem;
					right: 0.1rem;
					border: none;
					background: #e6e6e6;
					color: #333333;
					width: 2.3rem;
					height: 0.6rem;
					border-radius: 5px;
					outline: none;
				}
			}
			p{
				margin-top: 0.2rem;
				font-size: 0.28rem;
				text-indent: 0.2rem;
				margin-bottom: 0.3rem;
			}
			.warning{
				color: #DD2628;
			}
			input[type="submit"]{
				width: 100%;
				height: 0.8rem;
				background: #dd2628;
				border: none;
				font-size: 0.3rem;
				color: white;
				border-radius: 10px;
				margin-top: 1.2rem;
				outline: none;
			}
			a{
				text-decoration: none;
				color: rgb(0,0,238);
				float: right;
				margin-top: 0.6rem;
			}
			img{
				width: 100%;
				margin-top: 0.8rem;
			}
		}
	}
</style>