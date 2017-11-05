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
	});

	// keep the same height
	$('#product-wrapper').each(function(){
		// cache the highest element
		let heightestBox = 0;

		$(this).find('.product-box', this).each(function(){
			// heightestBox = $(this).height();
			console.log(heightestBox);
			if($(this).height() > heightestBox) {
				heightestBox = $(this).height();
			}
			
		});
		// console.log(heightestBox);
		$('product-box.featured', this).css('height', heightestBox);

	});


});