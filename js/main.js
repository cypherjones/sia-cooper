jQuery(document).ready(function($){
	//find the product box
	$('.product-box')
	.mouseover(function(){
		// add the class 'white' on mouseover
		$('.product-title', this).addClass('white');
	})
	.mouseout(function(){
		// remove the class 'white' on mouseout
		$('.product-title', this).removeClass('white');
	})
	// find the sinlge product box
	// $('.product-box-s')
});