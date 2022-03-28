const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: "horizontal",
  effect: "slide",
  speed: 300,
  autoplay: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
