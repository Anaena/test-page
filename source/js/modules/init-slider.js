// eslint-disable-next-line no-unused-vars
let swiper;

const initSwiper = (slider) => {
// eslint-disable-next-line no-undef
  swiper = new Swiper(slider, {
    slidesPerView: 1,
    navigation: {
      nextEl: '.intro__button-next',
      prevEl: '.intro__button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

const initSlider = () => {
  const introSlider = document.querySelector('#intro-lider');

  if (!introSlider) {
    return;
  }

  initSwiper(introSlider);
};

export {initSlider};
