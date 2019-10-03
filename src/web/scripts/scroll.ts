// scroll to top
import * as $ from 'jquery';

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
