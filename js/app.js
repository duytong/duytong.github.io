let navbarMobile = document.getElementsByClassName('navbar__mobile');
let navbarList = document.getElementsByClassName('navbar__list');

navbarMobile[0].addEventListener('click', function (e) {
	this.classList.toggle('open');
	navbarList[0].classList.toggle('show');
});
