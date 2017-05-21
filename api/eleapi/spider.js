/**
 * Created by Administrator on 2017/4/17.
 */
var https = require("https"); //
function spider(path,callback){
    var options = {
        hostname: 'm.huahaicang.cn',
        port: 443,
        path:path,
        method: 'GET'
    };
//http://m.huahaicang.cn/api-ad2.html?zone_id=575%2C1038%2C897%2C898%2C899%2C893%2C894%2C895%2C999%2C578%2C580%2C582&clientType=android&marsCid=1495343862772
//http://m.huahaicang.cn/ajaxapi-brandList.html?brand_id=800028645&label=&warehouse=VIP_SH&stock=&sort_order=&sort_by=&sortId=j_003&sort=&page_no=1&limit=20&req_brand_details=1
//使用 http.request() 必须总是调用 req.end() 来表明请求已经结束，即使没有数据被写入请求主体。

    var data = "";
    var req = https.request(options,function(res){


        res.on("data",function(chunk){
            data+=chunk;
        })

        res.on("end",function(){
            //console.log(data);
            callback(data);
        })
    })

    req.end();
}

//exports.kerwinspider = spider;

module.exports = spider;