let cookieButton = document.images["cookieButton"];
let cookieButtonBeep = new Audio();
cookieButtonBeep.src = 'src/chomp.mp3' ;
let purchaseAutoClicker = document.querySelector("#purchase-autoclicker");
let autoClickerPriceSpan = document.querySelector("#autoclicker-price");
let autoClickerSpan = document.querySelector("#autoclickers-total");
let purchaseClickMultipliers = document.querySelector("#purchase-click-multiplier");
let clickMultiplierPriceSpan = document.querySelector("#click-multiplier-price");
let clickMultiplierSpan = document.querySelector("#click-multiplier");
let resetButton = document.querySelector("#reset-game-button");

cookieButton.addEventListener("click", addCookie);
cookieButton.addEventListener("click", playAudio);
purchaseAutoClicker.addEventListener("click", purchaseAutoClickerCount);
purchaseClickMultipliers.addEventListener("click", purchaseClickMultiplier);
resetButton.addEventListener("click", resetGame);

let cookieNumber = document.querySelector(".cookie-count");
let cookieCount = 0;
let autoClickerPrice = 50;
let autoClickerCount = 0;
let clickMultiplierPrice = 10;
let clickMultiplierCount = 0;

function addCookie() {
    cookieCount += Math.pow(1.2, clickMultiplierCount);
    cookieNumber.innerText = numberWithCommas(Math.round(cookieCount));
}

function playAudio() {
    cookieButtonBeep.play();
}

function retrieveCookieCount() {
    return cookieCount;
}

function purchaseAutoClickerCount() {
    if (cookieCount >= autoClickerPrice) {
        cookieCount -= autoClickerPrice;
        autoClickerCount += 1;
        autoClickerPrice = Math.round(autoClickerPrice * 1.10);
        cookieNumber.innerText = numberWithCommas(Math.round(cookieCount));
        autoClickerPriceSpan.innerText = numberWithCommas (autoClickerPrice);
        autoClickerSpan.innerText = numberWithCommas(autoClickerCount);
        if (autoClickerCount <= 1) {
            activateAutoClickers();
        }
    }
}

function retrieveAutoClickerCount() {
    return autoClickerCount;
}

function activateAutoClickers() {
    setInterval(function() {
        cookieCount += autoClickerCount * Math.pow(1.2, clickMultiplierCount);
        cookieNumber.innerText = numberWithCommas(Math.round(cookieCount));
    }, 1000);
}

function purchaseClickMultiplier() {
    if (cookieCount >= clickMultiplierPrice) {
        cookieCount -= clickMultiplierPrice;
        clickMultiplierCount += 1;
        clickMultiplierPrice = Math.round(clickMultiplierPrice * 1.1);
        cookieNumber.innerText = numberWithCommas(Math.round(cookieCount));
        clickMultiplierPriceSpan.innerText = numberWithCommas(clickMultiplierPrice);
        clickMultiplierSpan.innerText = numberWithCommas (clickMultiplierCount);
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function resetGame() {
    location.reload();
}