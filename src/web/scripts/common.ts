import * as $ from 'jquery';
// tslint:disable-next-line:no-var-requires
require('slick-carousel');
// tslint:disable-next-line:no-var-requires
require('magnific-popup');
// tslint:disable-next-line:no-var-requires
const wowJs = require('wowjs');

$(document).ready(() => {
  new wowJs.WOW().init();
  ($('.testimonials-wrapper') as any).slick({
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
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

  ($('.projects-wrapper') as any).slick({
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
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

  ($('.contact_us_btn') as any).magnificPopup({
    focus: '#name',
    preloader: false,
    type: 'inline',
  });
  $('.popup-form__input-wrapper_invalid-message').hide();
  $('#form__submit').click(() => {
    const emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const name = $('input#name').val();
    if (name === '') {
      $('#name_error').show();
      $('input#name')
        .focus()
        .addClass('popup-form__input-wrapper_invalid');
      return false;
    } else if (name !== '') {
      $('#name_error').hide();
      $('input#name').removeClass('popup-form__input-wrapper_invalid');
    }
    const email = $('input#email').val();
    if (email === '' || !emailRegExp.test(email!.toString())) {
      $('#email_error').show();
      $('input#email')
        .focus()
        .addClass('popup-form__input-wrapper_invalid');
      return false;
    } else if (email !== '') {
      $('#email_error').hide();
      $('input#email').removeClass('popup-form__input-wrapper_invalid');
    }
    const message = $('textarea#message').val();
    if (message === '') {
      $('#textarea_error').show();
      $('textarea#message')
        .focus()
        .addClass('popup-form__input-wrapper_invalid');
      return false;
    } else if (message !== '') {
      $('#textarea_error').hide();
      $('textarea#message').removeClass('popup-form__input-wrapper_invalid');
    }
    if (name !== '' && email !== '' && message !== '') {
      $('.popup-form').submit(() => {
        $('#form__submit').prop('disabled', true);
        $.ajax({
          data: { email, name, message },
          error: () => {
            $('#form__submit').prop('disabled', false);
            $('.error-message').addClass('open');
            setTimeout(() => {
              $('.error-message').removeClass('open');
              ($ as any).magnificPopup.close();
            }, 3000);
          },
          success: () => {
            $('#form__submit').prop('disabled', false);
            $('.success-message').addClass('open');
            setTimeout(() => {
              $('.success-message').removeClass('open');
              ($ as any).magnificPopup.close();
            }, 3000);
          },
          type: 'POST',
          url: 'http://jsdaddy.io/mail/contacts',
        });
        return false;
      });
      return;
    }
    return;
  });

  $('.testimonials-wrapper').on('setPosition', () => {
    $('.testimonials-wrapper')
      .find('.slick-slide')
      .height('auto');
    const slickTrack = $('.testimonials-wrapper').find('.slick-track');
    const slickTrackHeight = $(slickTrack).height();
    $('.testimonials-wrapper')
      .find('.item')
      .css('height', slickTrackHeight + 'px');
  });

  $('.projects-wrapper').on('setPosition', () => {
    $('.projects-wrapper')
      .find('.slick-slide')
      .height('auto');
    const slickTrack = $('.projects-wrapper').find('.slick-track');
    const slickTrackHeight = $(slickTrack).height();
    $('.projects-wrapper')
      .find('.item')
      .css('height', slickTrackHeight + 'px');
  });

  let showOrHide = true;
  $('.nav-burger').click(() => {
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
  $(window).scroll(() => {
    const windowScroll = window;
    if ($(windowScroll).scrollTop()! > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(() => {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});

// smooth navigation scroll
$('a[href*="#"]').click(function() {
  const a = $(this)
    .attr('href')!
    .slice(1);
  const offset = $(a).offset();
  if (offset) {
    $('body, html').animate(
      {
        scrollTop: offset.top,
      }, /* speed */
    );
  }
});

// add class 'active' to navigation link
const btns: any = document.getElementsByClassName('link-nav');
for (const i of btns) {
  i.addEventListener('click', () => {
    const current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    i.className += ' active';
  });
}

// $('.scroll-down').click (() => {
//   $('html, body').animate({ scrollTop: 700 }, 600);
//   return false;
// });
