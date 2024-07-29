const container = document.querySelector(".container");
const colorCard = document.querySelectorAll(".color-card");
const colorText = document.querySelectorAll("label");

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/* ------ for one click on cart ------- */
colorCard.forEach((card) => {
  card.addEventListener("click", function () {
    card.style.backgroundColor = getRandomHexColor();
    card.childNodes[1].innerText = getRandomHexColor();
  });
});

/* ------ for change All cart color ------- */
// container.addEventListener("click", function () {
//   colorCard.forEach((card) => {
//     card.style.backgroundColor = getRandomHexColor();
//     colorText.forEach((item) => {
//       item.innerText = getRandomHexColor();
//     });
//   });
// });
