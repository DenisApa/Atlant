(function () {

	let hamburger = {
		nav: document.querySelector('#hamburger-menu'),
		navToggle: document.querySelector('.nav-toggle'),

		initialize() {
			this.navToggle.addEventListener('click', () => { this.toggle(); });
		},

		toggle() {
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		},
	};

	hamburger.initialize();

}());