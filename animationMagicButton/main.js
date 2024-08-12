const containerButton = document.querySelector(".container-button");
const image = document.querySelector(".image");
const text = document.querySelector(".text");
const postalCard = document.querySelector(".postal-card");
const backgroundPostal = document.querySelector(".background-postal");
const widthNav = document.querySelector(".width-nav");
const heightNav = document.querySelector(".height-nav");
const stars = document.querySelector(".stars");
const stars1 = document.querySelector(".stars1");

document.addEventListener("DOMContentLoaded", () => {
  containerButton.addEventListener("click", () => {
    image.classList.add("active");
    text.classList.add("active");
    backgroundPostal.classList.add("active");
    postalCard.classList.add("move");
    setTimeout(() => {
      widthNav.classList.add("show");
      stars.classList.add("show");
    }, 2000);
    setTimeout(() => {
      heightNav.classList.add("show");
      stars1.classList.add("show");
    }, 3000);
  });
  setTimeout(() => {
    stars1.classList.remove("show");
    stars.classList.remove("show");
    setTimeout(() => {
      widthNav.classList.remove("show");
      heightNav.classList.remove("show");
      backgroundPostal.classList.remove("active");
      postalCard.classList.add("hide");
      setTimeout(() => {
        image.classList.remove("active");
        text.classList.remove("active");
      }, 1800);
    }, 500);
  }, 6000);
});
