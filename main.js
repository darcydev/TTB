window.onload = () => {
  /* WINDOW RESIZE UTIL */
  let windowWidth = $(window).width();

  window.addEventListener('resize', function () {
    if ($(window).width() !== windowWidth) {
      windowWidth = $(window).width();
    }
  });

  /* MOBILE NAV */
  const closeHamburgerMenu = () => {
    $('.hamburger').toggleClass('is-active');
    $('.nav-mobile').slideToggle();
  };

  $('.hamburger').click(closeHamburgerMenu);

  /*   let resizeTimeout;

  if (windowWidth < 900) {
    $(window).resize(function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        if (windowWidth > 900) {
          closeHamburgerMenu();
        }
      }, 250);
    });
  } */

  /* NAV */
  function addActiveClassToActivePage() {
    let target = 0;

    switch (window.location.pathname) {
      case '/':
        target = 1;
        break;
      case '/the-bridges':
        target = 2;
        break;
      case '/engineers':
        target = 3;
        break;
      case '/resources':
        target = 4;
        break;
      case '/contact':
        target = 5;
        break;
    }

    // document.getElementByTagName('nav').getElementByTagName('li')[target].classList.add('active');
  }

  addActiveClassToActivePage();

  /* TIMELINE */
  timeline = new TL.Timeline('timeline-embed', 'data/sample-timeline-data.json');
};
