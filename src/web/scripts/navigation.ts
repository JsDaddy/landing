import * as $ from 'jquery';

$(document).ready(() => {
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
