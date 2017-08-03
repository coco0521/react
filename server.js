const express = require('express');
const debug = require('debug');
var server = express();
var path = require('path');

// 网站图标
var favicon = require('serve-favicon');
server.use(favicon(path.join(__dirname + '/public/favicon.png')));
//req.cookie(key,value) 向客户端写入cookie
var cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//引入session中间件 引入之后，多了一个req.session属性，用来存session的
var session = require('express-session');
//默认情况下,session是存放在内存中的，connect-mongo会把session存在数据库
var MongoStore = require('connect-mongo')(session);
var config = require('./config');
//应用 cookieParser,req.cookies res.cookie(key,value),因为session的值还是存在cookie中的
server.use(cookieParser());
server.use(session({
	//加密字符集
	secret:'coco',
	//存储时长为15分钟
	cookie:{maxAge:1000 * 60 * 15},
	//每次响应结束后都保存一下session数据
	resave:true,
	//保存新创建但未初始化的session
	saveUninitialized:true,
	//将session存储到数据库中，这样在数据库中有session表
	store:new MongoStore({
		url:config.dbUrl
	})
}));
// 加载静态文件路由
server.use('/static', express.static(path.join(__dirname + '/public')));
server.use('/release', express.static(path.join(__dirname + '/dist')));
// CORS, 跨域资源共享
server.all( '*', function ( req, res, next ) {
  res.set( {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Cookie'
  });
  next();
} );

// 加载模拟后台接口的逻辑路由
server.all(require('./core/simulator').sysRouters(server));

// 错误处理
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

module.exports = server;
