'use strict';
$(function() { 
	var banner = $('[data-slick-banner]');
	var banner_white = $('[data-slick-banner-white]');
	var banner_blue = $('[data-slick-banner-blue]');
	var slider = $('[data-slick-slider]');
	var insta = $('[data-slick-insta]');
	var catalog = $('[data-slick-catalog]');
	var catalog_note = $('[data-slick-catalog-note]');
	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';

	banner.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
        pauseOnHover: true,
		//fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 10000,
	});
	banner_white.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
        pauseOnHover: true,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 10000,
	});
	banner_blue.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
        pauseOnHover: true,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 10000,
	});

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
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		autoplay: false,
		responsive: [				  
		    {
				breakpoint: 766,
				settings: {
					variableWidth: true, 
					slidesToShow: 1,
					slidesToScroll: 1, 
				}
		    },
		]
	});
	catalog_note.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 7000,
	});
}); 

	


$(window).on('scroll',function(event){
	var ST = 	$(document).scrollTop();		
	var navbar = 	$('.juicer__section.is--nav');	
	var start = 	$('.juicer__section.is--step').offset().top;
	//console.log(start);
	if(ST <= start) {
		navbar.removeClass('is--visible');
	} else{
		navbar.addClass('is--visible');
	}
}).trigger('scroll');