(function ($) {

    "use strict";

    var mobileMedia = "screen and (max-width: 699px)",
        tabletMedia = "screen and (min-width: 700px)",

        textFieldFirstCaption = $(".form__fieldset--contacts .text-field:first-of-type .text-field__caption"),
        textFieldLastCaption = $(".form__fieldset--contacts .text-field:last-of-type .text-field__caption"),
        textFieldFirstAttr = $(".form__fieldset--contacts .text-field:first-of-type .text-field__input"),
        textFieldLastAttr = $(".form__fieldset--contacts .text-field:last-of-type .text-field__input");


    function changeContactsLabelForMobile() {
        textFieldFirstCaption.text("номерок телефончика");
        textFieldFirstAttr.attr("placeholder", "Номер, пожалуйста");

        textFieldLastCaption.text("адресок почты");
        textFieldLastAttr.attr("placeholder", "E-mail, пожалуйста");
    }

    function changeContactsLabelForTablet() {
        textFieldFirstCaption.text("номер телефона");
        textFieldFirstAttr.attr("placeholder", "+7 ХХХ ХХХ-ХХ-ХХ");

        textFieldLastCaption.text("Адрес почты");
        textFieldLastAttr.attr("placeholder", "Введите почту");
    }

    function changeTextFieldState() {
        var input = $(".text-field__input");

        input.on("focus blur", function () {
            $(this).parents(".text-field").toggleClass("text-field--state-focus");
        });

        input.hover(function () {
            $(this).parents(".text-field").toggleClass("text-field--state-hover");
        });
    }

    changeTextFieldState();

    if (window.matchMedia(mobileMedia).matches) {
        changeContactsLabelForMobile();
    } else if (window.matchMedia(tabletMedia).matches) {
        changeContactsLabelForTablet();
    }

    $(window).resize(function () {
        if (window.matchMedia(mobileMedia).matches) {
            changeContactsLabelForMobile();
        } else if (window.matchMedia(tabletMedia).matches) {
            changeContactsLabelForTablet();
        }
    });

})(jQuery);
