const express = require('express');
const fetch = require('isomorphic-fetch');
var router = express.Router();

var models = require('../../models');

module.exports = router.post('/reg/dologin',(req,res) => {
	models.Admin.findOne({username:req.body.username,password:req.body.password},(err,doc) => {
		if(err) {
			res.json({
				"msg":"用户登录失败",
				"result":null,
				"success":false
			});
		}else{
			if(doc) {
				var obj = new Object();
				obj.username = doc.username;
				obj.password = doc.password;
				req.session.user = obj;
				res.json({
					"msg":"登录成功",  
					"result":doc,
					"success":true
				});
			}else{
				res.json({
					"msg":"用户名或者密码错误",
					"result":null,
					"success":false
				});
			}
		}
	})
});