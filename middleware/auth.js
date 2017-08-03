//必须登录后才能访问
exports.checkLogin = (req,res,next) => {
	if(req.session.user) {
		next();
	}else{
		alert('必须登录后才能访问');
		window.location = 'login.html';
	}
}