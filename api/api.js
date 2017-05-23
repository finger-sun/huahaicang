/**
 * Created by Administrator on 2017/4/17.
 */
var express = require('express');
var router = express.Router();

var spider = require("./spider");

//请求商品种类  首页
router.get("/category",function(req,res){
    spider("/api-ad2.html?zone_id=575%2C1038%2C897%2C898%2C899%2C893%2C894%2C895%2C999%2C578%2C580%2C582&clientType=android&marsCid=1495343862772",function(data){
        res.send(data);
        console.log(111);
    })
})

//商品列表
router.get("/brand",function(req,res){
    spider("/ajaxapi-brandList.html?brand_id=800028833&label=&warehouse=VIP_HZ&stock=&sort_order=&sort_by=&sortId=j_003&sort=&page_no=1&limit=20&req_brand_details=1",function(data){
        res.send(data);
        console.log(data);
    })
})




//http://m.huahaicang.cn/ajaxapi-brandList.html?brand_id=800028645

// //请求餐馆信息( 去饿了么爬餐馆信息)
// router.get("/restaurant",function(req,res){
//     var id = req.query.id;

//     if(id=="all"){
//         //爬全部商家的数据
//         spider("/shopping/restaurants?extras%5B%5D=activities&geohash=wwykvpym3wd&latitude=38.84722&limit=24&longitude=121.51744&offset=0&terminal=web",function(data){
//             res.send(data);
//         })
//     }else{
//         //根据不同的id 去爬不同的数据
//         spider("/shopping/restaurants?extras%5B%5D=activities&geohash=wwykvpym3wd&latitude=38.84722&limit=24&longitude=121.51744&offset=0&restaurant_category_ids%5B%5D="+id+"&sign=1492394751759&terminal=web",function(data){
//             res.send(data);
//         })
//     }
//     //res.send("eleapi");
// })


module.exports= router;

