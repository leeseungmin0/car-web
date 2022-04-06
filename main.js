"use strict";

const modelmenuContainer = document.querySelector(".model__kind ul");
const cars = document.querySelectorAll(".car");
modelmenuContainer.addEventListener("click", (e) => {
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
