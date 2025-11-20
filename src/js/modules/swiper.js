import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const promoSlider = new Swiper(".promo-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 1000,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
