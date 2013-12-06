define(function(require, exports, module) {
	// require('./Dialog.css');
	var $ = require('jquery');
	Handlebars = require('handlebars'),
	pt = require('../view/PreorderList.html'),
	// 或者通过 module.exports 提供整个接口
	module.exports = PreorderList;

	/*预购列表*/
	function PreorderList() {
		this.pT = Handlebars.compile(pt);
	}

	/**
	 * 预购列表
	 * @param nodeId
	 * @param data
	 */
	
	PreorderList.prototype.showPreorderList = function(data,nodeId){
		console.log(data)
		var htmlStr = this.pT({data:data});
		$(nodeId).html(htmlStr);
	};
	
	PreorderList.prototype.bindPager = function(nodeId,pager){
		$(nodeId).html(pager.getHtml());
		pager.bindEvents();
	};
	
});