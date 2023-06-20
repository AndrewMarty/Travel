const animItems = document.querySelectorAll('.animation');
if (animItems.length != 0) {
	window.addEventListener('scroll', Scrolling);
	function Scrolling(){
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animation = animItem.getAttribute('data-animation');
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 3;
			let animItemPoint = window.innerHeight - animItemHeight/animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((window.pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('animation_' + animation);
			}
		}
	}
}
function offset(element) {
	const rect = element.getBoundingClientRect(),scrollLeft = window.pageXOffset || document.documentElement.scrollleft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop,left: rect.left + scrollLeft }
}
setTimeout(Scrolling,0);
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');
const buttonl = document.querySelector('.slider__button_left');
const buttonr = document.querySelector('.slider__button_right');
const slides = document.querySelectorAll('.slide');
const sliderMax = document.querySelector('.slider__max');
const sliderCurrent = document.querySelector('.slider__current');
let index = 1;
slides[index-1].classList.add('slide_active');
sliderCurrent.textContent = '0' + String(index);
sliderMax.textContent = '0' + String(slides.length);
window.addEventListener('scroll', function() {
	if (window.pageYOffset > header.clientHeight) {
		header.classList.add('header_fixed');
	}
	else {
		header.classList.remove('header_fixed');
	}
});
burger.addEventListener('click',function(){
	burger.classList.toggle('burger_active');
	navigation.classList.toggle('header__navigation_active');
	if (navigation.classList.contains('header__navigation_active')) {
		document.body.classList.add('lock');
	}
	else {
		document.body.classList.remove('lock');
	}
})
const links = document.querySelectorAll('.link');
	links.forEach(function(element,index){
		element.addEventListener('click',function(e){
		e.preventDefault();
		burger.classList.remove('burger_active');
		navigation.classList.remove('header__navigation_active');
		document.body.classList.remove('lock');
		const href = element.getAttribute('href');
		const to = document.getElementById(href);
		to.scrollIntoView({ behavior: "smooth" });
	});
})
buttonr.addEventListener('click',Next);
buttonl.addEventListener('click',Prev);
function Next () {
	if (index < slides.length) {
		slides[index-1].classList.remove('slide_active');
		index++;
		slides[index-1].classList.add('slide_active');
		sliderCurrent.textContent = '0' + String(index);
	}
}
function Prev () {
	if (index > 1) {
		slides[index-1].classList.remove('slide_active');
		index--;
		slides[index-1].classList.add('slide_active');
		sliderCurrent.textContent = '0' + String(index);
	}
}
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
