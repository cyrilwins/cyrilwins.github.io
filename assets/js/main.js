(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /*====  magnific popup js active =====*/
        if ($.fn.magnificPopup) {
            $('.tab-btn').magnificPopup({
                type: 'video',
                mainClass: 'mfp-iframe'
            });
        }


        /*==== collapsed menu active =====*/
        var menuCollapsed = $('.menu-icon, ul#nav > li > a');
        menuCollapsed.on('click', function() {
            $('body').toggleClass('expand');
        })


        if ($.fn.onePageNav) {
            $('.one_page').onePageNav({
                currentClass: 'active',
                scrollSpeed: 750,
                easing: 'swing'
            });
        }


        // -------------------------------------------------------------
        // onepage nav start
        // -------------------------------------------------------------
        $('ul#nav > li > a, .hero-content > a').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
                location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });


    });


    /*====  Window Load Function =====*/
    jQuery(window).load(function() {

        /*====  animation js =====*/
        new WOW().init();
        /*==== preloader active bottom =====*/
        $('#loading').delay(1900).fadeOut('slow', function() { $(this).remove(); });

    });



}(jQuery));