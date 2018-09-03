(function($) {
  "use strict"; // Start of use strict

  // Multilanguage
  var translate = {
    download: {
      es: 'Descargar',
      en: 'Download'
    },
    features: {
      es: 'Funcionalidades',
      en: 'Features'
    },
    screenshots: {
      es: 'Imagenes',
      en: 'Screenshots'
    },
    getStarted: {
      es: 'Comenzar',
      en: 'Get Started'
    },
    contact: {
      es: 'Contacto',
      en: 'Contact'
    },
    title: {
      es: 'Ofrece una visión estratégica de la red, su estado actual y cómo se trabajó en ella, a partir de la evaluación de indicadores claves',
      en: 'Offers a strategic vision of the network, current status and how was developed, based on the evaluation of key indicators'
    },
    featuresTitle: {
      es: 'Funcionalidades',
      en: 'Features'
    },
    simpleUiDescription: {
      es: 'Hacemos simple lo complicado, nada de pantallas aparatosas.',
      en: 'We are simple, no bulky screens.'
    }, 
    indicatorsDescription: {
      es: 'Visualiza todos tus indicadores configurables en tiempo real.',
      en: 'View all your configurable indicators in real time'
    },
    notificationsDescription: {
      es: 'Algo se encuentra mal? Enterate al instante!',
      en: 'Something is wrong? Get informed instantly!'
    },
    mapDescription: {
      es: 'Todavia no se que hace esto :3',
      en: '???????????'
    },
    demoAccess: {
      es: 'Accede al demo',
      en: 'Demo access'
    },
    labelName: {
      es: 'Nombre',
      en: 'Name'
    }
  };

  var changeLanguage = function(lang) {
    $('.lang').each(function() {
      var key = $(this).attr('key');
      var text = translate[key][lang];
      $(this).text(text);
    });
  }

  $('.change-lang').click(function() {
    var currentLang = $(this).attr('id');
    changeLanguage(currentLang);
  });

  changeLanguage('es');

  // owl.carousel
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 4
      }
    }
  });
  

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
