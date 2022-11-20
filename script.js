"use strict";

const container = document.querySelector(".container");
const header = document.querySelector(".header-one");

// Creating Grid
const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

const randomColor = function () {
  const color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  return color;
};
// Creating grid elements
const fragment = document.createDocumentFragment();
for (let i = 0; i < 256; i++) {
  const gridElement = document.createElement("div");
  gridElement.classList.add("grid-element");

  // Adding hover effect and random color
  document.documentElement.style.setProperty(
    "--background-color",
    randomColor()
  );
  gridElement.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = randomColor();
  });
  fragment.appendChild(gridElement);
}
grid.appendChild(fragment);
