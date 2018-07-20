const $ = require('jquery');
require('slick-carousel');
require('jq-accordion');

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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 10000,
          arrows: false
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

$(window).resize(function () {
  if ($(window).width() <= 575) {
    $('.wrap').unwrap('.left-img-cell');
    $('.unwrap').unwrap('.right-img-cell');
    $('.photo-sl').slick({
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000
    });
  }
}).trigger('resize');

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

$('.sub').click(function () {
  if ($(window).width() <= 1199) {
    $(this).parents('.sub-menu').toggleClass('open');
    $(this).siblings('.sub-nav').slideToggle();
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

$("a[href^='#']").click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});

$('.accordion').accordion({
    transitionSpeed: 300,
    transitionEasing: 'ease',
    controlElement: '[data-control]',
    contentElement: '[data-content]',
    groupElement: '[data-accordion-group]',
    singleOpen: true
});

// $('.program-title').equalHeights();
