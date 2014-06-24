//Responsive slider  Created by pavan solanke
//v2 Date - 16- jan -2014

var normalDistance =170;  //set image width
var firstImageNum=0;
var speed =1000;
var maxWidth;	
	
$(document).ready(function(e) {
	setLiPostion();
	checkDevice(); 
	$(window).resize(function() {
		checkDevice(); 
	}); 		
});
	
/*=========== Load all li and set postion ==============*/
function setLiPostion(){
	var left =0;	     
	$("#addimages").find('li').each(function(j, li){
		$(this).css('left',left);
		left=left+normalDistance;
		maxWidth = left;	
	})
	$("#next").bind("click", showData);
}
	
/*=========== set marigin left or right  addImages Container==============*/	
 function showData(){
		var cureentClick = $(this).attr("id");//direction //
		currentPostion =parseInt($("#addimages").css('margin-left').replace('px', ''));		
				
		$('#back').unbind("click", showData);
		$('#next').unbind("click", showData);		
		
		if(cureentClick==="back")
		{
			if(currentPostion<0)
			{
				$('#next').addClass('arrowimage');
				$('#next').removeClass('arrowimagedeactive');
				currentPostion = currentPostion + parseInt($("#playlist").css("width"));
			}else 
			{
				currentPostion =0;
				$('#back').addClass('arrowimagedeactive');
				$('#back').removeClass('arrowimage');
			}
		}else{			
			if (currentPostion*-1> maxWidth-parseInt($("#playlist").css("width"))) 
			{
				$('#next').removeClass('arrowimage');
				$('#next').addClass('arrowimagedeactive');	
				
			}else{
				$('#back').removeClass('arrowimagedeactive');
				$('#back').addClass('arrowimage');				
				currentPostion = currentPostion + parseInt($("#playlist").css("width"))*-1;
			}	
							
		}	
				
		if (currentPostion*-1> maxWidth-parseInt($("#playlist").css("width"))) 
			{
				$('#next').removeClass('arrowimage');
				$('#next').addClass('arrowimagedeactive');	
				var temp = parseInt($("#addimages li").last().css("left"))-parseInt($("#playlist").css("width"))+(normalDistance);
				currentPostion = temp*-1; 					
			}
			
			if(currentPostion>=0){
				currentPostion=0;
				$('#back').addClass('arrowimagedeactive');
				$('#back').removeClass('arrowimage');					
			}	
			
		$('#addimages').animate({
				"margin-left":currentPostion
			},speed,function(){
				$('#back').bind("click", showData);
				$('#next').bind("click", showData);					
		});			
}


/*=========== Check device Type ==============*/
function checkDevice(){
		var useragent = navigator.userAgent,
		isIphone = !!useragent.match(/iPhone/i),
		isIpad = !!useragent.match(/iPad/i),
		isWinDskp = !!useragent.match(/NT/i);
		androidPhone = !!useragent.match(/Android/i);
	
		if(androidPhone || isIphone || isIpad){
			$('#playlist').css({'overflow-x':'scroll','overflow-y': 'hidden','width':'96%'});
			$('.arrowimage').css('display','none');	
		}
}