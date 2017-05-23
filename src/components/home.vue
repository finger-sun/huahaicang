<template>
    <div>
            这是home页面
    </div>
</template>


<script >
    import axios from "axios";
    // import Swiper from "swiper";
    // console.log(Swiper);
    // import "swiper/dist/css/swiper.css"; //单独引入swiper css文件

    export default{

        mounted(){
            //请求后台数据
            axios.get("/api/category").then(res=>{
                console.log(res);
                // this.datalist = res.data.data.billboards
            })

            axios.get("/api/brand").then(res=>{
                console.log(res);
                // this.datalist = res.data.data.billboards
            })

            // axios.get("/v4/api/film/now-playing?&page=1&count=5").then(res=>{
            //     console.log(res.data);
            //     this.playinglist=res.data.data.films;
            // })
        },

        // data(){
        //     return {
        //         datalist :[],
        //         playinglist:[]
        //     }
        // },

        // methods:{
        //     swiperload(index){
        //         if(index==this.datalist.length-1){
        //             //初始化swiper对象
        //                 new Swiper('.swiper-container',{
        //                     pagination: '.swiper-pagination', //初始化 分页器
        //                     paginationClickable: true, //分页器可以点击
        //                     autoplay: 1000,
        //                     loop:true,
        //                     speed:2000
        //                 });
        //         }
        //     }
        // },
        // directives:{
        //     "kerwinswiper":{
        //         inserted(el,binding,vnode){
        //             binding.value.callback(binding.value.index);
        //         }
        //     }
        // }
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