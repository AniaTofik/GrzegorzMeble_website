document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav');
	const navLinks = document.querySelectorAll('.nav-link');
	const navCollapse = document.querySelector('.navbar-collapse');
	const btnMenu= document.querySelector('.navbar-toggler');

	function addShadow() {
		if (window.scrollY >= 0) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	navLinks.forEach((navLink) =>
		navLink.addEventListener('click', () => {
			navCollapse.classList.remove('show'); 
			navCollapse.classList.add('hidden'); 
		})
	);
	
	function toggleNavMenu() {
		if (navCollapse.classList.contains('hidden')) {
		  navCollapse.classList.remove('hidden'); 
		  navCollapse.classList.add('show'); 
		} else if (navCollapse.classList.contains('show')) {
		  navCollapse.classList.remove('show');
		  navCollapse.classList.add('hidden');
		}
	  }
	  
	  btnMenu.addEventListener('click', toggleNavMenu);
	  
	
	window.addEventListener('scroll', addShadow);
});
