$.noConflict();
jQuery(document).ready(function ($) {
	// sidenav
	$('.sidenav').sidenav();
	// scrollspy
	$('.scrollspy').scrollSpy();
	// modal




	$('.modal').modal();
	// hover all cards
	$('.card').hover(function () {
		$(this).addClass('z-depth-2')
			.removeClass('z-depth-0');

	},
		function () {
			$(this).removeClass('z-depth-2')
				.addClass('z-depth-0');
		})

})