(function ($) {

    "use strict";

    var mobileMedia = "screen and (max-width: 699px)",
        tabletMedia = "screen and (min-width: 700px)",

        nav = $("#nav"),
        toggle = $("#icon-menu-toggle"),
        container = $("#page-header__outer");

    function removeClasses() {
        nav.removeClass("navbar--visible");
        toggle.removeClass("page-header__toggle--close");
        container.removeClass("page-header__outer--solid-color");
    }

    toggle.click(function (event) {

        event.preventDefault();

        $(this).toggleClass("page-header__toggle--close");
        nav.toggleClass("navbar--visible");
        container.toggleClass("page-header__outer--solid-color");
    });

    if (window.matchMedia(tabletMedia).matches) {
        removeClasses();
    }

    $(window).resize(function () {
        if (window.matchMedia(tabletMedia).matches) {
            removeClasses();
        }
    });

})(jQuery);
