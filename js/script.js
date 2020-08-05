let log = console.log;

let burger = document.querySelector(".header-nav__menu-burger__btn");
let nav = document.querySelector(".navbar");

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});
