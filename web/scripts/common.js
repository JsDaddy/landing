$(document).ready(function () {
  $('.slider-teaches').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
$('#menu li a').click(function () {
  $('#menu li a').removeClass('active');
  $(this).addClass('active');

  if ($(window).width() <= 1199) {
    $('.navigation-wrapper').toggle();
    $('.nav-burger').removeClass('active')
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

$('.program-title').equalHeights();
