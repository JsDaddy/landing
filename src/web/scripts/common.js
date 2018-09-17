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

$("a[href*='#']").click(function(e) {
  //e.preventDefault();

  if($(this).attr("href")[0]=="/") {
    var position = $(this).attr("href").slice(1);
  }
  else
    var position = $(this).attr("href");
  $("body, html").animate({
      scrollTop: ($(position).offset().top)
    } /* speed */ );
});

$(window).resize(function () {
  if ($(window).width() > 1199) {
    $('.navigation-wrapper').removeAttr('style');
  }
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

//////////////////////////////////////////////

// $(document).ready(function () {
// 	new WOW().init();
// 	$('.testimonials-wrapper').slick({
// 		arrows:false,
// 		dots: false,
// 		infinite: true,
// 		autoplaySpeed: 3000,
// 		autoplay: true,
// 		slidesToShow: 3,
// 		adaptiveHeight: true,
// 		responsive: [ 
// 			{
// 			breakpoint: 990,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 2
// 			}
// 		},
// 		{
// 			breakpoint: 768,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 2
// 			}
// 		}, 
// 		{
// 			breakpoint: 740,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 		},
// 		{
// 			breakpoint: 580,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 		},
// 		{
// 			breakpoint: 481,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1
// 			}
// 		}
// 		]

// 	})
// 	});
// 	$('.contact_us_btn').magnificPopup({
// 		type: 'inline',
// 		preloader: false,
// 		focus: '#name',

// 		callbacks: {
// 			beforeOpen: function () {
// 				if ($(window).width() < 700) {
// 					this.st.focus = false;
// 				} else {
// 					this.st.focus = '#name';
// 				}
// 			}
// 		}
// 	});
// 	$('.popup-form__input-wrapper_invalid-message').hide();
// 	$('#form__submit').click(function () {
// 		var emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// 		var name = $('input#name').val();
// 		if (name == '') {
// 			$('#name_error').show();
// 			$('input#name').focus().addClass('popup-form__input-wrapper_invalid');
// 			return false;
// 		} else if (name != '') {
// 			$('#name_error').hide();
// 			$('input#name').removeClass('popup-form__input-wrapper_invalid');
// 		};
// 		var email = $('input#email').val();
// 		if (email == '' || !emailRegExp.test(email)) {
// 			$('#email_error').show();
// 			$('input#email').focus().addClass('popup-form__input-wrapper_invalid');
// 			return false
// 		} else if (email != '') {
// 			$('#email_error').hide();
// 			$('input#email').removeClass('popup-form__input-wrapper_invalid');
// 		};
// 		var message = $("textarea#message").val();
// 		if (message == '') {
// 			$('#textarea_error').show();
// 			$('textarea#message').focus().addClass('popup-form__input-wrapper_invalid');
// 			return false;
// 		} else if (message != '') {
// 			$('#textarea_error').hide();
// 			$('textarea#message').removeClass('popup-form__input-wrapper_invalid');
// 		};
// 		var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
// 		if (name != '' && email != '' && message != '') {
// 			$(".popup-form").submit(function () {
// 				$.ajax({
// 					type: "POST",
// 					url: 'https://reqres.in/api/users',
// 					data: dataString,
// 					success: function () {
// 						$('.success-message').addClass('open');
// 					}
// 				});
// 				// $.ajax({
// 				// 	url: "https://reqres.in/api/users",
// 				// 	type: "POST",
// 				// 	data: {
// 				// 		name: "paul rudd",
// 				// 		movies: ["I Love You Man", "Role Models"]
// 				// 	},
// 				// 	success: function(response){
// 				// 		console.log(response);
// 				// 	}
// 				// });
// 				setTimeout( function() { 
// 					$('.success-message').removeClass('open');
// 					$.magnificPopup.close() }, 3000);
// 				return false;	
// 			});
// 		}
// 	});
// 	$('.testimonials-wrapper').on('setPosition', function () {
// 		$(this).find('.slick-slide').height('auto');
// 		var slickTrack = $(this).find('.slick-track');
// 		var slickTrackHeight = $(slickTrack).height();
// 		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
// 	});
// 	var showOrHide = true;
// 	$(".nav-burger").click(function () {
// 		if (!showOrHide) {
// 			$(".nav-wrapper").slideUp(500);
// 			$(".nav-burger").removeClass("active");
// 			showOrHide = !showOrHide;
// 		} else {
// 			$(".nav-burger").addClass("active");
// 			$(".nav-wrapper").slideDown(500);
// 			showOrHide = !showOrHide;
// 		}
// 	});
// 	// fixed header
// 	var $header = $("#header");
// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 100 && $header.hasClass("default")) {
// 			$header.removeClass("default").addClass("fixed");
// 		} else if ($(this).scrollTop() <= 100 && $header.hasClass("fixed")) {
// 			$header.removeClass("fixed").addClass("default");
// 		}
// 	});

// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 100 && $header.hasClass("default")) {
// 			$header.fadeOut('fast', function () {
// 				$(this).removeClass("default")
// 					.addClass("fixed transbg")
// 					.fadeIn('fast');
// 			});
// 		} else if ($(this).scrollTop() <= 100 && $header.hasClass("fixed")) {
// 			$header.fadeOut('fast', function () {
// 				$(this).removeClass("fixed transbg")
// 					.addClass("default")
// 					.fadeIn('fast');
// 			});
// 		}
// 	});
// 	$(window).scroll(function () {
// 		if ($(this).scrollTop() > 100) {
// 			$('.scrollup').fadeIn();
// 		} else {
// 			$('.scrollup').fadeOut();
// 		}
// 	});
// 	$('.scrollup').click(function () {
// 		$("html, body").animate({ scrollTop: 0 }, 600);
// 		return false;
// 	});
// 	// technologies icons animation
// 	// var a = [];
// 	// $(".technologies .icon").each(function (index) {
// 	// 	a[index] = $(this);
// 	// 	setTimeout(function () {
// 	// 		a[index].addClass('active').delay(500).queue(function (next) {
// 	// 			a[index].removeClass('active');
// 	// 			next();
// 	// 		});
// 	// 	}, index * 400);
// 	// });


// // smooth navigation scroll
// $('a').click(function () {
// 	$('html, body').animate({
// 		scrollTop: $($.attr(this, 'href')).offset().top
// 	}, 400);
// 	return false;
// });

// // add class 'active' to navigation link
// var header = document.getElementById("menu-wrap");
// var btns = document.getElementsByClassName("link-nav");
// for (var i = 0; i < btns.length; i++) {
// 	btns[i].addEventListener("click", function () {
// 		var current = document.getElementsByClassName("active");
// 		if (current.length > 0) {
// 			current[0].className = current[0].className.replace(" active", "");
// 		}
// 		this.className += " active";
// 	});
// }
