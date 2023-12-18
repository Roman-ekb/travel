const sliderTours = new window.Swiper('.tours__swiper', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      initialSlide: 1,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 1,
    },
  },
  navigation: {
    nextEl: '.tours__swiper-button-next',
    prevEl: '.tours__swiper-button-prev',
  },

});

export {sliderTours};
