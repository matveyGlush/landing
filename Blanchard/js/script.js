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

  //slideTo
  const swiperArtists = new Swiper('.swiper-artists', {
    initialSlide: 2,
    allowTouchMove: false,
    spaceBetween: 20,
    autoHeight: true,
  });

  //tabs
  let tabLink = document.querySelectorAll('.accordion__painter-link');
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
      576: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3
      },
      1440: {
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
    // loop: true,
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
    colorWrong: '#D11616FF',
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
    },
    submitHandler: function(thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', '../phpmailer/mail.php', true);
      xhr.send(formData);

      thisForm.reset();
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
      menu.classList.remove('nav--active');
      document.body.classList.remove('stop-scroll');
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

  const inputButton = document.getElementById('inputButton');


  // modal
  class Modal {
    constructor(options) {
      let defaultOptions = {
        isOpen: () => {},
        isClose: () => {},
      }
      this.options = Object.assign(defaultOptions, options);
      this.modal = document.querySelector('.modal');
      this.speed = false;
      this.animation = false;
      this.isOpen = false;
      this.modalContainer = false;
      this.previousActiveElement = false;
      this.fixBlocks = document.querySelectorAll('.fix-block');
      this.focusElements = [
        'a[href]',
        'input',
        'button',
        'select',
        'textarea',
        '[tabindex]'
      ];
      this.events();
    }

    events() {
      if (this.modal) {
        document.addEventListener('click', function(e){
          const clickedElement = e.target.closest('[data-modalartist]');
          if (clickedElement) {
            let target = clickedElement.dataset.modalartist;
            let animation = clickedElement.dataset.animation;
            let speed = clickedElement.dataset.speed;
            this.animation = animation ? animation : 'fade';
            this.speed = speed ? parseInt(speed) : 300;
            this.modalContainer = document.querySelector(`[data-target="${target}"]`);
            this.open();
            return;
          }

          if (e.target.closest('.modal-close')) {
            this.close();
            return;
          }
        }.bind(this));

        window.addEventListener('keydown', function(e) {
          if (e.keyCode === 27) {
            if (this.isOpen) {
              this.close();
            }
          }

          if (e.keyCode === 9 && this.isOpen) {
            this.focusCatch(e);
            return;
          }

        }.bind(this));

        this.modal.addEventListener('click', function(e) {
          if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
            this.close();
          }
        }.bind(this));
      }
    }

    open() {
      this.previousActiveElement = document.activeElement;

      this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
      this.modal.classList.add('is-open');
      this.disableScroll();

      this.modalContainer.classList.add('modal-open');
      this.modalContainer.classList.add(this.animation);

      setTimeout(() => {
        this.options.isOpen(this);
        this.modalContainer.classList.add('animate-open');
        this.isOpen = true;
        this.focusTrap();
      }, this.speed);
    }

    close() {
      if (this.modalContainer) {
        this.modalContainer.classList.remove('animate-open');
        this.modalContainer.classList.remove(this.animation);
        this.modal.classList.remove('is-open');
        this.modalContainer.classList.remove('modal-open');

        this.enableScroll();
        this.options.isClose(this);
        this.isOpen = false;
        this.focusTrap();
      }
    }

    focusCatch(e) {
      const focusable = this.modalContainer.querySelectorAll(this.focusElements);
      const focusArray = Array.prototype.slice.call(focusable);
      const focusedIndex = focusArray.indexOf(document.activeElement);

      if (e.shiftKey && focusedIndex === 0) {
        focusArray[focusArray.length - 1].focus();
        e.preventDefault();
      }

      if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
        focusArray[0].focus();
        e.preventDefault();
      }
    }

    focusTrap() {
      const focusable = this.modalContainer.querySelectorAll(this.focusElements);
      if (this.isOpen) {
        focusable[0].focus();
      } else {
        this.previousActiveElement.focus();
      }
    }

    disableScroll() {
      let pagePosition = window.scrollY;
      this.lockPadding();
      document.body.classList.add('disable-scroll');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
    }

    enableScroll() {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      this.unlockPadding();
      document.body.style.top = 'auto';
      document.body.classList.remove('disable-scroll');
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute('data-position');
    }

    lockPadding() {
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      this.fixBlocks.forEach((el) => {
        el.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset;
    }

    unlockPadding() {
      this.fixBlocks.forEach((el) => {
        el.style.paddingRight = '0px';
      });
      document.body.style.paddingRight = '0px';
    }
  }

  const modal = new Modal({
    isOpen: (modal) => {
      console.log(modal);
      console.log('opened');
    },
    isClose: () => {
      console.log('closed');
    },
  });
});
