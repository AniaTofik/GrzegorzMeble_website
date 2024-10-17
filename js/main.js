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
	  window.addEventListener('scroll', function() {
		const elements = document.querySelectorAll('.fade-in');
		elements.forEach(el => {
		  const position = el.getBoundingClientRect().top;
		  const windowHeight = window.innerHeight;
	  
		  if (position < windowHeight) {
			el.classList.add('visible');
		  }
		});
	  });
	  window.addEventListener('scroll', function() {
		const elements = document.querySelectorAll('.slide-in-left');
		elements.forEach(el => {
		  const position = el.getBoundingClientRect().top;
		  const windowHeight = window.innerHeight;
	  
		  if (position < windowHeight - 100) {  // Dodano margines dla wcześniejszego pojawiania się elementów
			el.classList.add('visible');
		  }
		});
	  });
	  window.addEventListener('scroll', function() {
		const elements = document.querySelectorAll('.slide-in-top, .slide-in-bottom, .slide-in-left, .slide-in-right');
		elements.forEach(el => {
		  const position = el.getBoundingClientRect().top;
		  const windowHeight = window.innerHeight;
	  
		  if (position < windowHeight - 100) {  // Element pojawi się nieco wcześniej
			el.classList.add('visible');
		  }
		});
	  });
	  
	  
	  btnMenu.addEventListener('click', toggleNavMenu);
	window.addEventListener('scroll', addShadow);
	
});
