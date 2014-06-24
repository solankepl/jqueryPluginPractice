(function($){
    $.simpleSlideShow = function(selector, settings){
		
		var config = {
			'delay': 2000,
			'fadeSpeed': 500
		};
		if ( settings ){$.extend(config, settings);}

	
		var obj = $(selector);
		var img = obj.children('img');
		var count = img.length;
		var i = 0;

	
		img.eq(0).show();

		setInterval(function(){
			img.eq(i).fadeOut(config.fadeSpeed);
			i = ( i+1 == count ) ? 0 : i+1;
			img.eq(i).fadeIn(config.fadeSpeed);
		}, config.delay);
        
		return this;
	};
})(jQuery);
