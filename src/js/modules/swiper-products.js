import Swiper from "swiper/bundle";

function initProductsSlider() {
  if (!document.querySelector(".products-slider")) return;

  const productsSlider = new Swiper(".products-slider", {
    slidesPerView: 1,
    spaceBetween: 45,
    loop: true,

    navigation: {
      nextEl: ".products-button-next",
      prevEl: ".products-button-prev",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

export default initProductsSlider;
