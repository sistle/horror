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