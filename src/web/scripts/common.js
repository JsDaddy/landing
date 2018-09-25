import * as $ from 'jquery';
require('slick-carousel');
require('magnific-popup');
const wowJs = require('wowjs');

$(document).ready(function () {
  new wowJs.WOW().init();
  $('.testimonials-wrapper').slick({
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
    slidesToShow: 3,
  });

  $('.contact_us_btn').magnificPopup({
    focus: '#name',
    preloader: false,
    type: 'inline',

    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
          return;
        }
        this.st.focus = '#name';
      },
    },
  });
  $('.popup-form__input-wrapper_invalid-message').hide();
  $('#form__submit').click(function () {
    const emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const name = $('input#name').val();
    if (name === '') {
      $('#name_error').show();
      $('input#name').focus().addClass('popup-form__input-wrapper_invalid');
      return false;
    } else if (name !== '') {
      $('#name_error').hide();
      $('input#name').removeClass('popup-form__input-wrapper_invalid');
    }
    const email = $('input#email').val();
    if (email === '' || !emailRegExp.test(email)) {
      $('#email_error').show();
      $('input#email').focus().addClass('popup-form__input-wrapper_invalid');
      return false;
    } else if (email !== '') {
      $('#email_error').hide();
      $('input#email').removeClass('popup-form__input-wrapper_invalid');
    }
    const message = $('textarea#message').val();
    if (message === '') {
      $('#textarea_error').show();
      $('textarea#message').focus().addClass('popup-form__input-wrapper_invalid');
      return false;
    } else if (message !== '') {
      $('#textarea_error').hide();
      $('textarea#message').removeClass('popup-form__input-wrapper_invalid');
    };
    // var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
    if (name !== '' && email !== '' && message !== '') {
      $('.popup-form').submit(function () {
        $.ajax({
          type: 'POST',
          url: 'http://jsdaddy.io/3000/mail/contacts',
          data: { email, name, message },
          success: () => {
            $('.success-message').addClass('open');
            setTimeout(() => {
              $('.success-message').removeClass('open');
              $.magnificPopup.close();
            }, 3000);
          },
          error: () => {
            $('.error-message').addClass('open');
            setTimeout(() => {
              $('.error-message').removeClass('open');
              $.magnificPopup.close();
            }, 3000);
          },
        });
        return false;
      });
    }
  });

  $('.testimonials-wrapper').on('setPosition', function () {
    $(this).find('.slick-slide').height('auto');
    const slickTrack = $(this).find('.slick-track');
    const slickTrackHeight = $(slickTrack).height();
    $(this).find('.item').css('height', slickTrackHeight + 'px');
  });

  let showOrHide = true;
  $('.nav-burger').click(function () {
    if (!showOrHide) {
      $('.nav-wrapper').slideUp(500);
      $('.nav-burger').removeClass('active');
      showOrHide = !showOrHide;
    } else {
      $('.nav-burger').addClass('active');
      $('.nav-wrapper').slideDown(500);
      showOrHide = !showOrHide;
    }
  });

  // scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});

// smooth navigation scroll
$('a[href*="#"]').click(function (e){
  if ($(this).attr('href')[0] === '/') {
    const position = $(this).attr('href').slice(1);
  } else {
    const position = $(this).attr('href');
    $('body, html').animate({
      scrollTop: ($(position).offset().top),
    } /* speed */);
  }
});

// add class 'active' to navigation link
const header = document.getElementById('menu-wrap');
const btns = document.getElementsByClassName('link-nav');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    const current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
  });
}
