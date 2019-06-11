$(window).scroll(function () {
    if ($("#scroll-button").is(':in-viewport')) {
        $("#side-nav").removeClass("slide-in-blurred-top");
        $("#side-nav").addClass("slide-out-blurred-top");
        $(".bio-text").removeClass("text-pop-up-top")
    } else {
        $("#side-nav").removeClass("slide-out-blurred-top");
        $("#side-nav").addClass("slide-in-blurred-top");
        $("#side-nav").removeClass("invisible");
        $(".bio-text").addClass("text-pop-up-top")
    }
    $(".lefty").each(function (i, el) {
        var el = $(el);
        if (el.is(':in-viewport')) {
            el.addClass("slide-in-blurred-left");
            el.removeClass("invisible")
        } else {
            el.removeClass("slide-in-blurred-left")
            el.addClass("invisible")
        }
    });

    $(".righty").each(function (i, el) {
        var el = $(el);
        if (el.is(':in-viewport')) {
            el.addClass("slide-in-blurred-right");
            el.removeClass("invisible")
        } else {
            el.removeClass("slide-in-blurred-right")
            el.addClass("invisible")
        }
    });

});