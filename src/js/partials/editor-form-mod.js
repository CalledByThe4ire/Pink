(function ($) {

    "use strict";

    var mobileMedia = "screen and (max-width: 699px)",
        tabletMedia = "screen and (min-width: 700px)",

        rangeFieldCrop = $(".range-field--crop"),
        rangeFieldFill = $(".range-field--fill"),
        rangeFieldContrast = $(".range-field--contrast"),

        inputCrop = $(".range-field__input--crop"),
        inputFill = $(".range-field__input--fill"),
        inputContrast = $(".range-field__input--contrast");


    function rangeFieldClickHandler() {
        rangeFieldCrop.click(function (event) {

            event.preventDefault();

            $(this).addClass("range-field--active");
            inputCrop.removeClass("range-field__input--hidden");

            rangeFieldFill.removeClass("range-field--active");
            inputFill.addClass("range-field__input--hidden");

            rangeFieldContrast.removeClass("range-field--active");
            inputContrast.addClass("range-field__input--hidden");
        });

        rangeFieldFill.click(function (event) {

            event.preventDefault();

            $(this).addClass("range-field--active");
            inputFill.removeClass("range-field__input--hidden");

            rangeFieldCrop.removeClass("range-field--active");
            inputCrop.addClass("range-field__input--hidden");

            rangeFieldContrast.removeClass("range-field--active");
            inputContrast.addClass("range-field__input--hidden");
        });

        rangeFieldContrast.click(function (event) {

            $(this).addClass("range-field--active");
            inputContrast.removeClass("range-field__input--hidden");

            rangeFieldCrop.removeClass("range-field--active");
            inputCrop.addClass("range-field__input--hidden");

            rangeFieldFill.removeClass("range-field--active");
            inputFill.addClass("range-field__input--hidden");

            event.preventDefault();
        });
    }

    function rangeFieldMobileState() {
        rangeFieldCrop.addClass("range-field--active");
        if (inputCrop.hasClass("range-field__input--hidden")) {
            inputCrop.removeClass("range-field__input--hidden");
        }

        if (rangeFieldFill.hasClass("range-field--active")) {
            rangeFieldFill.removeClass("range-field--active");
        }

        if (rangeFieldContrast.hasClass("range-field--active")) {
            rangeFieldContrast.removeClass("range-field--active");
        }

        inputFill.addClass("range-field__input--hidden");
        inputContrast.addClass("range-field__input--hidden");
    }

    function rangeFieldTabletState() {
        $(".range-field").addClass(function () {
            return "range-field--active";
        });

        $(".range-field__input").removeClass(function () {
            return "range-field__input--hidden";
        });
    }

    if (window.matchMedia(mobileMedia).matches) {
        rangeFieldClickHandler();
    } else if (window.matchMedia(tabletMedia).matches) {
        rangeFieldTabletState();
    }

    $(window).resize(function () {
        if (window.matchMedia(mobileMedia).matches) {
            rangeFieldMobileState();
            rangeFieldClickHandler();
        } else if (window.matchMedia(tabletMedia).matches) {
            rangeFieldTabletState();
            $(".range-field").off();
        }
    });

})(jQuery);


