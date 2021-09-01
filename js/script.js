$(document).ready(function () {
    // HIDE HEADER
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.blockHeader').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('.blockHeader').removeClass('hdShow').addClass('hdHide');
            $('.blockTab').removeClass('tabShow').addClass('tabShowFull');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.blockHeader').removeClass('hdHide').addClass('hdShow');
                $('.blockTab').removeClass('tabShowFull').addClass('tabShow');
            }
        }
        lastScrollTop = st;
    }
    // SHOW HIDDEN MENU TAB
    let menuActive = false;
    let tabDrop = false;
    $('.blockMenu').click(function () {
        menuActive = !menuActive;
        if (menuActive === true) {
            if (tabDrop === true) {
                tabDrop = false;
                $('.listTabDrop').removeClass('active');
                $('.imgTabDrop').removeClass('active');
                $('.imgMenuClose').removeClass('icMenuActive');
                $('.imgMenuOpen').addClass('icMenuActive');
                $('.blockTab').addClass('blockTabHidden');
                $('.blockPage').addClass('blockPageTabHidden');
                $('.blockListTab').addClass('blockListTabActive');
                $('.blockListTool').removeClass('active');
            }
            else {
                $('.imgMenuClose').removeClass('icMenuActive');
                $('.imgMenuOpen').addClass('icMenuActive');
                $('.blockTab').addClass('blockTabHidden');
                $('.blockPage').addClass('blockPageTabHidden');
                $('.blockListTab').addClass('blockListTabActive');
                $('.blockListTool').removeClass('active');
            }
        }
        else {
            $('.imgMenuOpen').removeClass('icMenuActive');
            $('.imgMenuClose').addClass('icMenuActive');
            $('.blockTab').removeClass('blockTabHidden');
            $('.blockPage').removeClass('blockPageTabHidden');
            $('.blockListTab').removeClass('blockListTabActive');
            $('.blockListTool').addClass('active');
        }
    });
    // SHOW HIDDEN TAB DROP
    $('.listTabDrop').click(function () {
        tabDrop = !tabDrop;
        if (tabDrop === true) {
            if (menuActive === true) {
                menuActive = false;
                $('.listTabDrop').addClass('active');
                $('.imgTabDrop').addClass('active');
                $('.imgMenuOpen').removeClass('icMenuActive');
                $('.imgMenuClose').addClass('icMenuActive');
                $('.blockTab').removeClass('blockTabHidden');
                $('.blockPage').removeClass('blockPageTabHidden');
                $('.blockListTab').removeClass('blockListTabActive');
                $('.blockListTool').addClass('active');
            }
            else {
                $('.listTabDrop').addClass('active');
                $('.imgTabDrop').addClass('active');
            }
        }
        else {
            $('.listTabDrop').removeClass('active');
            $('.imgTabDrop').removeClass('active');
        }
    });
    // SHOW HIDE TOOL
    $('.listToolItem').click(function () {
        menuActive = !menuActive;
        if (menuActive === true) {
            if (tabDrop === true) {
                tabDrop = false;
                $('.listTabDrop').removeClass('active');
                $('.imgTabDrop').removeClass('active');
                $('.imgMenuClose').removeClass('icMenuActive');
                $('.imgMenuOpen').addClass('icMenuActive');
                $('.blockTab').addClass('blockTabHidden');
                $('.blockPage').addClass('blockPageTabHidden');
                $('.blockListTab').addClass('blockListTabActive');
                $('.blockListTool').removeClass('active');
            }
            else {
                $('.imgMenuClose').removeClass('icMenuActive');
                $('.imgMenuOpen').addClass('icMenuActive');
                $('.blockTab').addClass('blockTabHidden');
                $('.blockPage').addClass('blockPageTabHidden');
                $('.blockListTab').addClass('blockListTabActive');
                $('.blockListTool').removeClass('active');
            }
        }
        else {
            $('.imgMenuOpen').removeClass('icMenuActive');
            $('.imgMenuClose').addClass('icMenuActive');
            $('.blockTab').removeClass('blockTabHidden');
            $('.blockPage').removeClass('blockPageTabHidden');
            $('.blockListTab').removeClass('blockListTabActive');
            $('.blockListTool').addClass('active');
        }
    });
    $(function() {      
        let isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
        if (isMobile) {
            menuActive = !menuActive;
            $('.imgMenuClose').removeClass('icMenuActive');
            $('.imgMenuOpen').addClass('icMenuActive');
            $('.blockTab').addClass('blockTabHidden');
            $('.blockPage').addClass('blockPageTabHidden');
            $('.blockListTab').addClass('blockListTabActive');
            $('.blockListTool').removeClass('active');
        }
     });
});