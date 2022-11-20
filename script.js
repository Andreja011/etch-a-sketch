"use strict";

const container = document.querySelector(".container");
const header = document.querySelector(".header-one");

// Creating Grid
const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

// Creating grid elements
const fragment = document.createDocumentFragment();
for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid-element");
  // Adding hover effect
  gridElement.addEventListener("mouseover", function () {
    gridElement.classList.toggle("grid-element-hover-effect");
  });
  fragment.appendChild(gridElement);
}
grid.appendChild(fragment);

// Adding hover effect
