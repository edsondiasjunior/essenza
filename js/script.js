var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  // centeredSlides: true,
  spaceBetween: 20,

  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,

  breakpoints: {
    "@0.00": {
      slidesPerView: 1.2,

      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 2.2,
      spaceBetween: 80,
    },
    "@1.30": {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 80,
    },
  },
});

// CARROSSEL TESTE

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
