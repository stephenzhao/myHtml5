(function() {
	var ver = "1.0.1";
	try {
		ver = opener.QC.getVersion();
	} catch (e) {}
	ver = ver ? "-" + ver : ver;
	var qc_script;
	var reg = /\/qzone\/openapi\/qc_loader\.js/i;
	var scripts = document.getElementsByTagName("script");
	for (var i = 0, script, l = scripts.length; i < l; i++) {
		script = scripts[i];
		var src = script.src || "";
		var mat = src.match(reg);
		if (mat) {
			qc_script = script;
			break;
		}
	}
	var s_src = 'http://qzonestyle.gtimg.cn/qzone/openapi/qc' + ver + '.js';
	var arr = ['src=' + s_src + ''];
	for (var i = 0, att; i < qc_script.attributes.length; i++) {
		att = qc_script.attributes[i];
		if (att.name != "src" && att.specified) {
			arr.push([att.name, '"' + att.value + '"'].join("="));
		}
	}
	if (document.readyState != 'complete') {
		document.write('<script ' + arr.join(" ") + ' ><' + '/script>');
	} else {
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = s_src;
		var h = document.getElementsByTagName("head");
		if (h && h[0]) {
			h[0].appendChild(s);
		}
	}
})(); /*  |xGv00|676d6a7e85900598515d10d6bb330088 */