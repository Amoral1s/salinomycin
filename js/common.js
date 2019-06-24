$(document).ready(function(){

	$('.toggle').click(function(){
    $('.toggle-wrap').toggleClass('toggle-wrap-open');
  });
	$('.toggle').click(function(){
    $('.nav').toggleClass('nav-open');
  });

  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });


});