import sayHello from './lib/sayHello.js';
import slick from 'slick-carousel';

$(document).ready(function() {
	sayHello();

	$('.js-slider').slick({
		autoplay: false,
		draggable: false,
		dots: false,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				dots: true
			}
		}]
	});

	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

});
