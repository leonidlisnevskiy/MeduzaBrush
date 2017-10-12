import sayHello from './lib/sayHello.js';

import fancybox from 'fancybox';
import slick from 'slick-carousel';

sayHello();

$(document).ready(function() {

  $('.js-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick'
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true
        }
      }]
  });

  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
  });

});
