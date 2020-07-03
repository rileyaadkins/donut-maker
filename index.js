const appDoc = document.getElementById("app");

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

//button elements
const donutButton = document.getElementById("donut-button");
const autoClicker = document.getElementById("auto-clicker-button");
const multiplierButton = document.getElementById("multiplier-button");

//donut display
const displayContainer = document.getElementById("donuts");
displayContainer.innerText = `Donut Count: ` + (count);

//donut counter click handler
donutButton.addEventListener("click", function () {
  count += Math.pow(1.2, donutMultiplierCount);
  displayContainer.innerText = `Donut Count:` + Math.round(count * 1000)/1000;
});

// auto clicker button
autoClicker.addEventListener("click", buyAutoClicker ,buyMultiplier);

// auto clicker function
function buyAutoClicker() {
  if (count >= autoClickerPrice) {
    count -= autoClickerPrice;
    autoClickerCount += 1;
    autoClickerPrice = Math.round(autoClickerPrice * 1.1);
    displayContainer.innerText = `Donut Count: ` + Math.round(count * 1000)/1000;
    autoClickerCountDiv.innerText  = `Purchased: ` + autoClickerCount;
    autoClickerPriceDiv.innerText = `Price: ` + autoClickerPrice;
    if (autoClickerCount <= 1) {
      activateAutoClickers();
    }
  }
}

function activateAutoClickers() {
  setInterval(function () {
    count += autoClickerCount * Math.pow(1.2, donutMultiplierCount);
    displayContainer.innerText = `Donut Count: ` + Math.round(count * 1000)/1000;
  }, 1000);
}

// multiplier button
multiplierButton.addEventListener("click", buyMultiplier, activateAutoClickers);

//  multiplier function
function buyMultiplier() {
  if (count >= multiplierPrice) {
    count -= multiplierPrice;
    donutMultiplierCount += 1;
    multiplierPrice = Math.round(multiplierPrice * 1.1);
    displayContainer.innerText = `Donut Count: ` + Math.round(count * 1000)/1000;
    multiplierCountDiv.innerText = `Purchased: ` + donutMultiplierCount;
    multiplierPriceDiv.innerText = `Price: ` + multiplierPrice;
  }
}
