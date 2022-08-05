$(document).ready(function () {
    // BUTTON MENU
    let menuMobile = false;
    $('.blockButtonMenuMobile').click(function () {
      menuMobile = !menuMobile;
      if (menuMobile === true) {
        $('.__imgMenuMobile').addClass('active');
        $('.blockMenuMobile').addClass('active');
        $("body").css("overflow", "hidden");
        $("html").css("overflow", "hidden");
      }
      else {
        $('.__imgMenuMobile').removeClass('active');
        $('.blockMenuMobile').removeClass('active');
        $("body").css("overflow", "overlay");
        $("html").css("overflow", "overlay");
      }
    });
    // SEARCH SHOW/HIDE OPTION
    let dropDownSearch = false;
    $('.__buttonSelect').click(function () {
        dropDownSearch = !dropDownSearch;
        if (dropDownSearch === true) {
            $('.__listOption').addClass('active');
        $('.__buttonSelect').addClass('active');
        }
        else {
            $('.__listOption').removeClass('active');
            $('.__buttonSelect').removeClass('active');
        }
    });
    // SELECT OPTION SEARCH
    $('.__listOption .__item').click(function () {
          dropDownSearch = false;
      $('.__text.textSelect').text($(this).text());
          $('.__listOption').removeClass('active');
          $('.__buttonSelect').removeClass('active');
          $('.__text.textSelect').addClass('hasValue');
    });
    // CLICK EVERYWHERE HIDE OPTION
    $("body").on("click", function (e) {
        if (
            $(e.target).hasClass("__buttonSelect") ||
            $(e.target).hasClass("__imgSelect")
        ) {} else {
            dropDownSearch = false;
            $('.__listOption').removeClass('active');
            $('.__buttonSelect').removeClass('active');
        }
    });
    // SLIDE MY TOUR
    $('#slideMyTour').slick({
      dots: false,
      arrows : true,
      speed: 300,
      autoplay: true,
      useTransform: false,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow : '.__prevMyTour',
      nextArrow : '.__nextMyTour',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows : false,
            useTransform: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
    // SLIDE POPULAR TOUR
    $('#slidePopularTour').slick({
      dots: true,
      arrows : false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows : false,
            useTransform: false,
            dots : false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          
        },
        {
          breakpoint: 480,
        }
      ]
    });
    // FIXED MENU
    $(window).on("scroll", function () {
      if ($(window).scrollTop() < $(".blockHeader").position().top + 5) {
        $('#btnMenuMobile').removeClass('btnFixedScroll');
      }
      else {
        $('#btnMenuMobile').addClass('btnFixedScroll');
      }
    });
});
