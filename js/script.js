// test PC or mobile
const isMobile = {
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
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}
// test PC or mobile

// testWebP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// testWebP

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};
// Меню бургер


// Слайдер main
const sliderMain = document.querySelector('.slider');

let mySwiperMain = new Swiper(sliderMain, {
	wrapperClass: 'slider__wrapper',
	slideClass: 'slid',
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// breakpoints: {
	// 	1281: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 5,
	// 	},
	// }

})

// Слайдер кейсы, превью
// Слайдер кейсы 
const sliderCase = document.querySelector('.case');
const sliderPreview = document.querySelector('.preview');

let mySwiper = new Swiper(sliderCase, {
	wrapperClass: 'case__wrapper',
	slideClass: 'case__slide',
	slidesPerView: 1,
	spaceBetween: 5,
	thumbs: {
		swiper: sliderPreview,
	}
})

// Слайдер превью
let mySwiperPreview = new Swiper(sliderPreview, {
	wrapperClass: 'preview__wrapper',
	slideClass: 'preview__slide',
	slidesPerView: 4,
	freeMode: true,
})
// Слайдер кейсы, превью