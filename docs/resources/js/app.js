// Navbar
$(function () {
	$('.navbar__toggler').click(function () {
		$('body').addClass('navbar-open');
		$('.navbar__collapse').addClass('show');
	});

	$('.navbar__close').click(function () {
		$('body').removeClass('navbar-open');
		$('.navbar__collapse').removeClass('show');
	});
});

// Modal
$(function () {
	$('.js-modal').click(function (e) {
		e.preventDefault();
		e.stopPropagation();

		$('.modal').removeClass('show');
		$($(this).attr('data-target')).addClass('show');
		$('body').addClass('modal-open');
	});

	$('[data-dismiss="modal"]').click(function () {
		var modalTarget = $(this).attr('data-target');

		if (modalTarget) {
			$('.modal').removeClass('show');
			$(modalTarget).addClass('show');
			$('body').addClass('modal-open');
		} else {
			$('.modal').removeClass('show');
			$('body').removeClass('modal-open');
		}
	});

	$(document).click(function (e) {
		var target = e.target;
		var modalContent = $('.modal__content');

		if (!modalContent.is(target) && modalContent.has(target).length === 0) {
			$('.modal').removeClass('show');
			$('body').removeClass('modal-open');
		}
	});
});

// Tab
$(function () {
	$('.js-tab').click(function (e) {
		e.preventDefault();

		$('.js-tab').removeClass('active');
		$('.tab__pane').removeClass('show');
		$(this).addClass('active');
		$($(this).attr('href')).addClass('show');
	});
});

// Dropdown
$(function () {
	$('.js-dropdown').click(function (e) {
		e.preventDefault();
		e.stopPropagation();

	  $('.js-dropdown').not($('.js-dropdown').has($(e.target))).next('.dropdown__menu').removeClass('show');

	  $(this).next('.dropdown__menu').toggleClass('show');
	});

	$(document).on('click', function (e) {
		if ($(e.target).closest('.dropdown__menu').length === 0) {
			$('.dropdown__menu').removeClass('show');
		}
	});
});

// Filter player
$(function () {
	$('.filter-player__section .btn').click(function () {
		$(this).parent('.filter-player__section').find('.btn').removeClass('active');
		$(this).addClass('active');
	});
});

// Object-fit
$(function () {
	if (!Modernizr.objectfit) {
		$('.object-fit').each(function () {
			var container = $(this),
			imgUrl = container.find('img').prop('src');

			if (imgUrl) {
				container
				.css('backgroundImage', 'url(' + imgUrl + ')')
				.addClass('compat-object-fit');
			}  
		});
	}
});
