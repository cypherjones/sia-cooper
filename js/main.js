jQuery(document).ready(function($){
	$('.product-box').mouseover(function(){
		$('.product-title').addClass('white');
	})
	$('.product-box').mouseout(function(){
		$('product-title').removeClass('white');
	})
});