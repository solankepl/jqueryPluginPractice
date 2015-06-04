$(function() {

  $("#page-wrap div").click(function() {
    $(this).css("background", "red");
  });
  
  $("#box-one .inside").click(function(e) {
    $(this).css("background", "green");
    e.preventDefault();
  });
  
  $("#box-two .inside").click(function() {
  
    $(this).css("background", "green");
    return false;
  	//e.stopPropagation();
  });

});