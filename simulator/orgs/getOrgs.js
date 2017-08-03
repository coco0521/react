const express = require('express');
const fetch = require('isomorphic-fetch');
var router = express.Router();

var models = require('../../models');

module.exports = router.get('/orgs/getOrgs',(req,res) => {
	models.Org.find((err,docs) => {
		if(err) {
			res.json({
				"msg":"查询失败",
				"result":null,
				"success":false
			});
		}else{
			if(docs) {
				res.json({
					"msg":"查询成功",
					"result":docs,
					"success":true
				});
			}else{
				res.json({
					"msg":"查询的不对",
					"result":null,
					"success":false
				});
			}
		}
	})
});