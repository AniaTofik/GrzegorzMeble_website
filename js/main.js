document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav');
	const navLinks = document.querySelectorAll('.nav-link');
	const navCollapse = document.querySelector('.navbar-collapse');
	const btnMenu = document.querySelector('.navbar-toggler');
	const fadeInElements = document.querySelectorAll('.fade-in');
	const slideInElements = document.querySelectorAll('.slide-in-left, .slide-in-top, .slide-in-bottom, .slide-in-right');

	function handleNavLinkClick() {
		navCollapse.classList.remove('show');
		navCollapse.classList.add('hidden');
	}

	function toggleNavMenu() {
		navCollapse.classList.toggle('hidden');
		navCollapse.classList.toggle('show');
	}

	function handleScrollAnimation(elements, offset = 100) {
		elements.forEach(el => {
			const position = el.getBoundingClientRect().top;
			if (position < window.innerHeight - offset) {
				el.classList.add('visible');
			}
		});
	}
	navLinks.forEach(navLink => navLink.addEventListener('click', handleNavLinkClick));

	btnMenu.addEventListener('click', toggleNavMenu);
	window.addEventListener('scroll', () => {
		handleScrollAnimation(fadeInElements);
		handleScrollAnimation(slideInElements);
	});
});

function openLightbox(imageSrc) {
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("lightbox-img").src = imageSrc;
}

function closeLightbox() {
	document.getElementById("lightbox").style.display = "none";
}
