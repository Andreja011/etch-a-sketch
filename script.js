"use strict";

const container = document.querySelector(".container");
const header = document.querySelector(".header-one");
const button = addButton();
const defaultGrid = createGrid(16);

// Creating default grid
function createGrid(number) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.setProperty("--number-rows-and-columns", number);
  container.insertBefore(grid, button);
  return grid;
}

// Generating random color
const randomColor = function () {
  const color = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  return color;
};

// Creating grid elements
const fragment = creatingElements(256);

function creatingElements(number) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < number; i++) {
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
  return fragment;
}
defaultGrid.appendChild(fragment);

// Adding prompt button
function addButton() {
  const button = document.createElement("button");
  button.textContent = "Size";
  button.classList.add("button-prompt");
  container.appendChild(button);
  return button;
}

// Adding random color on button for fun :P
button.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = randomColor();
});

// Adding prompt function
button.addEventListener("click", () => {
  const userNumber = function () {
    const userChoise = Number(prompt("Choose a number from 1 to 100."));
    if (userChoise <= 100) {
      console.log(userChoise);
      defaultGrid.remove();
      let userGrid = createGrid(userChoise);
      const userFragment = creatingElements(userChoise * userChoise);

      userGrid.appendChild(userFragment);
    } else {
      userNumber();
    }
  };
  userNumber();
});

// Add user input values to the for loop
