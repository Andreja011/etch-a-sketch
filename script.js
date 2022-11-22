"use strict";

const container = document.querySelector(".container");
const header = document.querySelector(".header-one");

// Creating Grid
const grid = document.createElement("div");
grid.classList.add("grid");
container.appendChild(grid);

// Generating random color
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

// Adding prompt button
const button = document.createElement("button");
button.textContent = "Size";
button.classList.add("button-prompt");
container.appendChild(button);

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
      return userChoise;
    } else {
      userNumber();
    }
  };
  userNumber();
});

// Add user input values to the for loop
