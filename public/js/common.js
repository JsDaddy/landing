$(document).ready(function () {
    $('.slider-teaches').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 110) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});