jQuery(document).ready(function($){
	$('.product-box')
	.mouseover(function(){
		$('.product-title').addClass('white');
	})
	.mouseout(function(){
		$('product-title').removeClass('white');
	})
});