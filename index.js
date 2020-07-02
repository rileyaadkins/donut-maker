const appDoc = document.getElementById("app");

// counter
let count = 330;
let donutMultiplierCount = 0;
let autoClickerPrice = 100;
let autoClickerCount = 0;

const multiplierPriceDiv = document.querySelector(".multiplier-price");
const multiplierCountDiv = document.querySelector(".multiplier-count");
const autoClickerCountDiv = document.querySelector(".auto-clicker-count");
const autoClickerPriceDiv = document.querySelector(".auto-clicker-price");

//button elements
const donutButton = document.getElementById("donut-button");
const autoClicker = document.getElementById("auto-clicker-button");

//donut display
const displayContainer = document.getElementById("donuts");
displayContainer.innerText = `Donut Count: ${count}`;

//donut counter click handler
donutButton.addEventListener("click", function () {
  count += Math.pow(1.2, donutMultiplierCount);
  displayContainer.innerText = `Donut Count: ${count}`;
});

// auto clicker button
autoClicker.addEventListener("click", buyAutoClicker);

// auto clicker function
function buyAutoClicker() {
  if (count >= autoClickerPrice) {
    count -= autoClickerPrice;
    autoClickerCount += 1;
    autoClickerPrice = Math.round(autoClickerPrice * 1.1);
    displayContainer.innerText = `Donut Count: ` + count;
    autoClickerCountDiv.innerText = `Purchased: ` + autoClickerCount;
    autoClickerPriceDiv.innerText = `Price: ` + autoClickerPrice;
    if (autoClickerCount <= 1) {
      activateAutoClickers();
    }
  }
}

function activateAutoClickers() {
  setInterval(function () {
    count += autoClickerCount * Math.pow(1.2, donutMultiplierCount);
    displayContainer.innerText = `Donut Count: ` + Math.round(count);
  }, 1000);
}
