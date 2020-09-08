/* WINDOW RESIZE UTIL */
let windowWidth = $(window).width();

window.addEventListener('resize', function () {
  if ($(window).width() !== windowWidth) {
    windowWidth = $(window).width();
  }
});

/* TIMELINE */
if (document.body.contains(document.getElementById('timeline-embed'))) {
  timeline = new TL.Timeline('timeline-embed', 'data/sample-timeline-data.json');
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
    /*     padding: {
      right: '5rem',
      left: '5rem',
    }, */
    heightRatio: 0.5,
    pagination: false,
    lazyLoad: 'nearby',
  });

  splide.mount();

  splide.on('click', function (e) {
    console.log(e);
    // TODO zoom that pic
  });
}

/* FLIP CARDS */
jQuery('.flip-card').flip({ axis: 'x', reverse: true });

/* IMAGE POPUPS */
jQuery('.magnific-popup').magnificPopup({ type: 'image' });

/* SEARCH MODAL */
$(() => {
  jQuery('#close-search').on('click', () => {
    jQuery('#search-modal').slideUp(500);
  });

  jQuery('#open-search').on('click', () => {
    jQuery('#search-modal').slideDown(500);
  });
});
