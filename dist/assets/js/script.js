
//Инициализация Swiper в секции tariff

const swiper1 = new Swiper('.swiper, .swiper1', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  speed: 300,
  autoplay: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next1',
    prevEl: '.swiper-btn-prev1',
  },
});

//Инициализация Swiper в секции clients

const swiper2 = new Swiper('.swiper, .swiper2', {
  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  speed: 300,
  autoplay: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next2',
    prevEl: '.swiper-btn-prev2',
  },
});

//# sourceMappingURL=script.js.map
