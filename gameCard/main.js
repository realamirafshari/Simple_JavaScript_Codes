const container = document.querySelector(".container");
const alertBox = document.querySelector(".alert-box");
const gameCard = document.querySelector(".game-card");

const button = document.querySelectorAll("button");
const numberCounter = document.querySelector(".number-counter");
let cardNumber = 1;
const colorArray = ["blue", "yellow", "green"];

function addCard() {
  if (cardNumber < 4) {
    cardNumber++;
    numberCounter.innerText = cardNumber;
    const cardElementJsx = `
    <div class="card ${colorArray[cardNumber - 2]}">
        <i class="fa-regular fa-chess-queen"></i>
    </div>
  `;
    console.log(cardNumber);
    gameCard.innerHTML += cardElementJsx;
  } else {
    alertBox.classList.add("active");
    container.classList.add("alert");
    setTimeout(() => {
      alertBox.classList.remove("active");
      container.classList.remove("alert");
    }, 1000);
  }
}

function removeCard() {
  const card = document.querySelectorAll(".card");
  if (cardNumber > 1) {
    cardNumber--;
    gameCard.removeChild(card[card.length - 1]);
    numberCounter.innerText = cardNumber;
  }
}

button[0].addEventListener("click", removeCard);
button[1].addEventListener("click", addCard);
