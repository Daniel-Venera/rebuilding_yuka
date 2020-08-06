let log = console.log;

let burger = document.querySelector(".header-nav__menu-burger__btn");
let nav = document.querySelector(".navbar");
let recommandationIndicators = document.querySelectorAll(".recommandations__slider__indicators__indicator");
let recommandationPreviousBtn = document.querySelector(".recommandations__slider__indicator__previous");
let recommandationNextBtn = document.querySelector(".recommandations__slider__indicator__next");
let recommandationSlider = document.querySelector(".recommandations__slider__slider-content");
let recommandationIndicatorsActive = recommandationNextBtn;
let reviewsIndicators = document.querySelectorAll(".reviews__slider-indicators__indicator");
let reviewsSlider = document.querySelector(".reviews__slider__slider-content");

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
  if (!recommandationNextBtn.classList.contains("recommandations__slider__indicators__indicator--full")) {
    recommandationCarousel(recommandationNextBtn);
  } else {
    recommandationCarousel(recommandationPreviousBtn);
  }
}, 4000);

function recommandationCarousel(e) {
  if (e == recommandationNextBtn) {
    recommandationSlider.style.transform = "translateX(-50%)";
    recommandationPreviousBtn.classList.remove("recommandations__slider__indicators__indicator--full");
  } else {
    recommandationSlider.style.transform = "translateX(0)";
    recommandationNextBtn.classList.remove("recommandations__slider__indicators__indicator--full");
  }
  e.classList.add("recommandations__slider__indicators__indicator--full");
}

reviewsIndicators.forEach(function (e) {
  e.addEventListener("click", function () {
    reviewsCarousel(e);
    clearInterval(reviewsSliderInterval);
  });
});

function reviewsCarousel(e) {
  reviewsIndicators.forEach(function (f) {
    if (f.classList.contains("reviews__slider-indicators__indicator--full")) {
      f.classList.remove("reviews__slider-indicators__indicator--full");
    }
  });
  if (e.id == "reviewsIndicator1") {
    reviewsSlider.style.transform = "translateX(0)";
  } else if (e.id == "reviewsIndicator2") {
    reviewsSlider.style.transform = "translateX(-33%)";
  } else {
    reviewsSlider.style.transform = "translateX(-66.6%)";
  }
  e.classList.add("reviews__slider-indicators__indicator--full");
}

var reviewsSliderInterval = setInterval(() => {
  var reviewActive = document.querySelector(".reviews__slider-indicators__indicator--full");
  if (Array.from(reviewsIndicators).indexOf(reviewActive) == reviewsIndicators.length - 1) {
    reviewsCarousel(reviewsIndicators[0]);
  } else {
    reviewsCarousel(reviewsIndicators[Array.from(reviewsIndicators).indexOf(reviewActive) + 1]);
  }
}, 4000);
