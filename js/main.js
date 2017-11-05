jQuery(document).ready(function($){
	$('.product-box')
	.mouseover(function(){
		$('.product-title', this).addClass('white');
	})
	.mouseout(function(){
		$('.product-title', this).removeClass('white');
	})
});