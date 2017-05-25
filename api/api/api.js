/**
 * Created by Administrator on 2017/4/17.
 */
var express = require('express');
var router = express.Router();

var spider = require("./spider");

//请求商品种类  首页
router.get("/category",function(req,res){
	console.log(req.session.userId);
    spider("/api-ad2.html?zone_id=575%2C1038%2C897%2C898%2C899%2C893%2C894%2C895%2C999%2C578%2C580%2C582&clientType=android&marsCid=1495343862772",function(data){
        res.send(data);
    })
    
})

//商品列表
router.get("/brand",function(req,res){
	console.log(req.query.id);
	var id = req.query.id;
	spider("/ajaxapi-brandList.html?brand_id="+id+"&label=&warehouse=VIP_HZ&stock=&sort_order=&sort_by=&sortId=j_003&sort=&page_no=1&limit=20&req_brand_details=1",function(data){
        res.send(data);
    })
})

//登录处理
router.post("/loginvalidate",function(req,res){
    //获取user模型， 去查询users 集合
    dbhandler.user.find({
        userId:req.body.userId,
        password:req.body.password,
    },function(error,result){
        if(!error){
            if(result.length>0){

                //用户名和密码在数据库中匹配到了

                //session 存储 req.session ,自动去session区域查找(req.cookie 带来的值)

                /*(1) cookie 在浏览器端(存的是一个sessionID， 这是访问session的一把钥匙)，
                 *(2)cookie 中的httpOnly属性设置成true, 就无法通过js 访问到。
                *(3)session 在服务器端(a.内存中，b.文件，c.数据库中)
                *（4）session在内存中， 如果node服务重启， 那么session 中数据就会丢失
                *(5) 用户注销的情况，我们需要销毁session
                * */
                //req.session.user = result[0];
                //console.log(result[0]);
                req.session.userId = result[0].userId;
                res.redirect("/user?userid="+result[0].userId);
                //res.send(result[0]);
            }else{            	
        		res.redirect("/login");
        		//res.send("error");
            }
        }else{        	
        	res.redirect("/login");
        	//res.send("error")
        }
    })
})

//处理注册
router.post("/registervalidate",function(req,res){
    //console.log(req.body);

    //往数据库存储数据(文档)（前提是集合以及创建好了）
    //console.log(dbhandler);
    //在注册数据存储之前，先查询是否有改用户
    dbhandler.user.find({
        userId:req.body.userId
    },function(error,result){
        if(!error){
            if(result.length>0){
                //有同名的 
                res.redirect("/register");
            }else{
                //没有同名的                
                dbhandler.user.create({
                    userId:req.body.userId,
                    password:req.body.password,
                    shopcars:"",
                } ,function(error,result){
                    if(!error){
                    	//注册成功
                        res.redirect("/login");
                    }
                })                
            }
        }else{
        	res.redirect("/register");
        	//res.send("error");
        }        
    })
})


//查找是否有同名的
router.post("/findUser",function(req,res){
    //console.log(req.body);

    //往数据库存储数据(文档)（前提是集合以及创建好了）
    //console.log(dbhandler);
    //在注册数据存储之前，先查询是否有改用户
    dbhandler.user.find({
        userId:req.body.userId
    },function(error,result){
        if(!error){
            if(result.length>0){
                //有同名的 
                res.send(true);
            }else{
                //没有同名的                
                res.send(false);
            }
                
        }
    })
        
})
//退出登录，注销session
router.post("/quit",function(req,res){
	//console.log(req.session.userId);
	req.session.destroy(function(error){
      if(!error){
        res.send("success");
        //res.send("success");
      }
      })
})

router.get("/tocart",function(req,res){
	//console.log(req.session.userId);
	if(!req.session.userId){
		res.send("/login")
	}else{
		res.send("/cart")
	}
})

router.get("/touser",function(req,res){
	//console.log(req.session.userId);
	if(!req.session.userId){
		res.send("/login")
	}else{
		res.send("/user")
	}
})
//返回购物车信息
router.post("/shopcar",function(req,res){
    dbhandler.shopcar.find({
        userId:req.body.userId,
    },function(error,result){
        if(!error){
            if(result.length>0){
                res.send(result);
            }else{            	
        		res.send("error");
            }
        }else{        	
        	res.send("error");
        }
    })
})
//加入购物车
router.post("/registervalidate",function(req,res){
    dbhandler.shopcar.find({
        userId:req.body.userId,
        listId:req.body.listId,
        
    },function(error,result){
        if(!error){
            if(result.length>0){ 
                res.redirect("/register");
            }else{             
                dbhandler.user.create({
                    userId:req.body.userId,
                    password:req.body.password,
                    shopcars:"",
                } ,function(error,result){
                    if(!error){
                        res.redirect("/login");
                    }
                }) 
            }
        }else{
        	res.redirect("/register");
        }       
    })
})

module.exports= router;

