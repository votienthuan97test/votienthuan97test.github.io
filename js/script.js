$(document).ready(function () {
    // HIDE HEADER SCROLL
    var lastPS = window.pageYOffset;
    window.onscroll = function () {
        var currentPS = window.pageYOffset;
        if (lastPS > currentPS) {
            document.getElementById("hdFixed").style.top = "0px";
        } else {
            document.getElementById("hdFixed").style.top = "-100px";
        }
        lastPS = currentPS;
    }
    // PARALLAX ELEMENT HOVER
    var imgHero = document.getElementById('imgHero');
    new Parallax(imgHero);
    var imgTrade = document.getElementById('imgTrade');
    new Parallax(imgTrade);
    var imgWallet = document.getElementById('imgWallet');
    new Parallax(imgWallet);
    var imgNFT = document.getElementById('imgNFT');
    new Parallax(imgNFT);
    var imgToken = document.getElementById('imgToken');
    new Parallax(imgToken);
    var imgFeatures = document.getElementById('imgFeatures');
    new Parallax(imgFeatures);
    // MENU MOBILE
    let menuMB = false;
    $('.blockButtonMenuMobile').click(function () {
        menuMB = !menuMB;
        if (menuMB === true) {
            $('.blockButtonMenuMobile').addClass('active');
            $('.blockMenuMobi').addClass('active');
            $('html').addClass('no-scroll');
            $('body').addClass('no-scroll');
        }
        else {
            $('.blockButtonMenuMobile').removeClass('active');
            $('.blockMenuMobi').removeClass('active');
            $('html').removeClass('no-scroll');
            $('body').removeClass('no-scroll');
        }
    })
});
