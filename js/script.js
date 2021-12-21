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
});
