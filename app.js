
var express=require('express');
var path=require('path');
var app=express();//生产express实例
//设置实例参数
app.set('port',process.env.PORT||3000);
//设置 试图存放位置
app.set('views',path.join(__dirname,'views'));
//设置 网页模板引擎
app.set('view engine','jade');
//???调用express中间件
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// 设定静态文件目录，比如本地文件
// 目录为demo/public/images，访问
// 网址则显示为http://localhost:3000/images
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));