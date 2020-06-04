'use strict';
$(function() { 
	var slider = $('[data-slick-slider]');
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';
	slider.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true,
		variableWidth: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		  
		    {
				breakpoint: 1200,
				settings: {
					variableWidth: false,
					slidesToShow: 3,
					slidesToScroll: 3, 
				}
		    },
		  
		    {
				breakpoint: 992,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 2, 
				}
		    },
		  
		    {
				breakpoint: 767,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 2, 
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1, 
				}
		    }
		]
	});
}); 