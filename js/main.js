/* global jQuery, console, document, QueryLoader2, window */
"use strict";

jQuery(function($) {
    // Superslide slider
    $('#slides').superslides({
        animation: 'fade',
        animation_easing: 'linear',
        pagination: 'true',
        animation_speed: 1000
    });

    // Scroll Up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top

    $('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// Preloader
window.addEventListener('DOMContentLoaded', function() {
    new QueryLoader2(document.querySelector('body'), {
        barColor: "#efefef",
        backgroundColor: "#111",
        percentage: true,
        barHeight: 1,
        minimumTime: 200,
        fadeOutTime: 1000
    });

    function footer() {
        var clir = '';
        // console.log(clir);
    }

    footer();
});
