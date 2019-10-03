import * as $ from 'jquery';
// tslint:disable-next-line:no-var-requires
require('slick-carousel');

const slickOptions = {
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
};

$(document).ready(() => {
($('.testimonials-wrapper') as any).slick(slickOptions);
($('.projects-wrapper') as any).slick(slickOptions);
$('.testimonials-wrapper').on('setPosition', () => {
    $('.testimonials-wrapper')
        .find('.slick-slide')
        .height('auto');
    const slickTrack = $('.testimonials-wrapper').find('.slick-track');
    let slickTrackHeight = $(slickTrack).height();
    if (!slickTrackHeight || slickTrackHeight < 543) {
        slickTrackHeight = 543;
    }
    if (slickTrackHeight > 566) {
        slickTrackHeight = 543;
    }
    $('.testimonials-wrapper')
        .find('.item')
        .css('height', slickTrackHeight + 'px');
});
$('.projects-wrapper').on('setPosition', () => {
    $('.projects-wrapper')
        .find('.slick-slide')
        .height('auto');
    $('.projects-wrapper').find('.item');
});
});
