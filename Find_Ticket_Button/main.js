const button = document.querySelector(".button");
const buttonText = document.querySelector(".button-text");
const airplane = document.querySelector(".airplane");
const takeOff = document.querySelector(".take-off");
const finish = document.querySelector(".finish");

const clickHandler = () => {
  buttonText.classList.add("active");
  setTimeout(() => {
    airplane.classList.add("active");
  }, 420);
  setTimeout(() => {
    button.classList.add("active");
  }, 500);

  setTimeout(() => {
    takeOff.classList.add("active");
  }, 600);

  setTimeout(() => {
    takeOff.classList.add("forward");
  }, 1700);

  setTimeout(() => {
    finish.classList.add("active");
  }, 2000);
 
};

button.addEventListener("click", clickHandler);
