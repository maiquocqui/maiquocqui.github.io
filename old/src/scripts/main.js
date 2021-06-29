$(document).ready(function() {
    console.log("COPYRIGHT © 2018, Quoc Qui Mai Resume. Designed by Quoc Qui Mai.");

    $('.header-menu a').click(function() {
        $('.home-section').hide();
        var targetID = $(this).attr('href');
        $('header').addClass('open');
        $(targetID).show();
    });

    $('.btn-close').click(function() {
        $('header').removeClass('open');
    });
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        gutter: 0,
        filter: '*',
    });

    $('.portfolio-category a').click(function() {
        $('.portfolio-category a').removeClass('active');
        $(this).addClass('active');
        var targetFilter = $(this).attr('data-filter');
        $grid.isotope({ filter: targetFilter });
    });
    $('.header-menu a[href="#portfolio"]').click(function() {
        $grid.isotope({ filter: '*' });
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() >= 250) {
            $('.btn-close').addClass('active');
        } else {
            $('.btn-close').removeClass('active');
        }
    });
});