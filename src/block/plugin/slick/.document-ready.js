'use strict';
$(function() { 
	var slider = $('[data-slick-slider]');
	var insta = $('[data-slick-insta]');
	var catalog = $('[data-slick-catalog]');
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';
	slider.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
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
	insta.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		variableWidth: true, 
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		autoplay: true,
  		autoplaySpeed: 4000,
		responsive: [		  
		    {
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1, 
				}
		    },
		  
		    {
				breakpoint: 766,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1, 
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
	catalog.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		autoplay: true,
  		autoplaySpeed: 4000,
		responsive: [				  
		    {
				breakpoint: 766,
				settings: {
				variableWidth: true, 
					slidesToShow: 2,
					slidesToScroll: 1, 
				}
		    },
		    /*{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1, 
				}
		    }*/
		]
	});
}); 