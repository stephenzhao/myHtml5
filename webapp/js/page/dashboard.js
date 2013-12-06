define(function(require) {
	var $ = require('jquery');
	var AdminController = require('AdminController');
	var adminConfig = require('AdminConfig');
	var UrlParams = require('../util/UrlParams');
	var urlParams = new UrlParams();
	var adminController = new AdminController();
	$(function() {

		$(".nav-query-info").on("click", function() {
			$("#main").load("query-info.html", function() {
				//预购单查询
				$("#query-preorder").on("click", function() {
					$("#main").load("pre-order-list.html", function() {
						var endTimeNode = $("#endTime");
						var startTimeNode = $("#startTime");
						seajs.use(["lib/bootstrap-datetimepicker.min", "lib/bootstrap-datetimepicker.zh-CN"], function() {
							

							startTimeNode.datetimepicker({
								format: 'yyyy-mm-dd',
								language: 'zh-CN',
								autoclose: true,
								minView: 2,
								maxDate: endTimeNode.val()
							});
							endTimeNode.datetimepicker({
								format: 'yyyy-mm-dd',
								language: 'zh-CN',
								autoclose: true,
								minView: 2,
								minDate: startTimeNode.val()
							});
							// $('.form_date').datetimepicker('setStartDate');
							// $('.form_date').datetimepicker('setEndDate');
						})

						$("#query-form").on("submit",function(){
							event.preventDefault();
							var starDate = startTimeNode.val()+" 00:00:00";
							var endDate = endTimeNode.val()+" 23:59:59";
							var startTime = new Date(starDate).getTime();
							var endTime = new Date(endDate).getTime();
							if(startTime>endTime){
								alert("开始日期大于结束日期！");
								return false;
							}
							adminController.getPreorderInfo(1,10,"#pt-list tbody");
							// console.log($("[name='endTime']").val());
						});
						adminController.getPreorderInfo(1,10,"#pt-list tbody");
						$(window).bind('beforeunload', function() {
							return '您输入的内容尚未保存，确定离开此页面吗？';
						});
					});
				});

			});
		});
	});
})