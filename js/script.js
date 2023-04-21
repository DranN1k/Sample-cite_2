$(document).ready(function () {
    $('.menu__burger').click(function (event) {
        $('.menu__burger,.main__menu').toggleClass('show');
    });
    $('.menu__links .menu__item').click(function (event) {
        $('.menu__links .menu__item').removeClass('active');
        $(this).addClass('active');
    });
    $('.content__btn').click(function (event) {
        $('.popup').addClass('popup__open');
    });
    $('.popup__close, .popup__btn-close').click(function (event) {
        $('.popup').removeClass('popup__open');
        event.preventDefault();
    });
});