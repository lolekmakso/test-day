// Импорт стилей Swiper (один раз для всего проекта)
import "swiper/css/bundle";

// Импорт функций инициализации
import initPromoSlider from "./modules/swiper.js";
import initProductsSlider from "./modules/swiper-products.js";

// Запуск слайдеров
initPromoSlider();
initProductsSlider();
