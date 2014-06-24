;(function($){
 	$.fn.extend({  		
 		myFirstPlugin: function(options) {
			
			var defaults = {
				text         : 'default Test',
				defaultColor : '#ccc',
				overColor	 :'#eee'				
			};
			
			var options = $.extend(defaults, options);
		
    		return this.each(function() {
				  var o =options;
				  var obj = $(this);	
				  
				  $(this).text(o.text);
				  $(this).css('color', o.defaultColor);	
				  
				 obj.mouseover(function() {
					  $(this).css('color', o.overColor);					
				  }).mouseout(function() {
					  $(this).css('color', o.defaultColor);					
				  });
    		});
    	}
	});
})(jQuery);