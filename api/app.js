var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose"); 
var session = require("express-session"); //session 模块 ，用于cookie用户凭证的验证



var routes = require('./routes/index');
var users = require('./routes/users');
var api = require("./api/api");

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));//所有模板文件 ，都从views文件夹下面去加载
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session 模块的初始化工作
app.use(session({
  name: "userId",
  secret:"lwffcpsly", //加密用的
  cookie: {maxAge: 1000*3600 }, //1小时
  resave: true,
  saveUninitialized: true,//一旦访问 就会设置一个cookie
}));

app.use('/', routes);
app.use('/users', users);

app.use("/api",api); //爬虫接口
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



//数据库连接
//需要下载
mongoose.connect("mongodb://127.0.0.1:27017/huahaicang");
//创建集合(表)；
global.dbhandler = require("./api/dbhandler"); //dbhandle是操作集合的方法，但是只能初始化一次，
//所以我们设置成全局的变量，可以在其他的模块中去使用
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
