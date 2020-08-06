let log = console.log;

let burger = document.querySelector(".header-nav__menu-burger__btn");
let nav = document.querySelector(".navbar");
let recommandationIndicators = document.querySelectorAll(".recommandations__slider__indicator__item");
let recommandationPreviousBtn = document.querySelector(".recommandations__slider__indicator__previous");
let recommandationNextBtn = document.querySelector(".recommandations__slider__indicator__next");
let recommandationSlider = document.querySelector(".recommandations__slider__slider-content");
let recommandationIndicatorsActive = recommandationNextBtn;

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});

recommandationIndicators.forEach(function (e) {
  e.addEventListener("click", function () {
    recommandationCarousel(e);
    clearInterval(recommandationSliderInterval);
  });
});

var recommandationSliderInterval = setInterval(() => {
  if (!recommandationNextBtn.classList.contains("recommandations__slider__indicator__item--full")) {
    recommandationCarousel(recommandationNextBtn);
  } else {
    recommandationCarousel(recommandationPreviousBtn);
  }
}, 4000);

function recommandationCarousel(e) {
  if (e == recommandationNextBtn) {
    recommandationSlider.style.transform = "translateX(-50%)";
    recommandationPreviousBtn.classList.remove("recommandations__slider__indicator__item--full");
  } else {
    recommandationSlider.style.transform = "translateX(0)";
    recommandationNextBtn.classList.remove("recommandations__slider__indicator__item--full");
  }
  e.classList.add("recommandations__slider__indicator__item--full");
}
