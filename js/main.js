/* global jQuery, console, document, QueryLoader2, window */
(function() {
    "use strict";

    jQuery(function($) {
        // Superslide slider
        $('#slides').superslides({
            animation: 'fade',
            animation_easing: 'linear',
            pagination: true,
            play: 5000,
            hashchange: true,
        });

        $('#slides').imagesLoaded({background: true}, function() {
            $('body').toggleClass('loaded');
            console.log('loaded');
        });

        // Scroll Up
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        // Click event to scroll to top
        $('.scrollToTop').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        function footer() {
            var clir = '';
            // console.log(clir);
        }

        footer();
    });
}());
