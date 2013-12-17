define(function(require, exports, module) {
	/*后台管理 环境配置*/
	var adminConfig = {
		adminBase: "http://192.168.50.159:8090/lepao-order-admin",
//		 magicBase: "http://www.lepao.com", //声明：不要把自己本地的URL提交到svn
		targetUrl: {
			signIn: "sign-in.html",
			dashBorad:"dashboard.html"
		}
	};
	module.exports = adminConfig;

});