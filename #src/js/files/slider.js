$(document).ready(function () {

	$('.discover__cards').slick({
		easing: 'easeOutElastic',
		speed: 400,
		slidesToShow: 3,
		infinite: false,
		initialSlide: 3,
		variableWidth: true,
		draggable: false,
		touchThreshold: 8,
		prevArrow: $('.cards-arrows__left'),
		nextArrow: $('.cards-arrows__right'),
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,

				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: true,
				}
			}
		]
	});
	$('.about-slider').slick({
		dots: true,
		vertical: true,
		centerMode: true,
		easing: 'easeOutElastic',
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		adaptiveHeight: true,
		touchThreshold: 8,
		initialSlide: 2,
		prevArrow: $('.about-arrows__left'),
		nextArrow: $('.about-arrows__right'),
		responsive: [
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					vertical: false,
					horizontal: true,
					centerMode: false,
					adaptiveHeight: true,
				}
			}
		]
	});

	$('.about-slider').on('wheel', function (e) {
		e.preventDefault();
		console.log(e.originalEvent.deltaY);
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	});

});
