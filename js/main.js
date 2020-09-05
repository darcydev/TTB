window.onload = () => {
  /* INCLUDE SECTION ON EACH PAGE */
  $(function () {
    var includes = $('[data-include]');

    jQuery.each(includes, function () {
      var file = 'views/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
  });

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
  }, 500);
};
