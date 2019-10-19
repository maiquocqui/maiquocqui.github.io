"use strict";

$(document).ready(function () {
  // jquery scroll up
  // $.scrollUp();

  // header script
  if ($(window).width() < 1200) {
    $(".check-tool.s1").insertAfter(".menu-mobile");
    $(".check-tool.s2").insertAfter(".check-tool.s1");

    $(".check-tool").on("click", function () {
      $(".menu").removeClass("open");
      $(".overlay").fadeOut(500);
      $("html").css("overflow", "auto");
    });
  }
  // HEADER CART SCRIPT
  $(".cart-panel .cart-list").click(function (e) {
    e.stopPropagation();
  });
  $(".btn-closedropdown").on("click", function () {
    $(".dropdown").dropdown("dispose");
  });

  // header scroll event
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("minimal");
    } else {
      $("header").removeClass("minimal");
    }
  });

  // MENU SCRIPT
  $(".btn-showmenu").on("click", function () {
    $(".menu").toggleClass("open");
    $(".overlay").fadeIn(500);
    $("html").css("overflow", "hidden");
  });
  $(".overlay").on("click", function () {
    $(".menu").removeClass("open");
    $(this).fadeOut(500);
    $("html").css("overflow", "auto");
  });

  // SEARCH SCRIPT
  if ($(window).width() > 1199) {
    $("header .searchbox").on("click", function () {
      // event.stopPropagation();
      $(this).addClass("active");
      $(".search-result").fadeIn(500);
      $(".overlay").fadeIn(500);
    });
    $(".overlay").on("click", function () {
      // event.stopPropagation();
      $("header .searchbox").removeClass("active");
      $("header .searchbox input").val(null);
      $("header .search-result").fadeOut(500);
      $(this).fadeOut(500);
    });
  } else {
    $(".search-toggle").on("click", function () {
      $(".search-wrap").fadeToggle(0);
    });
    $(".btn-closesearch").on("click", function () {
      $(".search-wrap").fadeOut(0);
    });
  }

  // breadcrumb script
  // $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

  // HOME PAGE SCRIPT
  if ($(window).width() < 992) {
    $(".home-video").insertBefore(".home-news");
  }

  // cart page script
  $("#sameinfo").click(function () {
    $("#sameinfoform").slideToggle(500);
  });
  $("#exportbill").click(function () {
    $("#exportbillform").slideToggle(500);
  });
  $(".payment-method .method-select").on("click", "a", function () {
    $(".payment-method .method-select").find("input").prop("checked", false);
    $(this).find("input").prop("checked", true);
  });
  $(".payment-method .r-tabs-accordion-title").on("click", "a", function () {
    $(".payment-method .r-tabs-accordion-title").find("input").prop("checked", false);
    $(this).find("input").prop("checked", true);
  });

  if ($(window).width() < 992) {
    $("#cart-step2").insertBefore("#cart-step3");
  }
  if ($(window).width() < 767) {
    $(".cart-step .btn-back").insertBefore(".cart-header .sitelogo");
  }

  // Product page script
  if ($(window).width() < 767) {
    $(".product-sort").scrollToFixed({
      marginTop: 50,
      zIndex: 100
    });
  }
  $(".btn-filterwrap").on("click", ".btn-changeview", function () {
    $(this).toggleClass("active");
    $(".product-list").find("article").toggleClass("change");
  });

  $(".btn-filterwrap").on("click", ".btn-showfilter", function () {
    $(".option-group").addClass("open");
    $("body").css("overflow", "hidden");
  });

  $(".btn-filterwrap").on("click", ".btn-showcate", function () {
    $(".category-group").addClass("open");
    $("body").css("overflow", "hidden");
  });
  // $('window').on("click", function() {
  //     $('.filter-group .filter-option').slideUp(300);
  // })
  $(".btn-showsubfilter").click(function () {
    $(this).toggleClass("active");
    $(this).siblings(".subfilter").slideToggle(300);
  });

  $(".filter-wrap").on("click", ".btn-closefilter", function () {
    $(".option-group").removeClass("open");
    $(".category-group").removeClass("open");
    $("body").css("overflow", "unset");
  });
  $("body").on("click", ".filter-group .filter-name", function (e) {
    // e.stopPropagation();
    var _parent = $(this).parent();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      _parent.find(".filter-option").slideUp(300);
    } else {
      $(".filter-group .filter-name").removeClass("active");
      $(".filter-group .filter-option").slideUp();
      $(this).addClass("active");
      _parent.find(".filter-option").slideDown(300);
    }
  });
  // COMPARE SCRIPT
  $(".product-page").on("click", ".btn-compare", function () {
    $(this).toggleClass("active");
    $(".product-page").toggleClass("compare-active");
    $(".compare-panel").toggleClass("active");
  });

  $(".compare-panel").on("click", ".btn-minimize", function () {
    $(this).toggleClass("active");
    $(".compare-panel").toggleClass("hide");
  });

  $(".compare-panel").on("click", ".btn-closecompare", function () {
    $(".btn-compare").trigger("click");
  });
  if ($(".productpage").length > 0) {
    $(window).bind("scroll", function () {
      if ($(window).scrollTop() > $(".product-list").offset().top - $("header").outerHeight()) {
        $(".btn-compare").addClass("fly-compare");
      } else {
        $(".btn-compare").removeClass("fly-compare");
      }
    });
  }

  // product detail page
  $(".btn-viewmoregift").on("click", function () {
    $(this).parent().find(".gift-list").toggleClass("active");
  });
  if ($(window).width() > 991) {
    $(".product-description .btn-viewmore").click(function () {
      $(this).parent(".btn-wrap").prev(".content").toggleClass("showless");
      $(this).toggleClass("active");
      var viewmore = "Xem thêm";
      var viewmoreless = "Thu gọn";
      $(this).text() === viewmore ? $(this).text(viewmoreless) : $(this).text(viewmore);
    });
    if ($(".product-description .tab-pane .content").outerHeight() > 800) {
      $(".product-description .tab-pane .content").addClass("showless").siblings(".btn-wrap").show();
    }
    if ($(".product-specification .specification-table").outerHeight() > 400) {
      $(".product-specification .specification-table").addClass("showless").siblings(".btn-wrap").show();
    }
  } else {
    if ($(".product-description .tab-pane .content").outerHeight() > 400) {
      $(".product-description .tab-pane .content").addClass("showless").siblings(".btn-wrap").show();
      $(".product-description .specification-table").addClass("showless").siblings(".btn-wrap").show();
    }
  }
  $(".btn-like").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".btn-detailspecify").on("click", function () {
    $("#myTab2 #profile-tab2").tab("show");
  });
  $("#myTab2 #home-tab2").on("click", function () {
    $("#myTab #home-tab").tab("show");
  });

  $(".product-description .btn-showoption").click(function () {
    $("#popup-option").toggleClass("open");
    $("#popup-option").children(".popup-overlay").fadeToggle(500);
  });

  // page popup script
  if ($(window).width() < 992) {
    $("[data-popup]").on("click", function () {
      var idPopup = $(this).attr("data-popup");
      $(idPopup).addClass("open");
      $(idPopup).children(".popup-overlay").fadeIn(500);
    });
  }
  $(".popup-overlay").on("click", function () {
    $(this).fadeOut(500);
    $(this).parent(".page-popup").removeClass("open");
  });
  $(".close-popup").on("click", function () {
    $(this).parents(".page-popup").removeClass("open");
    $(this).parents(".page-popup").find(".popup-overlay").fadeOut(500);
  });
  $(".btn-buy").on("click", function () {
    $(".page-popup").removeClass("open");
    $(".page-popup .popup-overlay").fadeOut(500);
  });

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Responsive tabs
  $("#responsivetabs").responsiveTabs({
    startCollapsed: "accordion",
    animation: "slide"
  });

  // Jquery rating
  $(".bar-rating").barrating({
    theme: "fontawesome-stars"
  });

  // Image compare
  $(".image-compare").twentytwenty({
    no_overlay: true
  });

  // date picker
  $(".datepicker").datepicker();

  // faq script
  $(".faq .faq-title").click(function () {
    if ($(this).parent().hasClass("active") == true) {
      $(this).parent().removeClass("active");
      $(this).parent().find(".faq-content").slideUp(500);
    } else {
      $(".faq").removeClass("active");
      $(".faq").find(".faq-content").slideUp(500);
      $(this).parent().addClass("active");
      $(this).parent().find(".faq-content").slideDown(500);
    }
  });

  // Accessories toggle
  $(".accessories .accessories-cate").click(function () {
    if ($(this).parent().hasClass("active") == true) {
      $(this).parent().removeClass("active");
      $(this).parent().find(".accessories-list").slideUp(500);
    } else {
      $(".accessories").removeClass("active");
      $(".accessories").find(".accessories-list").slideUp(500);
      $(this).parent().addClass("active");
      $(this).parent().find(".accessories-list").slideDown(500);
    }
  });

  // brand page
  if ($(window).width() < 992) {
    $(".brand-nav").scrollToFixed({
      marginTop: 50,
      zIndex: 100
    });
  }

  // user page script
  $("#btn-changepw").click(function () {
    $(".changepw-form").slideToggle(500);
  });
  if ($(window).width() < 992) {
    $(".user-info").click(function () {
      $(this).siblings(".user-sidebar").slideToggle(500);
    });
  }

  // notification repay
  $("#modalRepay").modal("show");

  // News page script
  $("#modal-picture").on("shown.bs.modal", function () {
    $(".post-product").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      arrows: false,
      dots: false,
      infinite: true,
      swipe: true,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 2
        }
      }]
    });
  });

  // banner
  $(".banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    dots: true,
    fade: true
  });
  $(".banner-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    asNavFor: ".banner-nav",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000
  });
  $(".banner-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".banner-slide",
    speed: 500,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

  // HOME PRODUCT SLICK
  $(".product-slick").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 767,
      settings: "unslick"
    }, {
      breakpoint: 575,
      settings: "unslick"
    }]
  });

  $(".video-slick").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 767,
      settings: "unslick"
    }, {
      breakpoint: 575,
      settings: "unslick"
    }]
  });

  // life style slick
  $(".life-style").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  // HOME CATEGORY SLICK
  $(".category-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    arrows: true,
    dots: true,
    speed: 500,
    fade: true,
    asNavFor: ".category-slick"
  });

  $(".category-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    asNavFor: ".category-nav",
    arrows: false,
    dots: false,
    fade: true,
    speed: 800
  });

  // product lastview
  $(".lastview-slick").slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 8
      }
    }, {
      breakpoint: 991,
      settings: "unslick"
    }, {
      breakpoint: 767,
      settings: "unslick"
    }, {
      breakpoint: 575,
      settings: "unslick"
    }]
  });

  // product slide
  $(".product-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".product-slide",
    dots: false,
    arrows: true,
    infinite: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true
  });
  $(".product-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    fade: true,
    dots: false,
    arrows: false,
    asNavFor: ".product-nav",
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: true
      }
    }, {
      breakpoint: 575,
      settings: {
        dots: true,
        arrows: true
      }
    }]
  });

  $(".brand-banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true
  });
  $(".news-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: true
  });

  // update 12/5/2019
  $(".flash-news-slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    dots: false,
    arrows: true,
    vertical: true
  });
  if ($(".flash-news-slick .slick-prev")) {
    $(".flash-news-slick .slick-prev").insertBefore(".flash-news-slick .slick-next");
  }
  $(".picked-news").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 300,
    dots: false,
    arrows: true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 567,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});