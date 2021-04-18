let win = $(window).width();

function toggleMenu() {
	$('.sidebar').toggleClass('show');
	if (win > 768) {
		$('.navbar-brand').toggleClass('show');
		$('main, footer').toggleClass('push');
	}
}

$(document).ready(function () {
	if (win < 768) $('.sidebar').removeClass('show');

	//Show loader
	$('body').addClass('loading');
	$('.loader').fadeIn('fast');
	

	//Back to top
	$('.to-top').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});

	//Sidebar menu toggler
	$('.side-toggle').click(function (e) {
		e.preventDefault();
		toggleMenu();
		if (win < 768) $('.hidden-content').fadeOut('fast');
	});


	//Sidebar menu collapse
	$('.sidebar-heading').on('click', function () {
		dropdown = $(this).parent().find('.collapse');
		if (dropdown.hasClass('show')) {
			dropdown.on('hide.bs.collapse', function () {
				$(this).siblings().removeClass('open');
				$(this).siblings().find('i').removeClass('fa-chevron-down').addClass('fa-chevron-left');
			});
		} else {
			dropdown.on('show.bs.collapse', function () {
				$('div.collapse.show').siblings().removeClass('open')
				$('div.collapse.show').collapse('hide').siblings().find('i').removeClass('fa-chevron-down').addClass('fa-chevron-left');
				$(this).siblings().addClass('open');
				$(this).siblings().find('i').removeClass('fa-chevron-left').addClass('fa-chevron-down');
			});
		}
	});

	//Top menu toggler
	$('.notif-toggle, .user-toggle').on('click', function (e) {
		e.preventDefault();
		content = $(this).siblings('.hidden-content');

		$('.hidden-content').fadeOut('fast');

		if (content.is(':visible')) {
			content.fadeOut('fast');
		} else {
			content.fadeIn('fast');
		}

	});

	//Hide top menu
	$('main').click(function () {
		$('.hidden-content').fadeOut('fast');

		if (win < 768 && $('.sidebar').hasClass('show')) {
			$('.sidebar').removeClass('show');
		}
	});

	//Card toggle minimize
	$('.card-toggle').click(function () {
		parent = $(this).parents('.card');
		target = $(this).parent().next('.card-body');
		if ($(target).is(':visible')) {
			$(this).find('i').removeClass('fa-minus').addClass('fa-plus');
			target.slideUp();
		} else {
			$(this).find('i').removeClass('fa-plus').addClass('fa-minus');
			target.slideDown();
		}
	});

	//Card remove
	$('.card-remove').on('click', function () {
		$(this).parents('.card').fadeOut('fast', function () {
			$(this).remove();
		});
	});

	//Detect window size
	$(window).on('resize', function () {
		win = $(window).width();
		if (win > 768) {
			$('.sidebar, .navbar-brand').addClass('show');
			$('main, footer').addClass('push');
		} else {
			$('.sidebar').removeClass('show');
		}
	});
	
	//Show back to top button
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 75) {
			$('.to-top').fadeIn('fast');
		} else {
			$('.to-top').fadeOut('fast');
		}
	});

	//Hide loader
	//$(window).on('load', function () {
	//	$('body').removeClass('loading');
	//	$('.loader').fadeOut('fast');
	});

