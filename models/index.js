const mongoose = require('mongoose');
const config = require('../config');
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect(config.dbUrl);

//管理员模型
exports.Admin = mongoose.model('admin',new mongoose.Schema({
	username:String,
	password:String,
	email:String
}));

//组织机构模型
exports.Org = mongoose.model('orgs',new mongoose.Schema({
	id:String,
	name:String,
	type:String,
	parentId:String,
	sort:Number
}));