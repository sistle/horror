function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.querySelector('html').classList.add('touch');
} else {
	document.querySelector('html').classList.add('pc');
}

//Menu=================

const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__inner");


iconMenu.addEventListener("click", openCloseMenu);

function openCloseMenu(event) {
	if (iconMenu) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
	}
}

//=================


const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.menu__link');
window.onload = function () {

	function headeHendler(entries, observer) {
		if (entries[0].isIntersecting) {
			header.classList.remove('scroll');

		} else {
			header.classList.add('scroll');
		}
	}

	const headerObserver = new IntersectionObserver(headeHendler, { threshold: 1 });
	headerObserver.observe(header);

	// ***********************************************************************
	function sectionHendler(enties) {
		enties.forEach(entry => {
			if (entry.isIntersecting) {

				navLinks.forEach(link => {
					const linkAttribute = `${link.getAttribute('data-section').replace('.', '')}`;

					if (entry.target.classList.contains(linkAttribute)) {
						link.classList.add('active');
					} else {
						link.classList.remove('active');
					}
				})
			}
		})
	}
	const observerOfSections = new IntersectionObserver(sectionHendler, { threshold: 0.7 });

	const section = document.querySelectorAll('section').forEach(section => {
		observerOfSections.observe(section);
	});

	// ***********************************************************************

	navLinks.forEach(item => {
		item.addEventListener('click', navToSection)
	})

	function navToSection(event) {
		event.preventDefault();
		const menuLink = event.target;
		const goToSection = document.querySelector(menuLink.dataset.section);

		const goToSectionValue = goToSection.getBoundingClientRect().top + pageYOffset - header.offsetHeight;

		if (iconMenu.classList.contains('active')) {
			document.body.classList.remove('lock');
			iconMenu.classList.remove("active");
			menuBody.classList.remove("active");
		}

		window.scrollTo({
			top: goToSectionValue,
			behavior: "smooth"
		})
	}
}


const spoilerBtn = document.querySelectorAll('.questions__caption');

spoilerBtn.forEach(item => {
	item.addEventListener('click', spolierHandler);
})

function spolierHandler(event) {
	event.preventDefault();

	const spoilerBody = this.nextElementSibling;

	checkCurrentSpoiler(this);

	this.classList.toggle('questions__caption--active');
	console.log('work?');

	if (this.classList.contains('questions__caption--active')) {
		spoilerBody.style.maxHeight = spoilerBody.scrollHeight + 'px';

	} else {
		spoilerBody.style.maxHeight = 0;
	}

}

function checkCurrentSpoiler(spoiler) {
	const current = document.querySelector('.questions__caption--active');

	if (current && current !== spoiler) {
		current.classList.remove('questions__caption--active');
		current.nextElementSibling.style.maxHeight = 0;
	}
}


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

const popup = document.querySelector('.popup-roadmap');
const popupLinks = document.querySelectorAll('.intro__header-btn,.questions__btn ');
const popupClose = document.querySelectorAll('.popup-roadmap__btn,.popup-roadmap');
const popupBody = document.querySelector('.popup-roadmap__inner');

popupLinks.forEach(popupLink => {
	popupLink.addEventListener('click', popupHandler);
})

popupBody.addEventListener('click', event => {
	event.stopPropagation();
})

popupClose.forEach(item => {
	item.addEventListener('click', modalClose);
})

function popupHandler() {
	modalOpen();
}

function modalOpen() {
	if (popup == null) return;
	document.body.classList.add('lock');
	popup.classList.add('popup-roadmap--active');
}

function modalClose() {
	document.body.classList.remove('lock');
	popup.classList.remove('popup-roadmap--active');
}

