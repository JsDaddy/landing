const $ = require('jquery');
require('slick-carousel');
$(document).ready(function () {
  $('.slider-teachers').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          autoplay: true
        }
      }
    ]
  });
  $('.sl-events').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  });
  $('.testimonials-wrap').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  autoplay: false
              }
          }
      ]
  });
  var type = window.location.hash.substr(1);
  if (!type) {
    return;
  }
  $(`a[href$=${type}]`).addClass('active');
});

$('.nav-burger').click(function () {
  $(this).toggleClass('active');
  $(this).parents('header').toggleClass('b-bottom');
  $(this).siblings('.navigation-wrapper').slideToggle();
});
$('#main-menu > li a').click(function () {
  $('#main-menu > li a').removeClass('active');
  $('#main-menu > li a').siblings('.navigation-wrapper').slideToggle();
  $('#main-menu > li a').parents('header').toggleClass('b-bottom');
  $(this).addClass('active');

  if ($(window).width() <= 1199) {
    $('.navigation-wrapper').toggle();
    $('.nav-burger').removeClass('active')
  }
});

$('.sub-menu span').click(function () {
  if ($(window).width() <= 1199) {
    $(this).toggleClass('open');
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 110) {
    $('header').addClass('fixed-header');
  }
  else {
    $('header').removeClass('fixed-header');
  }
});

// $('.program-title').equalHeights();
