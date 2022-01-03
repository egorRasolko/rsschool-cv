"use strict"
const burger = document.querySelector(".burgerMenu");
console.log(document.querySelector(".burger-opnclose"))
burger.addEventListener("click", show);
function show() {
  document.querySelector('.burger').classList.toggle("burger-show");
  document.querySelector('.burgerMenu').classList.toggle("burgerMenu-invert");
  document.querySelectorAll('.burgerMenu-item').forEach((item) => item.classList.toggle("burgerMenu-item_show"));
}