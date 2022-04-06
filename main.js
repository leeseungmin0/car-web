"use strict";

const carContainer = document.querySelector(".car__container");
const modelMenu = document.querySelector(".model__kind ul");
const cars = document.querySelectorAll(".car");
modelMenu.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }
  carContainer.classList.add("car__animation");
  setTimeout(() => {
    cars.forEach((car) => {
      if (filter === "*" || filter === car.dataset.type) {
        car.classList.remove("invisible");
      } else {
        car.classList.add("invisible");
      }
    });

    carContainer.classList.remove("car__animation");
  }, 300);
});
