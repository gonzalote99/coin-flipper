let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let toss = Math.floor(Math.random() * 2);
let tossResult = document.getElementById("result");

function flipAgain() {
  location.reload();
}

coin.addEventListener("click", function() {
  let result;

  if (toss == 1) {
    result = "tails";
    coin.src = "https://raw.githubusercontent.com/muquitarif/Coin-flipper/main/images/Tails.png";
  } else {
    result = "head";
    coin.src = "https://raw.githubusercontent.com/muquitarif/Coin-flipper/main/images/Heads.png"
  }
  tossResult.innerHTML= `is ${result}`;
  flip.innerHTML = `<button id="flip-again-btn">flip again</button>`;
  flip.addEventListener("click", flipAgain);
})