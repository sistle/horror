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

