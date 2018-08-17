'use strict';

$(document).ready(function () {
    $('.header-menu').click(function () {
        $('header').addClass('open');
    });
    $('.btn-close').click(function () {
        $('header').removeClass('open');
    });
});