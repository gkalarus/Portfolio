$(window).on('load', function() {
    $('.loader .inner').fadeOut(500, function() {
        $('.loader').fadeOut(750);
    });
})

$(document).ready(function() {
    

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

    // Scroll magic ///////////////////////////////////

    var animation =  $('*[class*="hidden"]');
  

    //ADD FUNCTIONS
    animation.each(triggerAnimationOnScroll);

    function triggerAnimationOnScroll() {

        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({

            triggerElement: this,
            triggerHook: 0.83,
            // duration: '87%'
        })
        .setClassToggle(this, 'animOn')
        .addTo(controller);  
    }

    //////////////////////////////////////////////

    $('[data-fancybox]').fancybox();

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
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