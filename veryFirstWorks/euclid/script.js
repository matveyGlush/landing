//swiper
const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

// tabs
let tabsBtn = document.querySelectorAll('.how-we-work__item-link');
let tabsItem = document.querySelectorAll('.how-we-work__block');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function(btn){ btn.classList.remove('how-we-work__item-link-active')});
      e.currentTarget.classList.add('how-we-work__item-link-active');

      tabsItem.forEach(function(element){ element.classList.remove('how-we-work__block-active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__block-active');
    });
});


// accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accrdion--active'
});

// burger menu
let burger = document.querySelector('.header__menu-burger');
let menu = document.querySelector('.header__nav');
let menuLincs = document.querySelectorAll('.header__item');
let navClose = document.querySelector('.header__nav-close');



navClose.addEventListener('click',
  function () {

    burger.classList.remove('header__menu-burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });

burger.addEventListener('click',
  function () {
    burger.classList.add('header__menu-burger--active');
    menu.classList.add('header__nav--active');
    document.body.classList.add('stop-scroll');
  });

menuLincs.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__menu-burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
});

// searching menu
const searchBtn = document.querySelector(".header__nav-search");
const cancelBtn = document.querySelector(".header__nav-search__cancel");
const navSearch = document.querySelector('.header__nav-search');

navSearch.addEventListener('click',
  function () {
    document.querySelector('.header__nav-search__box').classList.add('header__nav-search__box-active');
    searchBtn.style.visibility="hidden";
  });

cancelBtn.addEventListener('click',
  function () {
    document.querySelector('.header__nav-search__box').classList.remove('header__nav-search__box-active');
    searchBtn.style.visibility="visible";
  });


