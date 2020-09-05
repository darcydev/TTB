window.onload = () => {
  setTimeout(() => {
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

    /* SLIDER */
    if (document.body.contains(document.getElementById('splide'))) {
      const splide = new Splide('#splide', {
        type: 'loop',
        padding: {
          right: '5rem',
          left: '5rem',
        },
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
    $('.flip-card').flip({ axis: 'x', reverse: true });
  }, 500);
};
