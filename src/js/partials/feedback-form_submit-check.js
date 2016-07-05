(function ($) {

    "use strict";

    var modal = $(".modal"),
        success = $(".modal--success"),
        failure = $(".modal--failure");

    $(".feedback-form .form__submit").click(function (event) {

        var input = $(".text-field__input"),
            isTextFieldCorrect = true;

        // check matching value to pattern
        input.each(function () {
            var input = $(this),
                pattern = new RegExp(input.attr("pattern")),
                // check boolean value in var
                isInputCorrect = pattern.test(input.val());
            if (isInputCorrect == false) {
                isTextFieldCorrect = false;
            }

            input.closest(".text-field")
                .toggleClass("text-field--state-focus", !isInputCorrect);
        });

        event.preventDefault();

        $(this).attr("disabled", "disabled");

        if (isTextFieldCorrect) {
            success.removeClass("modal--hidden");
        } else {
            failure.removeClass("modal--hidden");
        }

    });


    $(".modal__btn").click(function (event) {

        event.preventDefault();
        $(".feedback-form .form__submit").removeAttr("disabled");
        modal.addClass("modal--hidden");
        $(".feedback-form").submit();

        if (failure) {
            $(".text-field--state-focus input").eq(0).focus();
            $(".text-field").removeClass("text-field--state-focus");
        }

    });

})(jQuery);
