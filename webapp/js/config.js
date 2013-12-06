
seajs.config({
	// Enable plugins
	plugins: ['shim', 'text'],

	// Configure alias
	alias: {
		'jquery': {
			src: 'lib/jquery.min.js',
			exports: 'jQuery'
		},
		'handlebars':{
			src: 'lib/handlebars.js',
			exports: 'Handlebars'
		}
  },
  
  /** 防止缓存的配置 */
  map: [
        [ /^(.*\/js\/.*\.(?:css|js))(?:.*)$/i,           '$1?'+new Date().getTime()],
        [ /^(.*\/js\/view\/.*\.(?:css|js))(?:.*)$/i,     '$1?'+new Date().getTime()],
        [ /^(.*\/js\/page\/.*\.(?:css|js))(?:.*)$/i,     '$1?'+new Date().getTime()]
      ]
//  [ /^(.*\/js\/.*\.(?:css|js))(?:.*)$/i,           '$1?'+new Date().getTime() ],
//  [ /^(.*\/js\/view\/.*\.(?:css|js))(?:.*)$/i,     '$1?'+new Date().getTime() ],
//  [ /^(.*\/js\/page\/.*\.(?:css|js))(?:.*)$/i,     '$1?'+new Date().getTime() ]
});

