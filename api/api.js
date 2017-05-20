/**
 * Created by my on 2017/4/21.
 */
var express = require('express');
var router = express.Router();

var spider = require("./spider");

/* GET home page. */
router.get("/adress",function(req,res){
    spider("/v2/pois/ww6ct4nqdqs",function(data){
        res.send(data);
    })
    //res.send("eleapi");
})
router.get("/weather",function(req,res){
    spider("/bgs/weather/current?latitude=35.43206&longitude=116.5956",function(data){
        res.send(data);
    })
    //res.send("eleapi");
})
router.get("/search",function(req,res){
    spider("/shopping/v3/hot_search_words?latitude=35.43206&longitude=116.5956",function(data){
        res.send(data);
    })
    //res.send("eleapi");
})
router.get("/good",function(req,res){
    spider("/v2/index_entry?geohash=ww6ct4nqdqs&group_type=1&flags[]=F",function(data){
        res.send(data);
    })
    //res.send("eleapi");
})
router.get("/restaurant",function(req,res){
    var num = req.query.num;
    var first = req.query.first;
    //localhost:3000/api/restaurant?id=all
    //爬全部商家的数据
    num = num || 20;
    first = first || 0;
    spider("/shopping/restaurants?extras%5B%5D=activities&geohash=wwykvpym3wd&latitude=38.84722&limit="+ first +"&longitude=121.51744&offset="+ num +"&terminal=web",function(data){
    //offset:爬几个数；limit:从第几个爬
        res.send(data);
    })
    //res.send("eleapi");
})
module.exports = router;
