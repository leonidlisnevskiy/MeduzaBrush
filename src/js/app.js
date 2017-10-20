import $ from 'jquery';
import slick from 'slick-carousel';
import scrollreveal from 'scrollreveal';
import {fancybox} from '@fancyapps/fancybox';
import formvalidator from 'jquery-form-validator';

window.sr = scrollreveal({ reset: true });

if (sr.isSupported()) {
  document.documentElement.classList.add('sr');
}
export default (function() {
  const galleryItem = $('.js-fancybox');
  galleryItem.fancybox();
})();



$(document).ready(function() {
  sr.reveal('.js-reveal', {
    container: '.js-reveal-container',
    opacity: 1,
    scale: 1,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: true,
    distance: '0px',
    delay: 50,
    useDelay: 'always'
  }, 71);

  sr.reveal('.js-reveal-00', {
    duration: 900,
    origin: 'top',
    rotate: { x: 0, y: 25, z: 0 },
  });

  sr.reveal('.js-reveal-01', {
    origin: 'right',
    duration: 800,
    rotate: { x: 0, y: -45, z: 0 }
  });

  sr.reveal('.js-reveal-02', {
    origin: 'left',
    rotate: { x: 0, y: 20, z: 0 }
  });

  sr.reveal('.js-reveal-03', {
    origin: 'bottom',
    rotate: { x: 0, y: 20, z: 0 }
  });

  sr.reveal('.js-reveal-04', {
    origin: 'bottom',
    rotate: { x: -35, y: 0, z: 0 }
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
        breakpoint: 657,
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

  $('textarea, input').each(function() {
    var placeholder = $(this).attr('placeholder');

    $(this).focus(function() {
      $(this).attr('placeholder', '');
    });
    $(this).blur(function() {
      $(this).attr('placeholder', placeholder);
    });
  });

});
