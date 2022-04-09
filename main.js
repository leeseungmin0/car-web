"use strict";

//model filter
const carContainer = document.querySelector(".car__container");
const modelMenu = document.querySelector(".model__kind ul");
const cars = document.querySelectorAll(".car");

//home img slide
let homeContainer = document.querySelector(".home__container");
let homeSlides = document.querySelector(".home__slides");
let slide = document.querySelectorAll(".slide");
let count = slide.length;
let currentIdx = 0;
let picInterval = undefined;
let page = document.querySelectorAll(".page span");
let pageCount = page.length;

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
//home img slide
for (let i = 0; i < count; i++) {
  slide[i].style.left = i * 100 + "%";
}
function moveSlide(num) {
  homeSlides.style.left = -100 * num + "%";
  currentIdx = num;
}
function autoSlide() {
  picInterval = setInterval(() => {
    let nextIdx = (currentIdx + 1) % count;
    moveSlide(nextIdx);
    for (let j = 0; j < pageCount; j++) {
      page[j].classList.remove("active");
    }
    page[nextIdx].classList.add("active");
  }, 4000);
}
homeContainer.addEventListener("mouseenter", () => {
  clearInterval(picInterval);
});
homeContainer.addEventListener("mouseleave", () => {
  autoSlide();
});

// page
for (let i = 0; i < pageCount; i++) {
  page[i].addEventListener("click", (e) => {
    moveSlide(i);
    for (let j = 0; j < pageCount; j++) {
      page[j].classList.remove("active");
    }
    e.target.classList.add("active");
  });
}
