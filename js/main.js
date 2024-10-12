document.addEventListener('DOMContentLoaded', function () {
	const navLinks = document.querySelectorAll('.nav-link');
	const navCollapse = document.querySelector('.navbar-collapse');


	navLinks.forEach((navLink) =>
		navLink.addEventListener('click', () => {
			navCollapse.classList.remove('show');
		})
	);

	window.addEventListener('scroll', addShadow);
});
