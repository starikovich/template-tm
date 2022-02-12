/* eslint-disable */
$('.header__bottom-block__menu-burger').click(function () {
    if ($('.header__bottom-block__menu').is(':hidden')) {
        $('.header__bottom-block__menu').show('slideToggle')
    } else {
        $('.header__bottom-block__menu').hide('slideToggle')
    }
})
$('.header__bottom-block__menu').click(function () {
    $('.header__bottom-block__menu').hide('slideToggle')
})
