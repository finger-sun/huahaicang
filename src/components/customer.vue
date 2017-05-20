<template>
    <div id="customer">
        <p>编辑客户</p>
        <ul>
            <li>
                客户来源
                <span>车商线下推荐</span>
            </li>
             <li>
                客户姓名
                <span>刘德华</span>
            </li>
             <li>
                证件类型
                <span>身份证</span>
            </li>
             <li>
                证件号
                <span>12345678</span>
            </li>
             <li>
                手机号
                <span>12345678</span>
            </li>

            <router-link tag="li" to="/Spouse" activeClass="active">
                婚姻状态
                <span>{{shoplist}}</span>
            </router-link>
        </ul>
    </div>

</template>

<script lang="scss" scoped>
import axios from "axios";
export default{
    mounted(){

    },
    data(){
        return {
                    // checkedValue:[]

            // datalist:["11","22","33"]
        }
    },
    computed:{
        shoplist(){
                    return this.$store.state.datalist; //拿到状态数据
                },
                // sum(){
                //     var sum =0;

                //     this.checkedValue.forEach(item=>{
                //         sum+= item.price*item.num;
                //     })

                //     return sum;
                // }
    },
    // methods:{
    //     handleClick(){
    //             this.$store.dispatch("DEL_SHOPCAR_ACTION",index);
    //     }
    // }
}
</script>

<style scoped>
    p{
        background:#000;
        text-align: center;
        color:white;
        line-height: 40px;
    }

    li{
        border:1px solid #000;
        padding:5px;
    }
    li span{
        float: right;
    }

</style>