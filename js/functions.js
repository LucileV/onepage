(function ($) {
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
		    $('.navbar-nav li').removeClass('active');
		    $(this).closest('li').addClass('active');
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
						
	});	
	
	$('body').flipLightBox({
			
		lightbox_text_status: 0,
		lightbox_navigation_status: 0
    
	})
	
	$('.parallax-window').parallax({imageSrc: 'img/foret.jpg'});
	
    wow = new WOW({}).init();
		


    $(".bnt_calendar").click(function(){
      $("#sidebar").toggle("slide",	{direction:"left"}, 1000);
    });  



    $(".bnt_calendar").click(function(){
    $("#sidebar").animate({
        left: 'toggle',
    });
}); 








})(jQuery);

