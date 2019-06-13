$(window).on('load', function() {
    window.location.hash = '';
    $(window).scrollTop(0);
});

$(window).scroll(function () {

    if ($("#scroll-button").is(':in-viewport')) {
        $("#side-nav").removeClass("slide-in-blurred-top");
        $("#side-nav").addClass("slide-out-blurred-top");
    } else {
        $("#side-nav").removeClass("slide-out-blurred-top");
        $("#side-nav").addClass("slide-in-blurred-top");
        $("#side-nav").removeClass("invisible");
    };

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

$(function () {
    $("#side-nav a").click(function() { 
        $("#side-nav a").addClass("line-through").not(this).removeClass("line-through");
        $("#side-nav a").removeClass("hover:text-gray-700").not(this).addClass("hover:text-gray-700");
        $("#side-nav a").addClass("text-red-700").not(this).removeClass("text-red-700");
    });
});