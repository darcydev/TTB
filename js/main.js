/* WINDOW RESIZE UTIL */
let windowWidth = $(window).width();

window.addEventListener('resize', function () {
	if ($(window).width() !== windowWidth) {
		windowWidth = $(window).width();
	}
});

/* TIMELINE */
if (document.body.contains(document.getElementById('timeline-embed'))) {
	timeline = new TL.Timeline(
		'timeline-embed',
		'data/sample-timeline-data.json'
	);
}

/* MOBILE NAV */
const closeHamburgerMenu = () => {
	$('.hamburger').toggleClass('is-active');
	$('.nav-mobile').slideToggle();
};

$('.hamburger').click(closeHamburgerMenu);

/* SLIDER */
if (document.body.contains(document.getElementById('splide'))) {
	const splide = new Splide('#splide', {
		type: 'loop',
		heightRatio: 0.5,
		pagination: false,
		lazyLoad: 'nearby',
	});

	splide.mount();
}

/* FLIP CARDS */
jQuery('.flip-card').flip({ axis: 'x', reverse: true });

/* IMAGE POPUPS */
jQuery('.magnific-popup').magnificPopup({ type: 'image' });

/* SCROLL REVEAL */
ScrollReveal().reveal('.scroll-reveal', {
	delay: 150,
	interval: 100,
	viewFactor: 0.25,
});

$(() => {
	/* SEARCH MODAL */
	jQuery('#close-search').on('click', () => {
		handleSearchModal(false);
	});
	jQuery('#open-search').on('click', () => {
		handleSearchModal(true);
	});
	jQuery('#open-search--mobile').on('click', () => {
		handleSearchModal(true);
	});

	function handleSearchModal(toOpen) {
		if (toOpen) {
			jQuery('#search-modal').slideDown(500);
		} else {
			jQuery('#search-modal').slideUp(500);
		}
	}

	/* SWITCH LIST/MAP VIEW */
	jQuery('#btn--switch-list-view').on('click', () => {
		jQuery('#list-view, #map-view').toggle();
		jQuery('#btn--switch-list-view').css('display', 'none');
		jQuery('#btn--switch-map-view').css('display', 'flex');
	});

	jQuery('#btn--switch-map-view').on('click', () => {
		jQuery('#list-view, #map-view').toggle();
		jQuery('#btn--switch-map-view').css('display', 'none');
		jQuery('#btn--switch-list-view').css('display', 'flex');
	});

	/* MIXITUP FILTERING */
	if (jQuery('.mixitup-container').length > 0) {
		const mixer = mixitup('.mixitup-container');
	}
});
