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
		
		// find each title and determine the highest
		$(this).find('.product-box.featured .product-title', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > heightestBox) {
				heightestBox = $(this).height();
			}
			
		});

		// make an inline css based on the
		// heighest title element
		$('.product-title', this).css({
			'height': heightestBox,
		});

	});

		// keep the same height
	$('#product-wrapper-single').each(function(){
		
		// cache the highest element
		let heightestBox = 0;
		
		// find each title and determine the highest
		$(this).find('.product-box .product-title', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > heightestBox) {
				heightestBox = $(this).height();
			}
			
		});

		// make an inline css based on the
		// heighest title element
		$('.product-title', this).css({
			'height': heightestBox,
		});

	});

		$('#prod-recent-posts').each(function(){
		
		// cache the highest element
		let heightestBox = 0;
		
		// find each title and determine the highest
		$(this).find('.post-header', this).each(function(){
			
			// make the height of all the titles the heighest
			if($(this).height() > heightestBox) {
				heightestBox = $(this).height();
			}
			
		});

		// make an inline css based on the
		// heighest title element
		$('.post-header', this).css({
			'height': heightestBox,
		});

	});


});