define(function(require, exports, module) {
	/*后台管理控制-依赖注入模块*/
	var $ = require("jquery");
	var adminConfig=require("AdminConfig");
	var LepaoService = require("service/LepaoService")
	var PagerView = require("./view/Pager/Pager");
	var PreorderList = require("./view/PreorderList");
	var EventBus = require("./event/EventBus");
	module.exports = AdminController;

	function AdminController(){
		this.lepaoService = new LepaoService(adminConfig.adminBase);
	}
	AdminController.prototype.getPreorderInfo = function(page,pageSize,nodeId) {
		var me = this;
		var pl = new PreorderList(nodeId);
		me.lepaoService.getPreorderInfo(page,pageSize,function(data){
			if (data.ret == 1) {
				pl.showPreorderList(data.userInfoList,nodeId);
				data.page = 1;
				pl.bindPager("#pagination",new PagerView('pl', data.pageSize, data.page));
				EventBus.clearBind('pl' + '-jumpTo', function(e) {
					// console.log(e.targetPage);
					me.getPreorderInfo(e.targetPage,data.pageSize,nodeId);
				});
			};
		});

	};
});