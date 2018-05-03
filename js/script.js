$(window).on('load', function() {
    $('.loader .inner').fadeOut(500, function() {
        $('.loader').fadeOut(750);
    });
})

$(document).ready(function() {
    
    ///////////////////////SUPERSLIDES////////////////////////////////

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    var typed = new Typed('.typed', {
        strings: ['Junior Frontend Developer'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    /////////////////////////////// Scroll magic //////////////////////
    jQuery(function() { 
   
        var animation =  $('*[class*="hidden"]');
  
        animation.each(triggerAnimationOnScroll);
    
        function triggerAnimationOnScroll() {
    
            var controller = new ScrollMagic.Controller();
            var scene = new ScrollMagic.Scene({
    
                triggerElement: this,
                triggerHook: 0.75,
            })
            .setClassToggle(this, 'animOn')
            .addTo(controller);  
        }

    });

    ///////////////////////FANCYBOX/////////////////////////
    

    $('[data-fancybox]').fancybox();

    ////////////////////////////////ISOTOPE///////////////////

    var $grid = $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
      });

    $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
    });

    $('#filters a').click(function() {

        $('#filters .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    ////////////////////////////////NAVBAR/////////////////////////////

    $("#navigation a.navbar-brand").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 500}, "slow");

	});

	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	var nav = $("#navigation");
	var navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}


	}


});