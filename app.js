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
        autoClickerSpan.innerText = numberWithCommas(autoClickerCount)
    }
}