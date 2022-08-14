document.addEventListener('DOMContentLoaded', () => {

  //burger
  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.nav');
  let menulinks = document.querySelectorAll('.nav__link');
  let menuClose = document.querySelector('.header__close-menu');

  burger.addEventListener('click', function (){
    document.body.classList.add('stop-scroll');
    menu.classList.add('nav--active');
  });
  menuClose.addEventListener('click', function (){
    menu.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  });
  menulinks.forEach( function (elem){
    elem.addEventListener('click', function (){
      menu.classList.remove('nav--active');
      document.body.classList.remove('stop-scroll');
    });
  });

  // smooth scroll
  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  });

  // search menu
  let openSearch = document.querySelector('.header__open-search-btn');
  let closeSearch = document.querySelector('.search-menu__close');
  let searchMenu = document.querySelector('.search-menu');

  openSearch.addEventListener('click', function (){
    openSearch.classList.add('disappear');
    searchMenu.classList.add('search-menu--active');
  });
  closeSearch.addEventListener('click', function (){
    openSearch.classList.remove('disappear');
    searchMenu.classList.remove('search-menu--active');
    document.body.classList.remove('stop-scroll');
  });

  //hero swiper
  const swiper = new Swiper('.js-hero-swiper', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
      delay: 5000
    }
  });

  // select
  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });


  //gallery swiper
  let gallerySlider = new Swiper(".swiper-gallery", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

  //catalog accordion
  (() => {
    new Accordion(".js-accordion-container", {
      openOnInit: [0]
    });
  })();

  //tabs
  let tabLink = document.querySelectorAll('.accordion__painter-link');
  let tabContent = document.querySelectorAll('.tab-content');

  tabLink.forEach(function (element) {
    element.addEventListener('click', function (e) {
      let slide = e.currentTarget.dataset.tab;
      swiperArtists.slideTo(slide, 300);
    });
  });
  if (window.screen.width < 1024) {
    document.querySelectorAll('.js-scroll-link').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.dataset.artist;
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
        });
      });
    });
  }

  //slideTo
  const swiperArtists = new Swiper('.swiper--artists', {
    allowTouchMove: false,
    spaceBetween: 20,
    autoHeight: true,
  });

  // events swiper
  const swiperEvents = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    spaceBetween: 20,
    setWrapperSize: true,

    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3
      },
      1920: {
        navigation: {
          nextEl: ".events-next",
          prevEl: ".events-prev"
        },
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо
  });

  //tooltip
  tippy('.js-tooltip-btn', {
  });

  //sponsor swiper
  let sponsorSwiper = new Swiper(".sponsor-swiper__slides", {
    slidesPerView: 1,
    loop: true,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".sponsor-next",
      prevEl: ".sponsor-prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

  //form
  let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  let inputName = document.querySelector('.form__name');
  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
        function: (name, value) => {
          return /^[a-zA-Zа-яА-Я\u00C0-\u00ff]+$/.test(inputName.value);
        }
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        },
      },
    },
    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Имя не может быть меньше двух символов',
        maxLength: 'Имя не может превышать 30 символов',
        function: 'Недопустимый формат',
      },
      tel: {
        function: 'Введите телефон полностью',
        required: 'Вы не ввели телефон'
      }
    }
  });

  // resize
  if (window.screen.width>=576) {
    document.getElementById('form__button').innerText = 'Заказать обратный звонок';
  }
  if (window.screen.width>=1440) {
    document.getElementById('search-menu__input').setAttribute('placeholder', 'Поиск по сайту');
  }
  window.addEventListener('resize', change);
  function change(){
    if (window.screen.width>=576) {
      document.getElementById('form__button').innerText = 'Заказать обратный звонок';
    } else {
      document.getElementById('form__button').innerText = 'Заказать';
    }
    if (window.screen.width>=1440) {
      document.getElementById('search-menu__input').setAttribute('placeholder', 'Поиск по сайту');
    } else {
      document.getElementById('search-menu__input').removeAttribute('placeholder');
    }
  }

  // map
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    let myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      center: [55.75846806898367, 37.60108849999989],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "medium",
      geolocationControlPosition:  { top: "360px", right: "20px" },
      zoomControlSize: "medium",
      zoomControlPosition: { top: "280px", right: "20px" }
    });

    if (window.screen.width < 1440) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    }

    // Создание собственного геообъекта с типом точка (метка).
    let myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/mapIcon.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-28, -40]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    // Запрет скролла
    myMap.behaviors.disable('scrollZoom');
  }




  const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  };

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(
        params.disabledClassName,
        params.activeClassName
      );
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(
        `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
      );

      if (
        activeElements.length &&
        !evt.target.closest(`.${params.activeClassName}`)
      ) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(
          `.${params.dropClassName}[data-target="${path}"]`
        );

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();
});
