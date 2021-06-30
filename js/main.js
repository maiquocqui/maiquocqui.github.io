'use strict';

$(document).ready(function() {
  setTimeout(function() {
    $('.loading').fadeOut(500);
  }, 1000);
  setTimeout(function() {
    $('.loading').remove();
  }, 2000);

  responsive();
});

$(window).resize(function() {
  responsive();
});

function responsive() {
  if ($(window).innerWidth() <= 991) {
    $('.menu ul li a, #btn-discover').on('click', function() {
      if ($(this).attr('data-target').length) {
        $('html').animate({
          scrollTop: $('#' + $(this).attr('data-target')).offset().top
        });
      }
    });

    $('.profile .img').height($(window).innerHeight() - 45 - 60);
    $(window).scroll(function() {
      var scrollVal = $(this).scrollTop();
      var activeId;

      $('.content-section').map(function() {
        var offsetTop = $(this).offset().top;
        var height = $(this).innerHeight();

        if (scrollVal >= offsetTop - 200 && scrollVal < offsetTop + height) {
          activeId = $(this).attr('id');
        }
      });

      $('.menu ul li a').removeClass('active');
      $('a[data-target="' + activeId + '"]').addClass('active');
    });
  } else {
    $('.menu ul li a').on('click', function() {
      if ($(this).attr('data-target').length) {
        $('.scroll-content').animate({
          scrollTop: $('#' + $(this).attr('data-target')).position().top + $('.scroll-content').scrollTop()
        });
      }
    });

    $('.profile .img').removeAttr('style');

    $('.menu ul li').eq(0).children('a').addClass('active');

    $('.scroll-content').scroll(function() {
      var selectArr = [];
      var activeId = 'about';

      $('.content-section').map(function() {
        if ($(this).position().top <= 100) {
          selectArr.push(this);
        }
      });

      activeId = $(selectArr[selectArr.length - 1]).attr('id');

      $('.menu ul li a').removeClass('active');
      $('a[data-target="' + activeId + '"]').addClass('active');
    });
  }
}