$(function() {
	$(".banner").height($(window).height());
	
	$(window).on('resize',function(){
		$(".banner").height($(window).height());
	})
	$(window).scroll(function() {
		if (($("header.fixed").length > 0)) { 
			if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				$("header").addClass("on");
			} else {
				$("header").removeClass("on");
			}
		};
	});
	$('body').scrollspy({
		target:'.scrollspy',
		offset:70
	});
	$('header a').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-60}, 500);
	});
});