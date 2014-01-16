var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event",function(){//注册时间
	console.log("message+event_occour");
});
setTimeout(function() { 
  event.emit('some_event'); //发射（emit）事件
}, 1000);