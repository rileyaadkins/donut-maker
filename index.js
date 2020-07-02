const appDoc = document.getElementById("app");

// counter
let count = 0;

//button elements
const donutButton = document.getElementById("donut-button");
const autoClicker = document.getElementById("auto-clicker");

//donut display
const displayContainer = document.getElementById("donuts");
displayContainer.innerText = `Donut Count: ${count}`;

//donut counter click handler
donutButton.onclick = function () {
  count++;
  displayContainer.innerText = `Donut Count: ${count}`;
};

// auto-clicker handler
autoClicker.onclick = function () {};
