const sliderHero = new window.Swiper('.hero__swiper', {
  loop: true,

  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
});

export {sliderHero};
