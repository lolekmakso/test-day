import Swiper from "swiper/bundle";

function initPromoSlider() {
  // Проверяем, есть ли слайдер на странице, чтобы не было ошибок
  if (!document.querySelector(".promo-swiper")) return;

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
      el: ".swiper-pagination", // Убедись, что класс в HTML совпадает!
      clickable: true,
    },
  });
}

export default initPromoSlider;
