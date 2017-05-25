<template>
	<div id="address">
		<header>
			选择收货地区
			<a href="/user">取消</a>
		</header>
		<p>选择您要收货的地区，送货更快哦！</p>
		<ul>
			<li class="ccc">当前收货地区</li>
			<li class="now">
				<i class="iconfont"></i>
				{{nowaddress}}
				<i class="iconfont right"></i>
			</li>
			<li class="ccc">华中地区</li>
			<li @click="handleclick($event)">湖南</li>
			<li @click="handleclick($event)">湖北</li>
			<li @click="handleclick($event)">河南</li>
			<li @click="handleclick($event)">江西</li>
			<li class="ccc">西南地区</li>
			<li @click="handleclick($event)">四川</li>
			<li @click="handleclick($event)">贵州</li>
			<li @click="handleclick($event)">云南</li>
			<li @click="handleclick($event)">重庆</li>
			<li @click="handleclick($event)">西藏</li>
			<li class="ccc">华南地区</li>
			<li @click="handleclick($event)">广东</li>
			<li @click="handleclick($event)">广西</li>
			<li @click="handleclick($event)">海南</li>
			<li class="ccc">华北地区</li>
			<li @click="handleclick($event)">北京</li>
			<li @click="handleclick($event)">河北</li>
			<li @click="handleclick($event)">内蒙古</li>
			<li @click="handleclick($event)">山西</li>
			<li @click="handleclick($event)">天津</li>
			<li class="ccc">华东地区</li>
			<li @click="handleclick($event)">江苏</li>
			<li @click="handleclick($event)">山东</li>
			<li @click="handleclick($event)">上海</li>
			<li @click="handleclick($event)">福建</li>
			<li @click="handleclick($event)">浙江</li>
			<li @click="handleclick($event)">安徽</li>
			<li class="ccc">东北地区</li>
			<li @click="handleclick($event)">辽宁</li>
			<li @click="handleclick($event)">黑龙江</li>
			<li @click="handleclick($event)">吉林</li>
			<li class="ccc">西北地区</li>
			<li @click="handleclick($event)">陕西</li>
			<li @click="handleclick($event)">新疆</li>
			<li @click="handleclick($event)">甘肃</li>
			<li @click="handleclick($event)">宁夏</li>
			<li @click="handleclick($event)">青海</li>
		</ul>
	</div>
</template>

<script>
	import router from "../router";
	export default{
        mounted(){

        },
        data(){
            return{
				nowaddress:"湖南",
            }
        },
        methods:{
			handleclick(ev){
				this.nowaddress = ev.path[0].innerHTML;
				this.$emit("theadress",this.nowaddress);
				router.go(-1);
			},
        },

        computed:{

        }

    }
</script>

<style lang="scss" scoped>
	#address{
		header{
			font-size: 0.36rem;
			height: 0.98rem;
			line-height: 0.98rem;
			text-align: center;
			border-bottom: 1px solid rgb(221,38,40);
			position: relative;
			a{
				font-size: 0.24rem;
				color: #666666;
				text-decoration: none;
				position: absolute;
				top: auto;
				right: 0.2rem;
			}
		}
		p{
			font-size: 0.24rem;
			height: 0.9rem;
			line-height: 0.9rem;
			text-align: center;
		}
		ul{
			li{
				font-size: 0.24rem;
				height: 0.9rem;
				line-height: 0.9rem;
				padding-left: 0.2rem;
				border-bottom: 1px solid #666666;
				list-style: none;
			}
			.now{
				font-weight: 700;
			}
			.ccc{
				background: rgb(243, 243, 241);
				border: none;
				color: #666666;
			}
		}
	}
</style>