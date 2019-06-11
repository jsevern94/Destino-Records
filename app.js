$(document).ready(function () {
    $("#scroll-button").click(function () {
        $('html,body').animate({
            scrollTop: $("#section2").offset().top
        },
            'slow');
        $("#side-nav").addClass("slide-in-blurred-top");
        $("#side-nav").removeClass("invisible");
    });
});




(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);


  $(window).scroll(function(event) {
  
    $(".lefty").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slide-in-blurred-left"); 
      } 
    });

    $(".righty").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("slide-in-blurred-right"); 
        } 
      });
    
  });