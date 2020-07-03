// variables
let count = 0;
let multiplierPrice = 10;
let donutMultiplierCount = 0;
let autoClickerPrice = 100;
let autoClickerCount = 0;

const multiplierPriceDiv = document.querySelector(".multiplier-price");
const multiplierCountDiv = document.querySelector(".multiplier-count");
const autoClickerCountDiv = document.querySelector(".auto-clicker-count");
const autoClickerPriceDiv = document.querySelector(".auto-clicker-price");
const displayContainer = document.getElementById("donuts");

//button elements
const donutButton = document.getElementById("donut-button");
const autoClicker = document.getElementById("auto-clicker-button");
const multiplierButton = document.getElementById("multiplier-button");
const resetButton = document.getElementById("reset-button");

//donut display
displayContainer.innerText = "Donut Count: " + count;

// perks display
autoClickerPriceDiv.innerText = "Current Price: " + autoClickerPrice + " donuts";
autoClickerCountDiv.innerText = "Purchased: " + autoClickerCount;
multiplierPriceDiv.innerText = "Current Price: " + multiplierPrice + " donuts";
multiplierCountDiv.innerText = "Purchased: " + donutMultiplierCount;

//donut counter click handler
donutButton.addEventListener("click", function () {
  count += Math.pow(1.2, donutMultiplierCount);
  displayContainer.innerText =
    "Donut Count: " + Math.round(count * 1000) / 1000;
});

// auto clicker button
autoClicker.addEventListener("click", buyAutoClicker, buyMultiplier);

// auto clicker function
function buyAutoClicker() {
  if (count >= autoClickerPrice) {
    count -= autoClickerPrice;
    autoClickerCount += 1;
    autoClickerPrice = Math.round(autoClickerPrice * 1.1);
    displayContainer.innerText =
      "Donut Count: " + Math.round(count * 1000) / 1000;
    autoClickerPriceDiv.innerText = "Current Price: " + autoClickerPrice + " donuts";
    autoClickerCountDiv.innerText = "Purchased: " + autoClickerCount;
    if (autoClickerCount <= 1) {
      activateAutoClickers();
    }
  }
}

function activateAutoClickers() {
  setInterval(function () {
    count += autoClickerCount * Math.pow(1.2, donutMultiplierCount);
    displayContainer.innerText =
      "Donut Count: " + Math.round(count * 1000) / 1000;
  }, 1000);
}

// multiplier button
multiplierButton.addEventListener("click", buyMultiplier);

//  multiplier function
function buyMultiplier() {
  if (count >= multiplierPrice) {
    count -= multiplierPrice;
    donutMultiplierCount += 1;
    multiplierPrice = Math.round(multiplierPrice * 1.1);
    displayContainer.innerText =
      "Donut Count: " + Math.round(count * 1000) / 1000;
    multiplierCountDiv.innerText = "Purchased: " + donutMultiplierCount;
    multiplierPriceDiv.innerText =
      "Current Price: " + multiplierPrice + " donuts";
  }
}

// reset button
resetButton.addEventListener("click", resetDonutCount);

// reset donut count function
function resetDonutCount() {
  location.reload();
}
