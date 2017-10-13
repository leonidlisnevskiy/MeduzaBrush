import $ from 'jquery';
import {slick} from 'slick-carousel';
import { scrollreveal } from 'scrollreveal';
import {fancybox} from '@fancyapps/fancybox';
import {formvalidator} from 'jquery-form-validator';

export default (function() {
  const galleryItem = $('.js-fancybox');
  galleryItem.fancybox();
})();



$(document).ready(function() {



  $('#callForm').submit(function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: '../form-call.php',
      dataType: 'json',
      data: formData
    }).done(function(data) {
      console.log(data);
      alert("It's OK!");
    }).fail(function(data) {
      console.log(data);
    });
    return true;
  });

  $.validate({
    lang: 'ru'
  });

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
