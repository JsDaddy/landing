import * as $ from 'jquery';
// tslint:disable-next-line:no-var-requires
require('magnific-popup');

const url = 'http://localhost:3000/mail/contacts';
$(document).ready(() => {
    ($('.contact_us_btn') as any).magnificPopup({
        focus: '#name',
        preloader: false,
        type: 'inline',
    });

    $('.popup-form__input-wrapper_invalid-message').hide();
    $('#form__submit').on('click', () => {
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
                    url,
                });
                return;
        }
        return;
    });

});
