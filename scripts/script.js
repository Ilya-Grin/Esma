$(document).ready(function () {

	$('.header__burger').click(function () {
		$('.header__burger, .navigation__menu').toggleClass('active');
		$('body').toggleClass('overflow');
	});
});