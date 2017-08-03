const express = require('express');
const fetch = require('isomorphic-fetch');
var router = express.Router();

var models = require('../../models');

module.exports = router.post('/reg/docreate',(req,res) => {
	var simOut = new Object();
	delete(req.body.repassword);
	var user = req.body;
	models.Admin.create(req.body, function(err,doc) {
		if(err) {
			simOut = {
				"msg":"注册失败",
				"result":null,
				"success": false
			}
			res.json(simOut);
		}else{
			simOut = {
				"msg":"注册成功",
				"result":user,
				"success": true
			}
			res.json(simOut);
		}
	})
});  