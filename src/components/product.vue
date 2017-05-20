<template>
    <div>
            这是商品详情页面
    </div>
</template>
<script>
    export default{
        mounted(){

        },
        data(){
            return{
                datalist:["已婚","未婚","离异","丧偶"],
            }
        },
        methods:{
                // handleClick(data){
                //     //vuex
                //     //发送消息给 action
                //     console.log("1111");
                //     this.$store.dispatch("ADD_SHOPCAR_ACTION",data);
                // },
                handleClick(data){
                    this.$store.dispatch("ADD_SHOPCAR_ACTION",data);
                    // console.log("111")
                },

            },

        computed:{

        }

    }
</script>

<style lang="scss" scoped>
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
    .active{
        background: red;
    }

</style>