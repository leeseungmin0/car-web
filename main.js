"use strict";

const modelBtnContainer = document.querySelector(".model__container");
const modelmenuContainer = document.querySelector(".model__kind");
const cars = document.querySelectorAll(".car");
modelBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }
  cars.forEach((car) => {
    if (filter === "*" || filter === car.dataset.type) {
      car.classList.remove("invisible");
    } else {
      car.classList.add("invisible");
    }
  });
  console.log(filter);
});
