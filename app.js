$(window).on('load', function () {
    window.location.hash = '';
    $(window).scrollTop("#section1");
});

$(function () {
    $("#scroll-button").click(function () {
        console.log("click");
        $(window).scrollTop($('#section2').offset().top)
        $("#start-nav").attr("id", "side-nav");
    });
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

    $(".spotify1").each(function (i, el) {
        var el = $(el);
        if (el.is(':in-viewport')) {
            el.addClass("puff-in-center1");
            el.removeClass("invisible")
        } else {
            el.removeClass("puff-in-center1")
            el.addClass("invisible")
        }
    });

    $(".spotify2").each(function (i, el) {
        var el = $(el);
        if (el.is(':in-viewport')) {
            el.addClass("puff-in-center2");
            el.removeClass("invisible")
        } else {
            el.removeClass("puff-in-center2")
            el.addClass("invisible")
        }
    });

    $(".spotify3").each(function (i, el) {
        var el = $(el);
        if (el.is(':in-viewport')) {
            el.addClass("puff-in-center3");
            el.removeClass("invisible")
        } else {
            el.removeClass("puff-in-center3")
            el.addClass("invisible")
        }
    });
});

$(function () {
    $(document).on("click","#side-nav a",function() {
        $("#nav").removeClass("pulsate-fwd");
        $("#side-nav a").addClass("line-through").not(this).removeClass("line-through");
        $("#side-nav a").removeClass("hover:text-gray-700").not(this).addClass("hover:text-gray-700");
        $("#side-nav a").addClass("text-red-700").not(this).removeClass("text-red-700");
    });
});