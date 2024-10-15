document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav');
	const navLinks = document.querySelectorAll('.nav-link');
	const navCollapse = document.querySelector('.navbar-collapse');
	const btnMenu= document.querySelector('.navbar-toggler');

	function addShadow() {
		if (window.scrollY >= 1500) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	navLinks.forEach((navLink) =>
		navLink.addEventListener('click', () => {
			navCollapse.classList.remove('show'); // Usuwa klasę show
		})
	);
	
	function closeNav() {
		navCollapse.classList.remove('show'); 
	}
	
	btnMenu.addEventListener('click', closeNav);
	
	window.addEventListener('scroll', addShadow);
});
