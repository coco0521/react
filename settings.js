const PORT = process.env.npm_package_config_port;
var express = require('express');
var server = express();
var path = require('path');

// 配置Mongo数据库
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// const MONGODB_HOST = 'mongodb://db_mongo/component';
// mongoose.connect(MONGODB_HOST);

// 监测异常
// var db = mongoose.connection
// db.on('error', console.error.bind(console,'连接错误:'))
// db.once('open',function(){
//   console.log('MongoDB was opend!')
// })
// db.once('close',function(){
//   console.log('MongoDB was closed!')
// })

// 定义数据解析器
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

// 定义cookie解析器
const cookieParser = require('cookie-parser');
server.use(cookieParser());

module.exports = {
  PORT: PORT
};
