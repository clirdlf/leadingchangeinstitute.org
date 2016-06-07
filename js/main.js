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

    // Testimonial Slider
		$('.tutors_nav').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  arrows:false,
	  slidesToScroll: 1,
	  slide: 'li',
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        arrows:false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
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
