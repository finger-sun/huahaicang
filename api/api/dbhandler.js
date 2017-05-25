/**
 * Created by 文峰 on 2017/5/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema; //概要

var user = {
    userId:String,
    password:String,
    shopcars:String
} //将要存储的数据格式以及字段格式

mongoose.model("user",new Schema(user)); //创建一个模型，通过这个模型将来直接操作集合
// model是user, 集合名字对应就是users

var shopcar= {
    userId:String,
    listId:String,
    goodsIndex:String,
    goodsNum:String,
    goodsData:String
}
mongoose.model("shopcar",new Schema(shopcar)); //创建一个模型，通过这个模型将来直接操作集合
// model是article, 集合名字对应就是articles



module.exports = {
    user:mongoose.model("user"),
    shopcar:mongoose.model("shopcar")
}