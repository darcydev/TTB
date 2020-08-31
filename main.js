window.onload = () => {
  /* WINDOW RESIZE UTIL */
  /*   let windowWidth = $(window).width();

  const handleWindowResize = () => {
    if ($(window).width() !== windowWidth) {
      windowWidth = $(window).width();
    }
  };

  window.addEventListener('resize', handleWindowResize); */

  /* MOBILE NAV */
  const closeHamburgerMenu = () => {
    $('.hamburger').toggleClass('is-active');
    $('.nav-mobile').slideToggle();
  };

  $('.hamburger').click(closeHamburgerMenu);

  /*   window.addEventListener('resize', function () {
    console.log('windowWidth :>> ', windowWidth);
    if (windowWidth > 600) {
      closeHamburgerMenu();
    }
  }); */

  /* TIMELINE */
  timeline = new TL.Timeline('timeline-embed', 'data/sample-timeline-data.json');
};
