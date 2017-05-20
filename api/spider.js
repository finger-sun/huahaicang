/**
 * Created by my on 2017/4/22.
 */
var https = require("https"); //
function spider(path,callback){
    var options = {
        hostname: 'mainsite-restapi.ele.me',
        port: 443,
        path:path,
        method: 'GET'
    };
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