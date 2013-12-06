define(function(require, exports, module) {
	var $ = require('jquery');
	var Logger = require('../util/Log');
	var logger = new Logger();
	module.exports = LepaoService ;
	var DEFAULT_DOMAIN = "http://127.0.0.1:88/";
	/**
	 * 乐跑手环官网后台管理，前后端通信模块
	 */
	function LepaoService(domain) {
		if (domain !== null) {
			this.domain = domain;
		} else {
			this.domain = DEFAULT_DOMAIN;
		}
	}
	/**
	 *获取预购列表
	 *h/v2/backstage/getPreOrderInfo?pageNo=1&pageSize=10
	 */
	LepaoService.prototype.getPreorderInfo = function(pageNo, pageSize,success) {
		$.post(this.domain + "/h/v2/backstage/getPreOrderInfo?time=" + new Date().getTime(),{"pageNo":pageNo,"pageSize":pageSize}, success, "json");
	}
});